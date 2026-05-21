import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { deleteCache } from "@src/libs/redis"
import { CACHE_KEYS, GLOBAL_SETTINGS } from "@src/utils/constants/public.constants"

export class UpdateW9WithdrawalThresholdHandler extends BaseHandler {
  async run() {
    const { amount, currency, enabled } = this.args
    const transaction = this.dbTransaction

    if (amount < 0) {
      throw new AppError(Errors.INVALID_INPUT)
    }

    const setting = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.W9_WITHDRAWAL_THRESHOLD },
      transaction
    })

    if (!setting) {
      throw new AppError(Errors.GLOBAL_SETTING_NOT_FOUND)
    }

    // Ensure parsed JSON
    let value = setting.value

    if (typeof value === "string") {
      try {
        value = JSON.parse(value)
      } catch (err) {
        throw new AppError(Errors.INVALID_INPUT)
      }
    }

    if (amount !== undefined) value.amount = amount
    if (currency !== undefined) value.currency = currency
    if (enabled !== undefined) value.enabled = enabled

    await db.GlobalSetting.update(
      { value },
      {
        where: { key: GLOBAL_SETTINGS.W9_WITHDRAWAL_THRESHOLD },
        transaction
      }
    )

    await deleteCache(CACHE_KEYS.SETTINGS)

    return {
      message: "Success",
      W9WithdrawalThreshold: value
    }
  }
}
