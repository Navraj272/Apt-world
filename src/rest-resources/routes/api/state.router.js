import { contextMiddleware } from "@src/rest-resources/middlewares/context.middleware";
import { isAdminAuthenticated } from "@src/rest-resources/middlewares/isAdminAuthenticated";
import { applicationModule } from "@src/utils/constants/starfManagement.constants";
import { StatesController } from "@src/rest-resources/controllers/state.controller";
import express from "express";

const args = { mergeParams: true };
const statesRouter = express.Router(args);

statesRouter
  .route("/")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.appConfiguration.read),
    StatesController.getAllStates
  );
statesRouter
  .route("/toggle")
  .put(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.appConfiguration.read),
    StatesController.toggleState
  );

export { statesRouter };
