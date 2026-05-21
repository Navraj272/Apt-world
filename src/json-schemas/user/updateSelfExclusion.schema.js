export const updateSelfExclusionSchema={
  body: {
    type: 'object',
    properties: {
      userId: { type: 'number'},
      selfExclusion: { type: 'string' },
      isSelfExclusionPermanent: { type: ['boolean','null'] },
      selfExclusionType: { type: ['string','null'] },
      selfExclusion: { type: ['string','null'] }
    },
    required: ['userId']
  }
}
