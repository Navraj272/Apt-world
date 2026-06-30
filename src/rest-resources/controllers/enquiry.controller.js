import { CreateEnquiryHandler } from '@src/handlers/enquiries/createEnquiry.handler';
import { DeleteEnquiryHandler } from '@src/handlers/enquiries/deleteEnquiry.handler';
import { GetEnquiryHandler } from '@src/handlers/enquiries/getEnquiry.handler';
import { GetAllEnquiriesHandler } from '@src/handlers/enquiries/getAllEnquiries.handler';
import { UpdateEnquiryHandler } from '@src/handlers/enquiries/updateEnquiry.handler';
import { ApiHelper } from '@src/utils/api.utils';

export default class EnquiryController {
  static async create(req, res, next) {
    try {
      const args = { ...req.body, files: req.files };
      const data = await CreateEnquiryHandler.execute(args, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const data = await GetAllEnquiriesHandler.execute(req.query, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const data = await GetEnquiryHandler.execute(req.params, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const data = await UpdateEnquiryHandler.execute({ ...req.params, ...req.body }, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const data = await DeleteEnquiryHandler.execute(req.params, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
