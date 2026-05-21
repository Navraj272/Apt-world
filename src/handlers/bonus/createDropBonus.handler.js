import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";
import { serverDayjs } from "@src/libs/dayjs";
const { COINS } = require("@src/utils/constants/public.constants");

export class CreateDropBonusHandler extends BaseHandler {
  get constraints() {
    return schema;
  }

  async run() {
    let {
      coin,
      name,
      coinType,
      totalClaimsAllowed,
      totalClaims,
      expiryTime,
      isActive,
      bonusCode,
    } = this.args;
    const transaction = this.context.sequelizeTransaction;

    const expiryTimeTrimmed = expiryTime.trim();
    const expiryDate = serverDayjs(expiryTimeTrimmed);

    if (!expiryDate.isValid()) {
      throw new AppError(Errors.INVALID_EXPIRY_TIME);
    }

    const currentUTCDate = serverDayjs();
    if (expiryDate.isBefore(currentUTCDate)) {
      throw new AppError(Errors.INVALID_EXPIRY_TIME);
    }

    const expiryTimeISO = expiryDate.toISOString();

    const existingBonus = await db.DropBonus.findOne({
      where: { code: bonusCode },
      transaction,
    });
    if (existingBonus) throw new AppError(Errors.BONUS_CODE_ALREADY_EXIST);

    if (
      coinType !== COINS.GOLD_COIN &&
      coinType !== COINS.SWEEP_COIN.PURCHASE_SWEEP_COIN
    ) {
      throw new AppError(Errors.INVALID_COIN_TYPE);
    }

    const dropBonus = await db.DropBonus.create(
      {
        coin,
        coinType,
        name,
        code: bonusCode,
        totalClaimsAllowed,
        totalClaims: totalClaims || 0,
        expiryTime: expiryTimeISO,
        isActive: isActive ? isActive : false,
      },
      { transaction }
    );

    return { dropBonus };
  }
}
