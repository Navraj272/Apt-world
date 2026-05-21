import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { deleteCache } from "@src/libs/redis"
import { CACHE_KEYS } from "@src/utils/constants/public.constants"

export class UpdateSpinWheelHandler extends BaseHandler {
  async run() {
    const transaction = this.dbTransaction
    const { wheelDivisionId, sc, gc, priority, isAllow, playerLimit } = this.args;

    const allConfigs = await db.WheelDivisionConfiguration.findAll({
      raw: true,
      transaction,
    });

    if (!allConfigs || allConfigs.length === 0) {
      throw new AppError(Errors.INVALID_WHEEL_DIVISION_ID);
    }

    const updatedPriority = parseFloat(priority);
    const otherConfigs = allConfigs.filter(c => c.wheelDivisionId !== wheelDivisionId);
    const totalOtherPriority = otherConfigs.reduce((sum, item) => sum + (item.priority || 0), 0);

    const remainingPriority = 105 - updatedPriority;

    if (otherConfigs.length > 0) {
      let adjustedTotal = 0;

      for (let i = 0; i < otherConfigs.length; i++) {
        const item = otherConfigs[i];
        const isLast = i === otherConfigs.length - 1;

        const current = item.priority || 0;
        let adjusted = totalOtherPriority === 0
          ? remainingPriority / otherConfigs.length
          : (current / totalOtherPriority) * remainingPriority;

        adjusted = parseFloat(adjusted.toFixed(2));

        // fix floating point rounding issue for the last item
        if (isLast) {
          adjusted = parseFloat((remainingPriority - adjustedTotal).toFixed(2));
        } else {
          adjustedTotal += adjusted;
        }

        await db.WheelDivisionConfiguration.update(
          { priority: adjusted },
          {
            where: { wheelDivisionId: item.wheelDivisionId },
            transaction,
          }
        );
      }
    }

    // Finally update the target wheel with the given priority
    await db.WheelDivisionConfiguration.update(
      { sc, gc, isAllow, playerLimit, priority: updatedPriority },
      {
        where: { wheelDivisionId },
        transaction,
      }
    );
    await deleteCache(CACHE_KEYS.WHEEL_CONFIG)
    return { wheelDivisionId };
  }
}
