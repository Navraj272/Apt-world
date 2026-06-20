import CategoryController from '@src/rest-resources/controllers/category.controller';
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware';
import express from 'express';

const categoryRouter = express.Router();

categoryRouter
  .route('/')
  .get(contextMiddleware(false), CategoryController.getAll)
  .post(contextMiddleware(true), CategoryController.create);

categoryRouter
  .route('/:id')
  .get(contextMiddleware(false), CategoryController.getOne)
  .put(contextMiddleware(true), CategoryController.update)
  .delete(contextMiddleware(true), CategoryController.delete);

export { categoryRouter };
