import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { uploadImages } from '@src/helpers/uploadFiles.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCache, deleteCacheByPattern } from '@src/libs/redis'
import { CACHE_KEYS, S3_FILE_PREFIX } from '@src/utils/constants/public.constants'


export class UpdatePromotionsHandler extends BaseHandler {

  async run() {
    let { images, title, slug, description, category, content, redirectUrl, promotionId, isActive } = this.args
    const transaction = this.context.sequelizeTransaction
    let imagesData

    const promotionsExists = await db.Promotions.findOne({
      where: { id: promotionId }
    })
    if (!promotionsExists) throw new AppError(Errors.PROMOTION_NOT_EXISTS)

    if (images) {
      const existingImages = {
        desktop: promotionsExists.image,
        mobile: promotionsExists.mobileImage,
      };
      imagesData = await uploadImages(images, existingImages, S3_FILE_PREFIX.promotions);
    }

    const promotions = await db.Promotions.update({
      title,
      description,
      category,
      slug,
      url: redirectUrl,
      isActive,
      content,
      image: imagesData?.desktop ? imagesData.desktop : promotionsExists.image,
      mobileImage: imagesData?.mobile ? imagesData.mobile : promotionsExists.mobileImage
    }, { where: { id: promotionId }, transaction })

        await deleteCacheByPattern(`${CACHE_KEYS.PROMOTIONS}*`)
    return { promotions }
  }
}
