import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

export class GetProductHandler extends BaseHandler {
  async run() {
    const { id } = this.args;

    const product = await db.Product.findByPk(id, {
      include: [
        { model: db.Category, as: 'category' },
        { model: db.Subcategory, as: 'subcategory' },
      ],
    });

    if (!product) {
      throw new AppError(Errors.PRODUCT_NOT_FOUND);
    }

    return product;
  }
}
