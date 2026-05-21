import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { PAYMENT_PROVIDER, TRANSACTION_STATUS } from '@src/utils/constants/public.constants'
import { TransactionHandlerHandler } from './transactionHandler.handler'
import { Logger } from '@src/libs/logger';

export class ManageWalletFromCioWebhookHandler extends BaseHandler {
  async run() {
    const transaction = this.dbTransaction
    let { userId, amount, purpose, currencyCode, authenticatedAdminId, reason} = this.args

    const userDetails = await db.User.findOne({
      attributes: ['userId', 'username'],
      where: { userId },
      transaction
    })

    if (!userDetails) {
      Logger.warn(`User not found ${userId}`)
      throw new AppError(Errors.USER_NOT_EXISTS)
    }

    Logger.info(`User found', ${userDetails.userId}`)

    const data = await TransactionHandlerHandler.execute({
      adminId: authenticatedAdminId,
      userId,
      amount,
      currencyCode,
      status: TRANSACTION_STATUS.SUCCESS,
      paymentProvider: PAYMENT_PROVIDER.OFFLINE,
      purpose: purpose,
      moreDetails: {
        reason,
        initiatedFrom: "customer.io"
      }
    }, this.context)

    Logger.info('Transaction executed', {
      userId,
      amount
    })

    return { success: true }
  }
}