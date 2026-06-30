import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
import { sendEnquiryNotification } from '@src/helpers/notification.helpers';

export class CreateEnquiryHandler extends BaseHandler {
  async run() {
    const { 
      name, 
      email, 
      phone, 
      type, 
      distributorTier, 
      productId, 
      quantity, 
      message 
    } = this.args;

    if (!name || !email || !message || !type) {
      throw new AppError(Errors.MISSING_REQUIRED_PARAMETER);
    }

    if (type === 'product' && !productId) {
      throw new AppError({
        ...Errors.MISSING_REQUIRED_PARAMETER,
        message: 'Product ID is required for product enquiries.',
      });
    }

    if (productId) {
      const product = await db.Product.findByPk(productId);
      if (!product) throw new AppError(Errors.PRODUCT_NOT_FOUND);
    }

    const enquiry = await db.Enquiry.create({
      name,
      email,
      phone,
      type,
      distributorTier,
      productId,
      quantity,
      message,
      status: 'pending',
    });

    const fullEnquiry = await db.Enquiry.findByPk(enquiry.id, {
      include: [
        { model: db.Product, as: 'product', attributes: ['id', 'name', 'baseCode'] },
      ],
    });

    sendEnquiryNotification(fullEnquiry).catch((err) => {
      console.error('Notification email failed:', err.message);
    });

    return enquiry;
  }
}
