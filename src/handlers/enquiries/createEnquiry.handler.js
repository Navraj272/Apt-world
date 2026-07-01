import fs from 'fs';
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
      franchiseLocationId,
      quantity,
      message,
      files,
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

    if (franchiseLocationId) {
      const franchiseLocation = await db.FranchiseLocation.findByPk(franchiseLocationId);
      if (!franchiseLocation) throw new AppError(Errors.FRANCHISE_LOCATION_NOT_FOUND);
    }

    const enquiry = await db.Enquiry.create({
      name,
      email,
      phone,
      type,
      distributorTier,
      productId,
      franchiseLocationId,
      quantity,
      message,
      status: 'pending',
    });

    const fullEnquiry = await db.Enquiry.findByPk(enquiry.id, {
      include: [
        { model: db.Product, as: 'product', attributes: ['id', 'name', 'baseCode'] },
        { model: db.FranchiseLocation, as: 'franchiseLocation' },
      ],
    });

    const imageFiles = (files && files.images) || [];

    sendEnquiryNotification(fullEnquiry, imageFiles)
      .catch((err) => {
        console.error('Notification email failed:', err.message);
      })
      .finally(() => {
        imageFiles.forEach((file) => {
          fs.unlink(file.path, (err) => {
            if (err) console.error('Failed to clean up enquiry image temp file:', err.message);
          });
        });
      });

    return enquiry;
  }
}
