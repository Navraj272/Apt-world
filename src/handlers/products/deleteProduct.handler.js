import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

export class DeleteProductHandler extends BaseHandler {
  async run() {
    const { id } = this.args;

    const product = await db.Product.findByPk(id);
    if (!product) {
      throw new AppError(Errors.PRODUCT_NOT_FOUND);
    }

    // Check for associated enquiries? 
    // Maybe we just allow deletion or soft delete.
    // For now, let's hard delete.
    await product.destroy();

    return { message: 'Product deleted successfully' };
  }
}
