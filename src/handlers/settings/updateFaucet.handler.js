import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { deleteCache } from "@src/libs/redis"
import { CACHE_KEYS, GLOBAL_SETTINGS } from "@src/utils/constants/public.constants"

export class UpdateFaucetHandler extends BaseHandler {
  async run() {
    const { SC, GC, interval } = this.args
    const value = {
      SC,
      GC,
      interval
    }
    const transaction = this.dbTransaction

    const faucet = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.FAUCET },
      transaction
    })

    if (!faucet) throw new AppError(Errors.FAUCET_SETTINGS_DOES_NOT_EXISTS)

    await db.GlobalSetting.update(
      { value },
      {
        where: { key: GLOBAL_SETTINGS.FAUCET },
        transaction
      })
    await deleteCache(CACHE_KEYS.SETTINGS)
    return { message: 'Success', UpdatedFaucetSettings: value }
  }
}
