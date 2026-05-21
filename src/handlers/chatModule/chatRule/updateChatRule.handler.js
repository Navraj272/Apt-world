import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";

export default class UpdateChatRuleHandler extends BaseHandler {
  async run () {
    const transaction = this.dbTransaction
    const { rule, chatRuleId } = this.args
    const chatRule = await db.ChatRule.findByPk(chatRuleId)

    if (!chatRule) throw new AppError(Errors.CHAT_RULE_NOT_FOUND)
    const updateChatRule = await db.ChatRule.update({ rules: rule }, { where: { id: chatRuleId }, transaction })

    return { updateChatRule }
  }
}
