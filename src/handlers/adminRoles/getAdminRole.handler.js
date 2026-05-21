import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'

import { BaseHandler } from '@src/libs/baseHandler'

export class GetAdminRoleHandler extends BaseHandler {
  async run() {
    const { roleId } = this.args

    const data = await db.AdminRole.findOne({
      where: { roleId }
    })

    if (!data) {
      throw new AppError(Errors.ADMIN_ROLE_NOT_FOUND)
    }

    return { data }
  }
}
