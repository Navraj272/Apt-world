import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { deleteCache } from "@src/libs/redis"
import { CACHE_KEYS, GLOBAL_SETTINGS } from "@src/utils/constants/public.constants"

export class UpdateWithdrawalLimitsHandler extends BaseHandler {
  async run() {
    const { minAmount, maxAmountWithoutRequest } = this.args
    const transaction = this.dbTransaction

    if (minAmount < 0 || maxAmountWithoutRequest < minAmount) {
      throw new AppError(Errors.INVALID_INPUT)
    }

    const withdrawalLimits = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.WITHDRAWAL_LIMITS },
      transaction
    })

    if (!withdrawalLimits) throw new AppError(Errors.WITHDRAWAL_LIMITS_SETTINGS_DOES_NOT_EXISTS)

    const limits = (withdrawalLimits.value)
    if (minAmount) limits.minAmount = minAmount
    if (maxAmountWithoutRequest) limits.maxAmountWithoutRequest = maxAmountWithoutRequest

    await db.GlobalSetting.update(
      { value: limits },
      {
        where: { key: GLOBAL_SETTINGS.WITHDRAWAL_LIMITS },
        transaction
      })

    await deleteCache(CACHE_KEYS.SETTINGS)
    return { message: 'Success', UpdatedWithdrawalLimitsSettings: withdrawalLimits.value }
  }
}
