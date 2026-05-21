import { BaseHandler } from '@src/libs/baseHandler';
import db from '@src/db/models';
import { USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from '@src/utils/constants/responsibleGambling.constants';
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import {serverDayjs} from '@src/libs/dayjs';

export class SetLimitHandler extends BaseHandler {
  async run() {
    const { userId, key, value } = this.args;
    const transaction = this.dbTransaction;

    const keyType = this.getLimitType(key)

    // Determine expiration date
    const expireAt = this.getExpiryDate(keyType);

    // Fetch existing limits in a single query
    const existingLimits = await db.UserLimit.findAll({ where: { userId }, transaction });

    let dailyLimit = null;
    let weeklyLimit = null;
    let monthlyLimit = null;


    // Assign values directly from fetched limits
    for (const limit of existingLimits) {
      const limitType = this.getLimitType(limit.key); 

      if (limitType === 'daily') dailyLimit = parseFloat(limit.value);
      else if (limitType === 'weekly') weeklyLimit = parseFloat(limit.value);
      else if (limitType === 'monthly') monthlyLimit = parseFloat(limit.value);
    }

    const numericValue = parseFloat(value);

    // Validate hierarchy: Monthly > Weekly > Daily
    if ((keyType === 'daily' && weeklyLimit !== null && numericValue > weeklyLimit) || 
    (keyType === 'weekly' && monthlyLimit !== null && numericValue > monthlyLimit) || 
    (keyType === 'monthly'&& weeklyLimit !== null && weeklyLimit > numericValue) || 
    (keyType === 'weekly' && dailyLimit !== null && dailyLimit > numericValue)) {
      throw new AppError(Errors.INVALID_GAMBLING_LIMIT)
    }

    // Try updating an existing record
    const [updatedRows] = await db.UserLimit.update(
      { value, expireAt },
      { where: { userId, key }, transaction }
    );

    if (updatedRows === 0) {
      // If no record was updated, create a new one
      const newLimit = await db.UserLimit.create({ userId, key, value, expireAt }, { transaction });
      return { success: true, message: "Limit set successfully.", limit: newLimit };
    }

    return { success: true, message: "Limit updated successfully.", limit: { userId, key, value, expireAt } };
  }

  // Get limit type
  getLimitType(limitKey) {
    if (
      limitKey === USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.DAILY_DEPOSIT_LIMIT ||
      limitKey === USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.DAILY_WITHDRAWAL_LIMIT
    ) {
      return 'daily';
    }

    if (
      limitKey === USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.WEEKLY_DEPOSIT_LIMIT ||
      limitKey === USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.WEEKLY_WITHDRAWAL_LIMIT
    ) {
      return 'weekly';
    }

    if (
      limitKey === USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.MONTHLY_DEPOSIT_LIMIT ||
      limitKey === USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.MONTHLY_WITHDRAWAL_LIMIT
    ) {
      return 'monthly';
    }

    return null; // If none match, return null
  }

  // Determine the expiration date based on the limit type
  getExpiryDate(limitType) {
    const now = serverDayjs();
    if (limitType === 'daily') return now.add(1, 'day').toDate();
    if (limitType === 'weekly') return now.add(7, 'days').toDate();
    if (limitType === 'monthly') return now.add(30, 'days').toDate();
    return null;
  }
}
