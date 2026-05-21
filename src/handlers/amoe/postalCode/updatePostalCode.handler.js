import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCache } from '@src/libs/redis'
import { GLOBAL_SETTINGS , CACHE_KEYS } from '@src/utils/constants/public.constants'

export class UpdatePostalCodeHandler extends BaseHandler {
  async run () {
    const { gcMax, scMax, gcMin , scMin, postalCodeValidTill, interval } = this.args
    const transaction = this.context.sequelizeTransaction

    const postalCodeSetting = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.POSTAL_CODE }, // Using a constant for the key is better practice
      transaction,
    })

    if (!postalCodeSetting) {
      throw new AppError(Errors.POSTAL_CODE_SETTING_NOT_FOUND) // You might need to add this error to your errorCodes
    }

    const updatedValue = { ...postalCodeSetting.value }

    if (gcMin !== undefined) {
      updatedValue.gcMin = gcMin
    }
    if (scMin !== undefined) {
      updatedValue.scMin = scMin
    }
    if (scMax !== undefined) {
      updatedValue.scMax = scMax
    }
    if (gcMax !== undefined) {
      updatedValue.gcMax = gcMax
    }
    if (postalCodeValidTill !== undefined) {
      updatedValue.postalCodeValidTill = postalCodeValidTill
    }
    if (interval !== undefined) {
      updatedValue.interval = interval
    }

    await postalCodeSetting.update({ value: updatedValue }, { transaction })
    await deleteCache(CACHE_KEYS.SETTINGS)
    return postalCodeSetting
  }
}
