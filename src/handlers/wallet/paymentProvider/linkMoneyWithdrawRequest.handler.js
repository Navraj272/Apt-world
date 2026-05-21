import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import config from '@src/configs/app.config'
import { BaseHandler } from '@src/libs/baseHandler'
import { LinkMoneyAxios } from '@src/libs/axios/linkMoney.axios'
import { PAYMENT_PROVIDER } from '@src/utils/constants/public.constants'
import { LINKMONEY_ACCOUNT_HOLDER_TYPE, LINKMONEY_PAYMENT_DESCRIPTION } from '@src/utils/constants/paymentProvider/linkMoney.constants'
import { CURRENCY } from '@src/utils/constants/paymentProvider/commanPayment.constants'
import db from '@src/db/models'
import dayjs from 'dayjs'

export class LinkMoneyWithdrawRequestHandler extends BaseHandler {
    async run() {
        const { userId, amount } = this.args

        const referenceId = `${PAYMENT_PROVIDER.LINK_MONEY}-${userId}-${dayjs().valueOf()}`

        const userDetails = await db.UserDetails.findOne({
            where: { userId },
            attributes: ['customerId'],
        })

        if (!userDetails.customerId) {
            Logger.info(userDetails.customerId, 'Customer ID is null')
            throw new AppError(Errors.MISSING_CUSTOMER_ID)
        }

        const data = {
            destination: {
                id: userDetails.customerId,
                type: LINKMONEY_ACCOUNT_HOLDER_TYPE.CUSTOMER
            },
            source: {
                id: config.get('linkMoney.merchantId'),
                type: LINKMONEY_ACCOUNT_HOLDER_TYPE.MERCHANT
            },
            amount: {
                currency: CURRENCY.USD,
                value: amount
            },
            clientReferenceId: referenceId,
            softDescriptor: LINKMONEY_PAYMENT_DESCRIPTION.REDEEM_REQUEST_FROM_USER,
            requestKey: referenceId
        }

        const linkMoneyApI = new LinkMoneyAxios()
        const response = await linkMoneyApI.requestPayment(data)

        if (response.paymentStatus !== 'AUTHORIZED' && response.paymentStatus !== 'PENDING') {
            Logger.error(response.errorDetails, `Payment failed: ${paymentId}`)
            throw new AppError(Errors.PAYMENT_FAILED, { error: response.errorDetails.errorMessage })
        }

        return { success: true, message: "Redeem processed successfully", response }
    }
}