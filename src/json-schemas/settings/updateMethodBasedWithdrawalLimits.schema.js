export const methodBasedWithdrawalLimitsAndFeeSchema = {
  body: {
    type: 'object',
    properties: {
      fiat_fee: {
        type: 'object',
        properties: {
          fee_percentage: { type: 'number', minimum: 0 }
        },
        required: []
      },
      crypto: {
        type: 'object',
        properties: {
          minAmount: { type: 'number', minimum: 0 },
          maxAmount: { type: 'number', minimum: 0 }
        },
        required: []
      },
      basic_card: {
        type: 'object',
        properties: {
          minAmount: { type: 'number', minimum: 0 },
          maxAmount: { type: 'number', minimum: 0 }
        },
        required: []
      },
      bank_transfer: {
        type: 'object',
        properties: {
          minAmount: { type: 'number', minimum: 0 },
          maxAmount: { type: 'number', minimum: 0 }
        },
        required: []
      }
    },
    additionalProperties: false
  }
}

