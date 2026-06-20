import { CreateCategoryHandler } from '@src/handlers/categories/createCategory.handler';
import { DeleteCategoryHandler } from '@src/handlers/categories/deleteCategory.handler';
import { GetCategoryHandler } from '@src/handlers/categories/getCategory.handler';
import { GetAllCategoriesHandler } from '@src/handlers/categories/getAllCategories.handler';
import { UpdateCategoryHandler } from '@src/handlers/categories/updateCategory.handler';
import { ApiHelper } from '@src/utils/api.utils';

export default class CategoryController {
  static async create(req, res, next) {
    try {
      const data = await CreateCategoryHandler.execute(req.body, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await GetAllCategoriesHandler.execute(req.query, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const data = await GetCategoryHandler.execute({ ...req.params, ...req.query }, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const data = await UpdateCategoryHandler.execute({ ...req.params, ...req.body }, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const data = await DeleteCategoryHandler.execute(req.params, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
