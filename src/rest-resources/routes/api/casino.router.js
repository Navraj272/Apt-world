import { addFeaturedGamesSchema } from '@src/json-schemas/casino/addFeaturedGames.schema'
import { cancelFreeSpinSchema } from '@src/json-schemas/casino/cancelFreeSpin.schema'
import { createCategoryGameSchema } from '@src/json-schemas/casino/createCategoryGame.schema'
import { createGameCategorySchema } from '@src/json-schemas/casino/createGameCategory.schema'
import { deleteCategoryGameSchema } from '@src/json-schemas/casino/deleteCategoryGame.schema'
import { deleteGameCategorySchema } from '@src/json-schemas/casino/deleteGameCategory.schema'
import { createFreeSpinsSchema } from '@src/json-schemas/casino/freeSpinGrant.schema'
import { getAggregatorsSchema } from '@src/json-schemas/casino/getAggregators.schema'
import { GetAllGameCategorySchema } from '@src/json-schemas/casino/getAllGameCategory.schema'
import { getAllProvidersSchema } from '@src/json-schemas/casino/getAllProviders.schema'
import { getCasinoGamesSchema } from '@src/json-schemas/casino/getCasinoGames.schema'
import { orderCasinoGamesSchema } from '@src/json-schemas/casino/orderCasinoGames.schema'
import { orderGameCategorySchema } from '@src/json-schemas/casino/orderGameCategory.schema'
import { orderGameProviderSchema } from '@src/json-schemas/casino/orderGameProvider.schema'
import { updateGameCategorySchema } from '@src/json-schemas/casino/updateGameCategory.schema'
import { CasinoController } from '@src/rest-resources/controllers/casino.controller'
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware'
import { isAdminAuthenticated } from '@src/rest-resources/middlewares/isAdminAuthenticated'
import { uploadDesktopAndMobileImage, uploadSingle } from '@src/rest-resources/middlewares/multer'
import { requestValidationMiddleware } from '@src/rest-resources/middlewares/requestValidation.middleware'
import { uploadCsv } from '@src/rest-resources/middlewares/uploadCsv.middleware'
import { applicationModule } from '@src/utils/constants/starfManagement.constants'
import express from 'express'


const args = { mergeParams: true }
const casinoRouter = express.Router(args)

// GET
casinoRouter.route('/aggregators').get(contextMiddleware(false), requestValidationMiddleware(getAggregatorsSchema), CasinoController.getAggregators)
casinoRouter.route('/providers').get(contextMiddleware(false), requestValidationMiddleware(getAllProvidersSchema), CasinoController.getAllProviders)
casinoRouter.route('/categories').get(contextMiddleware(false), requestValidationMiddleware(GetAllGameCategorySchema), CasinoController.getGameCategory)
casinoRouter.route('/games').get(contextMiddleware(false), requestValidationMiddleware(getCasinoGamesSchema), CasinoController.getCasinoGame)

// PUT & POST
casinoRouter.route('/provider').put(contextMiddleware(true), uploadDesktopAndMobileImage, requestValidationMiddleware({}), CasinoController.updateCasinoProvider)
casinoRouter.route('/category').put(contextMiddleware(true), uploadDesktopAndMobileImage, requestValidationMiddleware(updateGameCategorySchema), CasinoController.updateGameCategory)
casinoRouter.route('/game').put(contextMiddleware(true), uploadDesktopAndMobileImage, requestValidationMiddleware({}), CasinoController.updateCasinoGame)
casinoRouter.route('/toggle/game').put(contextMiddleware(true), requestValidationMiddleware({}), CasinoController.toggleCasinoGame)
casinoRouter.route('/category').post(contextMiddleware(true), uploadDesktopAndMobileImage, requestValidationMiddleware(createGameCategorySchema), CasinoController.createGameCategory)
casinoRouter.route('/order-category').put(contextMiddleware(false), requestValidationMiddleware(orderGameCategorySchema), CasinoController.orderGameCategory)
casinoRouter.route('/order-provider').put(contextMiddleware(false), requestValidationMiddleware(orderGameProviderSchema), CasinoController.orderGameProvider)
casinoRouter.route('/order-casino-games').put(contextMiddleware(false), requestValidationMiddleware(orderCasinoGamesSchema), CasinoController.orderCasinoGames)
casinoRouter.route('/category-games').post(contextMiddleware(true), requestValidationMiddleware(createCategoryGameSchema), CasinoController.createCategoryGame)
casinoRouter.route('/featured-games').put(contextMiddleware(true), requestValidationMiddleware(addFeaturedGamesSchema), CasinoController.addFeaturedGames)
casinoRouter.route('/toggle/provider').put(contextMiddleware(true), requestValidationMiddleware({}), CasinoController.toggleCasinoProvider)
casinoRouter.route('/toggle/category').put(contextMiddleware(true), requestValidationMiddleware({}), CasinoController.toggleCasinoCategory)
casinoRouter.route('/toggle/aggregator').put(contextMiddleware(true), requestValidationMiddleware({}), CasinoController.toggleCasinoAggregator)



// DELETE
casinoRouter.route('/category').delete(contextMiddleware(true), requestValidationMiddleware(deleteGameCategorySchema), CasinoController.deleteGameCategory)
casinoRouter.route('/games').delete(contextMiddleware(true), requestValidationMiddleware(deleteCategoryGameSchema), CasinoController.deleteCategoryGame)

casinoRouter.route('/load-game').get(contextMiddleware(false), requestValidationMiddleware({}), CasinoController.loadCasinoGame)


casinoRouter.route('/free-spins').post(
  isAdminAuthenticated(applicationModule.bonus.create),
  contextMiddleware(true),
  uploadCsv.single("file"),                  
  requestValidationMiddleware(createFreeSpinsSchema),
  CasinoController.grantFreeSpin
)


casinoRouter.route('/cancel-free-spins').post(
    isAdminAuthenticated(applicationModule.bonus.update),
    contextMiddleware(true),
    requestValidationMiddleware(cancelFreeSpinSchema),
    CasinoController.cancelFreeSpin
)


casinoRouter.route('/free-spins').get(
    isAdminAuthenticated(applicationModule.bonus.read),
    contextMiddleware(false), requestValidationMiddleware({}), 
    CasinoController.getFreeSpinBonus
)

casinoRouter.route('/free-spins-records').get(
    isAdminAuthenticated(applicationModule.bonus.read),
    contextMiddleware(false),
    requestValidationMiddleware({}),
    CasinoController.getFreeSpinRecords
)   

 casinoRouter.route('/level-spin').get(
    contextMiddleware(false), 
    requestValidationMiddleware({}), 
    CasinoController.getLevelWiseFreeSpins
)

 casinoRouter.route('/cio-segments').get(
    contextMiddleware(false), 
    requestValidationMiddleware({}), 
    CasinoController.getCioSegments
)

export { casinoRouter }
