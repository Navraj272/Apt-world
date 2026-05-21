import config from '@src/configs/app.config'
import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import Jwt from 'jsonwebtoken'

export class ForgetPasswordHandler extends BaseHandler {


  async run () {
    let { email } = this.args

    email = email.toLowerCase()
    const userExist = await db.AdminUser.findOne({
      where: { email },
      attributes: ['adminUserId', 'email', 'adminUsername']
    })

    if (!userExist) throw new AppError(Errors.ADMIN_NOT_FOUND)

    const newPasswordKey = Jwt.sign({
      userId: userExist?.adminUserId,
      username: userExist?.adminUsername
    }, config.get('jwt.resetPasswordKey'), { expiresIn: config.get('jwt.resetPasswordExpiry') })

    const credentials = await getSendGridCredentials()

    if (Object.keys(credentials).length !== 2) {
      throw new AppError(Errors.CREDENTIALS_NOT_FOUND)
    }

    const dynamicEmail = await createEmailWithDynamicValues({
      language: 'EN',
      emailType: EMAIL_TEMPLATE_TYPES.VALUE_T0_INT[EMAIL_TEMPLATE_TYPES.RESET_PASSWORD],
      userId: userExist?.adminUserId,
      serviceData: {
        link: `${config.get('webApp.baseUrl')}/reset-password?newPasswordKey=${newPasswordKey}`,
        subject: EMAIL_SUBJECTS.EN.reset
      }
    })

    const forgetPasswordEmailSent = await sendDynamicMail({
      user: userExist,
      credentials,
      subject: EMAIL_SUBJECTS.EN.reset,
      dynamicEmail
    })

    if (forgetPasswordEmailSent.success) {
      await updateEntity({ model: db.AdminUser, data: { resetPasswordToken: newPasswordKey, resetPasswordSentAt: new Date() }, values: { adminUserId: userExist.adminUserId } })
    }

    return { forgetPasswordEmailSent }
  }
}
