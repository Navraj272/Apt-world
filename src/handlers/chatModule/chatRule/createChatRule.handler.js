import db from "@src/db/models"
import { BaseHandler } from "@src/libs/baseHandler"

export default class CreateChatRuleHandler extends BaseHandler {
  async run () {
    const transaction = this.context.sequelizeTransaction
    const { rule } = this.args
    const newChatRule = await db.ChatRule.create({ rules: rule }, { transaction })
    return { newChatRule }
  }
}
