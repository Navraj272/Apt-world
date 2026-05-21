import { CASINO_TRANSACTION_PURPOSE, COINS } from "@src/utils/constants/public.constants";

export const getCasinoTransactionsSchema = {
  query: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      limit: { type: 'string' },
      userId: { type: 'string' },
      pageNo: { type: 'string' },
      endDate: { type: 'string' },
      startDate: { type: 'string' },
      gameName: { type: 'string' },
      minBetAmount: { type: 'string' },
      maxBetAmount: { type: 'string' },
      minWinAmount: { type: 'string' },
      maxWinAmount: { type: 'string' },
      minMultiplier: { type: 'string' },
      maxMultiplier: { type: 'string' },
      orderBy: { type: 'string', enum: ['created_at', 'bet_amount', 'win_amount', 'multiplier','ggr'] },
      orderDirection: { type: 'string', enum: ['ASC', 'DESC'] },
      currencyCode: { enum: [COINS.GOLD_COIN, 'SC'], default: 'SC' },
      purpose: { enum: Object.values(CASINO_TRANSACTION_PURPOSE) },
      gameRoundId: { type: 'string' }
    }
  }
}