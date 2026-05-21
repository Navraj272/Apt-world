export const UpdatedDailyWithdrawalLimitsSchema = {
    body: {
        type: 'object',
        properties: {
          limit: { type: 'number' }
        },
        required: []
    }
  }
  