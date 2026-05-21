import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { deleteCache } from "@src/libs/redis"
import { CACHE_KEYS, GLOBAL_SETTINGS } from "@src/utils/constants/public.constants"

export class UpdateSocialMediaLinkHandler extends BaseHandler {
  async run() {
    const { facebook, twitter, instagram, telegram, discord } = this.args

    const value = {
      facebook,
      twitter,
      instagram,
      telegram,
      discord
    }

    const transaction = this.dbTransaction

    const socialMediaLink = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.SOCIAL_MEDIA_LINKS },
      transaction
    })

    if (!socialMediaLink) throw new AppError(Errors.SOCIAL_MEDIA_LINK_DOES_NOT_EXISTS)

    await db.GlobalSetting.update(
      { value },
      {
        where: { key: GLOBAL_SETTINGS.SOCIAL_MEDIA_LINKS },
        transaction
      })

    await deleteCache(CACHE_KEYS.SETTINGS)
    return { message: 'Success', UpdatedSocialMediaLinkSettings: value }
  }
}
