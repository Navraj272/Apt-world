import { COINS, TRANSACTION_PURPOSE } from "@src/utils/constants/public.constants";

export const manageWaletSchema = {
  body: {
    type: 'object',
    properties: {
      userId: { type: 'string' },
      authenticatedAdminId: { type: ['string', 'number'] },
      amount: { type: 'number', minimum: 0.1 },
      currencyCode: { enum: [COINS.GOLD_COIN, COINS.SWEEP_COIN.PURCHASE_SWEEP_COIN, COINS.SWEEP_COIN.REDEEMABLE_SWEEP_COIN] },
      purpose: { enum: Object.values(TRANSACTION_PURPOSE) }
    },
    required: ['userId', 'amount', 'currencyCode']
  }
}
