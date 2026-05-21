import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { deleteCacheByPattern } from "@src/libs/redis"
import { CACHE_KEYS } from "@src/utils/constants/public.constants"

export class OrderPromotionsHandler extends BaseHandler {
  async run() {
    const promotionIds = [...new Set(this.args.promotionIds)]

    const promises = []
    const transaction = this.context.sequelizeTransaction
    const promotionCount = await db.Promotions.count({ transaction })

    if (promotionCount !== promotionIds.length) {
      throw new AppError(Errors.INVALID_ARRAY)
    }

    let count = 1
    promotionIds.forEach((promotionId) => {
      promises.push(
        db.Promotions.update(
          { order: count },
          { where: { id: promotionId }, transaction }
        )
      )
      count++
    })

    await Promise.all(promises)
    await deleteCacheByPattern(`${CACHE_KEYS.PROMOTIONS}*`)
    return { success: true };
  }
}
