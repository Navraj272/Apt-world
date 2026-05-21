import db from "@src/db/models"
import { BaseHandler } from "@src/libs/baseHandler"
import { Op, Sequelize } from "sequelize"
import { ApiHelper } from '@src/utils/api.utils'

export default class GetUserMessageHandler extends BaseHandler {
  async run () {

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.startDate)
    const { chatGroupId, userId, search } = this.args
    let query = { actioneeId: userId }
    if (chatGroupId) query = { ...query, chatGroupId }
    if (search) query = {
      ...query,
      [Op.or]: [{ message: { [Op.iLike]: `%${search}%` } }]
    }
    if (startDate || endDate) query = {
      ...query,
      [Op.and]: [
        Sequelize.where(Sequelize.fn('date', Sequelize.col(`Message.created_at`)), '>=', new Date(startDate)),
        Sequelize.where(Sequelize.fn('date', Sequelize.col(`Message.created_at`)), '<=', new Date(endDate))
      ]
    }

    const records = await db.Message.findAndCountAll({
      where: { ...query },
      attributes: ['id', 'message', 'actioneeId', ['message_binary', 'gif'], 'messageType', 'status', 'isContainOffensiveWord', 'createdAt'],
      order: [['createdAt', 'DESC']],
      limit,
      offset: offset
    })
    return { records: records.rows, pageNo, totalPages: Math.ceil(records.count / limit) }
  }

}
