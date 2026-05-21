export const getAllIpAddressSchema = {
  body: {
    type: 'object',
    properties: {
      page: { type: 'integer' },
      limit: { type: 'integer' }
    }
  }
}
