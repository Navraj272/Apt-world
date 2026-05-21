import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { comparePassword, createAccessToken } from '@src/helpers/authentication.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { JWT_TOKEN_TYPES } from '@src/utils/constants/public.constants'


export class AdminLoginHandler extends BaseHandler {

  async run () {
    const { email, password, } = this.args
    const adminUser = await db.AdminUser.findOne({
      where: { email: email.toLowerCase() },
      attributes: ['adminUserId', 'firstName', 'adminUsername', 'lastName', 'permission', 'adminRoleId', 'email', 'createdAt', 'password', 'permission'],
      include: [{
        model: db.AdminRole,
        attributes: ['name', 'level']
      }, {
        model: db.AdminUser,
        as: 'ParentAdmin',
        required:false,
        attributes: ['adminUserId', 'firstName', 'lastName',]
      }
      ]
    })
    console.log(adminUser, "=adminUser")
    if (!adminUser) throw new AppError(Errors.USER_NOT_EXISTS)
    if (!await comparePassword(password, adminUser.password)) throw new AppError(Errors.WRONG_PASSWORD_ERROR)
    const accessToken = await createAccessToken(adminUser, JWT_TOKEN_TYPES.LOGIN)
    adminUser.dataValues.accessToken = accessToken
    delete adminUser.dataValues.password
    return { success: true, adminUser }
  }
}
