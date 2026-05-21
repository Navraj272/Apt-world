import CreateChatGroupHandler from "@src/handlers/chatModule/chatGroup/createChatGroup.handler"
import GetAllChatGroupHandler from "@src/handlers/chatModule/chatGroup/getAllChatGroup.handler"
import GetChatGroupUsersHandler from "@src/handlers/chatModule/chatGroup/getChatGroupUsers.handler"
import UpdateChatGroupHandler from "@src/handlers/chatModule/chatGroup/updateChatGroup.handler"
import CreateChatRainHandler from "@src/handlers/chatModule/chatRain/createChatRain.handler"
import GetChatRainHandler from "@src/handlers/chatModule/chatRain/getChatRain.handler"
import UpdateChatRainHandler from "@src/handlers/chatModule/chatRain/updateChatRain.handler"
import CreateChatRuleHandler from "@src/handlers/chatModule/chatRule/createChatRule.handler"
import GetChatRuleHandler from "@src/handlers/chatModule/chatRule/getChatRule.handler"
import UpdateChatRuleHandler from "@src/handlers/chatModule/chatRule/updateChatRule.handler"
import GetGroupMessageHandler from "@src/handlers/chatModule/message/getGroupMessage.handler"
import GetUserMessageHandler from "@src/handlers/chatModule/message/getUserMessage.handler"
import CreateOffensiveWordHandler from "@src/handlers/chatModule/offensiveWord/createOffensiveWord.handler"
import DeleteOffensiveWordHandler from "@src/handlers/chatModule/offensiveWord/deleteOffensiveWord.handler"
import GetOffensiveWordsHandler from "@src/handlers/chatModule/offensiveWord/getOffensiveWords.handler"
import GetReportedUserHandler from "@src/handlers/chatModule/reportedUser/getReportedUser.handler"
import { ApiHelper } from "@src/utils/api.utils"

export class LiveChatController {

  static async createChatGroup (req, res, next) {
    try {
      const data = await CreateChatGroupHandler.execute({ ...req.body }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
  static async updateChatGroup (req, res, next) {
    try {
      const data = await UpdateChatGroupHandler.execute({ ...req.body }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)

    } catch (error) {
      next(error)
    }
  }

  static async getChatGroup (req, res, next) {
    try {
      const data = await GetAllChatGroupHandler.execute({ ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getChatGroupUsers (req, res, next) {
    try {
      const data = await GetChatGroupUsersHandler.execute({ ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getGroupMessage (req, res, next) {
    try {
      const data = await GetGroupMessageHandler.execute({ ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getUserMessage (req, res, next) {
    try {
      const data = await GetUserMessageHandler.execute({ ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)

    } catch (error) {
      next(error)
    }
  }

  static async getReportedUser (req, res, next) {
    try {
      const data = await GetReportedUserHandler.execute({ ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async createChatRain (req, res, next) {
    try {
      const data = await CreateChatRainHandler.execute({ ...req.body }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateChatRain (req, res, next) {
    try {
      const data = await UpdateChatRainHandler.execute({ ...req.body }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getChatRain (req, res, next) {
    try {
      const data = await GetChatRainHandler.execute({ ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async createChatRule (req, res, next) {
    try {
      const data = await CreateChatRuleHandler.execute({ ...req.body }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateChatRule (req, res, next) {
    try {
      const data = await UpdateChatRuleHandler.execute({ ...req.body }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getChatRule (req, res, next) {
    try {
      const data = await GetChatRuleHandler.execute({ ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getOffensiveWords (req, res, next) {
    try {
      const data = await GetOffensiveWordsHandler.execute({ ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async createOffensiveWord (req, res, next) {
    try {
      const data = await CreateOffensiveWordHandler.execute({ ...req.body }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async deleteOffensiveWord (req, res, next) {
    try {
      const data = await DeleteOffensiveWordHandler.execute({ ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

}
