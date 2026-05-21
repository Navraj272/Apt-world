export const updateCommentsStatusSchema = {
  body: {
    type: 'object',
    properties: {
      userId: { type: ['number', 'string', 'null'] },
      commentId: { type: ['number', 'string', 'null'] },
      status: { type: ['boolean'] },
    },
    required: ['userId', 'status']
  }
}