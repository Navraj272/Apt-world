import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

export class DeleteSubcategoryHandler extends BaseHandler {
  async run() {
    const { id } = this.args;

    const subcategory = await db.Subcategory.findByPk(id);
    if (!subcategory) {
      throw new AppError(Errors.SUBCATEGORY_NOT_FOUND);
    }

    const prodCount = await db.Product.count({ where: { subcategoryId: id } });
    if (prodCount > 0) {
      throw new AppError({
        ...Errors.ACTION_NOT_ALLOWED,
        message: 'Cannot delete subcategory with associated products.',
      });
    }

    await subcategory.destroy();

    return { message: 'Subcategory deleted successfully' };
  }
}
