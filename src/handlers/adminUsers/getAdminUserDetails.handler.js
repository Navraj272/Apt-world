import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'


export class GetAdminUserDetailsHandler extends BaseHandler {
  async run() {
    let { id, adminUserId } = this.args
    if (!adminUserId) adminUserId = id;


    const adminDetails = await db.AdminUser.findOne({
      where: { adminUserId },
      include: [
        {
          model: db.AdminRole,
          attributes: ['level', 'name']
        },
        {
          model: db.AdminUser,
          attributes: ['adminRoleId', 'firstName', 'lastName'],
          as: 'ParentAdmin',
          include: [
            {
              model: db.AdminRole,
              attributes: ['permission','level','name'],
            },
          ]
        },
      ],
      attributes: {
        exclude: ['resetPasswordToken', 'resetPasswordSentAt', 'updatedAt', 'password'],
      },
    })

    if (!adminDetails) throw new AppError(Errors.ADMIN_NOT_FOUND)

    return { adminDetails }
  }
}
