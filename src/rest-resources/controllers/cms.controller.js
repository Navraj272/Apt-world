import { CreateBannerHandler } from "@src/handlers/banner/createBanner.handler"
import { CreatePromotionsHandler } from "@src/handlers/banner/createPromotions.handler"
import { DeleteBannerHandler } from "@src/handlers/banner/deleteBanner.handler"
import { DeletePromotionsHandler } from "@src/handlers/banner/deletePromotions.handler"
import { GetBannerHandler } from "@src/handlers/banner/getBannerListing.handler"
import { GetPromotionsHandler } from "@src/handlers/banner/getPromotions.handler"
import { OrderBannersHandler } from "@src/handlers/banner/orderBanners.handler"
import { UpdateBannerPageHandler } from "@src/handlers/banner/updateBanner.handler"
import { UpdatePromotionsHandler } from "@src/handlers/banner/updatePromotions.handler"
import { CreateCmsPageHandler } from "@src/handlers/cms/createCms.handler"
import { CreateNotificationHandler } from "@src/handlers/cms/createNotifications.handler"
import { DeleteCmsLanguageHandler } from "@src/handlers/cms/deleteCmsLanguage.handler"
import { GetAllCmsPageHandler } from "@src/handlers/cms/getAllCms.handler"
import { GetCmsPageHandler } from "@src/handlers/cms/getCmsPage.handler"
import { GetLanguagesHandler } from "@src/handlers/cms/getLanguage.handler"
import { GetNotificationsHandler } from "@src/handlers/cms/getNotifications.handler"
import { toggleCmsIsActiveHandler } from "@src/handlers/cms/toggleCmsIsActive.handler"
import { UpdateCmsPageHandler } from "@src/handlers/cms/updateCms.handler"
import { extractFiles } from "@src/helpers/uploadFiles.helpers"
import { ApiHelper } from "@src/utils/api.utils"
import {OrderPromotionsHandler} from "src/handlers/banner/orderPromotions.handler"

export class CmsController {
  static async createCmsPage(req, res, next) {
    try {
      const data = await CreateCmsPageHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async updateCmsPage(req, res, next) {
    try {
      const data = await UpdateCmsPageHandler.execute({...req.body,...req.query}, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getAllCmsPage(req, res, next) {
    try {
      const data = await GetAllCmsPageHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getCmsPage(req, res, next) {
    try {
      const data = await GetCmsPageHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCmsPageLanguage(req, res, next) {
    try {
      const data = await DeleteCmsLanguageHandler.execute(
        req.body,
        req.context
      );
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getLanguages(req, res, next) {
    try {
      const data = await GetLanguagesHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async toggleCms(req, res, next) {
    try {
      const data = await toggleCmsIsActiveHandler.execute(
        { ...req.body },
        req.context
      );
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}

export class PromotionController {
  static async createPromotions(req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await CreatePromotionsHandler.execute(
        { ...req.body, images },
        req.context
      );
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getPromotions(req, res, next) {
    try {
      const data = await GetPromotionsHandler.execute({ ...req.query });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async deletePromotions(req, res, next) {
    try {
      const data = await DeletePromotionsHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async updatePromotions(req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await UpdatePromotionsHandler.execute({ ...req.body, images }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error);
    }
  }

  static async orderPromotions(req, res, next) {
    try {
      const data = await OrderPromotionsHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }


}

export class BannerController {
  static async createBanner(req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await CreateBannerHandler.execute(
        { ...req.body, images },
        req.context
      );
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getBanner(req, res, next) {
    try {
      const data = await GetBannerHandler.execute({
        ...req.body,
        ...req.query,
      })
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async deleteBanner(req, res, next) {
    try {
      const data = await DeleteBannerHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async updateBanner(req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await UpdateBannerPageHandler.execute(
        { ...req.body, images },
        req.context
      );
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async orderBanner(req, res, next) {
    try {
      const data = await OrderBannersHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}

export class NotificationController {
  static async createNotification(req, res, next) {
    try {
      const data = await CreateNotificationHandler.execute(
        { ...req.body, image: req.file },
        req.context
      );
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getNotification(req, res, next) {
    try {
      const data = await GetNotificationsHandler.execute({ ...req.query });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
