export const UpdatedKillSwitchSchema = {
    body: {
        type: 'object',
        properties: {
            enabled: { type: 'boolean' },
            message: { type: 'string' },
        },
        required: []
    }
}