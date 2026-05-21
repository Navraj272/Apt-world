import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { COINS, PAYMENT_PROVIDER, TRANSACTION_PURPOSE, TRANSACTION_STATUS } from '@src/utils/constants/public.constants'
import { TransactionHandlerHandler } from './transactionHandler.handler'
import { trackEvent } from '@src/libs/customerio'
import { CUSTOMER_IO_CONSTANTS } from '@src/utils/constants/public.constants'
import { Logger } from '@src/libs/logger'
import { activityAffiliateUser } from '@src/helpers/affiliate.helpers'

export class ManageWalletHandler extends BaseHandler {
  async run() {
    const transaction = this.dbTransaction
    let { userId, amount, authenticatedAdminId, purpose, currencyCode } = this.args

    const userDetails = await db.User.findOne({
      attributes: ['userId', 'username','cxToken','isAffiliateActive'],
      where: { userId },
      transaction
    })
    if (!userDetails) throw new AppError(Errors.USER_NOT_EXISTS)

    // currencyCode = currencyCode == COINS.GOLD_COIN ? COINS.GOLD_COIN : purpose === TRANSACTION_PURPOSE.REDEEM ? COINS.SWEEP_COIN.REDEEMABLE_SWEEP_COIN : COINS.SWEEP_COIN.PURCHASE_SWEEP_COIN
    const data = await TransactionHandlerHandler.execute({
      adminId: authenticatedAdminId, userId, amount, currencyCode,
      status: TRANSACTION_STATUS.SUCCESS,
      paymentProvider: PAYMENT_PROVIDER.OFFLINE,
      purpose: purpose,
    }, this.context)
          
          try {
        Logger.info(`Executing Customer.io wallet_balance_update_from_bo event for userId ${userId} `);
          trackEvent(userId.toString(), CUSTOMER_IO_CONSTANTS.WALLET_BALANCE_UPDATED_FROM_BO, {
            transaction_type: purpose,
            reviewer_id : authenticatedAdminId,
            currencyCode : currencyCode,
            amount: amount,
            payment_provider : 'Offline',
            transaction_id : data.transaction.dataValues.transactionId
          });
    } catch (error) {
      Logger.error({
        message: 'Failed to track Customer.io wallet_balance_update_from_bo event',
        userId,
        error: error.message,
      })
    }

    if(currencyCode === COINS.GOLD_COIN){
      try {
        Logger.info(`Executing Customer.io gc_wallet_balance_update_from_bo event for userId ${userId} `);
          trackEvent(userId.toString(), CUSTOMER_IO_CONSTANTS.GC_WALLET_BALANCE_UPDATED_FROM_BO, {
            transaction_type: purpose,
            reviewer_id : authenticatedAdminId,
            currencyCode : currencyCode,
            amount: amount,
            payment_provider : 'Offline',
            transaction_id : data.transaction.dataValues.transactionId
          });
    } catch (error) {
      Logger.error({
        message: 'Failed to track Customer.io gc_wallet_balance_update_from_bo event',
        userId,
        error: error.message,
      })
    }
    }

    if (purpose === TRANSACTION_PURPOSE.BONUS && (currencyCode === COINS.SWEEP_COIN.PURCHASE_SWEEP_COIN ||currencyCode === COINS.SWEEP_COIN.REDEEMABLE_SWEEP_COIN)
){
     try {
        Logger.info(`Executing affnook wallet_balance_update_from_bo event for userId ${userId} `);
        if (userDetails.cxToken && userDetails.isAffiliateActive) {
          activityAffiliateUser(
           userId,
          'bonuses',
           data.transaction.dataValues.transactionId,
           parseFloat(amount)
        );
      }

        trackEvent(userId.toString(),CUSTOMER_IO_CONSTANTS.MANUAL_BONUS_CLAIMED,{
            bonus_type: "manual_bonus",
            bonus_amount: parseFloat(amount),
            transaction_id : data.transaction.dataValues.transactionId,
            reviewer_id: authenticatedAdminId,
        } );
    } catch (error) {
      Logger.error({
        message: 'Failed to track affnook wallet_balance_update_from_bo event',
        userId,
        error: error.message,
      })
    }
  }


   if (purpose === TRANSACTION_PURPOSE.BONUS && currencyCode === COINS.GOLD_COIN){
    try{
       Logger.info(`Executing Customer.io manual_bonus gc event for userId ${userId} `);
       trackEvent(userId.toString(),CUSTOMER_IO_CONSTANTS.GC_MANUAL_BONUS_CLAIMED,{
            bonus_type: "manual_bonus",
            gc_bonus_amount: parseFloat(amount),
            transaction_id : data.transaction.dataValues.transactionId,
            reviewer_id: authenticatedAdminId,
        } );
      }catch(error){
         Logger.error({
        message: 'Failed to track Customer.io gc_wallet_balance_update_from_bo event',
        userId,
        error: error.message,
      })
      }
   }
    return { success: true }
  }
}
