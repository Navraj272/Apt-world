import { createDropBonusSchema } from "@src/json-schemas/bonus/createDropBonus.schema";
import { getAllBonusSchema } from "@src/json-schemas/bonus/getAllBonus.schema";
import { getDropBonusSchema } from "@src/json-schemas/bonus/getDropBonus.schema";
import { updateDropBonusSchema } from "@src/json-schemas/bonus/updateDropBonus.schema";
import { updateBonusSchema } from "@src/json-schemas/bonus/updateBonus.schema";
import { BonusController } from "@src/rest-resources/controllers/bonus.controller";
import { contextMiddleware } from "@src/rest-resources/middlewares/context.middleware";
import { isAdminAuthenticated } from "@src/rest-resources/middlewares/isAdminAuthenticated";
import { requestValidationMiddleware } from "@src/rest-resources/middlewares/requestValidation.middleware";
import { applicationModule } from "@src/utils/constants/starfManagement.constants";
import { uploadDesktopAndMobileImage } from "@src/rest-resources/middlewares/multer";
import { updateBoostBonusSchema } from "@src/json-schemas/bonus/updateBoostBonusSchema";

import express from "express";

const args = { mergeParams: true };
const bonusRouter = express.Router(args);



bonusRouter.route("/boost-bonus").put(
  contextMiddleware(true),
  requestValidationMiddleware(updateBoostBonusSchema),
  isAdminAuthenticated(),
  BonusController.updateBoostBonus
)

bonusRouter
  .route("/drop-bonus")
  .post(
    contextMiddleware(true),
    requestValidationMiddleware(createDropBonusSchema),
    isAdminAuthenticated(applicationModule.bonus.create),
    BonusController.createDropBonus
  )
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getDropBonusSchema),
    isAdminAuthenticated(applicationModule.bonus.read),
    BonusController.getDropBonus
  )
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(updateDropBonusSchema),
    isAdminAuthenticated(applicationModule.bonus.update),
    BonusController.updateDropBonus
  );

bonusRouter
  .route("/")
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getAllBonusSchema),
    isAdminAuthenticated(applicationModule.bonus.read),
    BonusController.getAllBonus
  );
bonusRouter
  .route("/toggle")
  .put(
    contextMiddleware(false),
    requestValidationMiddleware({}),
    isAdminAuthenticated(applicationModule.bonus.update),
    BonusController.toggleBonus
  );

bonusRouter.route("/update-bonus").post(
  contextMiddleware(true),
  uploadDesktopAndMobileImage,
  requestValidationMiddleware(updateBonusSchema),
  isAdminAuthenticated(),
  BonusController.updateBonus
)

export { bonusRouter };
