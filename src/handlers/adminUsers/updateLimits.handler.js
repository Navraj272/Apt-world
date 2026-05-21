import { Errors } from '@src/errors/errorCodes'
import { AppError } from '@src/errors/app.error'
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'

export class UpdateLimitsHandler extends BaseHandler {
  async run () {
    const { updateLimit } = this.args
    const transaction = this.context.sequelizeTransaction
    const loyaltyPoint = {}

    updateLimit.forEach(currency => {
      loyaltyPoint[currency.code] = currency.loyaltyPoint
    })

    const globalConfiguration = await db.GlobalSetting.findOne({
      where: { key: 'LOYALTY_LEVEL' },
      attributes: ['value'],
      transaction
    })

    if (!globalConfiguration) throw new AppError(Errors.TENANT_CONFIGURATION_NOT_FOUND)
    const updateLoyaltyPoints = await globalConfiguration.set({ loyaltyPoint }).save({ transaction })

    return { loyaltyPoint: updateLoyaltyPoints.loyaltyPoint }
  }
}
