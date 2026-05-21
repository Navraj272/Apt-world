import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'

const schema = {
  type: 'object',
  properties: {
    userId: { type: 'string' }
  },
  required: ['userId', 'user']
}


export class ToggleUserOtpVerifyHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const userId = this.args.userId
    try {
      const user = await db.User.findOne({
        where: { userId },
      })
      user.isPhoneVerified = !user.isPhoneVerified
      await user.save()
      return { success: true }
    }
    catch (error) {
      return this.handleError(error)
    }
  }
}
