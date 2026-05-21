import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { uploadImages } from '@src/helpers/uploadFiles.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCacheByPattern } from '@src/libs/redis'
import { CACHE_KEYS, S3_FILE_PREFIX } from "@src/utils/constants/public.constants"


export class CreateBannerHandler extends BaseHandler {
  async run() {
    const { images, bannerType, title, description, redirectUrl } = this.args; // Expecting an array of banner objects
    const transaction = this.context.sequelizeTransaction;

    if (!images) {
      throw new AppError(Errors.IMAGE_NOT_FOUND, "Banner Type is required");
    }

    const imagesData = await uploadImages(images, {}, S3_FILE_PREFIX.banner);

    const bannerData = {
      bannerType,
      title,
      description,
      redirectUrl,
      imageUrl: imagesData.desktop,
      mobileImageUrl: imagesData.mobile,
      isActive: true,
    };

    const createdBanner = await db.Banner.create(bannerData, { transaction });
    await deleteCacheByPattern(`${CACHE_KEYS.BANNERS}*`)
    return { createdBanner };
  }
}
