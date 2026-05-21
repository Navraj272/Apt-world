import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import {
  COINS,
  PAYMENT_PROVIDER,
  TRANSACTION_PURPOSE,
  TRANSACTION_STATUS,
  WITHDRAWAL_STATUS,
  CACHE_KEYS,
  CUSTOMER_IO_CONSTANTS
} from "@src/utils/constants/public.constants"
import { USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from '@src/utils/constants/responsibleGambling.constants'
import { TransactionHandlerHandler } from '@src/handlers/wallet/transactionHandler.handler'
import { trackEvent } from "@src/libs/customerio"
import { deleteCache } from "@src/libs/redis"

export class RejectWithdrawRequestHandler extends BaseHandler {
  async run() {
    const { withdrawalId, reason, authenticatedAdminId } = this.args
    const transaction = this.dbTransaction

    const withdrawalRequest = await db.Withdrawal.findOne({
      where: { id: withdrawalId, status: WITHDRAWAL_STATUS.PENDING },
      transaction,
    })

    if (!withdrawalRequest) {
      throw new AppError(Errors.WITHDRAW_REQUEST_NOT_FOUND)
    }

    const redeemTransaction = await db.Transaction.findOne({
          where: {
            withdrawalId: withdrawalId,
            status: TRANSACTION_STATUS.PENDING
          },
          transaction,
        })

    if(!redeemTransaction){
      throw new AppError(Errors.TRANSACTION_NOT_FOUND);
    }

    redeemTransaction.status = TRANSACTION_STATUS.REJECTED;
    await redeemTransaction.save({transaction});
    withdrawalRequest.status = WITHDRAWAL_STATUS.CANCELLED
    withdrawalRequest.confirmedAt = new Date()
    withdrawalRequest.comment = reason || "Admin Rejected"
    await withdrawalRequest.save({ transaction })

    const { amount, userId } = withdrawalRequest;

    const data = await TransactionHandlerHandler.execute(
      {
        adminId: authenticatedAdminId,
        userId,
        amount,
        currencyCode: COINS.SWEEP_COIN.REDEEMABLE_SWEEP_COIN,
        status: TRANSACTION_STATUS.SUCCESS,
        paymentProvider: PAYMENT_PROVIDER.OFFLINE,
        purpose: TRANSACTION_PURPOSE.REDEEM_REFUND,
      },
      this.context
    )


    trackEvent(userId.toString(), CUSTOMER_IO_CONSTANTS.REDEMPTION_STATUS_UPDATED,{
      redemption_id : withdrawalId,
      transaction_id : data.transaction.dataValues.transactionId,
      previous_status : WITHDRAWAL_STATUS.PENDING,
      new_status : WITHDRAWAL_STATUS.CANCELLED,
      reviewer_id: authenticatedAdminId,
      reason : reason || "Admin Rejected"
    })


    let userWithdrawalLimit = await db.UserLimit.findOne({
      where: {
          key: USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.DAILY_WITHDRAWAL_LIMIT,
          userId
      }
    })

    if (!userWithdrawalLimit) {
      throw new AppError(Errors.USER_WITHDRAWAL_LIMIT_NOT_FOUND)
    }

    userWithdrawalLimit.value = +userWithdrawalLimit.value - amount
    await userWithdrawalLimit.save()
    try {
       const cooldownKey = `${CACHE_KEYS.FYNTEK_REDEEM_COOLDOWN}:${userId}`;
        await deleteCache(cooldownKey);
    } catch (error) {

    }


    return {
      success: true,
    }
  }
}
