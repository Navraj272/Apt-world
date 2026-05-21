import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'

export class GetCasinoGamesCountHandler extends BaseHandler {


  async run () {
    let { isActive, casinoSubCategoryId, providerId } = this.args

    let count, query
    query = {}

    if (isActive || isActive == false) query = { ...query, isActive }
    if (providerId?.length) query = { ...query, casinoProviderId: providerId }
    if (casinoSubCategoryId?.length) { query = { ...query, casinoCategoryId: casinoSubCategoryId } }

    count = await db.CasinoGame.count({ where: query, group: ['casinoProviderId', 'casinoCategoryId'] })

    return { count }
  }

  catch (error) {
    this.addError('InternalServerErrorType', error)
  }
}
