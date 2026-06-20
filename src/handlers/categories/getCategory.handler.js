import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

export class GetCategoryHandler extends BaseHandler {
  async run() {
    const { id } = this.args;

    const category = await db.Category.findByPk(id, {
      include: [
        {
          model: db.Subcategory,
          as: 'subcategories',
        },
      ],
    });

    if (!category) {
      throw new AppError(Errors.CATEGORY_NOT_FOUND);
    }

    return category;
  }
}
