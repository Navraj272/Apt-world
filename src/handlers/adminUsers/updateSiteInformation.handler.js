import db from '@src/db/models'
import { Errors } from "@src/errors/errorCodes"
import { uploadImages } from '@src/helpers/uploadFiles.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCache } from '@src/libs/redis'
import { CACHE_KEYS, GLOBAL_SETTINGS, S3_FILE_PREFIX } from '@src/utils/constants/public.constants'


export class UpdateSiteInformationHandler extends BaseHandler {
  async run() {
    const { siteName, images, supportEmail, contactNumber, termsUrl, privacyPolicyUrl } = this.args
    const transaction = this.dbTransaction
    const siteInfo = await db.GlobalSetting.findOne({ where: { key: 'SITE_INFORMATION' } })

    if (!siteInfo) throw new AppError(Errors.SITE_INFORMATION_DOES_NOT_EXISTS)

    let value = { desktop: siteInfo.value?.desktop, mobile: siteInfo.value?.mobile }
    if (siteName) value.siteName = siteName
    if (termsUrl) value.termsUrl = termsUrl
    if (privacyPolicyUrl) value.privacyPolicyUrl = privacyPolicyUrl
    if (supportEmail) value.supportEmail = supportEmail
    if (contactNumber) value.contactNumber = contactNumber

    const existingImages = {
      desktop: siteInfo.value?.desktop,
      mobile: siteInfo.value?.mobile,
    };
    const imagesData = await uploadImages(images, existingImages, S3_FILE_PREFIX.site_information);
    if (imagesData.desktop) value.desktop = imagesData.desktop;
    if (imagesData.mobile) value.mobile = imagesData.mobile;

    await db.GlobalSetting.update(
      { value },
      {
        where: { key: GLOBAL_SETTINGS.SITE_INFORMATION },
        transaction
      })
    await deleteCache(CACHE_KEYS.SETTINGS)
    return { message: 'Success', UpdatedSiteInformationSettings: value }
  }
}
