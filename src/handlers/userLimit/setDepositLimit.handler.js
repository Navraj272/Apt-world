import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
import { USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from '@src/utils/constants/responsibleGambling.constants';
import { Op } from 'sequelize';

export class SetDepositLimitHandler extends BaseHandler {
  async run() {
    const { userId, dailyDeposit, weeklyDeposit, monthlyDeposit, reset } = this.args;
    const transaction = this.dbTransaction;

    let dailyLimit = 0, weeklyLimit = 0, monthlyLimit = 0;
    if (reset) {
      await db.UserLimit.update({ value: '' }, {
        where: {
          userId, key: {
            [Op.in]: [
              USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.DAILY_DEPOSIT_LIMIT,
              USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.WEEKLY_DEPOSIT_LIMIT,
              USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.MONTHLY_DEPOSIT_LIMIT
            ]
          }
        },
        transaction
      });
      return { success: true, message: "All limits reset successfully." };
    }

    if ((weeklyLimit && dailyDeposit > weeklyLimit) || (monthlyLimit && dailyDeposit > monthlyLimit)) {
      throw new AppError(Errors.INVALID_GAMBLING_LIMIT, "Daily limit exceeds weekly or monthly limits.");
    }
    dailyLimit = dailyDeposit;


    if ((dailyLimit && weeklyDeposit < dailyLimit) || (monthlyLimit && weeklyDeposit > monthlyLimit)) {
      throw new AppError(Errors.INVALID_GAMBLING_LIMIT, "Weekly limit must be greater than or equal to daily limit and less than or equal to monthly limit.");
    }
    weeklyLimit = weeklyDeposit;


    if ((dailyLimit && monthlyDeposit < dailyLimit) || (weeklyLimit && monthlyDeposit < weeklyLimit)) {
      throw new AppError(Errors.INVALID_GAMBLING_LIMIT, "Monthly limit must be greater than or equal to daily and weekly limits.");
    }
    monthlyLimit = monthlyDeposit;


    const limitsToUpdate = [];
    limitsToUpdate.push({
      userId,
      key: USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.DAILY_DEPOSIT_LIMIT,
      value: dailyLimit
    });
    limitsToUpdate.push({
      userId,
      key: USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.WEEKLY_DEPOSIT_LIMIT,
      value: weeklyLimit
    });
    limitsToUpdate.push({
      userId,
      key: USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.MONTHLY_DEPOSIT_LIMIT,
      value: monthlyLimit
    });

    await db.UserLimit.bulkCreate(limitsToUpdate, {
      updateOnDuplicate: ['value'],
      transaction
    });

    return { success: true, message: "Limit updated successfully.", limits: limitsToUpdate };
  }
}
