export const setGamblingLimitSchema = {
    body: {
      type: 'object',
      properties: {
        userId: { type: 'integer' },
        key: {
          type: 'string',
          enum: [
            'self_exclusion',
            'daily_deposit_limit',
            'weekly_deposit_limit',
             'monthly_deposit_limit',
             'daily_withdrawal_limit',
              'weekly_withdrawal_limit',
              'monthly_withdrawal_limit'

          ]
        },
        value: { type: 'string' }, 
        expireAt: { type: 'string', format: 'date-time', nullable: true }
      },
      required: ['userId', 'key', 'value']
    }
  };
  