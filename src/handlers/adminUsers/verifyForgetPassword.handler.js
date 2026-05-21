import config from '@src/configs/app.config'
import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { encryptPassword } from '@src/helpers/authentication.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCache } from '@src/libs/redis'
import { ROLE_DETAILS } from '@src/utils/constants/starfManagement.constants'
import Jwt from 'jsonwebtoken'

export class VerifyForgetPasswordHandler extends BaseHandler {


  async run () {
    const { newPasswordKey, password, username, userId } = this.args
    let newPasswordKeyData, userData, key

    try {
      newPasswordKeyData = Jwt.verify(newPasswordKey, config.get('jwt.resetPasswordKey'))
      if (!newPasswordKeyData) throw new AppError(Errors.RESET_PASSWORD_TOKEN)
      if (!password && !username && !userId) {
        return { tokenValid: true, username: newPasswordKeyData.username, userId: newPasswordKeyData.userId, newPasswordKey, message: 'Reset your password' }
      }
    } catch (error) {
      throw new AppError(Errors.RESET_PASSWORD_TOKEN)
    }


    userData = db.SuperAdminUser.findAll({
      where: { superAdminUserId: newPasswordKeyData.userId, superAdminUsername: newPasswordKeyData.username },
      attributes: ['superAdminUserId', 'password', 'superAdminUsername']
    })

    if (!userData) {
      userData = await db.AdminUser.findOne({
        where: { adminUserId: newPasswordKeyData.userId, adminUsername: newPasswordKeyData.username },
        attributes: ['adminUserId', 'password', 'adminUsername']
      })

      if (!userData) throw new AppError(Errors.USER_NOT_EXISTS)
      else if (userData && userId !== userData.dataValues.adminUserId &&
        username !== userData.dataValues.adminUsername) throw new AppError(Errors.RESET_PASSWORD_TOKEN)
    } else if (userData && userId !== userData.dataValues.superAdminUserId &&
      username !== userData.dataValues.username) throw new AppError(Errors.RESET_PASSWORD_TOKEN)

    if (userData?.superAdminUserId) key = `${ROLE_DETAILS.ADMIN.NAME}-${userData.superAdminUserId}-${userData.superAdminUsername}`
    else key = `${ROLE_DETAILS.ADMIN.NAME}-${userData.adminUserId}-${userData.adminUsername}`

    await userData.set({ password: encryptPassword(password) }).save()
    await deleteCache(key)

    return { success: true }
  }
}
