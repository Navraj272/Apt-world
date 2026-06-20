import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

export class UpdateEnquiryHandler extends BaseHandler {
  async run() {
    const { id, status } = this.args;

    const enquiry = await db.Enquiry.findByPk(id);
    if (!enquiry) {
      throw new AppError(Errors.ENQUIRY_NOT_FOUND);
    }

    const updateData = {};
    if (status) updateData.status = status;

    await enquiry.update(updateData);

    return enquiry;
  }
}
