import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";
import { deleteCache } from "@src/libs/redis";
import { CACHE_KEYS } from "@src/utils/constants/public.constants";

export class UpdateAllSpinWheelHandler extends BaseHandler {
  async run() {
    const transaction = this.dbTransaction;
    const { updates } = this.args; // [{ wheelDivisionId, priority, sc, gc, isAllow, playerLimit }, ...]

    // Step 1: Validate input
    if (!Array.isArray(updates) || updates.length === 0) {
      throw new AppError(Errors.INVALID_REQUEST_BODY);
    }

    // Step 2: Check total priority
    const totalPriority = updates.reduce(
      (sum, u) => sum + parseFloat(u.priority || 0),
      0
    );
    
    const roundedTotal = Math.round(totalPriority * 100) / 100; // round to 2 decimals
    if (roundedTotal !== 100) {
    throw new AppError(
      Errors.INVALID_PRIORITY_SUM,
      `Total priority must equal 100. Current total: ${roundedTotal}`
    );
    }

    // Step 3: Check if all IDs exist in DB
    const allConfigs = await db.WheelDivisionConfiguration.findAll({
      raw: true,
      transaction,
    });
    const allIds = allConfigs.map((c) => c.wheelDivisionId);
    const invalidIds = updates.filter(
      (u) => !allIds.includes(u.wheelDivisionId)
    );

    if (invalidIds.length > 0) {
      throw new AppError(
        Errors.INVALID_WHEEL_DIVISION_ID,
        `Invalid divisions: ${invalidIds
          .map((i) => i.wheelDivisionId)
          .join(", ")}`
      );
    }

    // Step 4: Update each division
    await Promise.all(
      updates.map((u) =>
        db.WheelDivisionConfiguration.update(
          {
            sc: u.sc,
            gc: u.gc,
            isAllow: u.isAllow,
            playerLimit: u.playerLimit,
            priority: parseFloat(u.priority),
          },
          { where: { wheelDivisionId: u.wheelDivisionId }, transaction }
        )
      )
    );

     await deleteCache(CACHE_KEYS.WHEEL_CONFIG);

    return {
      success: true,
      message: "Wheel configuration updated successfully.",
    };
  }
}
