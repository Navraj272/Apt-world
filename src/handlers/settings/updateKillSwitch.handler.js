import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { deleteCache } from "@src/libs/redis"
import { CACHE_KEYS, GLOBAL_SETTINGS } from "@src/utils/constants/public.constants"

export class UpdateKillSwitchHandler extends BaseHandler {
  async run () {
    const {enabled,message}  = this.args
    const value = {
      enabled,
      message
    }
    const transaction = this.dbTransaction

    const killSwitch = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.KILL_SWITCH },
      transaction
    })

    if (!killSwitch) throw new AppError(Errors.KILL_SWITCH_DOES_NOT_EXISTS)

    await db.GlobalSetting.update(
      { value },
      {
        where: { key: GLOBAL_SETTINGS.KILL_SWITCH },
        transaction
      })
    await deleteCache(CACHE_KEYS.SETTINGS)
    return { message: 'Success', UpdatedKillSwitchSettings: value }
  }
}
