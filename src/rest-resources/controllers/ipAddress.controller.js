import { CreateIpAddressHandler } from "@src/handlers/ipAddress/createIpAddress.handler";
import { DeleteIpAddressHandler } from "@src/handlers/ipAddress/deleteIpAddress.handler";
import { GetAllIpAddressHandler } from "@src/handlers/ipAddress/getAllIpAddress.handler";
import { ApiHelper } from "@src/utils/api.utils";

export class IpAddressController {
  static async getAllIpAddress(req, res, next) {
    try {
      const data = await GetAllIpAddressHandler.execute(req.query);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
  static async createIpAddress(req, res, next) {
    try {
      const data = await CreateIpAddressHandler.execute(req.body, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
  static async deleteIpAddress(req, res, next) {
    try {
      const data = await DeleteIpAddressHandler.execute(req.body, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
