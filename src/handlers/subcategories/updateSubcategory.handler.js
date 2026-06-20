import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
import { StringUtils } from '@src/utils/string.utils';
import { Op } from 'sequelize';

export class UpdateSubcategoryHandler extends BaseHandler {
  async run() {
    const { id, categoryId, name, description, isActive, slug } = this.args;

    const subcategory = await db.Subcategory.findByPk(id);
    if (!subcategory) {
      throw new AppError(Errors.SUBCATEGORY_NOT_FOUND);
    }

    const updateData = {};
    if (categoryId) {
      const category = await db.Category.findByPk(categoryId);
      if (!category) throw new AppError(Errors.CATEGORY_NOT_FOUND);
      updateData.categoryId = categoryId;
    }

    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (isActive !== undefined) updateData.isActive = isActive;

    if (slug) {
      const existing = await db.Subcategory.findOne({ 
        where: { 
          slug, 
          id: { [Op.ne]: id } 
        } 
      });
      if (existing) throw new AppError(Errors.SUBCATEGORY_EXISTS);
      updateData.slug = slug;
    }

    await subcategory.update(updateData);

    return subcategory;
  }
}
