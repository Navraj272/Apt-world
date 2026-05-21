export const createUserTagSchema = {
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      colorCode: { type: 'string' }

    },
    required: ['name','colorCode']
    }
   }
 