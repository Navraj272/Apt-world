import { BaseHandler } from '@src/libs/baseHandler'
import config from '@src/configs/app.config';
import { serverDayjs } from '@src/libs/dayjs'
import axios from 'axios';



export class ActivityHandler extends BaseHandler {
    async run() {
        try {
            const { user_id, activityType, transactionId, value = 68 } = this.args
            const apiKey = config.get('affnook.apiKey');
            const baseUrl = config.get('affnook.baseUrl');
            let payloadData = {
                "customerId": `${user_id}`,
                "currency": "USD",
                "date": `${serverDayjs().utc().format('YYYY-MM-DD')}`,
                "transactionId": `${transactionId}`,
                [activityType]: value
            };
            let configData = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${baseUrl}/api/admin/v2/activities`,
                headers: {
                    'x-api-key': `${apiKey}`,
                    'Content-Type': 'application/json'
                },
                data: payloadData
            };
            let affnookResponse = await axios.request(configData);
            return { affnookResponse: affnookResponse?.data };
        } catch (error) {
            throw {error}
        }
    }
}