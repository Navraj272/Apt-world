import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { ApiHelper } from '@src/utils/api.utils'
import { BaseHandler } from '@src/libs/baseHandler'


export class GetAllAdminRolesHandler extends BaseHandler {
  async run() {
    const { offset, limit,pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)

    const adminRoles = await db.AdminRole.findAndCountAll({
      attributes: ['roleId', 'name', 'permission', 'level', 'createdAt', 'updatedAt'],
      order: [['roleId', 'ASC']],
      limit,
      offset
    })


    if (!adminRoles.rows.length) {
      throw new AppError(Errors.ADMIN_ROLE_NOT_EXISTS)
    }

    return {
      adminRoles,
      pageNo,
      totalPages: Math.ceil(adminRoles.count / limit)
    }
  }
}
