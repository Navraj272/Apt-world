import { Errors } from '@src/errors/errorCodes'
import { AppError } from '@src/errors/app.error'
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { Op } from 'sequelize' // Correct import for Op
import { DEFAULT_GAME_CATEGORY } from '@src/utils/constants/casino.constants'


export class CreateCategoryGameHandler extends BaseHandler {
  async run() {
    const { categoryId, games } = this.args
    const transaction = this.context.sequelizeTransaction

    // Check if the category exists
    const categoryExists = await db.CasinoCategory.findOne({
      where: { id: categoryId },
      transaction
    })

    console.log(">>>>>>>>>>>>>>>>> Category Exists:", categoryExists);
    
    if (!categoryExists) {
      throw new AppError(Errors.GAME_CATEGORY_NOT_FOUND)
    }

    // Update all games with the new categoryId in a bulk operation
    await db.CasinoGame.update(
      { casinoCategoryId: categoryId },
      {
        where: { casinoGameId: { [Op.in]: games } },
        transaction
      }
    )
    

    const defaultCategory = await db.CasinoCategory.findOne({
      where: { id: DEFAULT_GAME_CATEGORY.id }
    })

    if (!defaultCategory) {
      throw new AppError(Errors.DEFAULT_GAME_CATEGORY_NOT_FOUND)
    }

    await db.CasinoGame.update(
      { casinoCategoryId: defaultCategory.id },
      {
        where: { casinoGameId: { [Op.notIn]: games }, casinoCategoryId: categoryId },
        transaction,
      }
    )

    return { success: true }
  }
}
