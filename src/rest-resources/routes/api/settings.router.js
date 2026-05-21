import {
  SettingsController,
  StatesController,
} from "@src/rest-resources/controllers/settings.controller";
import { contextMiddleware } from "@src/rest-resources/middlewares/context.middleware";
import { isAdminAuthenticated } from "@src/rest-resources/middlewares/isAdminAuthenticated";
import { uploadDesktopAndMobileImage } from "@src/rest-resources/middlewares/multer";
import { requestValidationMiddleware } from "@src/rest-resources/middlewares/requestValidation.middleware";
import { applicationModule } from "@src/utils/constants/starfManagement.constants";
import express from "express";

// JSON Schemas
import { UpdatedDepositLimitsSchema } from "@src/json-schemas/settings/updateDepositLimits.schema";
import { UpdatedFaucetSchema } from "@src/json-schemas/settings/updateFaucet.schema";
import { UpdatedKillSwitchSchema } from "@src/json-schemas/settings/updateKillSwitch.schema";
import { UpdatedSiteInfoSchema } from "@src/json-schemas/settings/updateSiteInfo.schema";
import { UpdatedSocialMediaLinksSchema } from "@src/json-schemas/settings/updateSocialMediaLinks.schema";
import { UpdatedWithdrawalLimitsSchema } from "@src/json-schemas/settings/updateWithdrawalLimits.schema";
import {UpdatedDailyWithdrawalLimitsSchema} from '@src/json-schemas/settings/updateDailyWithdrawalLimits.schema'
import { methodBasedWithdrawalLimitsAndFeeSchema } from "@src/json-schemas/settings/updateMethodBasedWithdrawalLimits.schema";
import { UpdateW9WithdrawalThresholdSchema } from "@src/json-schemas/settings/updateW9WithdrawalThreshold.schema";

const args = { mergeParams: true };
const settingsRouter = express.Router(args);

/**
 * @route GET /settings/global
 */
settingsRouter.get(
  "/",
  contextMiddleware(false),
  isAdminAuthenticated(applicationModule.appConfiguration.read),
  SettingsController.getAllGlobalSetting
);

/**
 * @route GET /settings/withdrawal-limits
 * @route POST /settings/withdrawal-limits
 */
settingsRouter
  .route("/withdrawal-limits")
  .post(
    contextMiddleware(true),
    requestValidationMiddleware(UpdatedWithdrawalLimitsSchema),
    isAdminAuthenticated(applicationModule.appConfiguration.create),
    SettingsController.updateWithdrawalLimits
  );

settingsRouter
  .route("/method-based-limits")
  .post(
    contextMiddleware(true),
    requestValidationMiddleware(methodBasedWithdrawalLimitsAndFeeSchema),
    isAdminAuthenticated(applicationModule.appConfiguration.create),
    SettingsController.updateMethodBasedWithdrawalLimits
  );

  settingsRouter
  .route("/global-daily-withdrawal-limits")
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(UpdatedDailyWithdrawalLimitsSchema),
    isAdminAuthenticated(applicationModule.appConfiguration.create),
    SettingsController.updateDailyWithdrawalLimits
  );

/**
 * @route GET /settings/site-info
 * @route POST /settings/site-info
 */
settingsRouter
  .route("/site-info")
  .post(
    contextMiddleware(true),
    uploadDesktopAndMobileImage,
    requestValidationMiddleware(UpdatedSiteInfoSchema),
    isAdminAuthenticated(applicationModule.appConfiguration.create),
    SettingsController.updateSiteInfo
  );

/**
 * @route POST /settings/faucet
 */
settingsRouter.post(
  "/faucet",
  contextMiddleware(true),
  requestValidationMiddleware(UpdatedFaucetSchema),
  isAdminAuthenticated(applicationModule.appConfiguration.create),
  SettingsController.updateFaucet
);

/**
 * @route POST /settings/deposit-limits
 */
settingsRouter.post(
  "/deposit-limits",
  contextMiddleware(true),
  requestValidationMiddleware(UpdatedDepositLimitsSchema),
  isAdminAuthenticated(applicationModule.appConfiguration.create),
  SettingsController.updateDepositLimits
);

/**
 * @route POST /settings/kill-switch
 */
settingsRouter.post(
  "/kill-switch",
  contextMiddleware(true),
  requestValidationMiddleware(UpdatedKillSwitchSchema),
  isAdminAuthenticated(applicationModule.appConfiguration.create),
  SettingsController.updateKillSwitch
);

/**
 * @route POST /settings/social-media-links
 */
settingsRouter.post(
  "/social-media-links",
  contextMiddleware(true),
  requestValidationMiddleware(UpdatedSocialMediaLinksSchema),
  isAdminAuthenticated(applicationModule.appConfiguration.create),
  SettingsController.updateSocialMediaLink
);

settingsRouter
  .route("/w9-withdrawal-threshold")
  .post(
    contextMiddleware(true),
    requestValidationMiddleware(UpdateW9WithdrawalThresholdSchema),
    isAdminAuthenticated(applicationModule.appConfiguration.create),
    SettingsController.updateW9WithdrawalThreshold
  );

settingsRouter
  .route("/states")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.appConfiguration.read),
    StatesController.getAllStates
  );
settingsRouter
  .route("/state/toggle")
  .put(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.appConfiguration.update),
    StatesController.toggleState
  );



export { settingsRouter };
