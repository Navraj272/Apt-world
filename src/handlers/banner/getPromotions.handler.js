import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { Op } from 'sequelize'
import { ApiHelper } from '@src/utils/api.utils'

export class GetPromotionsHandler extends BaseHandler {

  async run () {

    const { offset, limit,pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    let { search,allData='false' } = this.args
    const query = {}

    if (search) {
      query[`title.EN`] = { [Op.like]: `%${search}%` }
    }

    let condition = {
      where : { ...query },
      order : [['order', 'ASC']]
    }

    if(allData === 'false'){
      condition.limit =  limit,
      condition.offset = offset
    }

    const promotions = await db.Promotions.findAndCountAll(condition)

    return {
      data : promotions.rows,
      pageNo,
      totalPages: Math.ceil(promotions.count / limit)
    }
  }
}
