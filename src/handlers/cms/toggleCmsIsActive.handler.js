import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCacheByPattern } from '@src/libs/redis'
import { CACHE_KEYS } from '@src/utils/constants/public.constants'

export class toggleCmsIsActiveHandler extends BaseHandler {
  async run() {
    const { cmsPageId } = this.args

    const transaction = this.dbTransactionO
    const cmsPage = await db.CmsPage.findOne({
      attributes: ['cmsPageId', 'isActive'],
      where: { cmsPageId },
      transaction
    })

    if (!cmsPage)
      throw new AppError(Errors.CMS_NOT_FOUND)

    cmsPage.isActive = !cmsPage.isActive
    await cmsPage.save({ transaction })
    await deleteCacheByPattern(`${CACHE_KEYS.PAGES}*`)
    return { success: true }

  }
}
