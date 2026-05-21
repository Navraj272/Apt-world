export const updateCmsPageSchema={
    body: {
        type: 'object',
        properties: {
          title: { type: 'object' },
          slug: {
            type: 'string',
            pattern: '^[a-zA-Z0-9-_#]*$'
          },
          content: { type: 'object' },
          category: { type: ['number', 'string'] },
          isActive: { type: 'boolean' },
          cmsPageId: { type: 'number' },
        },
        required: ['cmsPageId']
      }
}