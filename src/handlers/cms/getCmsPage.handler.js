import { Errors } from '@src/errors/errorCodes'
import { AppError } from '@src/errors/app.error'
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'


export class GetCmsPageHandler extends BaseHandler {
  async run () {
    const { cmsPageId } = this.args

    const cmsDetails = await db.CmsPage.findOne({
      where: {cmsPageId}
    })

    if (!cmsDetails) throw new AppError(Errors.CMS_NOT_FOUND)

    return { cmsDetails }
  }
}
