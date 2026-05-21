import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'

export class CreateWithdrawRequestHandler extends BaseHandler {
  async run () {
    let { id, withdrawAmount, name, transactionId, transaction, email, paymentProvider, otherAttributes, paymentAggregator } = this.args
    withdrawAmount = Math.abs(withdrawAmount.toFixed(2))

    const userWallet = await db.Wallet.findOne({
      where: { userId: id }
    })

    if (!userWallet) return { err_type: 'BadData', err: 'Wallet not exists', success: false }
    if ((userWallet.amount - userWallet.nonCashAmount) < withdrawAmount) return { err_type: 'BadData', err: 'Insufficient balance', success: false }

    const withdrawRequest = await db.WithdrawRequest.create(
      {
        userId: id,
        name,
        email,
        amount: withdrawAmount,
        paymentProvider,
        paymentAggregator,
        transactionId,
        ...otherAttributes
      },
      { transaction }
    )

    return { err: null, success: true, withdrawRequest }
  }
}
