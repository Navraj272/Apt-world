import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
import { StringUtils } from '@src/utils/string.utils';
import { Op } from 'sequelize';

export class UpdateCategoryHandler extends BaseHandler {
  async run() {
    const { id, name, description, isActive, slug } = this.args;

    const category = await db.Category.findByPk(id);
    if (!category) {
      throw new AppError(Errors.CATEGORY_NOT_FOUND);
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (isActive !== undefined) updateData.isActive = isActive;
    
    if (slug) {
      const existing = await db.Category.findOne({ 
        where: { 
          slug, 
          id: { [Op.ne]: id } 
        } 
      });
      if (existing) throw new AppError(Errors.CATEGORY_EXISTS);
      updateData.slug = slug;
    } else if (name && name.en && !category.slug) {
        // Only auto-update slug if it was somehow missing and name is provided
        updateData.slug = StringUtils.slugify(name.en);
    }

    await category.update(updateData);

    return category;
  }
}
