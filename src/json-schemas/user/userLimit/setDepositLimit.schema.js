import { USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from "@src/utils/constants/responsibleGambling.constants"

export const setDepositLimitSchema = {
    body: {
        type: 'object',
        properties: {
            userId: { type: 'integer' },
            dailyDeposit: { type: 'number', minimum: 0 },
            weeklyDeposit: { type: 'number', minimum: 0 },
            monthlyDeposit: { type: 'number', minimum: 0 },
            reset: { type: 'boolean', default: false },
        },
        required: ['userId']
    }
}