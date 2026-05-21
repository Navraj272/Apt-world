import { COINS, TRANSACTION_PURPOSE } from "@src/utils/constants/public.constants";

export const getTransactionsSchema = {
  query: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      limit: { type: 'string' },
      userId: { type: 'string' },
      pageNo: { type: 'string' },
      endDate: { type: 'string' },
      startDate: { type: 'string' },
      minAmount: { type: 'string' },
      maxAmount: { type: 'string' },
      orderBy: { type: 'string' },
      orderDirection: { type: 'string' },
      currencyCode: { enum: [COINS.GOLD_COIN, 'SC'] },
      purpose: { enum: Object.values(TRANSACTION_PURPOSE) },
      transactionId: { type: ['number','string'] },
      paymentProvider: { type: 'string' },
      providerTransactionId: { type: ['number','string'] },
      promoCode: { type: ['string'] }
    }
  }
}
