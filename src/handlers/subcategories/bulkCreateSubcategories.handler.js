import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { StringUtils } from '@src/utils/string.utils';
import { buildCategoryLookup, getBulkItems, parseBoolean, toLocalizedName } from '@src/utils/bulk.utils';

/**
 * Creates many subcategories in one request. Rows are validated independently:
 * valid rows are created, invalid rows are reported with their row number.
 * Each item: { category (id | slug | name), name, description?, slug?, isActive? }
 */
export class BulkCreateSubcategoriesHandler extends BaseHandler {
  async run() {
    const items = getBulkItems(this.args.items);

    const findCategory = buildCategoryLookup(await db.Category.findAll({ attributes: ['id', 'name', 'slug'] }));
    const usedSlugs = new Set((await db.Subcategory.findAll({ attributes: ['slug'] })).map((s) => s.slug));

    const created = [];
    const errors = [];

    for (let index = 0; index < items.length; index += 1) {
      const row = index + 1;
      const item = items[index] || {};
      try {
        const category = findCategory(item.category ?? item.categoryId);
        if (!category) throw new Error(`Category "${item.category ?? item.categoryId ?? ''}" not found`);

        const name = toLocalizedName(item.name);
        if (!name) throw new Error('Subcategory name is required');

        const slug = item.slug ? StringUtils.slugify(item.slug) : StringUtils.slugify(name.en || Object.values(name)[0]);
        if (!slug) throw new Error('Could not generate a slug from the name');
        if (usedSlugs.has(slug)) throw new Error(`Subcategory "${slug}" already exists`);

        const description = typeof item.description === 'string' ? { en: item.description } : item.description || {};

        // eslint-disable-next-line no-await-in-loop
        const subcategory = await db.Subcategory.create({
          categoryId: category.id,
          name,
          slug,
          description,
          isActive: parseBoolean(item.isActive),
        });
        usedSlugs.add(slug);
        created.push({ row, id: subcategory.id, slug });
      } catch (error) {
        errors.push({ row, message: error.message });
      }
    }

    return { total: items.length, createdCount: created.length, failedCount: errors.length, created, errors };
  }
}
