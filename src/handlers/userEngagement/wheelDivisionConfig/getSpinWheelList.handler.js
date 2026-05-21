import db from '@src/db/models'
import { ApiHelper } from '@src/utils/api.utils'
import { BaseHandler } from '@src/libs/baseHandler'

export class GetSpinWheelListHandler extends BaseHandler {
  async run () {

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)

    const spinWheelList = await db.WheelDivisionConfiguration.findAndCountAll({
      order: [['wheelDivisionId', 'ASC']],
      limit,
      offset
    })
    return { spinWheelList, pageNo, totalPages: Math.ceil(spinWheelList.count / limit) }
  }
}
