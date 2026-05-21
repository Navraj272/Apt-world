export const updateBannerSchema = {
  body: {
    type: 'object',
    properties: {
      bannerId: { type: 'string' },
      bannerType: { type: 'string' },
      title: { type: ['object', 'string'] },
      description: { type: ['object', 'string'] },
      redirectUrl: { type: 'string' },
      order: { type: ['number', 'string'] }
    },
    required: ['bannerId']
  }
}
