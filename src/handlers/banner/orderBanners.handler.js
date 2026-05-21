import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { deleteCacheByPattern } from "@src/libs/redis"
import { CACHE_KEYS } from "@src/utils/constants/public.constants"

export class OrderBannersHandler extends BaseHandler {
  async run() {
    const bannerIds = [...new Set(this.args.bannerIds)]

    const promises = []
    const transaction = this.context.sequelizeTransaction
    const bannerCount = await db.Banner.count({ transaction })

    if (bannerCount !== bannerIds.length) {
      throw new AppError(Errors.INVALID_ARRAY)
    }

    let count = 1
    bannerIds.forEach((bannerId) => {
      promises.push(
        db.Banner.update(
          { order: count },
          { where: { id: bannerId }, transaction }
        )
      )
      count++
    })

    await Promise.all(promises)
    await deleteCacheByPattern(`${CACHE_KEYS.BANNERS}*`)
    return { success: true };
  }
}
