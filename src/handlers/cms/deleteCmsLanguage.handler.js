import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'


export class DeleteCmsLanguageHandler extends BaseHandler {
  async run() {
    const { cmsPageId } = this.args
    const transaction = this.context.sequelizeTransaction

    const cmsPage = await db.CmsPage.destroy({
      where: { cmsPageId },
      transaction
    })

    return { success: true }
  }
}
