export const createBannerSchema = {
  body: {
    type: 'object',
    properties: {
      banners: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            bannerType: { type: 'string' },
            desktop: { type: 'object' },
            mobile: { type: 'object ' },
            title: { type: 'object' }, // Assuming localization { "en": "Title", "es": "Título" }
            description: { type: 'object' },
            order: { type: ['number', 'string'] },
            redirectUrl: { type: 'string' }
          },
          required: ['bannerType', 'title'] // Removed `image` from required fields
        }
      }
    },
    required: ['banners']
  }
}
