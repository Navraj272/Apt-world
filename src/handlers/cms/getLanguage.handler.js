import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'


export class GetLanguagesHandler extends BaseHandler {
  async run () {
    let allowedLanguage

    const siteLanguages = await db.GlobalSetting.findAll({
      where: { key: 'SITE_INFORMATION' },
      attributes: ['value']

    })
    siteLanguages.forEach((language) => { allowedLanguage = language.value.languages })

    return { allowedLanguage }
  }
}
