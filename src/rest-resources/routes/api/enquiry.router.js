import EnquiryController from '@src/rest-resources/controllers/enquiry.controller';
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware';
import { uploadEnquiryImages } from '@src/rest-resources/middlewares/multer';
import express from 'express';

const enquiryRouter = express.Router();

enquiryRouter
  .route('/')
  .get(contextMiddleware(false), EnquiryController.getAll)
  .post(contextMiddleware(true), uploadEnquiryImages, EnquiryController.create);

enquiryRouter
  .route('/:id')
  .get(contextMiddleware(false), EnquiryController.getOne)
  .put(contextMiddleware(true), EnquiryController.update)
  .delete(contextMiddleware(true), EnquiryController.delete);

export { enquiryRouter };
