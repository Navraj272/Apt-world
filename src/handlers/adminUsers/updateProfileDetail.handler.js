import { Errors } from '@src/errors/errorCodes'
import { AppError } from '@src/errors/app.error'
import { Op } from 'sequelize'
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'


export class UpdateProfileDetail extends BaseHandler {
  async run () {
    let { firstName, lastName, email, superAdminUsername, id, user } = this.args
    const updateSuperadminUser = { firstName, lastName, email, superAdminUsername }
    const transaction = this.context.sequelizeTransaction

    if ((user.email !== email) || (user.superAdminUsername !== superAdminUsername)) {
      email = email.toLowerCase()

      const emailOrUsernameExist = await db.SuperAdminUser.findOne({
        where: { [Op.or]: { email, superAdminUsername }, [Op.not]: { superAdminUserId: id } },
        attributes: ['email', 'superAdminUsername'],
        transaction
      })

      if (emailOrUsernameExist) {
        if (emailOrUsernameExist.email === email) throw new AppError(Errors.EMAIL_ALREADY_EXISTS)

        throw new AppError(Errors.USER_NAME_EXISTS)
      }
    }

    await db.SuperAdminUser.update(
      updateSuperadminUser,
      {
        where: { superAdminUserId: id },
        transaction
      }
    );


    const superadminDetail = await db.SuperAdminUser.findOne({
      where: { superAdminUserId: id },
      attributes: {exclude: ['password', 'resetPasswordToken', 'resetPasswordSentAt']},
      transaction
    })

    return { superadminDetail }
  }
}
