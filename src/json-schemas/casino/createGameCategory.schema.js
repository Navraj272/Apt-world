export const createGameCategorySchema = {
  body: {
    type: 'object',
    properties: {
      name: {
        type: ['object']
      },
      isActive: { enum: ['true', 'false'], default: 'false' },
      mobile: { type: 'object' },
      desktop: { type: 'object' }
    },
    required: ['name', 'isActive']
  }
}