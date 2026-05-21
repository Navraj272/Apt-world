export const createPromotionsSchema = {
  body: {
    type: 'object',
    properties: {
      mobile: { type: 'object' },
      desktop: { type: 'object' },
      content: { type: ['string', 'object'] },
      slug: { type: 'string' },
      redirectUrl: { type: 'string' },
      category: { type: 'string' },
      title: { type: ['string', 'object'] },
    },
    required: ['content', 'category', 'slug']
  }
}
