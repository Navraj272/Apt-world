export const deleteIpAddressSchema = {
  body: {
    type: 'object',
    properties: {
      ipAddressId: { type: 'integer' }
    },
    required: ['ipAddressId']
  }
}
