export const UpdatedFaucetSchema = {
    body: {
        type: 'object',
        properties: {
            SC: { type: 'number' },
            GC: { type: 'number' },
            interval: { type: 'number'}
        },
        required: []
    }
}