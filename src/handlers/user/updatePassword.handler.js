import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { encryptPassword } from '@src/helpers/authentication.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCache } from '@src/libs/redis'

export class UpdatePasswordHandler extends BaseHandler {
  get constraints () {
    return constraints
  }

  async run () {
    const { userId, password } = this.args
    const transaction = this.context.sequelizeTransaction

    const userDetails = await db.User.findOne({
      where: { userId },
      attributes: ['userId', 'email', 'password', 'uniqueId', 'locale', 'username'],
      transaction
    })

    if (!userDetails) throw new AppError(Errors.USER_NOT_EXISTS)

    await userDetails.set({ password: encryptPassword(password) }).save({ transaction })
    await deleteCache(`${ROLE.USER}:${userDetails.uniqueId}`)

    // const mailSent = await sendEmail({
    //   user: userDetails,
    //   emailTemplate: EMAIL_TEMPLATE_TYPES.UPDATE_PASSWORD,
    //   data: { subject: (userDetails.locale) ? EMAIL_SUBJECTS[userDetails.locale].passwordUpdated || EMAIL_SUBJECTS.EN.passwordUpdated : EMAIL_SUBJECTS.EN.passwordUpdated, newPassword: Buffer.from(password, 'base64').toString('ascii') }
    // })

    return { success: true }
  }
}
