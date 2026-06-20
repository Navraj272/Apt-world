import SubcategoryController from '@src/rest-resources/controllers/subcategory.controller';
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware';
import express from 'express';

const subcategoryRouter = express.Router();

subcategoryRouter
  .route('/')
  .get(contextMiddleware(false), SubcategoryController.getAll)
  .post(contextMiddleware(true), SubcategoryController.create);

subcategoryRouter
  .route('/:id')
  .get(contextMiddleware(false), SubcategoryController.getOne)
  .put(contextMiddleware(true), SubcategoryController.update)
  .delete(contextMiddleware(true), SubcategoryController.delete);

export { subcategoryRouter };
