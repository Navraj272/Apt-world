export const getCmsPageSchema = {
  query: {
    type: 'object',
    properties: {
      cmsPageId: {
        type: 'string',
      }
    },
    required: ['cmsPageId']
  }
}