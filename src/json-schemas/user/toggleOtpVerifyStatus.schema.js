export const toggleOtpVerifyStatus = {
  body: {
    type: 'object',
    properties: {
      userId: { type: ['string', 'number'] }
    },
    required: ['userId']
  }
}
