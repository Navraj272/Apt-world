import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
import { StringUtils } from '@src/utils/string.utils';

export class CreateSubcategoryHandler extends BaseHandler {
  async run() {
    const { categoryId, name, description, isActive } = this.args;
    let { slug } = this.args;

    if (!categoryId || !name || Object.keys(name).length === 0) {
      throw new AppError(Errors.MISSING_REQUIRED_PARAMETER);
    }

    const category = await db.Category.findByPk(categoryId);
    if (!category) {
      throw new AppError(Errors.CATEGORY_NOT_FOUND);
    }

    if (!slug) {
      const nameForSlug = name.en || Object.values(name)[0];
      slug = StringUtils.slugify(nameForSlug);
    }

    const existingSub = await db.Subcategory.findOne({ where: { slug } });
    if (existingSub) {
      throw new AppError(Errors.SUBCATEGORY_EXISTS);
    }

    const subcategory = await db.Subcategory.create({
      categoryId,
      name,
      slug,
      description,
      isActive: isActive !== undefined ? isActive : true,
    });

    return subcategory;
  }
}
