import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { encryptPassword } from '@src/helpers/authentication.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { Op } from 'sequelize'

export class CreateAdminUserHandler extends BaseHandler {
  async run() {
    const {
      firstName,
      lastName,
      email,
      adminUsername,
      password,
      adminRoleId,
      parentId,
      permission,
      authenticatedAdminId
    } = this.args

    const transaction = this.dbTransaction

    const authenticatedUser = await db.AdminUser.findOne({
      where: { adminUserId: authenticatedAdminId },
      attributes: ['firstName', 'lastName', 'email'],
      include: [
        {
          model: db.AdminRole,
          as: 'AdminRole',
          attributes: ['roleId', 'name', 'permission', 'level'],
        },
      ],
      transaction,
    })

    if (!authenticatedUser) {
      throw new AppError(Errors.UN_AUTHORIZE)
    }


    const { AdminRole } = authenticatedUser
    const { level: authUserLevel } = AdminRole


    const adminExists = await db.AdminUser.findOne(
      {
        attributes: ['adminUserId'],
        where: { [Op.or]: { email: email.toLowerCase(), adminUsername } },
      },
      { transaction }
    )

    if (adminExists) {
      throw new AppError(Errors.ADMIN_ALREADY_EXISTS)
    }


    const role = await db.AdminRole.findOne(
      {
        attributes: ['roleId', 'permission', 'level'],
        where: { roleId: adminRoleId },
      },
      { transaction }
    )

    if (!role) {
      throw new AppError(Errors.ROLE_NOT_FOUND)
    }


    if (authUserLevel > role.level) {
      throw new AppError(Errors.CANNOT_CREATE_ADMIN)
    }

    const admin = await db.AdminUser.create(
      {
        firstName,
        lastName,
        email,
        adminUsername,
        password: encryptPassword(password),
        parentId: parentId ? parentId : authenticatedAdminId,
        adminRoleId: role.roleId,
        permission: permission || AdminRole.permission,
      },
      { transaction }
    )

    const createdAdminUser = admin.toJSON()
    delete createdAdminUser.password

    return {
      createAdminUser: createdAdminUser
    }
  }
}
