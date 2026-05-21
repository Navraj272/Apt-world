import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { TransactionHandlerHandler } from "@src/handlers/wallet/transactionHandler.handler";
import { serverDayjs } from "@src/libs/dayjs";
import { BaseHandler } from "@src/libs/baseHandler";
import {
  COINS,
  CUSTOMER_IO_CONSTANTS,
  POSTAL_CODE_STATUS,
  TRANSACTION_PURPOSE,
  TRANSACTION_STATUS,
} from "@src/utils/constants/public.constants";
import { trackEvent } from "@src/libs/customerio";
import { Logger } from '@src/libs/logger'
import { activityAffiliateUser } from "@src/helpers/affiliate.helpers";

export class UpdatePostalCodeRequestStatusHandler extends BaseHandler {
  async run() {
    const { postalCodeId, status, authenticatedAdminId} = this.args;

    const transaction = this.context.sequelizeTransaction;

    if (
      ![POSTAL_CODE_STATUS.APPROVED, POSTAL_CODE_STATUS.REJECTED].includes(
        status
      )
    ) {
      throw new AppError(Errors.INVALID_STATUS);
    }
    const postalCode = await db.AmoeRequest.findOne({
      where: { id: postalCodeId },
      transaction,
    });

    if (!postalCode) {
      throw new AppError(Errors.POSTAL_CODE_NOT_FOUND);
    }

    if (postalCode.status !== POSTAL_CODE_STATUS.PENDING) {
      throw new AppError(Errors.INVALID_STATUS_TRANSITION);
    }

    const gcCoinValue = postalCode?.gcCoin;
    const scCoinValue = postalCode?.scCoin;

    postalCode.status = status;
    postalCode.updatedAt = serverDayjs();
    await postalCode.save({ transaction });

    if (status === POSTAL_CODE_STATUS.APPROVED) {
      if (gcCoinValue > 0) {
        await TransactionHandlerHandler.execute(
          {
            userId: postalCode.userId,
            amount: gcCoinValue,
            currencyCode: COINS.GOLD_COIN,
            purpose: TRANSACTION_PURPOSE.POSTAL_CODE,
            status: TRANSACTION_STATUS.SUCCESS,

          },
          this.context
        );
      }

      if (scCoinValue > 0) {
        const scTransaction = await TransactionHandlerHandler.execute(
          {
            userId: postalCode.userId,
            amount: scCoinValue,
            currencyCode: COINS.SWEEP_COIN.PURCHASE_SWEEP_COIN,
            purpose: TRANSACTION_PURPOSE.POSTAL_CODE,
            status: TRANSACTION_STATUS.SUCCESS,

          },
          this.context
        );

        try {
           const user = await db.User.findOne({ where: { userId: postalCode.userId }, attributes: ['cxToken', 'isAffiliateActive'] })

           if (user.cxToken && user.isAffiliateActive) {
           activityAffiliateUser(
            postalCode.userId,
            "bonuses", // activityType (you can rename based on reporting needs)
            scTransaction.transaction.dataValues.transactionId,
            scCoinValue
          );
        }

        } catch (err) {
            Logger.error("Failed to send Affnook event", {
            error: err,
            userId: postalCode.userId,
            transactionId: scTransaction.transaction.dataValues.transactionId,
          })
        }
        try {
           trackEvent(
            postalCode.userId,
            CUSTOMER_IO_CONSTANTS.POSTALCODE_REQUEST_UPDATED,
            { 
              bonus_type: "postal_code",
              postalCodeId: postalCode.id,
              transactionId: scTransaction.transaction.dataValues.transactionId,
              scCoinValue,
              gcCoinValue,
              updated_by_admin_id: authenticatedAdminId
            }
          );
        } catch (err) {
       Logger.error("Failed to send Customer.io event", {
            error: err,
            userId: postalCode.userId,
            transactionId: scTransaction.transaction.transactionId,
          })
        }
      }
    }

    return {
      postalCode,
      gcCoin: gcCoinValue,
      scCoin: scCoinValue,
    };
  }
}
