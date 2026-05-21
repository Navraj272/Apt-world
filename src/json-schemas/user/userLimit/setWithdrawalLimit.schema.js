import { USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from "@src/utils/constants/responsibleGambling.constants"

export const setWithdrwalLimitSchema = {
    body: {
        type: 'object',
        properties: {
            userId: { type: 'integer' },
            dailyWithdrawal: { type: 'number', minimum: 0 },
            weeklyWithdrawal: { type: 'number', minimum: 0 },
            monthlyWithdrawal: { type: 'number', minimum: 0 },
            reset: { type: 'boolean', default: false },
        },
        required: ['userId']
    }
}