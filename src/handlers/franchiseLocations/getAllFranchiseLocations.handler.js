import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { ApiHelper } from '@src/utils/api.utils';

export class GetAllFranchiseLocationsHandler extends BaseHandler {
  async run() {
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit);
    const { state, city, isActive } = this.args;

    const where = {};
    if (state) where.state = state;
    if (city) where.city = { [db.Sequelize.Op.iLike]: city };
    if (isActive !== undefined) {
      where.isActive = isActive === 'true' || isActive === true;
    }

    const franchiseLocations = await db.FranchiseLocation.findAndCountAll({
      where,
      limit,
      offset,
      order: [['id', 'DESC']],
    });

    return {
      franchiseLocations: franchiseLocations.rows,
      total: franchiseLocations.count,
      pageNo,
      totalPages: Math.ceil(franchiseLocations.count / limit),
    };
  }
}
