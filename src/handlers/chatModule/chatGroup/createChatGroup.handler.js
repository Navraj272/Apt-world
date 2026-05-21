import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from "@src/libs/baseHandler";

export default class CreateChatGroupHandler extends BaseHandler {
  async run () {
    let { name, description, status, criteria, isGlobal } = this.args
    const transaction = this.context.sequelizeTransaction
    const group = await db.ChatGroup.findOne({ where: { name } })
    if (group) throw new AppError(Errors.GROUP_ALREADY_EXISTS)

    if (isGlobal) {
      const globalGroup = await db.ChatGroup.findOne({ where: { isGlobal: true } })
      if (globalGroup) throw new AppError(Errors.GLOBAL_GROUP_EXIST)
    }
    const groupData = await db.ChatGroup.create({
      name,
      description,
      status,
      groupLogo: null,
      admins: [],
      criteria: {},
      isGlobal
    }, { transaction })
    return { group: groupData }
  }
}
