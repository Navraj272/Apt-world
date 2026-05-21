import { AffiliateCommissionService } from '@src/handlers/internal/affilateBonus.service'
import { CashbackCommissionService } from '@src/handlers/internal/cashback.service'
import { PopulateDummyDataHandler } from '@src/handlers/internal/populateDummyData.handler'
import { ApiHelper } from '@src/utils/api.utils'

export class InternalController {
  static async populateData(req, res, next) {
    try {
      const data = await PopulateDummyDataHandler.execute(req.query, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  static async affiliateCommission(req, res, next) {
    try {
      const data = await AffiliateCommissionService.execute(req.query, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }


  static async cashbackDistribution(req, res, next) {
    try {
      const data = await CashbackCommissionService.execute(req.query, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}
