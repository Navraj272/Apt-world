
export const DeleteTagSchema = {
  body: {
    type: 'object',
    properties: {
      tagId: { type: 'number' }
    },
    required: ['tagId']
  }
}