import { createPromotionsSchema } from "@src/json-schemas/banners/createPromotions.schema";
import { deleteBannerSchema } from "@src/json-schemas/banners/deleteBanner.schema";
import { deletePromotionsSchema } from "@src/json-schemas/banners/deletePromotions.schema";
import { getBannerSchema } from "@src/json-schemas/banners/getBanner.schema";
import { getPromotionSchema } from "@src/json-schemas/banners/getPromotions.schema";
import { updateBannerSchema } from "@src/json-schemas/banners/updateBanner.schema";
import { updatePromotionsSchema } from "@src/json-schemas/banners/updatePromotions.schema";
import { createCmsPageSchema } from "@src/json-schemas/cms/createCmsPage.schema";
import { deleteCmsPageLanguageSchema } from "@src/json-schemas/cms/deleteCmsPageLanguage.schema";
import { getAllCmsPageSchema } from "@src/json-schemas/cms/getAllCmsPage.schema";
import { getCmsPageSchema } from "@src/json-schemas/cms/getCmsPage.schema";
import { toggleCmsIsActiveSchema } from "@src/json-schemas/cms/toggleCmsIsActive.schema";
import { updateCmsPageSchema } from "@src/json-schemas/cms/updateCmsPage.schema";
import { createNotificationSchema } from "@src/json-schemas/notification/createNotification.schema";
import { getNotificationSchema } from "@src/json-schemas/notification/getNotification.schema";
import { affiliateController } from "@src/rest-resources/controllers/affiliate.controller";
import {
  BannerController,
  CmsController,
  NotificationController,
  PromotionController,
} from "@src/rest-resources/controllers/cms.controller";
import { isAdminAuthenticated } from "@src/rest-resources/middlewares/isAdminAuthenticated";
import { contextMiddleware } from "@src/rest-resources/middlewares/context.middleware";
import {
  uploadSingle,
  uploadDesktopAndMobileImage,
} from "@src/rest-resources/middlewares/multer";
import { requestValidationMiddleware } from "@src/rest-resources/middlewares/requestValidation.middleware";
import { responseValidationMiddleware } from "@src/rest-resources/middlewares/responseValidation.middleware";
import { applicationModule } from "@src/utils/constants/starfManagement.constants";

import express from "express";

const args = { mergeParams: true };
const cmsRouter = express.Router(args);

// Pages Routes
cmsRouter
  .route("/page")
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getAllCmsPageSchema),
    isAdminAuthenticated(applicationModule.contentManagement.read),
    CmsController.getAllCmsPage
  )
  .post(
    contextMiddleware(true),
    requestValidationMiddleware(createCmsPageSchema),
    isAdminAuthenticated(applicationModule.contentManagement.create),
    CmsController.createCmsPage
  )
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(updateCmsPageSchema),
    isAdminAuthenticated(applicationModule.contentManagement.update),
    CmsController.updateCmsPage
  )
  .delete(
    contextMiddleware(true),
    requestValidationMiddleware(deleteCmsPageLanguageSchema),
    isAdminAuthenticated(applicationModule.contentManagement.delete),
    CmsController.deleteCmsPageLanguage
  );

cmsRouter
  .route("/page/details")
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getCmsPageSchema),
    isAdminAuthenticated(applicationModule.contentManagement.read),
    CmsController.getCmsPage
  );

cmsRouter
  .route("/language")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.contentManagement.read),
    CmsController.getLanguages
  );

cmsRouter
  .route("/page/toggle")
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(toggleCmsIsActiveSchema),
    isAdminAuthenticated(applicationModule.contentManagement.toggle),
    CmsController.toggleCms
  );

// Affiliate Routes
cmsRouter.post(
  "/affiliate/upload-banners",
  isAdminAuthenticated(applicationModule.affiliateModule.create),
  uploadSingle("zipFile"),
  contextMiddleware(true),
  affiliateController.uploadAffiliateBanners
);

cmsRouter.get(
  "/affiliate/banners-download",
  isAdminAuthenticated(applicationModule.affiliateModule.read),
  contextMiddleware(false),
  affiliateController.getAffiliateBanner
);

cmsRouter.post(
  "/banners/order",
  isAdminAuthenticated(applicationModule.affiliateModule.read),
  contextMiddleware(false),
  BannerController.orderBanner
);
// Banner Routes
cmsRouter
  .route("/banner")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.contentManagement.read),
    requestValidationMiddleware(getBannerSchema),
    BannerController.getBanner
  )
  .post(
    contextMiddleware(true),
    isAdminAuthenticated(applicationModule.contentManagement.create),
    uploadDesktopAndMobileImage,
    BannerController.createBanner
  )
  .put(
    contextMiddleware(true),
    isAdminAuthenticated(applicationModule.contentManagement.update),
    uploadDesktopAndMobileImage,
    requestValidationMiddleware(updateBannerSchema),
    BannerController.updateBanner
  )
  .delete(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.contentManagement.delete),
    requestValidationMiddleware(deleteBannerSchema),
    BannerController.deleteBanner
  );

  cmsRouter.post(
    "/promotions/order",
    isAdminAuthenticated(applicationModule.affiliateModule.read),
    contextMiddleware(false),
    PromotionController.orderPromotions
  );

// Promotions Routes
cmsRouter
  .route("/promotions")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.contentManagement.read),
    requestValidationMiddleware(getPromotionSchema),
    PromotionController.getPromotions
  )
  .post(
    contextMiddleware(true),
    isAdminAuthenticated(applicationModule.contentManagement.create),
    uploadDesktopAndMobileImage,
    requestValidationMiddleware(createPromotionsSchema),
    PromotionController.createPromotions,
    responseValidationMiddleware(createPromotionsSchema)
  )
  .put(
    contextMiddleware(true),
    isAdminAuthenticated(applicationModule.contentManagement.update),
    uploadDesktopAndMobileImage,
    requestValidationMiddleware(updatePromotionsSchema),
    PromotionController.updatePromotions,
    responseValidationMiddleware(updatePromotionsSchema)
  )
  .delete(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.contentManagement.delete),
    requestValidationMiddleware(deletePromotionsSchema),
    PromotionController.deletePromotions
  );

// Notification Router
cmsRouter
  .route("/notification")
  .post(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.contentManagement.create),
    requestValidationMiddleware(createNotificationSchema),
    NotificationController.createNotification,
    responseValidationMiddleware(createNotificationSchema)
  )
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.contentManagement.read),
    requestValidationMiddleware(getNotificationSchema),
    NotificationController.getNotification
  );

export { cmsRouter };
