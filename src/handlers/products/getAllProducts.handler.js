import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { ApiHelper } from '@src/utils/api.utils';

export class GetAllProductsHandler extends BaseHandler {
  async run() {
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit);
    const { categoryId, subcategoryId, isActive, search } = this.args;

    const where = {};
    if (categoryId) where.categoryId = categoryId;
    if (subcategoryId) where.subcategoryId = subcategoryId;
    if (isActive !== undefined) {
      where.isActive = isActive === 'true' || isActive === true;
    }
    
    // Simple search on baseCode if provided
    if (search) {
      where.baseCode = { [db.Sequelize.Op.iLike]: `%${search}%` };
    }

    const products = await db.Product.findAndCountAll({
      where,
      limit,
      offset,
      order: [['id', 'DESC']],
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
