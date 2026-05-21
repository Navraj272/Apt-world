export const toggleAffiliateStatusSchema = {
  body: {
    type: 'object',
    properties: {
      userIds: {
        type: 'array',
        items: { type: ['string', 'number'] },
        minItems: 1
      }
    },
    required: ['userIds']
  }
}