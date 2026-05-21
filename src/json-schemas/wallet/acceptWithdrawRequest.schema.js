export const acceptWithdrawRequestSchema = {
  body: {
    type: 'object',
    properties: {
      withdrawalId: { type: 'integer' },
      authenticatedAdminId: { type: ['number', 'string'] }
    },
    required: ['withdrawalId']

  }
};
