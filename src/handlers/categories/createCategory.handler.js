import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
import { StringUtils } from '@src/utils/string.utils';

export class CreateCategoryHandler extends BaseHandler {
  async run() {
    const { name, description, isActive } = this.args;
    let { slug } = this.args;

    if (!name || Object.keys(name).length === 0) {
      throw new AppError(Errors.MISSING_REQUIRED_PARAMETER);
    }

    if (!slug) {
      const nameForSlug = name.en || Object.values(name)[0];
      slug = StringUtils.slugify(nameForSlug);
    }

    const existingCategory = await db.Category.findOne({ where: { slug } });
    console.log("existingCategory =>", existingCategory)
    if (existingCategory) {
      throw new AppError(Errors.CATEGORY_EXISTS);
    }

    const category = await db.Category.create({
      name,
      slug,
      description,
      isActive: isActive !== undefined ? isActive : true,
    });

    return category;
  }
}
