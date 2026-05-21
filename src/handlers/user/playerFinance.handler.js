// import db from '@src/db/models'
// import { BaseHandler } from '@src/libs/baseHandler'
// import dayjs from 'dayjs'
// import timezone from 'dayjs/plugin/timezone'
// import utc from 'dayjs/plugin/utc'


// export class PlayerFinanceHandler extends BaseHandler {
//   async run() {
//     const { userId, startDate: inputStartDate, endDate: inputEndDate } = this.args
//    console.log(this.args,"args_here")
//     if (!userId) {
//       throw new Error('userId is required')
//     }

// dayjs.extend(utc)
// dayjs.extend(timezone)

// const PST = 'America/Los_Angeles'

// let startDate;
// let endDate;

// if (inputStartDate && inputEndDate) {
//   startDate = dayjs(inputStartDate)
//     .tz(PST)
//     .startOf('day')
//     .toISOString()

//   endDate = dayjs(inputEndDate)
//     .tz(PST)
//     .add(1, 'day')
//     .startOf('day')
//     .toISOString()
// } else {
//   const today = dayjs().tz(PST).startOf('day')
//   const startOfWeek = today.startOf('isoWeek')

//   startDate = startOfWeek.toISOString()
//   endDate = today.add(1, 'day').toISOString()
// }

//     console.log(startDate,endDate,"dates_here")

//     const replacements = {
//       userId,
//       startDate,
//       endDate
//     }

//     const query = `
//       WITH bonus_breakdown AS (
//     SELECT
//         t.purpose AS bonus_type,
//         COUNT(*) AS bonus_count,
//         SUM(t.sc)::numeric AS total_bonus_sc
//     FROM transactions t
//     WHERE t.user_id = :userId
//       AND t.purpose IN (
//             'bonus_cash','bonus_drop','bonus_rackback','weekly_cashback',
//             'weekly_commission','wheel_reward','welcome_bonus','postal_code',
//             'early_user_bonus','vip_rewarded'
//         )
//       AND t.created_at >= :startDate
//       AND t.created_at <  :endDate
//     GROUP BY t.purpose
// ),
// bonus_totals AS (
//     SELECT COALESCE(SUM(total_bonus_sc),0)::numeric AS total_bonus_sc
//     FROM bonus_breakdown
// ),
// casino_totals AS (
//     SELECT
//         COALESCE(SUM(CASE
//             WHEN ct.action_type = 'casino_bet'
//              AND ct.coin_type != 'GC'
//             THEN ct.coin ELSE 0 END),0)::numeric AS total_wagered_sc,

//         COALESCE(SUM(CASE
//             WHEN ct.action_type IN ('casino_win','casino_refund')
//              AND ct.coin_type != 'GC'
//             THEN ct.coin ELSE 0 END),0)::numeric AS total_win_sc
//     FROM casino_transactions ct
//     WHERE ct.user_id = :userId
//       AND ct.created_at >= :startDate
//       AND ct.created_at <  :endDate
// ),
// purchase_redeem AS (
//     SELECT
//         COALESCE(SUM(
//             CASE
//                 WHEN t.purpose = 'purchase'
//                  AND t.status = 'successful'
//                  AND t.payment_provider != 'Offline'
//                  AND (t.more_details->>'amount') ~ '^[0-9]+(\\.[0-9]+)?$'
//                 THEN (t.more_details->>'amount')::numeric
//                 ELSE 0
//             END
//         ),0)::numeric AS purchased_amount,

//         COUNT(
//             CASE
//                 WHEN t.purpose = 'purchase'
//                  AND t.status = 'successful'
//                  AND t.payment_provider != 'Offline'
//                 THEN 1
//             END
//         ) AS purchased_count,

//         COALESCE(SUM(
//             CASE
//                 WHEN t.purpose = 'redeem'
//                  AND t.status IN ('successful','approved')
//                  AND t.payment_provider != 'Offline'
//                 THEN t.sc
//                 ELSE 0
//             END
//         ),0)::numeric AS redeemed_amount_sc,

//         COUNT(
//             CASE
//                 WHEN t.purpose = 'redeem'
//                  AND t.status IN ('successful','approved')
//                  AND t.payment_provider != 'Offline'
//                 THEN 1
//             END
//         ) AS redeemed_count
//     FROM transactions t
//     WHERE t.user_id = :userId
//       AND t.created_at >= :startDate
//       AND t.created_at <  :endDate
// )

// SELECT
//     pr.purchased_amount,
//     pr.purchased_count,
//     pr.redeemed_amount_sc,
//     pr.redeemed_count,
//     ct.total_wagered_sc,
//     ct.total_win_sc,
//     bt.total_bonus_sc,
//     (
//         ct.total_wagered_sc
//       - ct.total_win_sc
//       - bt.total_bonus_sc
//     )::numeric AS ngr,
//     (
//         SELECT jsonb_agg(
//             jsonb_build_object(
//                 'bonus_type', bb.bonus_type,
//                 'count', bb.bonus_count,
//                 'total_sc', bb.total_bonus_sc
//             )
//         )
//         FROM bonus_breakdown bb
//     ) AS bonus_breakdown
// FROM purchase_redeem pr
// CROSS JOIN casino_totals ct
// CROSS JOIN bonus_totals bt`

//     const [result] = await db.sequelize.query(query, {
//       replacements,
//       type: db.sequelize.QueryTypes.SELECT
//     })

//     return {
//       userId,
//       startDate,
//       endDate,
//       ...result
//     }
//   }
// }
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'


export class PlayerFinanceHandler extends BaseHandler {
  async run() {
    const { userId, startDate: inputStartDate, endDate: inputEndDate } = this.args
   console.log(this.args,"args_here")
    if (!userId) {
      throw new Error('userId is required')
    }

    dayjs.extend(utc)
    dayjs.extend(timezone)

    const PST = 'America/Los_Angeles'

    let startDate;
    let endDate;

    if (inputStartDate && inputEndDate) {
      startDate = dayjs(inputStartDate)
        .tz(PST)
        .startOf('day')
        .toISOString()

      endDate = dayjs(inputEndDate)
        .tz(PST)
        .add(1, 'day')
        .startOf('day')
        .toISOString()
    } else {
      const today = dayjs().tz(PST).startOf('day')
      const startOfWeek = today.startOf('isoWeek')

      startDate = startOfWeek.toISOString()
      endDate = today.add(1, 'day').toISOString()
    }

    console.log(startDate,endDate,"dates_here")

    const replacements = {
      userId,
      startDate,
      endDate
    }

    const query = `
        WITH bonus_types AS (
  SELECT unnest(ARRAY[
    'bonus_cash',
    'bonus_drop',
    'weekly_cashback',
    'weekly_commission',
    'wheel_reward',
    'welcome_bonus',
    'postal_code',
    'early_user_bonus',
    'vip_rewarded',
    'bonus_referral',
    'manual_bonus',
    'purchase_bonus',
    'free_spin_bonus'
  ])::text AS bonus_type
),

bonus_breakdown AS (
  SELECT
    bt.bonus_type,

    COUNT(
      CASE
        WHEN bt.bonus_type = 'purchase_bonus'
         AND t.purpose = 'purchase'
         AND t.status = 'successful'
         AND t.payment_provider != 'Offline'
         AND (t.more_details->>'amount') IS NOT NULL
         AND (t.more_details->>'amount') ~ '^[0-9]+(\\.[0-9]+)?$'
        THEN 1

        WHEN bt.bonus_type != 'purchase_bonus'
         AND t.purpose::text = bt.bonus_type
        THEN 1
      END
    ) AS bonus_count,

    COALESCE(
      SUM(
        CASE
          WHEN bt.bonus_type = 'purchase_bonus'
           AND t.purpose = 'purchase'
           AND t.status = 'successful'
           AND t.payment_provider != 'Offline'
           AND (t.more_details->>'amount') IS NOT NULL
           AND (t.more_details->>'amount') ~ '^[0-9]+(\\.[0-9]+)?$'
          THEN
            t.sc - (t.more_details->>'amount')::numeric

          WHEN t.purpose::text = bt.bonus_type
          THEN
            t.sc

          ELSE 0
        END
      ),
      0
    )::numeric AS total_bonus_sc

  FROM bonus_types bt
  LEFT JOIN transactions t
    ON t.user_id = :userId
   AND t.created_at >= :startDate
   AND t.created_at <  :endDate
  GROUP BY bt.bonus_type
),
    bonus_totals AS (
        SELECT COALESCE(SUM(total_bonus_sc),0)::numeric AS total_bonus_sc
        FROM bonus_breakdown
    ),
    casino_totals AS (
        SELECT
            COALESCE(SUM(CASE 
                WHEN ct.action_type = 'casino_bet'
                 AND ct.coin_type != 'GC'
                 AND ct.status = 'successful'
                THEN ct.coin ELSE 0 END),0)::numeric AS total_wagered_sc,

            COALESCE(SUM(CASE 
                WHEN ct.action_type IN ('casino_win','casino_refund')
                 AND ct.coin_type != 'GC'
                 AND ct.status = 'successful'
                THEN ct.coin ELSE 0 END),0)::numeric AS total_win_sc
        FROM casino_transactions ct
        WHERE ct.user_id = :userId
          AND ct.created_at >= :startDate
          AND ct.created_at <  :endDate
    ),
    purchase_redeem AS (
        SELECT
            COALESCE(SUM(
                CASE 
                    WHEN t.purpose = 'purchase'
                     AND t.status = 'successful'
                     AND t.payment_provider != 'Offline'
                     AND (t.more_details->>'amount') ~ '^[0-9]+(\\.[0-9]+)?$'
                    THEN (t.more_details->>'amount')::numeric
                    ELSE 0
                END
            ),0)::numeric AS purchased_amount,

            COUNT(
                CASE 
                    WHEN t.purpose = 'purchase'
                     AND t.status = 'successful'
                     AND t.payment_provider != 'Offline'
                    THEN 1
                END
            ) AS purchased_count,

            COALESCE(SUM(
                CASE 
                    WHEN t.purpose = 'redeem'
                     AND t.status IN ('successful','approved')
                     AND t.payment_provider != 'Offline'
                    THEN t.sc
                    ELSE 0
                END
            ),0)::numeric AS redeemed_amount_sc,

            COUNT(
                CASE 
                    WHEN t.purpose = 'redeem'
                     AND t.status IN ('successful','approved')
                     AND t.payment_provider != 'Offline'
                    THEN 1
                END
            ) AS redeemed_count
        FROM transactions t
        WHERE t.user_id = :userId
          AND t.created_at >= :startDate
          AND t.created_at <  :endDate
    )

    SELECT
        pr.purchased_amount,
        pr.purchased_count,
        pr.redeemed_amount_sc,
        pr.redeemed_count,
        ct.total_wagered_sc,
        ct.total_win_sc,
        bt.total_bonus_sc,
        (
            ct.total_wagered_sc
          - ct.total_win_sc
          - bt.total_bonus_sc
        )::numeric AS ngr,
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'bonus_type', bb.bonus_type,
                    'count', bb.bonus_count,
                    'total_sc', bb.total_bonus_sc
                )
            )
            FROM bonus_breakdown bb
        ) AS bonus_breakdown
    FROM purchase_redeem pr
    CROSS JOIN casino_totals ct
    CROSS JOIN bonus_totals bt`

    const [result] = await db.sequelize.query(query, {
      replacements,
      type: db.sequelize.QueryTypes.SELECT
    })

    return {
      userId,
      startDate,
      endDate,
      ...result
    }
  }
}