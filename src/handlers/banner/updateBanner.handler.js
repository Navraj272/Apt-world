import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { uploadImages } from '@src/helpers/uploadFiles.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCacheByPattern } from '@src/libs/redis'
import { BANNER_TYPE, CACHE_KEYS, S3_FILE_PREFIX } from '@src/utils/constants/public.constants'


export class UpdateBannerPageHandler extends BaseHandler {

  async run() {
    const { bannerId, images, title, description, redirectUrl, order, bannerType } = this.args
    const transaction = this.context.sequelizeTransaction

    const checkBannerExist = await db.Banner.findOne({
      where: { id: bannerId }
    })
    if (!checkBannerExist) throw new AppError(Errors.BANNER_NOT_FOUND)

    if (bannerType) {
      if (!Object.values(BANNER_TYPE).includes(bannerType)) throw new AppError(Errors.INVALID_BANNER_TYPE)
    }

    const updateData = {}
    if (bannerType) updateData.bannerType = bannerType
    if (redirectUrl) updateData.redirectUrl = redirectUrl
    if (title) updateData.title = title
    if (description) updateData.description = description
    if (order) updateData.order = Number(order)

    const existingImages = {
      desktop: checkBannerExist.imageUrl,
      mobile: checkBannerExist.mobileImageUrl,
    };
    const imagesData = await uploadImages(images, existingImages, S3_FILE_PREFIX.banner);
    if (imagesData.desktop) updateData.imageUrl = imagesData.desktop;
    if (imagesData.mobile) updateData.mobileImageUrl = imagesData.mobile;

    const updateBanner = await db.Banner.update(updateData, {
      where: {
        id: bannerId
      }
    }, { transaction })
    await deleteCacheByPattern(`${CACHE_KEYS.BANNERS}*`)
    return { updateBanner }
  }
}
