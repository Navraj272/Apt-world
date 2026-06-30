import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
import { StringUtils } from '@src/utils/string.utils';
import { processImages } from '@src/utils/image.utils';
import { uploadProductImages, uploadLocalImageToCloudinary } from '@src/utils/cloudinary.utils';

export class CreateProductHandler extends BaseHandler {
  async run() {
    let {
      categoryId,
      subcategoryId,
      name,
      description,
      baseCode,
      specs,
      isActive,
      slug,
      images,
      thumbnail,
      mobileThumbnail,
      files
    } = this.args;

    // Upload to Cloudinary if configured, otherwise keep local paths
    if (files) {
      const cloudinaryResult = await uploadProductImages(files);
      if (cloudinaryResult.thumbnail) thumbnail = cloudinaryResult.thumbnail;
      if (cloudinaryResult.images.length > 0) images = cloudinaryResult.images;

      // Fallback to local paths if Cloudinary not used
      if (!cloudinaryResult.thumbnail && files.thumbnail && files.thumbnail[0]) {
        thumbnail = `/uploads/${files.thumbnail[0].filename}`;
      }
      if (cloudinaryResult.images.length === 0 && files.images && files.images.length > 0) {
        images = files.images.map(f => `/uploads/${f.filename}`);
      }
    }

    // Process base64 images if they are still base64 (fallback)
    if (images) images = processImages(images);
    if (thumbnail) thumbnail = processImages(thumbnail);
    if (mobileThumbnail) mobileThumbnail = processImages(mobileThumbnail);

    // Upload locally-saved images (from base64) to Cloudinary if configured
    if (images && Array.isArray(images)) {
      images = await Promise.all(images.map(uploadLocalImageToCloudinary));
    }
    if (thumbnail && typeof thumbnail === 'string') {
      thumbnail = await uploadLocalImageToCloudinary(thumbnail);
    }
    if (mobileThumbnail && typeof mobileThumbnail === 'string') {
      mobileThumbnail = await uploadLocalImageToCloudinary(mobileThumbnail);
    }

    // If sent via FormData, these might be strings
    if (typeof name === 'string') {
      try {
        name = JSON.parse(name);
      } catch (e) {
        name = { en: name };
      }
    }
    if (typeof description === 'string' && (description.startsWith('{') || description.startsWith('['))) {
      try { description = JSON.parse(description); } catch (e) { /* keep as string */ }
    }
    if (typeof specs === 'string') {
      try { specs = JSON.parse(specs); } catch (e) { specs = {}; }
    }

    if (!categoryId || !name || !baseCode) {
      throw new AppError(Errors.MISSING_REQUIRED_PARAMETER);
    }

    const category = await db.Category.findByPk(categoryId);
    if (!category) {
      throw new AppError(Errors.CATEGORY_NOT_FOUND);
    }

    if (subcategoryId) {
      const sub = await db.Subcategory.findByPk(subcategoryId);
      if (!sub) throw new AppError(Errors.SUBCATEGORY_NOT_FOUND);
    }

    if (!slug) {
      const nameForSlug = name.en || Object.values(name)[0] || baseCode;
      slug = StringUtils.slugify(nameForSlug);
    }

    const existingBySlug = await db.Product.findOne({ where: { slug } });
    if (existingBySlug) {
      slug = `${slug}-${Date.now().toString().slice(-4)}`;
    }

    const existingByCode = await db.Product.findOne({ where: { baseCode } });
    if (existingByCode) {
      throw new AppError({
        ...Errors.PRODUCT_EXISTS,
        message: 'Product with this base code already exists.',
      });
    }

    const product = await db.Product.create({
      categoryId: parseInt(categoryId, 10),
      subcategoryId: subcategoryId ? parseInt(subcategoryId, 10) : null,
      name,
      slug,
      description: typeof description === 'string' ? { en: description } : description,
      images: images || [],
      baseCode,
      specs: specs || {},
      isActive: isActive === 'false' || isActive === false ? false : true,
      thumbnail,
      mobileThumbnail,
    });

    return product;
  }
}
