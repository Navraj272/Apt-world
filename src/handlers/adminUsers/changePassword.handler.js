import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { comparePassword, encryptPassword } from '@src/helpers/authentication.helpers';
import { BaseHandler } from '@src/libs/baseHandler';

export class ChangePasswordHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { id, password, newPassword } = this.args
    const user = await db.AdminUser.findOne({ where: { adminUserId: id }, attributes: ['firstName', 'password'] });
    if (!user) {
      throw new AppError(Errors.USER_NOT_EXISTS);
    }
    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      throw new AppError(Errors.WRONG_PASSWORD_ERROR);
    }

    if (password === newPassword) throw new AppError(Errors.SAME_PASSWORD_ERROR)


    await db.AdminUser.update(
      { password: encryptPassword(newPassword) },
      { where: { adminUserId: id } }
    )
    // await deleteCache(key)
    return { success: true }
  }
}
