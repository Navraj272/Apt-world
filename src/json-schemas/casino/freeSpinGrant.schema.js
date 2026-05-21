export const createFreeSpinsSchema = {
  body: {
    type: 'object',
    properties: {
      vipTierId: {
        type: 'string',
        default: '[]' // JSON stringified array
      },
      userIds: {
        type: 'string',
        default: '[]' // JSON stringified array
      },
      providerId: {
        type: 'string',
        pattern: '^[0-9]+$'
      },
      gameId: {
        type: 'string',
        pattern: '^[0-9]+$'
      },
      numSpinsGranted: {
        type: 'string',
        pattern: '^[0-9]+$'
      },
      expiresAt: {
        type: 'string',
        format: 'date'
      },
      gameName: {
        type: 'string',
        minLength: 1
      },
      providerName: {
        type: 'string',
        minLength: 1
      },
      level: {
        type: 'string',
        pattern: '^[0-9]+$'
      },
      file: {
        type: 'object' // present only in second curl
      }
    },
    required: [
      'providerId',
      'gameId',
      'numSpinsGranted',
      'expiresAt',
      'gameName',
      'providerName',
      'level'
    ]
  }
}