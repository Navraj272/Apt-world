import db from "@src/db/models"
import { ApiHelper } from "@src/utils/api.utils"
import { BaseHandler } from "@src/libs/baseHandler"
import _ from "lodash"
import { Op, Sequelize } from "sequelize"

export default class GetChatRainHandler extends BaseHandler {
  async run () {

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { groupId, search } = this.args
    const { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.startDate)
    let query = {}
    if (search) query = {
      ...query,
      [Op.or]: [{ name: { [Op.iLike]: `%${search}%` } }]
    }
    if (groupId) query.chatGroupId = groupId
    if (startDate || endDate) query = {
      ...query,
      [Op.and]: [
        Sequelize.where(Sequelize.fn('date', Sequelize.col(`ChatRain.created_at`)), '>=', new Date(startDate)),
        Sequelize.where(Sequelize.fn('date', Sequelize.col(`ChatRain.created_at`)), '<=', new Date(endDate))
      ]
    }
    const filterCondition = _.omitBy(query, _.isNil)
    const chatRains = await db.ChatRain.findAndCountAll({
      where: filterCondition,
      order: [['id', 'desc']],
      limit,
      offset: offset,
    })
    return { chatRains: chatRains.rows, pageNo, totalPages: Math.ceil(chatRains.count / limit) }
  }
}
