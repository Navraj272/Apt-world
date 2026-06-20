import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

export class GetEnquiryHandler extends BaseHandler {
  async run() {
    const { id } = this.args;

    const enquiry = await db.Enquiry.findByPk(id, {
      include: [
        { model: db.Product, as: 'product' },
      ],
    });

    if (!enquiry) {
      throw new AppError(Errors.ENQUIRY_NOT_FOUND);
    }

    return enquiry;
  }
}
