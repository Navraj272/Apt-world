import db from "@src/db/models"
import { BaseHandler } from "@src/libs/baseHandler"
import { Op, Sequelize } from "sequelize"
import { ApiHelper } from '@src/utils/api.utils'


export default class GetAllChatGroupHandler extends BaseHandler {
  async run () {
    const { search, status } = this.args
    const { offset, limit,pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.startDate)
    let query = {}
    if (status && (status !== '' || status !== null)) query = { ...query, status }
    if (search) query = {
      ...query,
      [Op.or]: [{ name: { [Op.iLike]: `%${search}%` } }]
    }
    if (startDate || endDate) query = {
      ...query,
      [Op.and]: [
        Sequelize.where(Sequelize.fn('date', Sequelize.col(`ChatGroup.created_at`)), '>=', new Date(startDate)),
        Sequelize.where(Sequelize.fn('date', Sequelize.col(`ChatGroup.created_at`)), '<=', new Date(endDate))
      ]
    }
    const allGroups = await db.ChatGroup.findAndCountAll({
      where: query,
      attributes: { exclude: ['admins', 'updatedAt'] },
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    })

    return { groups: allGroups.rows, pageNo, totalPages: Math.ceil(allGroups.count / limit) }
  }
}
