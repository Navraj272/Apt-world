export const updatePostalCodeRequestSchema = {
    body: {
        type: "object",
        properties: {
            postalCodeId: { type: ['number', 'string'] },
            status: { type: ['string'] },
            authenticatedAdminId: { type: ['number', 'string'] }
        },
        required: ['postalCodeId', 'status'],
    },
};