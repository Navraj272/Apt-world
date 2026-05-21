import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { CACHE_KEYS ,GLOBAL_SETTINGS } from '@src/utils/constants/public.constants'
import { deleteCache } from '@src/libs/redis'

export class UpdateMethodBasedWithdrawalLimitsHandler extends BaseHandler {
  async run() {
    const transaction = this.dbTransaction


    const {
      fiat_fee,
      crypto,
      basic_card,
      bank_transfer
    } = this.args

    const setting = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.PAYMENT_METHOD_WITHDRAWAL_LIMITS_AND_FIAT_FEE },
      transaction
    })

    if (!setting) {
      throw new AppError(Errors.WITHDRAWAL_LIMITS_SETTINGS_DOES_NOT_EXISTS)
    }

    const currentValue = setting.value || {}

    const updatedValue = {
      ...currentValue,
      fiat_fee: {
        ...currentValue.fiat_fee,
        ...fiat_fee
      },
      crypto: {
        ...currentValue.crypto,
        ...crypto
      },
      basic_card: {
        ...currentValue.basic_card,
        ...basic_card
      },
      bank_transfer: {
        ...currentValue.bank_transfer,
        ...bank_transfer
      }
    }

    await db.GlobalSetting.update(
      { value: updatedValue },
      {
        where: { key: GLOBAL_SETTINGS.PAYMENT_METHOD_WITHDRAWAL_LIMITS_AND_FIAT_FEE },
        transaction
      }
    )

    await deleteCache(CACHE_KEYS.SETTINGS)

    return {
      message: 'Success',
      updatedSettings: updatedValue
    }
  }
}
