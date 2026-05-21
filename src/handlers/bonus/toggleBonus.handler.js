import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";
import { BONUS_STATUS } from "@src/utils/constants/bonus.constants";

export class ToggleBonusHandler extends BaseHandler {
  async run() {
    const { bonusId } = this.args

    const bonus = await db.Bonus.findOne({
      where: { id: bonusId }
    });

    if (!bonus) {
      throw new AppError(Errors.BONUS_NOT_FOUND);
    }

    bonus.status = bonus.status === BONUS_STATUS.ACTIVE ? BONUS_STATUS.INACTIVE : BONUS_STATUS.ACTIVE
    await bonus.save()
    return { success: true };
  }
}
