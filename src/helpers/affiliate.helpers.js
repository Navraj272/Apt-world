import config from '@src/configs/app.config';
import { serverDayjs } from '@src/libs/dayjs';
import axios from 'axios';



export const createAffiliateUser = async (data) => {
    try {
        let configData = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${config.get('affnook.baseUrl')}/api/admin/v2/customers`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': `${config.get('affnook.apiKey')}`
            },
            data: data
        };

        let affnookResponse = await axios.request(configData);
        return { affnookResponse }
    } catch (error) {
        console.log(error.data)
        throw error;
    }
}


export const activityAffiliateUser = async (userId, activityType, transactionId, value = 68 , sessionId =null) => {
    try {
        let payloadData = {
            customerId: `${userId}`,
            currency: 'USD',
            date: `${serverDayjs().utc().format('YYYY-MM-DD')}`,
            transactionId: `${transactionId}`,
            [activityType]: value
        };

        if (sessionId) {
            payloadData.b1 = sessionId; // Add the session ID here
        }

        console.log(payloadData,"payload-here")
        let configData = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${config.get('affnook.baseUrl')}/api/admin/v2/activities`,
            headers: {
                'x-api-key': `${config.get('affnook.apiKey')}`,
                'Content-Type': 'application/json'
            },
            data: payloadData
        };
        let affnookResponse = await axios.request(configData);

        return { affnookResponse: affnookResponse?.data };
    } catch (error) {
        console.error(
        'Affnook API Error:',
        error?.response?.status,
        error?.response?.data || error.message
    );

    throw error;
    }
}


export const activityAffiliateUserCopy = async (userId, activityType, transactionId, value = 68 , sessionId =null, date = null) => {
    try {
        let payloadData = {
            customerId: `${userId}`,
            currency: 'USD',
            date: date
                ? `${serverDayjs(date).utc().format('YYYY-MM-DD')}`
                : `${serverDayjs().utc().format('YYYY-MM-DD')}`,
            transactionId: `${transactionId}`,
            [activityType]: value
        };

        if (sessionId) {
            payloadData.b1 = sessionId; // Add the session ID here
        }

        console.log(payloadData,"payload-here")
        let configData = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${config.get('affnook.baseUrl')}/api/admin/v2/activities`,
            headers: {
                'x-api-key': `${config.get('affnook.apiKey')}`,
                'Content-Type': 'application/json'
            },
            data: payloadData
        };
        let affnookResponse = await axios.request(configData);

        return { affnookResponse: affnookResponse?.data };
    } catch (error) {
        console.error(
        'Affnook API Error:',
        error?.response?.status,
        error?.response?.data || error.message
    );

    throw error;
    }
}
