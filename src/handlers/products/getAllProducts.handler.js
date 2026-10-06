import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { ApiHelper } from '@src/utils/api.utils';
import { buildOrder } from '@src/utils/sort.utils';

export class GetAllProductsHandler extends BaseHandler {
  async run() {
    const { categoryId, subcategoryId, isActive, isFavourite, favouriteFirst, curated, search, sortBy, sortOrder } = this.args;
    // Curated feed (public "All Products"): one page only, featured first, then newest to fill the limit
    const isCurated = curated === 'true' || curated === true;
    const { offset, limit, pageNo } = ApiHelper.getPagination(isCurated ? 1 : this.args.pageNo, this.args.limit);

    const where = {};
    if (categoryId) where.categoryId = categoryId;
    if (subcategoryId) where.subcategoryId = subcategoryId;
    if (isFavourite !== undefined) {
      where.isFavourite = isFavourite === 'true' || isFavourite === true;
    }
    if (isActive !== undefined) {
      where.isActive = isActive === 'true' || isActive === true;
    }

    if (search) {
      where[db.Sequelize.Op.or] = [
        { baseCode: { [db.Sequelize.Op.iLike]: `%${search}%` } },
          db.Sequelize.where(
            db.Sequelize.fn('LOWER', db.Sequelize.fn('CONCAT', db.Sequelize.col('Product.name'))),
            { [db.Sequelize.Op.like]: `%${search.toLowerCase()}%` }
          ),
      ];
    }

    const order = buildOrder(db, 'Product', sortBy, sortOrder);
    // Admin-picked favourites are listed first on the public "All products" view
    if (isCurated || favouriteFirst === 'true' || favouriteFirst === true) order.unshift(['isFavourite', 'DESC']);

    const products = await db.Product.findAndCountAll({
      where,
      limit,
      offset,
      order,
      include: [
        { model: db.Category, as: 'category', attributes: ['id', 'name', 'slug'] },
        { model: db.Subcategory, as: 'subcategory', attributes: ['id', 'name', 'slug'] },
      ],
    });

    return {
      products: products.rows,
      total: isCurated ? products.rows.length : products.count,
      pageNo,
      totalPages: isCurated ? 1 : Math.ceil(products.count / limit),
    };
  }
}
