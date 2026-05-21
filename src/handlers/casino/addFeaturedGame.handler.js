import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'


export class addFeaturedGameHandler extends BaseHandler {

  async run() {
    const { casinoGameId } = this.args
    const transaction = this.context.sequelizeTransaction
    const casinoGame = await db.CasinoGame.findOne({
      where: { casinoGameId: casinoGameId },
      transaction
    })
    casinoGame.isFeatured = !casinoGame.isFeatured
    await casinoGame.save({transaction})
    return { success: true }
  }
}
