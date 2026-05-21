import config from '@src/configs/app.config'
import db from '@src/db/models'
import Logger from '@src/libs/logger'
import { BaseHandler } from '@src/libs/baseHandler'
import { calculateHash } from '@src/utils/common'
import { PRAGMATIC_PLAY } from '@src/utils/constants/casino.constants'
import axios from 'axios'
import qs from 'qs'

export class PragmaticLoadGamesHandler extends BaseHandler {
  async run () {
    const transaction = await db.sequelize.transaction()
    //
    //   let casinoAggregator = await db.CasinoAggregator.findOne({
    //     where: { name: PRAGMATIC_PLAY.GAME_AGGREGATOR },
    //     raw: true
    //   })
    //   if (!casinoAggregator) {
    //     casinoAggregator = await db.CasinoAggregator.create({
    //       name: PRAGMATIC_PLAY.GAME_AGGREGATOR,
    //       raw: true
    //     })
    //   }
    //   let casinoProvider = await db.CasinoProvider.findOne({
    //     where: { name: PRAGMATIC_PLAY.GAME_PROVIDER }
    //   })
    //   if (!casinoProvider) {
    //     casinoProvider = await db.CasinoProvider.create({
    //       name: PRAGMATIC_PLAY.GAME_PROVIDER,
    //       gameAggregatorId: casinoAggregator.id,
    //       raw: true
    //     })
    //   }
    //   // let casinoCategory = await db.CasinoCategory.findOne({
    //   //   where: { name: { EN: PRAGMATIC_PLAY.CATERGORY } }
    //   // })
    //   // if (!casinoCategory) {
    //   //   casinoCategory = await db.CasinoCategory.create({
    //   //     name: { EN: PRAGMATIC_PLAY.CATERGORY },
    //   //     casinoProviderId: casinoProvider.id,
    //   //     raw: true
    //   //   })
    //   // }
    //   const requestData = {
    //     secureLogin: config.get('pragmaticPlay.secureLogin'),
    //     options: 'GetFrbDetails'
    //   }

    //   const hash = calculateHash(requestData, config.get('pragmaticPlay.secretKey'))
    //   requestData.hash = hash

    //   const liveResponse = await axios({
    //     url: `${config.get('pragmaticPlay.baseUrl')}/CasinoGameAPI/getCasinoGames`,
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     data: qs.stringify(requestData)
    //   })
    //   const liveGameList = liveResponse.data.gameList

    //   for (const i in liveGameList) {
    //     const object = {}
    //     const game = liveGameList[i]
    //     let liveCasinoSubCategory = await db.CasinoCategory.findOne({
    //       where: { name: { EN: game.typeDescription } }
    //     })
    //     if (!liveCasinoSubCategory) {
    //       liveCasinoSubCategory = await db.CasinoCategory.create({
    //         name: { EN: game.typeDescription },
    //         // casinoCategoryId: casinoCategory.id
    //       })
    //     }
    //     object.name = game.gameName
    //     object.casinoGameId = game.gameID
    //     object.casinoSubCategoryId = liveCasinoSubCategory.id
    //     object.casinoProviderId = casinoProvider.id
    //     object.hasFreespins = game.frbAvailable || false
    //     object.thumbnailUrl = {
    //       S: `https://api.prerelease-env.biz/game_pic/rec/138/${game.gameID}.png`,
    //       M: `https://api.prerelease-env.biz/game_pic/rec/160/${game.gameID}.png`,
    //       L: `https://api.prerelease-env.biz/game_pic/rec/188/${game.gameID}.png`,
    //       XL: `https://api.prerelease-env.biz/game_pic/rec/325/${game.gameID}.png`
    //     }
    //     object.demo = game.demoGameAvailable
    //     object.restrictions = game.jurisdictions
    //     object.devices = game.platform
    //     object.moreDetails = {
    //       gameIdNumeric: game.gameIdNumeric,
    //       gameTypeID: game.gameTypeID,
    //       typeDescription: game.typeDescription,
    //       aspectRatio: game.aspectRatio
    //     }
    //     const gameExists = await db.CasinoGame.findOne({
    //       where: { casinoGameId: game.gameID }
    //     })
    //     if (!gameExists) {
    //       await db.CasinoGame.create(object)
    //       console.log(game.gameID, 'exists..')
    //     } else {
    //       delete object.casinoSubCategoryId
    //       delete object.thumbnailUrl
    //       await gameExists.set(object).save()
    //       console.log(game.gameID, 'created..')
    //     }
    //   }
    //   await transaction.commit()
    //   return { msg: 'Pragmatic Play Games loadded .' }
    // } catch (error) {
    //   console.log(error)
    //   Logger.error('Internal Server error', { error })
    //   await transaction.rollback()
    //   this.addError('InternalServerErrorType')
    // }

    const DEVICE_TYPES = {
      MOBILE: 'Mobile',
      DESKTOP: 'Desktop',
      ALL_DEVICES: 'All device'
    }

    const DEVICE_TYPE_MAP = {
      Mobile: [DEVICE_TYPES.MOBILE],
      Desktop: [DEVICE_TYPES.DESKTOP],
      'All device': [DEVICE_TYPES.DESKTOP, DEVICE_TYPES.MOBILE]
    }

    const CATEGORIES = {
      Live: 1,
      Slot: 2,
      Virtuals: 3,
      TvGames: 4,
      Poker: 5,
      SportBook: 6
    }

    const AGGREGATORS = {
      NUX: {
        id: '1',
        name: 'nux'
      }
    }

    const DEFAULT_CATEGORIES = [{
      id: 1,
      name: 'Live'
    }, {
      id: 2,
      name: 'Slot'
    }, {
      id: 3,
      name: 'Virtuals'
    }, {
      id: 4,
      name: 'TvGames'
    }, {
      id: 5,
      name: 'Poker'
    }, {
      id: 6,
      name: 'SportBook'
    }]

    const languages = await db.Language.findAll({ attributes: ['languageId', 'code'], raw: true, transaction })
    const aggregator = await createAggregator(AGGREGATORS.NUX.id, AGGREGATORS.NUX.name, languages, transaction)
    const providers = require('./casinoJsons/providers')
    const providerIdsMap = await createProviders(aggregator.id, providers, languages, transaction)

    const categoryIdsMap = await createCategories(DEFAULT_CATEGORIES, languages, transaction)
    const games = require('./casinoJsons/games')
    await createGames(categoryIdsMap, providerIdsMap, games, languages, transaction)
    await transaction.commit()
    return { success: true }
  }
}
