import { CreateFranchiseLocationHandler } from '@src/handlers/franchiseLocations/createFranchiseLocation.handler';
import { DeleteFranchiseLocationHandler } from '@src/handlers/franchiseLocations/deleteFranchiseLocation.handler';
import { GetOneFranchiseLocationHandler } from '@src/handlers/franchiseLocations/getOneFranchiseLocation.handler';
import { GetAllFranchiseLocationsHandler } from '@src/handlers/franchiseLocations/getAllFranchiseLocations.handler';
import { GetFranchiseLocationCitiesHandler } from '@src/handlers/franchiseLocations/getFranchiseLocationCities.handler';
import { UpdateFranchiseLocationHandler } from '@src/handlers/franchiseLocations/updateFranchiseLocation.handler';
import { ApiHelper } from '@src/utils/api.utils';

export default class FranchiseLocationController {
  static async create(req, res, next) {
    try {
      const data = await CreateFranchiseLocationHandler.execute(req.body, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await GetAllFranchiseLocationsHandler.execute(req.query, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getCities(req, res, next) {
    try {
      const data = await GetFranchiseLocationCitiesHandler.execute(req.query, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const data = await GetOneFranchiseLocationHandler.execute(req.params, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const args = { ...req.params, ...req.body };
      const data = await UpdateFranchiseLocationHandler.execute(args, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const data = await DeleteFranchiseLocationHandler.execute(req.params, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
