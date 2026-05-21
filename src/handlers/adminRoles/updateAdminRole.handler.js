import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
;


export class UpdateAdminRoleHandler extends BaseHandler {
  async run() {
    const { roleId, name, permission, level } = this.args;
    const transaction = this.context.sequelizeTransaction;
    const adminRole = await db.AdminRole.findOne({ where: { roleId }, transaction });


    if (!adminRole) {
      throw new AppError(Errors.ADMIN_ROLE_NOT_FOUND);
    }
    adminRole.name = name;
    adminRole.permission = permission;
    adminRole.level = level;

    await adminRole.save({ transaction });


    return { success: true }
  }
}
