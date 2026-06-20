import { CreateProductHandler } from '@src/handlers/products/createProduct.handler';
import { DeleteProductHandler } from '@src/handlers/products/deleteProduct.handler';
import { GetProductHandler } from '@src/handlers/products/getProduct.handler';
import { GetAllProductsHandler } from '@src/handlers/products/getAllProducts.handler';
import { UpdateProductHandler } from '@src/handlers/products/updateProduct.handler';
import { ApiHelper } from '@src/utils/api.utils';

export default class ProductController {
  static async create(req, res, next) {
    try {
      // Merge body and files into the handler args
      const args = { ...req.body, files: req.files };
      const data = await CreateProductHandler.execute(args, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await GetAllProductsHandler.execute(req.query, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const data = await GetProductHandler.execute(req.params, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const args = { ...req.params, ...req.body, files: req.files };
      const data = await UpdateProductHandler.execute(args, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const data = await DeleteProductHandler.execute(req.params, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
