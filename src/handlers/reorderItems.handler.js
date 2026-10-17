import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

// Saves a new display order: ids[0] is shown first. Only the listed rows are renumbered (1..n),
// so the list sent is the scope being ordered (all categories, a category's subcategories, a subcategory's products).
const reorder = (modelName, reuseSlots = false) =>
  class extends BaseHandler {
    async run() {
      const ids = [...new Set((this.args.ids || []).map(Number))];
      if (!ids.length || ids.some((id) => !Number.isInteger(id))) throw new AppError(Errors.INVALID_ARRAY);

      const count = await db[modelName].count({ where: { id: ids } });
      if (count !== ids.length) throw new AppError(Errors.INVALID_ARRAY);

      await db.sequelize.transaction(async (transaction) => {
        let positions = ids.map((_, index) => index + 1);
        if (reuseSlots) {
          // Hand the rows' existing positions back out in the new order, so ordering one subcategory
          // never disturbs where its products sit in the category-wide order
          const rows = await db[modelName].findAll({ where: { id: ids }, attributes: ['sortOrder'], transaction });
          const slots = rows.map((r) => r.sortOrder).sort((a, b) => a - b);
          if (new Set(slots).size === slots.length) positions = slots;
        }
        await Promise.all(
          ids.map((id, index) => db[modelName].update({ sortOrder: positions[index] }, { where: { id }, transaction })),
        );
      });
      return { success: true };
    }
  };

export const ReorderCategoriesHandler = reorder('Category');
export const ReorderSubcategoriesHandler = reorder('Subcategory');
export const ReorderProductsHandler = reorder('Product', true);
