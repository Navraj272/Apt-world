import config from '@src/configs/app.config';
import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { dayjs } from '@src/libs/dayjs';
import axios from 'axios';
import { ApiHelper } from '@src/utils/api.utils'

export class UpdateSendGridEmailTemplateHandler extends BaseHandler {
    toSnakeCase(str) {
        return str
            .replace(/\s+/g, '_')
            .replace(/([a-z])([A-Z])/g, '$1_$2')
            .replace(/[^a-zA-Z0-9_]/g, '')
            .toLowerCase()
            .replace(/__+/g, '_')
            .replace(/^_+|_+$/g, '');
    }

    async run() {
        const { offset,limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit, this.args.pagination)

        const { data } = await axios.get("https://api.sendgrid.com/v3/templates", {
            headers: {
                Authorization: `Bearer ${config.get("sendGrid.apiKey")}`,
                "Content-Type": "application/json",
            },
            params: {
                generations: "dynamic",
            },
        });

        const templates = data.templates || [];
        const timestamp = dayjs().toDate();

        const updatedTemplates = templates
            .filter(template => template.name && template.id)
            .map(template => ({
                label: this.toSnakeCase(template.name),
                templateProviderId: template.id,
                createdAt: timestamp,
                updatedAt: timestamp,
            }));

        const existing = await db.EmailTemplate.findAll({
            attributes: ['templateProviderId'],
            where: {
                templateProviderId: updatedTemplates.map(t => t.templateProviderId)
            },
            raw: true
        });

        const existingIds = new Set(existing.map(t => t.templateProviderId));

        const newTemplates = updatedTemplates.filter(
            t => !existingIds.has(t.templateProviderId)
        );


        if (newTemplates.length) {
            await db.EmailTemplate.bulkCreate(newTemplates, {
                returning: true
            })
        }

        const condition = {
            attributes: ['emailTemplateId', 'label', 'templateProviderId'],
            order: [['emailTemplateId', 'ASC']]
        }

        if(this.args.limit){
            condition.limit = limit,
            condition.offset = offset
        }

        const allTemplates = await db.EmailTemplate.findAndCountAll(condition)

        return { template: allTemplates.rows, pageNo, totalPages: this.args.limit ? Math.ceil(allTemplates.count / limit) : 1 }
    }
}
