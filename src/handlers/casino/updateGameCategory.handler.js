import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { uploadImages } from '@src/helpers/uploadFiles.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { S3_FILE_PREFIX } from '@src/utils/constants/public.constants'


export class UpdateGameCategoryHandler extends BaseHandler {
  async run() {
    const { name, casinoCategoryId, isActive, images } = this.args
    const transaction = this.context.sequelizeTransaction

    const checkCategoryExists = await db.CasinoCategory.findOne({
      where: { id: casinoCategoryId },
      transaction
    })

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    

    if (!checkCategoryExists) throw new AppError(Errors.GAME_CATEGORY_NOT_FOUND)

    if (name && checkCategoryExists.name.EN !== name.EN) {
      const nameExists = await db.CasinoCategory.findOne({
        where: { name },
        transaction
      })

      if (nameExists) throw new AppError(Errors.GAME_CATEGORY_ALREADY_EXISTS)
    }
    let updateData = { name: { ...checkCategoryExists.name, ...name }, isActive }

    const existingImages = {
      desktop: checkCategoryExists.imageUrl,
      mobile: checkCategoryExists.mobileImageUrl,
    };
    const imagesData = await uploadImages(images, existingImages, S3_FILE_PREFIX.casino_category);
    if (imagesData.desktop) updateData.imageUrl = imagesData.desktop;
    if (imagesData.mobile) updateData.mobileImageUrl = imagesData.mobile;
    const updateCategory = await db.CasinoCategory.update(updateData, {
      where: { id: casinoCategoryId },
      transaction
    })
    return { updateCategory }
  }
}
