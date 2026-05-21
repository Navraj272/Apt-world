export const updatePromotionsSchema = {
  body: {
    type: 'object',
    properties: {
      promotionId: { type: ['integer', 'string'] },
      image: { type: ['string', 'object'] },
      title: { type: ['string', 'object'] },
      content: { type: ['string', 'object'] },
      description: { type: ['string', 'object'] },
      slug: { type: 'string' },
      redirectUrl: { type: 'string' },
      category: { type: 'string' },
      isActive: { type: 'string', default: 'true' }
    },
    required: ['title', 'content', 'description', 'category', 'slug', 'promotionId']
  }
}
