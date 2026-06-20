import { CreateSubcategoryHandler } from '@src/handlers/subcategories/createSubcategory.handler';
import { DeleteSubcategoryHandler } from '@src/handlers/subcategories/deleteSubcategory.handler';
import { GetSubcategoryHandler } from '@src/handlers/subcategories/getSubcategory.handler';
import { GetAllSubcategoriesHandler } from '@src/handlers/subcategories/getAllSubcategories.handler';
import { UpdateSubcategoryHandler } from '@src/handlers/subcategories/updateSubcategory.handler';
import { ApiHelper } from '@src/utils/api.utils';

export default class SubcategoryController {
  static async create(req, res, next) {
    try {
      const data = await CreateSubcategoryHandler.execute(req.body, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await GetAllSubcategoriesHandler.execute(req.query, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const data = await GetSubcategoryHandler.execute({ ...req.params, ...req.query }, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const data = await UpdateSubcategoryHandler.execute({ ...req.params, ...req.body }, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const data = await DeleteSubcategoryHandler.execute(req.params, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
