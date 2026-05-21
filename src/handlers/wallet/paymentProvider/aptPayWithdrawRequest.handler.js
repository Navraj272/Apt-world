import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { AptPayAxios } from '@src/libs/axios/aptPay.axios'
import { BaseHandler } from '@src/libs/baseHandler'
import { Logger } from '@src/libs/logger'
import { APTPAY_TRANSACTION_TYPE, CURRENCY } from '@src/utils/constants/paymentProvider/aptPay.constants'

export class AptPayWithdrawRequestHandler extends BaseHandler {
    async run() {
        const { userId, currency = CURRENCY.USD, transactionId, amount, transactionType, disbursementNumber,expirationDate } = this.args
        const transaction = this.dbTransaction

        const userDetails = await db.UserDetails.findOne({
            where: { userId },
            transaction
        })

        const withdrawalOptions = {
            amount,
            currency,
            identityId: userDetails.identity,
            referenceId: transactionId,
            disbursementNumber,
            expirationDate,
        }
        Logger.info(withdrawalOptions, "Error: aptpay withdrawalOptions, withdrawalOptions:")

        if (transactionType !== APTPAY_TRANSACTION_TYPE.CARD) {
            Logger.error(transactionType, "Error: aptpay transaction type wrong, transactionType:")
            throw new Error('Invalid transaction type')
        }

        const aptPayApI = new AptPayAxios()
        const response = await aptPayApI.withdrawal(withdrawalOptions)

        if (!response){
            Logger.error(response, "Error: aptpay transaction failed, response:")
            throw new AppError(Errors.PROVIDER_INACTIVE)
        }

        await db.Transaction.update(
            { paymentProviderId: response?.id },
            { where: { transactionId }, transaction }
        )
        
        return { success: true, message: "Redeem processed successfully", response }
    }
}