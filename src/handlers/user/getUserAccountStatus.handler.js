import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { USER_ACCOUNT_STATUS } from '@src/utils/constants/public.constants'

const getConstraints = {
  type: 'object',
  properties: {
    userId: { type: ['string', 'number'] }
  },
  required: ['userId']
}

export class GetUserAccountStatusHandler extends BaseHandler {
  get constraints() {
    return getConstraints
  }

  async run() {
    const { userId } = this.args
    const transaction = this.context.transaction || null

    try {
      const user = await db.User.findOne({
        where: { userId },
        attributes: ['userId', 'email', 'username', 'accountStatus', 'isActive'],
        transaction
      })

      if (!user) {
        throw new Error('User not found')
      }

      return {
        success: true,
        userId,
        email: user.email,
        username: user.username,
        accountStatus: user.accountStatus,
        isActive: user.isActive,
        availableStatuses: Object.values(USER_ACCOUNT_STATUS)
      }
    } catch (error) {
      return this.handleError(error)
    }
  }
}
