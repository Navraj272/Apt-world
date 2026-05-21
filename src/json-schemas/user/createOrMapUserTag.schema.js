export const createOrMapUserTagSchema = {
  body: {
    type: 'object',
    properties: {
      userId: { type: 'number' },
   tagId: {
      type: 'array',
      items: { type: 'number' }
    }
    },
    required: ['userId'],
    oneOf: [
      { required: ['tagName'] },
      { required: ['tagId'] }
    ]
  }
}