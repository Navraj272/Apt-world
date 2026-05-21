import { getAllStateHandler } from "@src/handlers/settings/state/getAllState.handler";
import { toggleStateHandler } from "@src/handlers/settings/state/toggleState.handler";
import { ApiHelper } from "@src/utils/api.utils";

export class StatesController {
  static async getAllStates(req, res, next) {
    try {
      const data = await getAllStateHandler.execute(req.query);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
  static async toggleState(req, res, next) {
    try {
      const data = await toggleStateHandler.execute(req.body, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
