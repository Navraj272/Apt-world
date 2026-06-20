import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

export class DeleteEnquiryHandler extends BaseHandler {
  async run() {
    const { id } = this.args;

    const enquiry = await db.Enquiry.findByPk(id);
    if (!enquiry) {
      throw new AppError(Errors.ENQUIRY_NOT_FOUND);
    }

    await enquiry.destroy();

    return { message: 'Enquiry deleted successfully' };
  }
}
