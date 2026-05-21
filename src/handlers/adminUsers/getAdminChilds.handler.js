import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'

export class GetAdminChildren extends BaseHandler {
  async run() {
    const { adminUserId } = this.args


    const adminDetails = await db.AdminUser.findAndCountAll({
      where: { parentId: adminUserId },
      order: [['adminUserId', 'ASC']],
      attributes: ['adminUserId', 'firstName', 'lastName', 'email', 'adminRoleId', 'parentId'],
    });

    if (!adminDetails.count) {
      throw new AppError(Errors.ADMIN_NOT_FOUND, `No children found for adminUserId: ${adminUserId}`)
    }

    const details = await Promise.all(
      adminDetails.rows.map(async (admin) => {
        const childCount = await db.AdminUser.count({ where: { parentId: admin.adminUserId } })
        return { ...admin.dataValues, childCount }
      })
    )

    return { adminDetails: details }
  }
}
