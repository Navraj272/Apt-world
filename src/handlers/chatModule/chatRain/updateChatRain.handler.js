import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"

export default class UpdateChatRainHandler extends BaseHandler {
  async run () {
    const { name, description, prizeMoney, currency, chatGroupId, chatRainId } = this.args
    const transaction = this.context.sequelizeTransaction

    const chatGroupExist = await db.ChatGroup.findByPk(chatGroupId)
    if (!chatGroupExist) throw new AppError(Errors.CHAT_GROUP_NOT_FOUND)

    const chatRainExist = await db.ChatRain.findByPk(chatRainId)
    if (!chatRainExist) throw new AppError(Errors.CHAT_RAIN_NOT_FOUND)

    const newChatRain = await db.ChatRain.update(
      { name, description, prizeMoney, currencyId: currency, chatGroupId },
      { where: { id: chatRainId }, transaction })

    return { newChatRain }
  }
}
