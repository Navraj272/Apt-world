export const deleteCmsPageLanguageSchema = {
  body: {
    type: 'object',
    properties: {
      cmsPageId: { type: 'number' }
    },
    required: ['cmsPageId']
  }
}