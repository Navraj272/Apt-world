import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'

export class GetAllIpAddressHandler extends BaseHandler {
  async run() {
    const { page = 1, limit = 10 } = this.args
    const offset = (page - 1) * limit

    const { count, rows: ipAddresses } = await db.WhitelistedIpAddress.findAndCountAll({
      include : [{
        model: db.AdminUser,
        as : 'admin',
        attributes: ['firstName', 'lastName']
      }],
      offset,
      limit,
      order: [['created_at', 'DESC']]
    })

    return {
      ipAddresses,
      pagination: {
        total: count,
        page,
        limit,
        totalPages: Math.ceil(count / limit)
      }
    }
  }
}
