import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCacheByPattern } from '@src/libs/redis'
import { CACHE_KEYS } from '@src/utils/constants/public.constants'
import { deleteFileFromS3 } from '@src/utils/s3.utils'

export class DeletePromotionsHandler extends BaseHandler {

  async run() {
    const promotionsExists = await db.Promotions.findOne({
      where: { id: this.args.promotionId }
    })
    if (!promotionsExists) throw new AppError(Errors.PROMOTION_NOT_EXISTS)
    if (promotionsExists.image) await deleteFileFromS3(promotionsExists.image)

    await promotionsExists.destroy()
    await deleteCacheByPattern(`${CACHE_KEYS.PROMOTIONS}*`)
    return { success: true }
  }
}
