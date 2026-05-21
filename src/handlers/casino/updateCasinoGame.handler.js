import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { uploadImages } from '@src/helpers/uploadFiles.helpers'
import { S3_FILE_PREFIX } from "@src/utils/constants/public.constants"


export class UpdateCasinoGameHandler extends BaseHandler {


  async run () {

    const {
      casinoGameId, name, casinoProviderId, casinoCategoryId, images, isActive,
      devices, moreDetails, description, hasFreespins
    } = this.args
    const transaction = this.context.sequelizeTransaction

    const checkGameExists = await db.CasinoGame.findOne({ where: { id: casinoGameId }, transaction })
    if (!checkGameExists) throw new AppError(Errors.GAME_NOT_FOUND)

    const updateData = { casinoProviderId, casinoCategoryId, isActive, devices }
    if (casinoProviderId) {
      const provider = await db.CasinoProvider.findOne({ where: { id: casinoProviderId } })
      if (!provider) throw new AppError(Errors.PROVIDER_NOT_FOUND)
      checkGameExists.casinoProviderId = casinoProviderId
    }
    if (casinoCategoryId) {
      const category = await db.CasinoCategory.findOne({ where: { id: casinoCategoryId } })
      if (!category) throw new AppError(Errors.CATEGORY_NOT_FOUND)
      checkGameExists.casinoCategoryId = casinoCategoryId
    }
    if (hasFreespins) checkGameExists.hasFreespins = hasFreespins
    if (moreDetails) checkGameExists.moreDetails = moreDetails
    if (description) checkGameExists.description = description
    if (name) checkGameExists.name = name

    const existingImages = {
      desktop: checkGameExists.thumbnailUrl,
      mobile: checkGameExists.mobileThumbnailUrl,
    };
    const imagesData = await uploadImages(images, existingImages, S3_FILE_PREFIX.casino_game);
    if (imagesData.desktop) checkGameExists.thumbnailUrl = imagesData.desktop;
    if (imagesData.mobile) checkGameExists.mobileThumbnailUrl = imagesData.mobile;

    await checkGameExists.save({ transaction })
    return { checkGameExists }
  }
}
