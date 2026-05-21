import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { uploadImages } from '@src/helpers/uploadFiles.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { S3_FILE_PREFIX } from '@src/utils/constants/public.constants'
import { Op } from 'sequelize'

export class CreateGameCategoryHandler extends BaseHandler {
  async run() {
    const { name, isActive, images } = this.args
    const transaction = this.context.sequelizeTransaction
    const checkCategoryExists = await db.CasinoCategory.findOne({
      where: { name: { [Op.contains]: { EN: name.EN } } },
      transaction
    });
    if (checkCategoryExists) throw new AppError(Errors.GAME_CATEGORY_EXISTS)

    let lastOrderId = await db.CasinoCategory.max('orderId', transaction)
    lastOrderId = lastOrderId ? lastOrderId : 0;
    const imagesData = await uploadImages(images, {}, S3_FILE_PREFIX.casino_category);

    let createCategory = await db.CasinoCategory.create(
      {
        name,
        isActive,
        orderId: lastOrderId + 1,
        mobileImageUrl: imagesData.mobile,
        imageUrl: imagesData.desktop
      },
      { transaction })
    return { createCategory }
  }
}
