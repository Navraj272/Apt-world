import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
import Op from 'sequelize';

export class CreateAdminRoleHandler extends BaseHandler {
  async run() {
    const { name, permission, level } = this.args

    // Ensure transaction exists
    const transaction = this.dbTransaction
    // Check if a role with the same name or level already exists
    const existingRole = await db.AdminRole.findOne({
      where: {
        [Op.or]: [{ name }, { level }],
      },
      transaction,
    })

    if (existingRole) {
      throw new AppError(Errors.ADMIN_ROLE_EXISTS)
    }

    // Create the new admin role
    const adminRoleData = { name, permission, level }
    const adminRoleInstance = await db.AdminRole.create(adminRoleData, { transaction })

    // Commit the transaction if it was created in this method
    if (!this.dbTransaction) {
      await transaction.commit()
    }

    return { adminRole: adminRoleInstance }
  }
}
