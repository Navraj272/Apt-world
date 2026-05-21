import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { Op } from 'sequelize'
import { ApiHelper } from '@src/utils/api.utils'


export class GetAllGameCategoryHandler extends BaseHandler {
  async run() {

    const { search, isActive } = this.args
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    let query

    if (search) {
      let categoryName = search
      categoryName = categoryName.replace(/\\/g, '\\\\').replace(/%/g, '\\%').replace(/_/g, '\\_')

      query = { ...query, name: { EN: { [Op.iLike]: `%${categoryName}%` } } }
    }
    if (isActive && (isActive !== '' || isActive !== null)) query = { ...query, isActive }

    let casinoCategories
    if (offset && limit) {
      casinoCategories = await db.CasinoCategory.findAndCountAll({
        where: query,
        order: [['orderId', 'ASC'], ['createdAt', 'DESC']],
        limit: limit,
        offset: offset
      })
    } else {
      casinoCategories = await db.CasinoCategory.findAndCountAll({
        where: query,
        order: [['orderId', 'ASC'],['createdAt', 'DESC']]
      })
    }

    return { casinoCategories, pageNo, totalPages: Math.ceil(casinoCategories.count / limit) }
  }
}
