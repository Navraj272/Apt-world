export const DeleteUserTagSchema = {
  body: {
    type: 'object',
    properties: {
      userId: { type: 'number' },
      tagId: { type: 'number' }
    },
    required: ['userId', 'tagId']
  }
}