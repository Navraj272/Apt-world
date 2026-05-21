import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";

export default class CreateOffensiveWordHandler extends BaseHandler {
  async run () {
    const transaction = this.context.sequelizeTransaction
    const { word } = this.args

    const checkWord = await db.OffensiveWord.findOne({
      where: { word }
    })

    if (checkWord) throw new AppError(Errors.OFFENSIVE_WORD_EXIST)
    const newWord = await db.OffensiveWord.create({ word }, { transaction })

    return { newWord }
  }
}
