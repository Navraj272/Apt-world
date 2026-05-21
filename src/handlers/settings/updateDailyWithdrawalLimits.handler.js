import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { deleteCache, setCache } from "@src/libs/redis"
import { CACHE_KEYS, GLOBAL_SETTINGS } from "@src/utils/constants/public.constants"

export class UpdateDailyWithdrawalLimitsHandler extends BaseHandler {
  async run() {
    const { limit } = this.args
    const transaction = this.dbTransaction

    const withdrawalLimits = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.GLOBAL_DAILY_WITHDRAWAL_ALLOWED },
      transaction
    })

    if (!withdrawalLimits) throw new AppError(Errors.WITHDRAWAL_LIMITS_SETTINGS_DOES_NOT_EXISTS)

    await db.GlobalSetting.update(
      { value: limit },
      {
        where: { key: GLOBAL_SETTINGS.GLOBAL_DAILY_WITHDRAWAL_ALLOWED },
        transaction
      })

    await setCache(GLOBAL_SETTINGS.GLOBAL_DAILY_WITHDRAWAL_ALLOWED, limit);
    await deleteCache(CACHE_KEYS.SETTINGS)
    return { message: 'Success', UpdatedWithdrawalLimitsSettings: withdrawalLimits.value }
  }
}