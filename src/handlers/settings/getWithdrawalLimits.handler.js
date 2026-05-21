import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";
import { GLOBAL_SETTINGS } from "@src/utils/constants/public.constants";

export class GetWithdrawalLimitsHandler extends BaseHandler {
  async run () {
    const withdrawalLimits = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.WITHDRAWAL_LIMITS },
    })

    if (!withdrawalLimits)
      throw new AppError(Errors.WITHDRAWAL_LIMITS_SETTINGS_DOES_NOT_EXISTS)

    return { message: 'Success', withdrawalLimits: withdrawalLimits.value }

  }
}
