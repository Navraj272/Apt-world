export const getPostalCodeListSchema = {
    query: {
        type: "object",
        properties: {
            limit: { type: ['string', 'null'] },
            pageNo: { type: ['string', 'null'] },
            status: { type: 'string' },
            userId: { type: ['string', 'number'] },
             username: { type: 'string' },
              postalCode: { type: 'string' },
            startDate: {
                type: ['string', 'null']
            },
            endDate: {
                type: ['string', 'null']
            },
                },
        // required: ['limit', 'pageNo'],
    },
};
