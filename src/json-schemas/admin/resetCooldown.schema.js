export const resetCooldownSchema = {
    body: {
        type: 'object',
        properties: {
            userId: { type: ['number', 'string'] }
        },
        required: ['userId']
    }
};
