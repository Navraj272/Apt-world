import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { Logger } from '@src/libs/logger'
import { PAYMENT_PROVIDER } from '@src/utils/constants/public.constants'
import { BONUS_PURPOSES, COINS, TRANSACTION_PURPOSE } from '@src/utils/constants/public.constants'
import { TransactionHandlerHandler } from '../wallet/transactionHandler.handler'


export class CashbackCommissionService extends BaseHandler {
  async run() {
    const t = this.dbTransaction
    try {
      const bonusPurposesList = BONUS_PURPOSES.map(p => `'${p}'`).join(',')

      const result = await db.sequelize.query(
        `WITH time_bounds AS (
          SELECT
            -- Compute in PST, then convert back to UTC for comparison
            (date_trunc('week', NOW() AT TIME ZONE 'UTC' AT TIME ZONE 'PST') + INTERVAL '2 days 9 hours') AT TIME ZONE 'PST' AS this_wed_9am_utc,
            (date_trunc('week', NOW() AT TIME ZONE 'UTC' AT TIME ZONE 'PST') + INTERVAL '2 days 9 hours' - INTERVAL '7 days') AT TIME ZONE 'PST' AS last_wed_9am_utc
        ),
        ggr_data AS (
          SELECT
            ct.user_id,
            SUM(CASE WHEN tl.currency_code != 'GC' AND tl.direction = 'Debit' THEN tl.amount ELSE 0 END) AS total_bet,
            SUM(CASE WHEN tl.currency_code != 'GC' AND tl.direction = 'Credit' THEN tl.amount ELSE 0 END) AS total_win
          FROM transaction_ledgers tl
          JOIN casino_transactions ct ON tl.transaction_id = ct.id AND tl.transaction_type = 'casino'
          JOIN time_bounds tb ON true
          WHERE tl.created_at >= tb.last_wed_9am_utc
            AND tl.created_at < tb.this_wed_9am_utc
          GROUP BY ct.user_id
        ),
        bonus_data AS (
          SELECT
            bt.user_id,
            SUM(CASE WHEN tl.currency_code != 'GC' AND bt.purpose IN (${bonusPurposesList}) THEN tl.amount ELSE 0 END) AS total_bonus
          FROM transaction_ledgers tl
          JOIN transactions bt ON bt.transaction_id = tl.transaction_id AND tl.transaction_type = 'banking'
          JOIN time_bounds tb ON true
          WHERE tl.created_at >= tb.last_wed_9am_utc
            AND tl.created_at < tb.this_wed_9am_utc
          GROUP BY bt.user_id
        )
        SELECT
          g.user_id,
          COALESCE(g.total_bet, 0) AS total_bet,
          COALESCE(g.total_win, 0) AS total_win,
          COALESCE(b.total_bonus, 0) AS total_bonus,
          ud.vip_tier_id,
          r.rackback,
          ROUND((COALESCE(g.total_bet, 0) - COALESCE(g.total_win, 0) - COALESCE(b.total_bonus, 0)) * (COALESCE(r.rackback, 0)::numeric / 100), 2) AS cashbackAmount
        FROM ggr_data g
        LEFT JOIN bonus_data b ON g.user_id = b.user_id
        INNER JOIN user_details ud ON g.user_id = ud.user_id
        INNER JOIN rewards r ON ud.vip_tier_id = r.vip_tier_id;`,
        { type: db.Sequelize.QueryTypes.SELECT, transaction: t }
      )

      const currencyCode = COINS.SWEEP_COIN.PURCHASE_SWEEP_COIN

      for (const row of result) {
        const { user_id, cashbackamount } = row

        if (cashbackamount > 0) {
          await TransactionHandlerHandler.execute({
            userId: user_id,
            amount: cashbackamount,
            currencyCode: currencyCode,
            status: 'successful',
            purpose: TRANSACTION_PURPOSE.WEEKLY_CASHBACK,
            paymentProvider: PAYMENT_PROVIDER.OFFLINE,
            moreDetails: { note: 'Weekly cashback reward based on VIP tier' }
          }, this.context)
        }
      }

      Logger.info(' Weekly cashback processed successfully based on VIP tiers.')
      return { success: true }
    } catch (err) {
      Logger.error(err, ' Error processing cashback with VIP tier logic:')
    }
  }
}
