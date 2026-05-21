import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { ApiHelper } from '@src/utils/api.utils'
import { BaseHandler } from '@src/libs/baseHandler'
import { Op } from 'sequelize'

export class GetAllCmsPageHandler extends BaseHandler {
  async run () {
    let query

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    let { search, language, isActive } = this.args
    if (search) {
      if (!language) language = 'EN'
      search = search.replace(/\\/g, '\\\\').replace(/%/g, '\\%').replace(/_/g, '\\_')
      query = {
        ...query,
        [Op.or]: [{ title: { [`${language}`]: { [Op.iLike]: `%${search}%` } } },
        { slug: { [Op.iLike]: `%${search}%` } }
        ]
      }
    }
    if (isActive && (isActive !== '' || isActive !== null)) query = { ...query, isActive }

    const cmsPages = await db.CmsPage.findAndCountAll({
      order: [['createdAt', 'DESC']],
      where: query,
      limit: limit,
      offset: offset
    })

    if (!cmsPages) throw new AppError(Errors.CMS_NOT_FOUND)

    return { cmsPages, pageNo, totalPages: Math.ceil(cmsPages.count / limit) }
  }
}
