import db from "@src/db/models";
import { USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from "@src/utils/constants/responsibleGambling.constants";
import { SELF_EXCLUSION_TYPES } from "@src/utils/constants/responsibleGambling.constants";
import { Op } from "sequelize";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { serverDayjs } from "@src/libs/dayjs";

export const selfExclusionMiddleware = async (req, res, next) => {
  try {
    const { userId } = req.user; // Assuming `userId` is available from auth middleware
    const now = serverDayjs();

    // Check for an active self-exclusion
    const exclusion = await db.UserLimit.findOne({
      where: {
        userId,
        key: USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.SELF_EXCLUSION,
        [Op.or]: [
          { value: SELF_EXCLUSION_TYPES.PERMANENT }, // Permanent self-exclusion
          { value: SELF_EXCLUSION_TYPES.TEMPORARY, expireAt: { [Op.gt]: now.toDate() } } // Active temporary exclusion
        ],
      },
    });

    if (exclusion) {
      throw new AppError(Errors.SELF_EXCLUSION_EXISTS);
    }

    next(); // Proceed if no active self-exclusion exists
  } catch (error) {
    next(error); // Pass error to global error handler
  }
};
