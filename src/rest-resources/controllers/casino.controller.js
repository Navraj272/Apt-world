import { addFeaturedGameHandler } from '@src/handlers/casino/addFeaturedGame.handler'
import { CreateCategoryGameHandler } from '@src/handlers/casino/createCategoryGame.handler'
import { CreateGameCategoryHandler } from '@src/handlers/casino/createGameCategory.handler'
import { DeleteCategoryGameHandler } from '@src/handlers/casino/deleteCategoryGame.handler'
import { DeleteGameCategoryHandler } from '@src/handlers/casino/deleteGameCategory.handler'
import { GetAggregatorsHandler } from '@src/handlers/casino/getAggregator.handler'
import { GetAllProvidersHandler } from '@src/handlers/casino/getAllProviders.handler'
import { GetCasinoGamesHandler } from '@src/handlers/casino/getCasinoGames.handler'
import { GetAllGameCategoryHandler } from '@src/handlers/casino/getGameCategory.handler'
import { LoadCasinoGameHandler } from '@src/handlers/casino/loadCasinoGame.handler'
import { OrderCasinoGamesHandler } from '@src/handlers/casino/orderCasinoGames.handler'
import { OrderGameCategoryHandler } from '@src/handlers/casino/orderGameCategory.handler'
import { OrderGameProviderHandler } from '@src/handlers/casino/orderGameProvider.handler'
import { ToggleCasinoAggregator } from '@src/handlers/casino/toggleCasinoAggregator.handler'
import { ToggleCasinoGameHandler } from '@src/handlers/casino/toggleCasinoGames.handler'
import { ToggleCasinoCategoryHandler } from '@src/handlers/casino/toggleCategory.handler'
import { ToggleProviderHandler } from '@src/handlers/casino/toggleProvider.handler'
import { UpdateCasinoGameHandler } from '@src/handlers/casino/updateCasinoGame.handler'
import { UpdateCasinoProviderHandler } from '@src/handlers/casino/updateCasinoProvider.handler'
import { UpdateGameCategoryHandler } from '@src/handlers/casino/updateGameCategory.handler'
import { ApiHelper } from '@src/utils/api.utils'
import { extractFiles } from '@src/helpers/uploadFiles.helpers'
import { GrantFreeSpinsAleaCasinoHandler } from '@src/handlers/casino/freeSpin.handler'
import { GetAllFreeSpinsRecords } from '@src/handlers/casino/getAllFreeSpinsRecords.handler'
import { GetFreeSpinsCurrenciesHandler } from '@src/handlers/casino/spinLevel.handler'
import { GetAllFreeSpins } from '@src/handlers/casino/getAllFreeSpins.handler'
import { CancelFreeSpinsAleaCasinoHandler } from '@src/handlers/casino/cancelFreeSpin.handler'
import { GetCioSegmentsHandler } from '@src/handlers/casino/getCioSegments.handler'


export class CasinoController {
  static async getAllProviders (req, res, next) {
    try {
      const data = await GetAllProvidersHandler.execute(req.query)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateCasinoProvider (req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await UpdateCasinoProviderHandler.execute({ ...req.body, images }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }


  static async toggleCasinoGame (req, res, next) {
    try {
      const data = await ToggleCasinoGameHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async toggleCasinoProvider (req, res, next) {
    try {
      const data = await ToggleProviderHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
  static async toggleCasinoCategory (req, res, next) {
    try {
      const data = await ToggleCasinoCategoryHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async toggleCasinoAggregator (req, res, next) {
    try {
      const data = await ToggleCasinoAggregator.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getCasinoGame (req, res, next) {
    try {
      const data = await GetCasinoGamesHandler.execute({ ...req.body, ...req.query })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateCasinoGame (req, res, next) {
    try {

      const images = extractFiles(req.files);
      const data = await UpdateCasinoGameHandler.execute({ ...req.body, images }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getAggregators (req, res, next) {
    try {
      const data = await GetAggregatorsHandler.execute(req.query)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }


  static async loadCasinoGame (req, res, next) {
    try {
      const data = await LoadCasinoGameHandler.execute({ ...req.body, ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async createGameCategory (req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await CreateGameCategoryHandler.execute({ ...req.body, images }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateGameCategory (req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await UpdateGameCategoryHandler.execute({ ...req.body, images }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getGameCategory (req, res, next) {
    try {
      const data = await GetAllGameCategoryHandler.execute({ ...req.body, ...req.query })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async orderGameCategory (req, res, next) {
    try {
      const data = await OrderGameCategoryHandler.execute(req.body)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async orderCasinoGames (req, res, next) {
    try {
      const data = await OrderCasinoGamesHandler.execute(req.body)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }


  static async deleteGameCategory (req, res, next) {
    try {
      const data = await DeleteGameCategoryHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async createCategoryGame (req, res, next) {
    try {
      const data = await CreateCategoryGameHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async deleteCategoryGame (req, res, next) {
    try {
      const data = await DeleteCategoryGameHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async addFeaturedGames (req, res, next) {
    try {
      const data = await addFeaturedGameHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async orderGameProvider (req, res, next) {
    try {
      const data = await OrderGameProviderHandler.execute(req.body)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async grantFreeSpin(req, res, next) {
    try {
      const data = await GrantFreeSpinsAleaCasinoHandler.execute({...req.body,file:req.file},req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
  static async cancelFreeSpin(req, res, next) {
    try {
      const data = await CancelFreeSpinsAleaCasinoHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getFreeSpinBonus(req, res, next) {
    try {
      const data = await GetAllFreeSpins.execute({ ...req.body, ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getFreeSpinRecords(req, res, next) {
    try {
      const data = await GetAllFreeSpinsRecords.execute(req.query, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getLevelWiseFreeSpins(req, res, next) {
    try {
      const data = await GetFreeSpinsCurrenciesHandler.execute(req.query, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getCioSegments(req, res, next) {
    try {
      const data = await GetCioSegmentsHandler.execute(req.query, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
}
