import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { BaseHandler } from '@src/libs/baseHandler';
import { GLOBAL_SETTINGS } from "@src/utils/constants/public.constants";


export class GetPostalCodeHandler extends BaseHandler {

  async run () {

    const postalCode = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.POSTAL_CODE }
    })
    if (!postalCode) {
      throw new AppError(Errors.POSTAL_CODE_NOT_FOUND)

    }

    return { postalCode: postalCode.value }
  }
}
