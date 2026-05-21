import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { uploadImages } from '@src/helpers/uploadFiles.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCacheByPattern } from '@src/libs/redis'
import { CACHE_KEYS, PROMOTIONS_TYPE, S3_FILE_PREFIX } from '@src/utils/constants/public.constants'

export class CreatePromotionsHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { images, title, slug, description, category, content, redirectUrl } = this.args
    const transaction = this.context.sequelizeTransaction

    const promotionTypeExist = Object.values(PROMOTIONS_TYPE).includes(category)
    if (!promotionTypeExist) throw new AppError(Errors.PROMOTION_NOT_EXISTS)

    const imagesData = await uploadImages(images, {}, S3_FILE_PREFIX.promotions);

    const promotions = await db.Promotions.create({
      title: title,
      description: description,
      category,
      slug,
      url: redirectUrl,
      content,
      image: imagesData.desktop,
      mobileImage: imagesData.mobile
    }, { transaction })
    await deleteCacheByPattern(`${CACHE_KEYS.PROMOTIONS}*`)
    return { promotions }
  }
}
