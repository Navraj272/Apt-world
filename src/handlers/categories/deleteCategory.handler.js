import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

export class DeleteCategoryHandler extends BaseHandler {
  async run() {
    const { id } = this.args;

    const category = await db.Category.findByPk(id);
    if (!category) {
      throw new AppError(Errors.CATEGORY_NOT_FOUND);
    }

    // Check if there are associated subcategories or products?
    // Usually we might want to prevent deletion if children exist.
    const subCount = await db.Subcategory.count({ where: { categoryId: id } });
    const prodCount = await db.Product.count({ where: { categoryId: id } });

    if (subCount > 0 || prodCount > 0) {
      // In a real app we might throw an error or soft delete.
      // For "simple CRUD", let's assume we want to protect references.
      throw new AppError({
        ...Errors.ACTION_NOT_ALLOWED,
        message: 'Cannot delete category with associated subcategories or products.',
      });
    }

    await category.destroy();

    return { message: 'Category deleted successfully' };
  }
}
