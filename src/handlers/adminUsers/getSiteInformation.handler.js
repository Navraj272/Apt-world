import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'


export class GetSiteInformationHandler extends BaseHandler {
  async run () {
    const siteInformation = await db.GlobalSetting.findOne({ where: { key: ['SITE_INFORMATION'] }, attributes: ['key', 'value'], raw: true })

    return { siteInformation }
  }
}
