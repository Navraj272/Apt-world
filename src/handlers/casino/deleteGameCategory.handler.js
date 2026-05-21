import { Errors } from '@src/errors/errorCodes'
import { AppError } from '@src/errors/app.error'
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'


export class DeleteGameCategoryHandler extends BaseHandler {
  async run () {
    const { gameCategoryId } = this.args
    const transaction = this.context.sequelizeTransaction

    const checkCategoryGameExists = await db.GameCategory.findOne({
      where: { gameCategoryId },
      transaction
    })

    if (!checkCategoryGameExists) throw new AppError(Errors.GAME_CATEGORY_NOT_FOUND)

    await checkCategoryGameExists.destroy({ transaction })

    return { success: true }
  }
}
