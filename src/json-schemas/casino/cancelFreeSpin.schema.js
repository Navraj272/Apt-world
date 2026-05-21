
export const cancelFreeSpinSchema = {
  body: {
    type: 'object',
    properties: {
      userIds: { type: 'string' },
      casinoBonusIds : { type: 'string' },
      recordId : {type : 'number'},
      gameName : { type: 'string' },
      numSpinsGranted : { type: ['string','number'] },
      providerName : { type: 'string' },
      segmentId : { type: 'string' }
    },
    required: []
  }
}
