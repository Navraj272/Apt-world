import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";
import { GLOBAL_SETTINGS } from "@src/utils/constants/public.constants";


export class GetFaucetHandler extends BaseHandler {
  async run () {

    const faucet = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.FAUCET },
    })

    if (!faucet)
      throw new AppError(Errors.FAUCET_SETTINGS_DOES_NOT_EXISTS)

    return { message: 'Success', FaucetSettings: faucet.value }
  }
}
