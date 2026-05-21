export const createIpAddressSchema = {
  body: {
    type: 'object',
    properties: {
      ipAddress: { type: 'string'},
      name: { type: 'string' }
    },
    required: ['ipAddress']
  }
}
