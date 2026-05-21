export const updateMultipleDivisionPrioritiesSchema = {
  body: {
    type: 'object',
    properties: {
      updates: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            wheelDivisionId: { type: 'string' },
            priority: { type: 'number' },
            sc: { type: ['number'] },
            gc: { type: ['number'] },
            playerLimit: { type: ['number', 'null'] }
          },
          required: ['wheelDivisionId', 'priority']
        }
      }
    },
    required: ['updates']
  }
}
