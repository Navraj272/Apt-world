

import { CreateVipTierHandler } from '@src/handlers/userEngagement/vipTier/createVipTier.handler'
import { GetVipTierDetailsHandler } from '@src/handlers/userEngagement/vipTier/getVipTierDetails.handler'
import { GetVipTiersHandler } from '@src/handlers/userEngagement/vipTier/getVipTiers.handler'
import { UpdateUserLevelHandler } from '@src/handlers/userEngagement/vipTier/updateLevel.handler'
import { UpdateVipTierHandler } from '@src/handlers/userEngagement/vipTier/updateVipTier.handler'
import { GetSpinWheelListHandler } from '@src/handlers/userEngagement/wheelDivisionConfig/getSpinWheelList.handler'
import { UpdateAllSpinWheelHandler } from '@src/handlers/userEngagement/wheelDivisionConfig/updateAllSpinWheel.handler'
import { UpdateSpinWheelHandler } from '@src/handlers/userEngagement/wheelDivisionConfig/updateSpinWheel.handler'
import { extractFiles } from '@src/helpers/uploadFiles.helpers'
import { ApiHelper } from '@src/utils/api.utils'

export class VipTierController {

  static async createVipTier(req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await CreateVipTierHandler.execute({ ...req.body, images }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getVipTierDetails(req, res, next) {
    try {
      const data = await GetVipTierDetailsHandler.execute(req.query)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }


  static async getVipTiers(req, res, next) {
    try {
      const data = await GetVipTiersHandler.execute(req.query)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateVipTier(req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await UpdateVipTierHandler.execute({ ...req.body, images }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateUserVipTier(req, res, next) {
    try {
      const data = await UpdateUserLevelHandler.execute({ ...req.query, ...req.body }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
}

export class SpinWheelController {
  static async getSpinWheelList(req, res, next) {
    try {
      const data = await GetSpinWheelListHandler.execute(req.query, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
   static async updateAllSpinWheel(req, res, next) {
    try {
      const data = await UpdateAllSpinWheelHandler.execute({ ...req.body, ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }


  static async updateSpinWheel(req, res, next) {
    try {
      const data = await UpdateSpinWheelHandler.execute({ ...req.body, ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

}
