export const getUserTagsSchema = {
  query: {
    type: 'object',
    properties: {
        userId: { type: 'string' }
    },
    required: ['userId']
  }
}