export const detachNpuUsersSchema = {
  type: 'object',
  properties: {
    affiliateId: { type: 'number' },
    cutoffDate: { type: 'string', format: 'date-time' }
  },
  required: ['affiliateId', 'cutoffDate'],
  additionalProperties: false
}
