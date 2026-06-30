import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

export class GetFranchiseLocationCitiesHandler extends BaseHandler {
  async run() {
    const { state } = this.args;

    if (!state) {
      throw new AppError(Errors.MISSING_REQUIRED_PARAMETER);
    }

    const rows = await db.FranchiseLocation.findAll({
      attributes: [[db.Sequelize.fn('DISTINCT', db.Sequelize.col('city')), 'city']],
      where: { state, isActive: true },
      order: [['city', 'ASC']],
      raw: true,
    });

    return { cities: rows.map((row) => row.city) };
  }
}
