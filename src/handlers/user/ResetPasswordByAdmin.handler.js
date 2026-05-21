import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { encryptPassword } from "@src/helpers/authentication.helpers"
import { BaseHandler } from "@src/libs/baseHandler"

export class ResetPasswordByAdminHandler extends BaseHandler {
  async run() {
    const { userId, newPassword } = this.args

    const transaction = this.dbTransaction
    const checkUser = await db.User.findOne({ where: { userId }, transaction })

    if (!checkUser) throw new AppError(Errors.USER_NOT_EXISTS)
    const hashPassword = encryptPassword(newPassword)

    await db.User.update(
      { password: hashPassword },
      { where: { userId }, transaction }
    )
    return { success: true }
  }
}
