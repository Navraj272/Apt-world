import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";
import { identifyUser } from "@src/libs/customerio";

export class AdminResetKycHandler extends BaseHandler {
  async run() {
    try {
      const { userId } = this.args;
      const transaction = this.dbTransaction;

    //   // 1. Validate Input
    //   if (!userId) {
    //  throw new AppError(Errors.USER_NOT_EXISTS);
    //   }

      // 2. Fetch User to ensure existence
      const user = await db.User.findOne({
        where: { userId },
        include: [
          {
            model: db.UserDetails,
            as: "userDetails",
          },
        ],
        transaction,
      });

      if (!user) {
     throw new AppError(Errors.USER_NOT_EXISTS);
      }


      const userUpdatePayload = {
        isKycVerified: false,

      };
      const userDetailsUpdatePayload = {
        diditStatus: null,
        diditApplicantId: null,
        otherDiditDetails: null,
      };

      // 4. Execute Database Updates
      await Promise.all([
        // Update User Table
        db.User.update(userUpdatePayload, {
          where: { userId },
          transaction,
        }),

        // Update UserDetails Table
        db.UserDetails.update(userDetailsUpdatePayload, {
          where: { userId },
          transaction,
        }),
      ]);

           try {
        this.context.logger.info(`Executing Customer.io KYC Reset for user ${userId}`);

        const userAttributes = {
          verification_status: null, // Reset to null so they aren't 'verified' or 'declined'
          ssn_verified: false,
        };

        identifyUser(userId.toString(), userAttributes);

      } catch (error) {
        console.log(error)
      }



      return {
        success: true,
        message: "User KYC status has been successfully reset. The user can now retry verification.",
      };

    } catch (error) {
      // this.context.logger.error({ message: 'Error in AdminResetKycHandler', error });

      throw error;
    }
  }
}
