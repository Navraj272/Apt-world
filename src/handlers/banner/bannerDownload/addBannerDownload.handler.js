import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { GLOBAL_SETTINGS, S3_FILE_PREFIX, } from '@src/utils/constants/public.constants'
import { deleteFileFromS3, uploadFile } from '@src/utils/s3.utils'


export class CreateBannerDownloadHandler extends BaseHandler {

  async run() {
    const { zipFile } = this.args
    const transaction = this.context.sequelizeTransaction

    if (!zipFile) throw new AppError(Errors.FILE_NOT_FOUND)

    // Upload the zip file to S3
    const data = await uploadFile(zipFile.buffer, {
      name: zipFile.originalname, //'banner_download',
      mimetype: zipFile.mimetype,
      filePathInS3Bucket: S3_FILE_PREFIX.banner
    })

    // Create or update the global setting record
    let globalSetting = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.BANNER_DOWNLOAD },
      transaction
    })
    let response;
    if (globalSetting) {

      if (globalSetting?.value) {
        await deleteFileFromS3(globalSetting.value)
      }
      globalSetting.value = data.location
      response = await globalSetting.save({ transaction })
    } else {
      // If the banner file doesn't exist, create a new record
      response = await db.GlobalSetting.create({
        key: GLOBAL_SETTINGS.BANNER_DOWNLOAD,
        value: data.location
      }, { transaction })
    }

    return { success: true }
  }
}
