import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCacheByPattern } from '@src/libs/redis'
import { CACHE_KEYS } from '@src/utils/constants/public.constants'


export class UpdateCmsPageHandler extends BaseHandler {
  async run() {
    const { cmsPageId, title, slug, content, isActive, category } = this.args
    const transaction = this.context.sequeizeTransaction

    const checkCmsExist = await db.CmsPage.findOne({
      where: { cmsPageId },
      transaction
    })
    if (!checkCmsExist) throw new AppError(Errors.CMS_NOT_FOUND)

    const checkCmsSlugExist = await db.CmsPage.findOne({
      where: { slug },
      transaction
    })

    if (checkCmsSlugExist && checkCmsSlugExist.cmsPageId !== cmsPageId) throw new AppError(Errors.CMS_EXISTS)

    const data = { isActive, category, title: title, content: content }

    const updateCmsPage = await db.CmsPage.update(
      data,
      {
        where: { cmsPageId },
        transaction
      }
    )
    await deleteCacheByPattern(`${CACHE_KEYS.PAGES}*`)
    return { message: 'Record updated successfully', updatedCmsData: data }
  }
}
