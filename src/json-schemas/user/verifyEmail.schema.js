export const verifyEmailSchema = {
  body: {
    type: 'object',
    properties: {
      userId: { type: 'number' },
    },
    required: ['userId']
  }
}