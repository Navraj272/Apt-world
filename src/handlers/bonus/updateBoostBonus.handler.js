import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";

/**
 * This handler updates the day and percentage of boost bonus
 * we store day in Binary format ex: {day:0101010}
 * This above binary number represent user will get this extra bonus on monday, wednesday and friday only after redemming the package
 * we store percentage simply in decimal values ex: {percentage: "10"}
 */

export class UpdateBoostHandler extends BaseHandler {

  
  async run() {
    const {
      bonusId,
      promotionTitle,
      percentage,
      validOnDays,
      description,
      termsConditions,
      maxBonusLimit
    } = this.args;

    const transaction = this.dbTransaction;
    const findBonus = await db.Bonus.findByPk(bonusId, { transaction });

    let updatedValidOnDays = findBonus.validOnDays;
    if (validOnDays) {
      updatedValidOnDays = {};
      for (const day in validOnDays) {
        updatedValidOnDays[day.toLowerCase()] = validOnDays[day];
      }
    }
    
    if (!findBonus) {
      throw new AppError(Errors.BONUS_NOT_FOUND);
    }
    const updateFields = {
      promotionTitle: promotionTitle || findBonus.promotionTitle,
      percentage: percentage || findBonus.percentage,
      validOnDays: updatedValidOnDays,
      description: description || findBonus.description,
      termsConditions: termsConditions || findBonus.termsConditions,
      maxBonusLimit: maxBonusLimit ?? findBonus.maxBonusLimit
    };

    await db.Bonus.update(updateFields, {
      where: { id: bonusId },
      transaction,
    });

    return { success: true };
  }
}
