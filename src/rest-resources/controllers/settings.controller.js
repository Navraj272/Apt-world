import { GetSiteInformationHandler } from "@src/handlers/adminUsers/getSiteInformation.handler"
import { UpdateSiteInformationHandler } from "@src/handlers/adminUsers/updateSiteInformation.handler"
import { GetAllGlobalSettingHandler } from "@src/handlers/settings/getAllGlobalSetting.handler"
import { GetWithdrawalLimitsHandler } from "@src/handlers/settings/getWithdrawalLimits.handler"
import { getAllStateHandler } from "@src/handlers/settings/state/getAllState.handler"
import { toggleStateHandler } from "@src/handlers/settings/state/toggleState.handler"
import { UpdateDepositLimitsHandler } from "@src/handlers/settings/updateDepositeLimits.handler"
import { UpdateFaucetHandler } from "@src/handlers/settings/updateFaucet.handler"
import { UpdateKillSwitchHandler } from "@src/handlers/settings/updateKillSwitch.handler"
import { UpdateSocialMediaLinkHandler } from "@src/handlers/settings/updateSocialMediaLink.handler"
import { UpdateWithdrawalLimitsHandler } from "@src/handlers/settings/updateWithdrawalLimits.handler"
import { UpdateDailyWithdrawalLimitsHandler } from "@src/handlers/settings/updateDailyWithdrawalLimits.handler"
import { extractFiles } from "@src/helpers/uploadFiles.helpers"
import { ApiHelper } from "@src/utils/api.utils"
import { UpdateMethodBasedWithdrawalLimitsHandler } from "@src/handlers/settings/updateMethodBasedWithdrawalLimits.handler"
import { UpdateW9WithdrawalThresholdHandler } from "@src/handlers/settings/updateW9WithdrawalThreshold.handler"

export class SettingsController {
  static async updateSiteInfo(req, res, next) {
    try {
      const images = extractFiles(req.files)
      const data = await UpdateSiteInformationHandler.execute(
        { ...req.body, images },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getSiteInfo(req, res, next) {
    try {
      const data = await GetSiteInformationHandler.execute(
        req.body,
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getWithdrawalLimits(req, res, next) {
    try {
      const data = await GetWithdrawalLimitsHandler.execute({ ...req.query })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateWithdrawalLimits(req, res, next) {
    try {
      const data = await UpdateWithdrawalLimitsHandler.execute(
        { ...req.query, ...req.body },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateMethodBasedWithdrawalLimits(req, res, next) {
    try {
      const data = await UpdateMethodBasedWithdrawalLimitsHandler.execute(
        {  ...req.body },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateDailyWithdrawalLimits(req, res, next) {
    try {
      const data = await UpdateDailyWithdrawalLimitsHandler.execute(
        { ...req.query, ...req.body },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateFaucet(req, res, next) {
    try {
      const data = await UpdateFaucetHandler.execute(
        { ...req.body },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateKillSwitch(req, res, next) {
    try {
      const data = await UpdateKillSwitchHandler.execute(
        { ...req.body },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateSocialMediaLink(req, res, next) {
    try {
      const data = await UpdateSocialMediaLinkHandler.execute(
        { ...req.body },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateDepositLimits(req, res, next) {
    try {
      const data = await UpdateDepositLimitsHandler.execute(
        { ...req.body },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getAllGlobalSetting(req, res, next) {
    try {
      const data = await GetAllGlobalSettingHandler.execute(
        { ...req.body },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateW9WithdrawalThreshold(req, res, next) {
    try {
      const data = await UpdateW9WithdrawalThresholdHandler.execute(
        { ...req.body },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
}

export class StatesController {
  static async getAllStates(req, res, next) {
    try {
      const data = await getAllStateHandler.execute(req.query)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
  static async toggleState(req, res, next) {
    try {
      const data = await toggleStateHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
}
