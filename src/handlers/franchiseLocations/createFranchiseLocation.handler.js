import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
import { INDIAN_STATES } from '@src/utils/constants/indianStates.constants';

export class CreateFranchiseLocationHandler extends BaseHandler {
  async run() {
    const { state, city, address, contactName, email, phone } = this.args;

    if (!state || !city || !address || !email || !phone) {
      throw new AppError(Errors.MISSING_REQUIRED_PARAMETER);
    }

    if (!INDIAN_STATES.includes(state)) {
      throw new AppError(Errors.INVALID_STATE);
    }

    const franchiseLocation = await db.FranchiseLocation.create({
      state,
      city,
      address,
      contactName,
      email,
      phone,
      isActive: true,
    });

    return franchiseLocation;
  }
}
