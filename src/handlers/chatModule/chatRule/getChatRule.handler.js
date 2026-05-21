import db from "@src/db/models"
import { BaseHandler } from "@src/libs/baseHandler"
import { Op } from "sequelize"
import { ApiHelper } from '@src/utils/api.utils'

export default class GetChatRuleHandler extends BaseHandler {
  async run () {

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { search } = this.args

    const chatRules = await db.ChatRule.findAndCountAll({
      where: search ? {
        [Op.or]: [{ rules: { [Op.iLike]: `%${search}%` } }]
      } : {},
      limit,
      offset: offset
    })

    return { chatRules: chatRules.rows, pageNo, totalPages: Math.ceil(chatRules.count / limit) }
  }
}
