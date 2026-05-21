export const UpdatedDepositLimitsSchema = {
    body: {
        type: 'object',
        properties: {
          minAmount: { type: 'number' },
          maxAmount: { type: 'number' },
        },
        required: []
    }
  }