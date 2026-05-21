export const updateGameCategorySchema = {
    body: {
        type: 'object',
        properties: {
            name: { type: ['object', 'string'] },
            casinoCategoryId: { type: 'string' },
            isActive: { type: 'string' },
            desktop: { type: ['object', 'string'] },
            mobile: { type: ['object', 'string'] }
        },
        required: ['casinoCategoryId']
    }
}