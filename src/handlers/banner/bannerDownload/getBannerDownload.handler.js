import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { GLOBAL_SETTINGS } from "@src/utils/constants/public.constants";

export class GetBannerDownloadHandler extends BaseHandler {

  async run() {
    const bannerDownloadSetting = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.BANNER_DOWNLOAD }
    })

    if (!bannerDownloadSetting) {
      return { message: 'No banner download links found.' }
    }

    return { bannerLinks: bannerDownloadSetting.value }
  }
}
