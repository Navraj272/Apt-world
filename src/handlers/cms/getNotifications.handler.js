import db from '@src/db/models'
import { ApiHelper } from '@src/utils/api.utils'
import { BaseHandler } from '@src/libs/baseHandler'


export class GetNotificationsHandler extends BaseHandler {

  async run () {

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { search } = this.args
    let query = {}
    if (search) {
      query[`title`] = search
    }

    const notifications = await db.Notification.findAndCountAll({
      where: { ...query },
      limit: limit,
      offset: offset,
      order: [['createdAt', 'DESC']]
    })

    return { notifications, pageNo, totalPages: Math.ceil(notifications.count / limit) }
  }
}
