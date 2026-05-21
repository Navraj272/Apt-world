import { CreateDropBonusHandler } from "@src/handlers/bonus/createDropBonus.handler";
import { GetAllBonusHandler } from "@src/handlers/bonus/getAllBonus.handler";
import { GetDropBonusesHandler } from "@src/handlers/bonus/getDropBonuses.handler";
import { ToggleBonusHandler } from "@src/handlers/bonus/toggleBonus.handler";
import { updateBonusHandler } from "@src/handlers/bonus/updateBonus.handler";
import { UpdateDropBonusHandler } from "@src/handlers/bonus/updateDropBonus.handler";
import { extractFiles } from "@src/helpers/uploadFiles.helpers";
import { UpdateBoostHandler } from "@src/handlers/bonus/updateBoostBonus.handler";
import { ApiHelper } from "@src/utils/api.utils";

export class BonusController {
  static async createDropBonus(req, res, next) {
    try {
      const data = await CreateDropBonusHandler.execute(
        { ...req.body },
        req.context
      );
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async updateDropBonus(req, res, next) {
    try {
      const data = await UpdateDropBonusHandler.execute(
        { ...req.body },
        req.context
      );
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getDropBonus(req, res, next) {
    try {
      const data = await GetDropBonusesHandler.execute(req.query);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getAllBonus(req, res, next) {
    try {
      const data = await GetAllBonusHandler.execute(req.query);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async toggleBonus(req, res, next) {
    try {
      const data = await ToggleBonusHandler.execute(req.body);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async updateBonus(req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await updateBonusHandler.execute(
        { ...req.body, images },
        req.context
      );
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async updateBoostBonus(req, res, next) {
    try {
      const data = await UpdateBoostHandler.execute(
        { ...req.body },
        req.context
      );
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
