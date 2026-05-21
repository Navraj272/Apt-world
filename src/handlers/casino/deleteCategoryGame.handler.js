import { Errors } from '@src/errors/errorCodes'
import { AppError } from '@src/errors/app.error'
import { Op } from 'sequelize'
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'


export class DeleteCategoryGameHandler extends BaseHandler {


  async run () {
    const { casinoGameId } = this.args
    const transaction = this.context.sequelizeTransaction

    const checkCategoryGameExists = await db.CasinoGame.findOne({
      where: { casinoGameId, parentId: { [Op.ne]: null } },
      transaction
    })
    if (!checkCategoryGameExists) throw new AppError(Errors.CATEGORY_GAME_NOT_FOUND)

    await checkCategoryGameExists.destroy({ transaction })

    return { success: true }
  }
}
