import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { uploadImages } from '@src/helpers/uploadFiles.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { S3_FILE_PREFIX } from '@src/utils/constants/public.constants'



export class UpdateCasinoProviderHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { casinoProviderId, name, isActive, images, demo } = this.args
    const transaction = this.context.sequelizeTransaction
    let updateData = { isActive, demo }

    const checkProviderExists = await db.CasinoProvider.findOne({
      where: { id: casinoProviderId },
      transaction
    })

    if (name) updateData.name = name

    if (!checkProviderExists) throw new AppError(Errors.CASINO_PROVIDER_NOT_FOUND)

    const existingImages = {
      desktop: checkProviderExists.imageUrl,
      mobile: checkProviderExists.mobileImageUrl,
    };
    const imagesData = await uploadImages(images, existingImages, S3_FILE_PREFIX.casino_provider);
    if (imagesData.desktop) updateData.thumbnailUrl = imagesData.desktop;
    if (imagesData.mobile) updateData.mobileThumbnailUrl = imagesData.mobile;

    const updatedCasinoProvider = await db.CasinoProvider.update(
      updateData,
      {
        where: { id: casinoProviderId },
        transaction
      }
    )

    return { updatedCasinoProvider }
  }
}
