export const updateBoostBonusSchema = {
  type: 'object',
  properties: {
    promotionTitle: { type: 'string' },
    description: { type: 'string' },
    termsConditions: { type: 'string' },
    mobile: { type: 'object' },
    desktop: { type: 'string' },
    bonusId: { type: 'integer' },
    percentage: {
    
       type: 'integer', minimum: 0, maximum: 100 
      
    },
    validOnDays: {
      type: 'object',
      properties: {
        Sunday: { type:'integer' },
        Monday: { type: 'integer' },
        Tuesday: { type:'integer' },
        Wednesday: { type: 'integer'},
        Thursday: { type: 'integer' },
        Friday: { type:'integer' },
        Saturday: { type:'integer' },
      },
      additionalProperties: false,
    },
    maxBonusLimit: { type: 'integer' }
  },
  required: ['bonusId'],
};
