import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { LEDGER_DIRECTIONS, LEDGER_TRANSACTION_TYPES, LEDGER_TYPES, TRANSACTION_PURPOSE } from '@src/utils/constants/public.constants'
import { CreateLedgerHandlerHandler } from './createLedgerHandler.handler'


export class TransactionHandlerHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const {
      adminId, userId, amount, currencyCode, status, purpose, paymentTransactionId,
      paymentProvider, moreDetails
    } = this.args
    const transaction = this.dbTransaction
    const direction = this.getLedgerDirection(purpose)
    try {
      const bankingTransaction = await db.Transaction.create({
        userId,
        actioneeId: adminId,
        purpose: purpose,
        paymentProvider: paymentProvider,
        [currencyCode === 'GC' ? 'gc' : 'sc']: amount,
        moreDetails,
        status
      }, { transaction })

      const ledger = await CreateLedgerHandlerHandler.execute({
        transactionId: bankingTransaction.transactionId,
        transactionType: LEDGER_TRANSACTION_TYPES.BANKING,
        currencyCode,
        userId,
        direction: LEDGER_DIRECTIONS[purpose],
        amount
      }, this.context)

      return { transaction: { ...bankingTransaction, ledger } }
    } catch (error) {
      throw new AppError({ ...Errors.INTERNAL_ERROR, message: error })
    }
  }

  getLedgerDirection(purpose) {
    // Local mapping for the new Back Office requirements
    const MANUAL_DIRECTIONS = {
      // Adds Money (+)
      [TRANSACTION_PURPOSE.MANUAL_CREDIT]: LEDGER_TYPES.CREDIT, 
      [TRANSACTION_PURPOSE.BONUS]: LEDGER_TYPES.CREDIT,
      [TRANSACTION_PURPOSE.REFUND]: LEDGER_TYPES.CREDIT,
      
      // Removes Money (-)
      [TRANSACTION_PURPOSE.MANUAL_DEBIT]: LEDGER_TYPES.DEBIT,
      [TRANSACTION_PURPOSE.SC_EXPIRY]: LEDGER_TYPES.DEBIT,
      [TRANSACTION_PURPOSE.ACCOUNT_CLOSURE]: LEDGER_TYPES.DEBIT,
      [TRANSACTION_PURPOSE.CONFISCATION]: LEDGER_TYPES.DEBIT,
    }

    // Return the manual mapping if it exists, otherwise use the existing imported constant
    return MANUAL_DIRECTIONS[purpose] || LEDGER_DIRECTIONS[purpose]
  }
}
