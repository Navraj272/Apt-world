export const orderGameProviderSchema={
    body: {
        type: 'object',
        properties: {
          order: { type: 'array' },
        },
        required: ['order']
    }
}
