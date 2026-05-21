import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'

const constraints = {
  type: 'object',
  properties: {
    userId: { type: 'number' },
    tagId: { type: 'number' }
  },
  required: ['userId', 'tagId']
}

export class RemoveUserTagHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { userId, tagId } = this.args

    // Optional: validate user exists
    const user = await db.User.findOne({ where: { userId } })
    if (!user) {
          throw new AppError(Errors.USER_NOT_EXISTS)
    }

    const deleted = await db.UserTag.destroy({
      where: { userId, tagId }
    })

    if (!deleted) {
      throw new AppError(Errors.TAG_NOT_FOUND)
    }

    return {
      success: true,
      message: 'Tag removed from user successfully'
    }
  }
}