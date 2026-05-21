import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { GLOBAL_SETTINGS } from "@src/utils/constants/public.constants"

export class SetFaucetHandler extends BaseHandler {
  async run () {
    const { SC, GC, interval } = this.args
    const transaction = this.dbTransaction

    let faucet = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.FAUCET },
      transaction
    })

    if (!faucet) throw new AppError(Errors.FAUCET_SETTINGS_DOES_NOT_EXISTS)

    const settings = (faucet.value)
    if (SC) settings.SC = SC
    if (GC) settings.GC = GC
    if (interval) settings.interval = interval

    await db.GlobalSetting.update(
      { value: settings },
      {
        where: { key: GLOBAL_SETTINGS.FAUCET },
        transaction
      }
    )

    return { UpdatedFaucetSettings: faucet.value }
  }
}
