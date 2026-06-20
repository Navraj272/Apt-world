import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
import { StringUtils } from '@src/utils/string.utils';
import { processImages } from '@src/utils/image.utils';
import { Op } from 'sequelize';

export class UpdateProductHandler extends BaseHandler {
  async run() {
    let {
      id,
      categoryId,
      subcategoryId,
      name,
      description,
      images,
      baseCode,
      specs,
      isActive,
      thumbnail,
      mobileThumbnail,
      slug,
      files
    } = this.args;

    const product = await db.Product.findByPk(id);
    if (!product) {
      throw new AppError(Errors.PRODUCT_NOT_FOUND);
    }

    const updateData = {};

    // Handle Multer files
    if (files) {
      if (files.thumbnail && files.thumbnail[0]) {
        updateData.thumbnail = `/uploads/${files.thumbnail[0].filename}`;
      }
      if (files.images && files.images.length > 0) {
        updateData.images = files.images.map(f => `/uploads/${f.filename}`);
      }
    }

    // Process strings from FormData
    if (name && typeof name === 'string') {
      try { name = JSON.parse(name); } catch (e) { name = { en: name }; }
    }
    if (description && typeof description === 'string' && (description.startsWith('{') || description.startsWith('['))) {
      try { description = JSON.parse(description); } catch (e) { /* keep as string */ }
    }
    if (specs && typeof specs === 'string') {
      try { specs = JSON.parse(specs); } catch (e) { specs = {}; }
    }

    if (categoryId) {
      const category = await db.Category.findByPk(categoryId);
      if (!category) throw new AppError(Errors.CATEGORY_NOT_FOUND);
      updateData.categoryId = parseInt(categoryId, 10);
    }

    if (subcategoryId !== undefined) {
      updateData.subcategoryId = subcategoryId ? parseInt(subcategoryId, 10) : null;
    }

    if (name) updateData.name = name;
    if (description) updateData.description = typeof description === 'string' ? { en: description } : description;
    
    // Base64 processing (if files not provided or as addition)
    if (images && !updateData.images) updateData.images = processImages(images);
    if (thumbnail && !updateData.thumbnail) updateData.thumbnail = processImages(thumbnail);
    if (mobileThumbnail) updateData.mobileThumbnail = processImages(mobileThumbnail);

    if (specs) updateData.specs = specs;
    if (isActive !== undefined) updateData.isActive = isActive === 'false' || isActive === false ? false : true;

    if (baseCode && baseCode !== product.baseCode) {
      const existing = await db.Product.findOne({ where: { baseCode, id: { [Op.ne]: id } } });
      if (existing) throw new AppError({ ...Errors.PRODUCT_EXISTS, message: 'Base code already in use.' });
      updateData.baseCode = baseCode;
    }

    if (slug) {
      const existing = await db.Product.findOne({ where: { slug, id: { [Op.ne]: id } } });
      if (existing) {
        updateData.slug = `${slug}-${Date.now().toString().slice(-4)}`;
      } else {
        updateData.slug = slug;
      }
    }

    await product.update(updateData);

    return product;
  }
}
