import { COINS, DEBIT_TRANSACTION_PURPOSE_CIO } from "@src/utils/constants/public.constants";

export const manageWalletFromCioWebhookSchema = {
  body: {
    type: 'object',
    properties: {
      userId: { type: 'string' },
      authenticatedAdminId: { type: ['string', 'number'] },
      amount: { type: 'number', minimum: 0.1 },
      currencyCode: { enum: [COINS.GOLD_COIN, COINS.SWEEP_COIN.PURCHASE_SWEEP_COIN, COINS.SWEEP_COIN.REDEEMABLE_SWEEP_COIN] },
      reason: { type : 'string'},
      purpose: { enum: Object.values(DEBIT_TRANSACTION_PURPOSE_CIO) }
    },
    required: ['userId', 'amount', 'currencyCode']
  }
}
