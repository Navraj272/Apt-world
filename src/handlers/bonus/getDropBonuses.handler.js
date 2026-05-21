
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { ApiHelper } from '@src/utils/api.utils'


export class GetDropBonusesHandler extends BaseHandler {

  async run() {

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { isActive } = this.args

    // Build the query filter
    const filter = {}
    if (typeof isActive !== 'undefined') {
      filter.isActive = isActive
    }
    const dropBonuses = await db.DropBonus.findAndCountAll({
      where: filter,
      attributes: ['id', 'coin', 'name', 'coinType', 'code', 'totalClaimsAllowed', 'totalClaims', 'expiryTime', 'isActive'],
      limit,
      offset: offset,
      order: [['createdAt', 'DESC']]
    })

    return {
      data: dropBonuses.rows,
      pageNo,
      totalPages: Math.ceil(dropBonuses.count / limit)
    }
  }
}
