export const getUserAccountStatusSchema = {
  querystring: {
    type: 'object',
    properties: {
      userId: { type: ['string', 'number'] }
    },
    required: ['userId']
  }
}
