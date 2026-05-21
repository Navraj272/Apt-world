import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { HandleFyntekRedeemHandler } from '@src/handlers/wallet/paymentProvider/handleFyntekWithdrawRequest.handler'
import { BaseHandler } from '@src/libs/baseHandler'
import { trackEvent } from '@src/libs/customerio'
import { CUSTOMER_IO_CONSTANTS, PAYMENT_PROVIDER, TRANSACTION_STATUS, WITHDRAWAL_STATUS } from '@src/utils/constants/public.constants'

export class AcceptWithdrawRequestHandler extends BaseHandler {
  async run() {
    const { withdrawalId , authenticatedAdminId } = this.args
    const transaction = this.dbTransaction

    const withdrawalRequest = await db.Withdrawal.findOne({
      where: { id: withdrawalId, status: WITHDRAWAL_STATUS.PENDING },
      transaction
    })

    if (!withdrawalRequest) {
      throw new AppError(Errors.WITHDRAW_REQUEST_NOT_FOUND)
    }

    const redeemTransaction = await db.Transaction.findOne({
      where: {
        withdrawalId,
        status: TRANSACTION_STATUS.PENDING
      },
      transaction
    })

    if (!redeemTransaction) {
      throw new AppError(Errors.TRANSACTION_NOT_FOUND)
    }



let customer ;
    const moreDetails = redeemTransaction.moreDetails
    const provider = redeemTransaction.paymentProvider

let billingAddress = null;

    // 3. FIX: Only run the query if billingAddressId exists
    if (moreDetails?.billingAddressId) {
        billingAddress = await db.BillingAddress.findOne({
            where: { id: moreDetails.billingAddressId, userId: redeemTransaction.userId },
            transaction
        });
    }


    switch (provider) {
      case PAYMENT_PROVIDER.FYNTEK: {
        const paymentMethod = moreDetails?.paymentMethod
        const card = paymentMethod === 'BASIC_CARD' ? moreDetails?.card : null

        let address, cryptoCurrency, tokenContractStandard;
        if (paymentMethod === 'CRYPTO') {
          address = moreDetails.cryptoWalletAddress;
          cryptoCurrency = moreDetails.cryptoCurrency;
          tokenContractStandard = moreDetails.network;
        }
        if(paymentMethod == "BANKTRANSFER"){
        customer= moreDetails.customer
        }
        const response = await HandleFyntekRedeemHandler.execute({
          authenticatedAdminId,
          userId: withdrawalRequest.userId,
          paymentMethod,
          amount: moreDetails?.finalAmount,   //       paymentMethod,
          card,
          cryptoAddress: address,
          cryptoCurrency,
          tokenContractStandard,
          customer,
          billingAddress,
          referenceId : redeemTransaction.paymentProviderId

        }, this.context)

        const { result } = response?.data || {}

        trackEvent( withdrawalRequest.userId.toString(),CUSTOMER_IO_CONSTANTS.REDEMPTION_STATUS_UPDATED ,{
           redemption_id : withdrawalId,
           transaction_id : redeemTransaction.transactionId,
           previous_status : WITHDRAWAL_STATUS.PENDING,
           new_status : (result?.state === 'COMPLETED' || result?.state === 'PENDING') ? WITHDRAWAL_STATUS.SUCCESS : WITHDRAWAL_STATUS.PENDING,
           reviewer_id: authenticatedAdminId,
           reason : "Admin Accepted",
        })

        if (result?.id && (result?.state === 'COMPLETED' || result?.state === 'PENDING')) {
          redeemTransaction.paymentProviderId = result.id
          this.markApproved(withdrawalRequest, redeemTransaction)
        }

        break
      }

      default: {
        withdrawalRequest.status = WITHDRAWAL_STATUS.CANCELLED
        throw new AppError(Errors.UNSUPPORTED_PAYMENT_PROVIDER)
      }
    }

    await withdrawalRequest.save({ transaction })
    await redeemTransaction.save({ transaction })

    return { success: true, withdrawalRequest }
  }

  markApproved(withdrawalRequest, redeemTransaction, additionalDetails = null) {
    withdrawalRequest.status = WITHDRAWAL_STATUS.SUCCESS
    withdrawalRequest.approvedAt = new Date()
    redeemTransaction.status = TRANSACTION_STATUS.APPROVED

    if (additionalDetails) {
      withdrawalRequest.moreDetails = {
        // ...existingWithdrawalDetails,
        ...additionalDetails
      }

      redeemTransaction.moreDetails = {
        // ...existingRedeemDetails,
        ...additionalDetails
      }
    }
  }
}
