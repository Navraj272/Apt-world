import ProductController from '@src/rest-resources/controllers/product.controller';
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware';
import { uploadProductImages } from '@src/rest-resources/middlewares/multer';
import express from 'express';

const productRouter = express.Router();

productRouter
  .route('/')
  .get(contextMiddleware(false), ProductController.getAll)
  .post(contextMiddleware(true), uploadProductImages, ProductController.create);

productRouter
  .route('/:id')
  .get(contextMiddleware(false), ProductController.getOne)
  .put(contextMiddleware(true), uploadProductImages, ProductController.update)
  .delete(contextMiddleware(true), ProductController.delete);

export { productRouter };
