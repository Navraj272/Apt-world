import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { ApiHelper } from '@src/utils/api.utils';

export class GetAllEnquiriesHandler extends BaseHandler {
  async run() {
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit);
    const { type, status } = this.args;

    const where = {};
    if (type) where.type = type;
    if (status) where.status = status;

    const enquiries = await db.Enquiry.findAndCountAll({
      where,
      limit,
      offset,
      order: [['id', 'DESC']],
      include: [
        { model: db.Product, as: 'product', attributes: ['id', 'name', 'slug', 'baseCode'] },
      ],
    });

    return {
      enquiries: enquiries.rows,
      total: enquiries.count,
      pageNo,
      totalPages: Math.ceil(enquiries.count / limit),
    };
  }
}
