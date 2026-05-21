import { GetReferredUsersHandler } from '@src/handlers/affiliate/getReferredUsers.handler'
import { CreateBannerDownloadHandler } from '@src/handlers/banner/bannerDownload/addBannerDownload.handler'
import { GetBannerDownloadHandler } from '@src/handlers/banner/bannerDownload/getBannerDownload.handler'
import { ApiHelper } from '@src/utils/api.utils'
import { SyncAffnookCustomersHandler } from '@src/handlers/affiliate/affnook/syncCustomers.handler'
import { SyncPurchaseBonusHandler } from '@src/handlers/affiliate/affnook/syncPurchaseBonus.handler'
import { SyncMissingBonusToAffnookHandler } from '@src/handlers/affiliate/affnook/syncBonus.handler'
import { DetachNpuUsersHandler } from '@src/handlers/affiliate/detachNpuUsers.handler'

export class affiliateController {

  static async uploadAffiliateBanners(req, res, next) {
    try {
      const data = await CreateBannerDownloadHandler.execute({ ...req.body, zipFile: req.file }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getAffiliateBanner(req, res, next) {
    try {
      const data = await GetBannerDownloadHandler.execute({ ...req.query })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getReferredUsers(req, res, next) {
    try {
      const data = await GetReferredUsersHandler.execute({ ...req.query })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

   static async syncAffnookData(req, res, next) {
    try {
      const data = await SyncAffnookCustomersHandler.execute({ ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async syncPurchaseBonus(req, res, next) {
    try {
        const data = await SyncPurchaseBonusHandler.execute({ ...req.body, ...req.query }, req.context);
        ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
        next(error);
    }
  }

  static async syncBonus(req, res, next) {
    try {
        const data = await SyncMissingBonusToAffnookHandler.execute({ ...req.body, ...req.query }, req.context);
        ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
        next(error);
    }
  }

  static async detachNpuUsers(req, res, next) {
    try {
      const data = await DetachNpuUsersHandler.execute({ ...req.body }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
}
