import { USER_ACCOUNT_STATUS } from '@src/utils/constants/public.constants'

export const updateUserAccountStatusSchema = {
  body: {
    type: 'object',
    properties: {
      userId: { type: ['string', 'number'] },
      status: {
        type: 'string',
        enum: Object.values(USER_ACCOUNT_STATUS)
      },
      reason: { type: 'string' },
      description: { type: 'string' }
    },
    required: ['userId', 'status']
  }
}
