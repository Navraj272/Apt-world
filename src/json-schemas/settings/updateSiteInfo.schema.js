export const UpdatedSiteInfoSchema = {
    body: {
        type: 'object',
        properties: {
            siteName: { type: 'string' },
            desktop: { type: ['object', 'string'] },
            mobile: { type: ['object', 'string'] },
            supportEmail: { type: 'string' },
            contactNumber: { type: ['number', 'string'] },
            termsUrl: { type: 'string' },
            privacyPolicyUrl: { type: 'string' }
        },
        required: []
    }
}