import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { ApiHelper } from '@src/utils/api.utils';

export class GetAllSubcategoriesHandler extends BaseHandler {
  async run() {
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit);
    const { categoryId, isActive, search } = this.args;

    const where = {};
    if (categoryId) where.categoryId = categoryId;
    if (isActive !== undefined) {
      where.isActive = isActive === 'true' || isActive === true;
    }
    if (search) {
      where[db.Sequelize.Op.or] = [
        db.Sequelize.where(
          db.Sequelize.fn('LOWER', db.Sequelize.fn('CONCAT', db.Sequelize.col('Subcategory.name'))),
          { [db.Sequelize.Op.like]: `%${search.toLowerCase()}%` }
        ),
        db.Sequelize.where(
          db.Sequelize.fn('LOWER', db.Sequelize.fn('CONCAT', db.Sequelize.col('Subcategory.description'))),
          { [db.Sequelize.Op.like]: `%${search.toLowerCase()}%` }
        ),
      ];
    }

    const subcategories = await db.Subcategory.findAndCountAll({
      where,
      limit,
      offset,
      order: [['id', 'DESC']],
      include: [
        {
          model: db.Category,
          as: 'category',
          attributes: ['id', 'name', 'slug'],
        },
      ],
    });

    return {
      subcategories: subcategories.rows,
      total: subcategories.count,
      pageNo,
      totalPages: Math.ceil(subcategories.count / limit),
    };
  }
}
