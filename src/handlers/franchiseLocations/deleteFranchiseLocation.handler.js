import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';

export class DeleteFranchiseLocationHandler extends BaseHandler {
  async run() {
    const { id } = this.args;

    const franchiseLocation = await db.FranchiseLocation.findByPk(id);
    if (!franchiseLocation) {
      throw new AppError(Errors.FRANCHISE_LOCATION_NOT_FOUND);
    }

    await franchiseLocation.destroy();

    return { message: 'Franchise location deleted successfully' };
  }
}
