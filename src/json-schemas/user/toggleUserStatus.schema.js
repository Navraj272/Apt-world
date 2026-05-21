export const toggleStatusSchema = {
  body: {
    type: 'object',
    properties: {
      userId: { type: ['string', 'number'] },
      reason: { type: 'string' },
      description: { type: 'string' }
    },
    required: ['userId']
  }
}
