import { Errors } from '@src/errors/errorCodes'
import { AppError } from '@src/errors/app.error'
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'



export class OrderCasinoGamesHandler extends BaseHandler {
  async run() {
    const gameIds = [...(new Set(this.args.order))]
    const categoryId = this.args.categoryId

    const gameCategory = await db.CasinoCategory.findOne({
      where: { id: categoryId },
      attributes: ['id'],
      include: [{ model: db.CasinoGame, as: 'CasinoGames', attributes: ['id', 'casinoGameId', 'orderId'] }]
    })

    if (!gameCategory) throw new AppError(Errors.GAME_SUB_CATEGORY_NOT_FOUND)
    await Promise.all(gameCategory.CasinoGames.map(async (game) => {
      if (gameIds.indexOf(game.id) !== -1) {
        return game.set({ orderId: gameIds.indexOf(game.id) + 1 }).save()
      }
    }))

    return { success: true }
  }
}
