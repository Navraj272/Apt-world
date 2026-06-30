import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { ApiHelper } from '@src/utils/api.utils';

export class GetAllProductsHandler extends BaseHandler {
  async run() {
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit);
    const { categoryId, subcategoryId, isActive, search, order: sortOrder } = this.args;

    const where = {};
    if (categoryId) where.categoryId = categoryId;
    if (subcategoryId) where.subcategoryId = subcategoryId;
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

    let order = [['id', 'DESC']];
    // if (sortOrder === 'price_asc') {
    //   order = [['price', 'ASC']];
    // } else if (sortOrder === 'price_desc') {
    //   order = [['price', 'DESC']];
    // }

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
      total: products.count,
      pageNo,
      totalPages: Math.ceil(products.count / limit),
    };
  }
}
