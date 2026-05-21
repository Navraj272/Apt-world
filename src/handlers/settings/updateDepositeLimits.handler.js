import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { deleteCache } from "@src/libs/redis"
import { CACHE_KEYS, GLOBAL_SETTINGS } from "@src/utils/constants/public.constants"

export class UpdateDepositLimitsHandler extends BaseHandler {
  async run() {
    const { minAmount, maxAmount } = this.args
    const transaction = this.dbTransaction

    const value = {
      minAmount,
      maxAmount
    }
    const depositLimits = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.DEPOSIT_LIMITS },
      transaction
    })

    if (!depositLimits) throw new AppError(Errors.DEPOSIT_LIMITS_DOES_NOT_EXISTS)

    await db.GlobalSetting.update(
      { value },
      {
        where: { key: GLOBAL_SETTINGS.DEPOSIT_LIMITS },
        transaction
      })
    await deleteCache(CACHE_KEYS.SETTINGS)
    return { message: 'Success', UpdatedDepositLimitsSettings: value }
  }
}
