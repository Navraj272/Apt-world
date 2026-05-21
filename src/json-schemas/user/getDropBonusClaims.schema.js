export const getDropBonusClaimsSchema = {
  query: {
    type: 'object',
    properties: {
      dropBonusId: { type: 'string' },
      userId: { type: ['string', 'null'] },
      email: { type: ['string', 'null'] },
      isActive: { type: ['string', 'null'] },
      startDate: { type: ['string', 'null'] },
      endDate: { type: ['string', 'null'] },
      limit: { type: 'string' },
      pageNo: { type: 'string' },
      pagination: { type: ['boolean', 'null'] }
    },
    required: ['dropBonusId']
  }
}