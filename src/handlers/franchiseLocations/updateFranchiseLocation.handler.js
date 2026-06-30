import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
import { INDIAN_STATES } from '@src/utils/constants/indianStates.constants';

export class UpdateFranchiseLocationHandler extends BaseHandler {
  async run() {
    const { id, state, city, address, contactName, email, phone, isActive } = this.args;

    const franchiseLocation = await db.FranchiseLocation.findByPk(id);
    if (!franchiseLocation) {
      throw new AppError(Errors.FRANCHISE_LOCATION_NOT_FOUND);
    }

    if (state && !INDIAN_STATES.includes(state)) {
      throw new AppError(Errors.INVALID_STATE);
    }

    const updateData = {};
    if (state) updateData.state = state;
    if (city) updateData.city = city;
    if (address) updateData.address = address;
    if (contactName !== undefined) updateData.contactName = contactName;
    if (email) updateData.email = email;
    if (phone) updateData.phone = phone;
    if (isActive !== undefined) updateData.isActive = isActive === 'false' || isActive === false ? false : true;

    await franchiseLocation.update(updateData);

    return franchiseLocation;
  }
}
