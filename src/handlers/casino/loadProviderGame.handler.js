import axios from 'axios'
import { Op } from 'sequelize'
import db from '@src/db/models'
import config from '@src/configs/app.config'
import { BaseHandler } from '@src/libs/baseHandler'

import { GAME_CATEGORY, subCategoryImg } from '@src/utils/constant'

export class LoadProviderGameHandler extends BaseHandler {
  async run () {
    const { gameProvider, tenantId } = this.args

    const gameData = await axios.get(`${config.get('swissSoft.providerGames')}/${gameProvider}.yaml`)

    if (typeof (gameData) === 'object') {
      const yaml = require('js-yaml')
      const games = yaml.load(gameData?.data)

      const gameCategory = await db.TenantGameCategory.findOne({
        where: { name: { [Op.contains]: { EN: GAME_CATEGORY.CASINO_GAME } } },
        attributes: ['tenantGameCategoryId']
      })
      let categoryId = gameCategory?.tenantGameCategoryId

      if (!gameCategory) {
        const masterCategory = await db.MasterGameCategory.findOne({
          where: { name: { [Op.contains]: { EN: GAME_CATEGORY.CASINO_GAME } } },
          attributes: ['masterGameCategoryId']
        })

        const createCategory = await db.TenantGameCategory.create(
          {
            name: { EN: GAME_CATEGORY.CASINO_GAME },
            masterGameCategoryId: masterCategory?.masterGameCategoryId,
            tenantId,
            orderId: 1
          }
        );

        for (const game of games) {
          const masterGame = await db.MasterCasinoGame.findOne({
            where: { identifier: game.identifier },
            attributes: ['masterCasinoGameId']
          })
          if (!masterGame) { continue }

          const subCategory = await db.MasterGameSubCategory.findOne({
            where: { name: { [Op.contains]: { EN: game.category } } },
            attributes: ['masterGameSubCategoryId']
          })

          const checkSubCategoryExists = await db.TenantGameSubCategory.findOne({
            where: { name: { [Op.contains]: { EN: game.category } } },
            attributes: ['tenantGameSubCategoryId']
          })
          let subCategoryId = checkSubCategoryExists?.tenantGameSubCategoryId

          if (!checkSubCategoryExists) {
            let lastOrderId = await db.TenantGameSubCategory.max('orderId',
              { where: { tenantGameCategoryId: categoryId } })
            if (!lastOrderId) lastOrderId = 0

            const createSubCategory = await db.TenantGameSubCategory.create({
              orderId: lastOrderId + 1,
              name: { EN: game.category },
              tenantGameCategoryId: gameCategory?.tenantGameCategoryId,
              masterGameSubCategoryId: subCategory?.masterGameSubCategoryId,
              imageUrl: subCategoryImg[game.category] || subCategoryImg.default
            });

            subCategoryId = createSubCategory?.tenantGameSubCategoryId
          }

          const checkGameExists = await db.CategoryGame.findOne({
            where: { masterCasinoGameId: masterGame?.masterCasinoGameId, tenantId },
            attributes: ['categoryGameId']
          })
          if (checkGameExists) { continue }

          const providerDetail = await db.MasterCasinoProvider.findOne({
            where: { name: game.producer },
            attributes: ['masterCasinoProviderId']
          })

          let newGame = {
            masterCasinoGameId: masterGame?.masterCasinoGameId,
            tenantGameSubCategoryId: subCategoryId,
            masterCasinoProviderId: providerDetail?.masterCasinoProviderId,
            wageringContribution: 100,
            name: game.title,
            thumbnailUrl: `${config.get('swissSoft.baseUrl')}${game.provider}/${game.identifier.split(':').slice(-1)[0]}.png`,
            description: game.description,
            tenantId
          }

          if (game.payout) { newGame = { ...newGame, returnToPlayer: game.payout } }

          await db.CategoryGame.create(newGame);
        }

        return { games }
      }

      return true
    }
  }
}
