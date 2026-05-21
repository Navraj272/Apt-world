export const updateSpinWheelListSchema = {
  body: {
    type: 'object',
    properties: {
      wheelDivisionId: { type: 'string' },
      sc: { type: ['number'] },
      gc: { type: ['number'] },
      // isAllow: { type: 'boolean' },
      playerLimit: { type: ['number', 'null'] },
      priority: { type: ['number'] }
    },
    required: ['wheelDivisionId']
  }
}
