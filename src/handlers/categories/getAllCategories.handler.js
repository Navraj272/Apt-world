import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { ApiHelper } from '@src/utils/api.utils';

export class GetAllCategoriesHandler extends BaseHandler {
  async run() {
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit);
    const { isActive } = this.args;

    const where = {};
    if (isActive !== undefined) {
      where.isActive = isActive === 'true' || isActive === true;
    }

    const categories = await db.Category.findAndCountAll({
      where,
      limit,
      offset,
      order: [['id', 'DESC']],
    });

    return {
      categories: categories.rows,
      total: categories.count,
      pageNo,
      totalPages: Math.ceil(categories.count / limit),
    };
  }
}
