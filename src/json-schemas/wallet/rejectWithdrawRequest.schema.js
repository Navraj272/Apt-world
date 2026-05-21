export const rejectWithdrawRequestSchema = {
  body: {
    type: 'object',
    properties: {
      withdrawalId: { type: 'integer' },
      reason: { type: 'string' },
      authenticatedAdminId: { type: ['string', 'number'] },
    },
    required: ['withdrawalId']
  },
  
};
