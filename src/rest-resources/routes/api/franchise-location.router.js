import FranchiseLocationController from '@src/rest-resources/controllers/franchiseLocation.controller';
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware';
import express from 'express';

const franchiseLocationRouter = express.Router();

franchiseLocationRouter
  .route('/cities')
  .get(contextMiddleware(false), FranchiseLocationController.getCities);

franchiseLocationRouter
  .route('/')
  .get(contextMiddleware(false), FranchiseLocationController.getAll)
  .post(contextMiddleware(true), FranchiseLocationController.create);

franchiseLocationRouter
  .route('/:id')
  .get(contextMiddleware(false), FranchiseLocationController.getOne)
  .put(contextMiddleware(true), FranchiseLocationController.update)
  .delete(contextMiddleware(true), FranchiseLocationController.delete);

export { franchiseLocationRouter };
