import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

export class GetSubcategoryHandler extends BaseHandler {
  async run() {
    const { id } = this.args;

    const subcategory = await db.Subcategory.findByPk(id, {
      include: [
        {
          model: db.Category,
          as: 'category',
        },
      ],
    });

    if (!subcategory) {
      throw new AppError(Errors.SUBCATEGORY_NOT_FOUND);
    }

    return subcategory;
  }
}
