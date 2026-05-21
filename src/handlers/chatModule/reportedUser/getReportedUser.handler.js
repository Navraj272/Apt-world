import db from "@src/db/models"
import { BaseHandler } from "@src/libs/baseHandler"
import { isNil, omitBy } from "lodash"
import sequelize, { Op, Sequelize } from "sequelize"
import { ApiHelper } from '@src/utils/api.utils'


export default class GetReportedUserHandler extends BaseHandler {
  async run () {

    const { offset, limit,pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.startDate)
    const { search } = this.args
    let query = {}
    if (search) query = {
      ...query,
      [Op.or]: [{ description: { [Op.iLike]: `%${search}%` } }]
    }
    if (startDate || endDate) query = {
      ...query,
      [Op.and]: [
        Sequelize.where(Sequelize.fn('date', Sequelize.col(`ReportedUser.created_at`)), '>=', new Date(startDate)),
        Sequelize.where(Sequelize.fn('date', Sequelize.col(`ReportedUser.created_at`)), '<=', new Date(endDate))
      ]
    }

    const filterCondition = omitBy(query, isNil)

    const reportedUser = await db.ReportedUser.findAll({
      where: filterCondition,
      attributes: ['reportedUserId', [sequelize.fn('COUNT', sequelize.col('reported_user_id')), 'reportCount']],
      group: ['reported_user_id', 'reportedUsers.user_id'],
      include: [{ model: db.User, as: 'reportedUsers', attributes: ['userId', 'email', 'firstName', 'lastName'] }],
      limit: limit,
      offset: offset
    })

    return { data: reportedUser.row , pageNo, totalPages: Math.ceil(reportedUser.count / limit)}
  }
}
