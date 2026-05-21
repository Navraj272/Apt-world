import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { Logger } from '@src/libs/logger'
import {
  BONUS_PURPOSES,
  COINS,
  PAYMENT_PROVIDER,
  TRANSACTION_PURPOSE,
  TRANSACTION_STATUS
} from '@src/utils/constants/public.constants'
import { TransactionHandlerHandler } from '../wallet/transactionHandler.handler'


export class AffiliateCommissionService extends BaseHandler {
  async run() {
    const t = this.dbTransaction

    try {
      const bonusPurposesList = BONUS_PURPOSES.map(p => `'${p}'`).join(',')

      const results = await db.sequelize.query(
        `WITH time_bounds AS (
        SELECT
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
          ),
          user_commissions AS (
            SELECT
              g.user_id,
              u.ref_parent_id,
              COALESCE(g.total_bet, 0) AS total_bet,
              COALESCE(g.total_win, 0) AS total_win,
              COALESCE(b.total_bonus, 0) AS total_bonus,
              r.commission_rate as commission_rate,
              ROUND(
                ((COALESCE(g.total_bet::numeric, 0) - COALESCE(g.total_win::numeric, 0)) - COALESCE(b.total_bonus::numeric, 0)) *
                (COALESCE(r.commission_rate::numeric, 0) / 100),
                2
              ) AS affiliate_commission
            FROM ggr_data g
            LEFT JOIN bonus_data b ON g.user_id = b.user_id
            INNER JOIN users u ON g.user_id = u.user_id
            INNER JOIN user_details ud ON g.user_id = ud.user_id

          )
          SELECT
            uc.ref_parent_id AS affiliate_id,
            uc.commission_rate as commission,
            SUM(uc.affiliate_commission) AS total_affiliate_commission
          FROM user_commissions uc
          WHERE uc.ref_parent_id IS NOT NULL
          GROUP BY uc.ref_parent_id, commission;
        `,
        {
          type: db.Sequelize.QueryTypes.SELECT,
          transaction: t
        }
      )

      Logger.info(`Affiliate commission summary:`, results)

      const currencyCode = COINS.SWEEP_COIN.PURCHASE_SWEEP_COIN

      await Promise.all(results.map(row => {
        const { affiliate_id, total_affiliate_commission } = row
        if (total_affiliate_commission > 0) {
          return TransactionHandlerHandler.execute(
            {
              userId: affiliate_id,
              amount: total_affiliate_commission,
              currencyCode,
              status: TRANSACTION_STATUS.SUCCESS,
              purpose: TRANSACTION_PURPOSE.WEEKLY_COMMISION,
              actioneeId: 1,
              paymentProvider: PAYMENT_PROVIDER.OFFLINE
            },
            this.context
          )
        }
      }))


      Logger.info('✅ Weekly affiliate commission settled successfully.')
      return { success: true }
    } catch (error) {
      Logger.error(error, '❌ Error settling weekly affiliate commissions:', error)
    }
  }
}
