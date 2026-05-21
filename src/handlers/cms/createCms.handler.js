import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCacheByPattern } from '@src/libs/redis'
import { CACHE_KEYS } from '@src/utils/constants/public.constants'



export class CreateCmsPageHandler extends BaseHandler {
  async run() {
    const { title, slug, content, isActive, category } = this.args
    const transaction = this.context.sequelizeTransaction

    const checkCmsExist = await db.CmsPage.findOne({
      where: { slug },
      transaction
    })

    if (checkCmsExist) throw new AppError(Errors.CMS_EXISTS)

    await db.CmsPage.create(
      {
        title,
        slug,
        content,
        isActive,
        category
      },
      { transaction }
    );

    await deleteCacheByPattern(`${CACHE_KEYS.PAGES}*`)
    return { success: true, message: 'Record created successfully' }
  }
}
