import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { StringUtils } from '@src/utils/string.utils';
import { processImages } from '@src/utils/image.utils';
import { uploadLocalImageToCloudinary } from '@src/utils/cloudinary.utils';
import { buildCategoryLookup, getBulkItems, parseBoolean, toLocalizedName } from '@src/utils/bulk.utils';

const parseSpecs = (specs) => {
  if (!specs) return {};
  if (typeof specs === 'object') return specs;
  try {
    const parsed = JSON.parse(specs);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (e) {
    throw new Error('Specs must be valid JSON, e.g. {"Power":"2kW"}');
  }
};

const parseImages = (images) => {
  if (!images) return [];
  // data: URLs contain commas/semicolons but never "|", so splitting on "|" is safe
  const list = Array.isArray(images) ? images : String(images).split('|');
  return list.map((url) => String(url).trim()).filter(Boolean);
};

// Image rows may hold URLs or base64 data URLs (from the admin form): save + upload the latter
const storeImage = async (value) => {
  if (!value) return null;
  const saved = processImages(value);
  return typeof saved === 'string' ? uploadLocalImageToCloudinary(saved) : saved;
};

/**
 * Creates many products in one request. Rows are validated independently.
 * Each item: { category (id | slug | name), subcategory? (id | slug | name), name, baseCode,
 *              description?, specs? (object | JSON string), images? (urls, "|" separated), thumbnail?, isActive? }
 */
export class BulkCreateProductsHandler extends BaseHandler {
  async run() {
    const items = getBulkItems(this.args.items);

    const findCategory = buildCategoryLookup(await db.Category.findAll({ attributes: ['id', 'name', 'slug'] }));
    const subcategories = await db.Subcategory.findAll({ attributes: ['id', 'name', 'slug', 'categoryId'] });
    const usedSlugs = new Set((await db.Product.findAll({ attributes: ['slug'] })).map((p) => p.slug));
    const usedCodes = new Set((await db.Product.findAll({ attributes: ['baseCode'] })).map((p) => p.baseCode));

    const findSubcategory = (ref, categoryId) => {
      const key = String(ref).trim().toLowerCase();
      return subcategories.find((sub) => sub.categoryId === categoryId && (
        String(sub.id) === key
        || (sub.slug && sub.slug.toLowerCase() === key)
        || (sub.name && sub.name.en && sub.name.en.trim().toLowerCase() === key)
      ));
    };

    const created = [];
    const errors = [];

    for (let index = 0; index < items.length; index += 1) {
      const row = index + 1;
      const item = items[index] || {};
      try {
        const category = findCategory(item.category ?? item.categoryId);
        if (!category) throw new Error(`Category "${item.category ?? item.categoryId ?? ''}" not found`);

        let subcategoryId = null;
        const subRef = item.subcategory ?? item.subcategoryId;
        if (subRef !== undefined && subRef !== null && String(subRef).trim() !== '') {
          const subcategory = findSubcategory(subRef, category.id);
          if (!subcategory) throw new Error(`Subcategory "${subRef}" not found in this category`);
          subcategoryId = subcategory.id;
        }

        const name = toLocalizedName(item.name);
        if (!name) throw new Error('Product name is required');

        const baseCode = item.baseCode ? String(item.baseCode).trim() : '';
        if (!baseCode) throw new Error('Base code is required');
        if (usedCodes.has(baseCode)) throw new Error(`Base code "${baseCode}" already exists`);

        let slug = StringUtils.slugify(item.slug || name.en || Object.values(name)[0] || baseCode);
        if (usedSlugs.has(slug)) slug = `${slug}-${StringUtils.slugify(baseCode)}`;
        if (usedSlugs.has(slug)) throw new Error(`Product "${slug}" already exists`);

        const description = typeof item.description === 'string' ? { en: item.description } : item.description || {};

        // eslint-disable-next-line no-await-in-loop
        const product = await db.Product.create({
          categoryId: category.id,
          subcategoryId,
          name,
          slug,
          description,
          images: (await Promise.all(parseImages(item.images).map(storeImage))).filter(Boolean),
          baseCode,
          specs: parseSpecs(item.specs),
          isActive: parseBoolean(item.isActive),
          isFavourite: parseBoolean(item.isFavourite, false),
          thumbnail: await storeImage(item.thumbnail ? String(item.thumbnail).trim() : null),
        });
        usedSlugs.add(slug);
        usedCodes.add(baseCode);
        created.push({ row, id: product.id, baseCode });
      } catch (error) {
        errors.push({ row, message: error.message });
      }
    }

    return { total: items.length, createdCount: created.length, failedCount: errors.length, created, errors };
  }
}
