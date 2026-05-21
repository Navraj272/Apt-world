export const UpdatedSocialMediaLinksSchema = {
    body: {
        type: 'object',
        properties: {
            facebook: { type: 'string' },
            twitter: { type: 'string' },
            instagram: { type: 'string'},
            telegram: { type: 'string' },
            discord: { type: 'string'}
        },
        required: []
    }
}