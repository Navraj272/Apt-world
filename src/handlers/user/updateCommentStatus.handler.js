import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'




export class UpdateCommentStatusHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { userId, commentId, status } = this.args

    const userExist = await db.User.findOne({
      where: { userId },
      attributes: ['userId']
    })

    if (!userExist) throw new AppError(Errors.USER_NOT_EXISTS)

    const updateComment = await await db.Comment.update(
      { status },
      {
        where: { commentId }
      }
    );

    return { updateComment, success: true }
  }
}
