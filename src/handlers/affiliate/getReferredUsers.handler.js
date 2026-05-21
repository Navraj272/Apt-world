import db from '@src/db/models'
import { ApiHelper } from '@src/utils/api.utils'
import { BaseHandler } from '@src/libs/baseHandler'

export class GetReferredUsersHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {

    const { offset, limit,pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { userId } = this.args

    const referredUsers = await db.User.findAndCountAll({
      where: { refParentId: userId },
      attributes: { exclude: ['password'] },
      include: [
        {
          model: db.UserAffiliations,
          as: 'affiliation',
          attributes: ['earnedCommission','wageredAmount'],
          where: { affiliateUserId: userId }
        }
      ],
      limit: limit,
      offset: offset,
      order: [['createdAt', 'DESC']]
    })

    const totalCommission = await db.UserAffiliations.sum('earnedCommission', {
      where: { affiliateUserId: userId }
    })


    return {
      referredUsers: referredUsers.rows,
      pageNo,
      totalPages: Math.ceil(referredUsers.count / limit)
    }
  }
}
