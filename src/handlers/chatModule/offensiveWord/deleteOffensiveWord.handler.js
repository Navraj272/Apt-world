import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";

export default class DeleteOffensiveWordHandler extends BaseHandler {
  async run () {
    const transaction = this.context.sequelizeTransaction
    const { id } = this.args
    const checkWord = await db.OffensiveWord.findByPk(id)
    if (!checkWord) throw new AppError(Errors.OFFENSIVE_WORD_NOT_FOUND)
    await db.OffensiveWord.destroy({ where: { id } }, { transaction })
    return { success: true }
  }
}
