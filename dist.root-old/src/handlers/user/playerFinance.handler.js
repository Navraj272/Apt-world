"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerFinanceHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _baseHandler = require("../../libs/baseHandler");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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

class PlayerFinanceHandler extends _baseHandler.BaseHandler {
  async run() {
    const {
      userId,
      startDate: inputStartDate,
      endDate: inputEndDate
    } = this.args;
    console.log(this.args, "args_here");
    if (!userId) {
      throw new Error('userId is required');
    }
    _dayjs.default.extend(_utc.default);
    _dayjs.default.extend(_timezone.default);
    const PST = 'America/Los_Angeles';
    let startDate;
    let endDate;
    if (inputStartDate && inputEndDate) {
      startDate = (0, _dayjs.default)(inputStartDate).tz(PST).startOf('day').toISOString();
      endDate = (0, _dayjs.default)(inputEndDate).tz(PST).add(1, 'day').startOf('day').toISOString();
    } else {
      const today = (0, _dayjs.default)().tz(PST).startOf('day');
      const startOfWeek = today.startOf('isoWeek');
      startDate = startOfWeek.toISOString();
      endDate = today.add(1, 'day').toISOString();
    }
    console.log(startDate, endDate, "dates_here");
    const replacements = {
      userId,
      startDate,
      endDate
    };
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
    CROSS JOIN bonus_totals bt`;
    const [result] = await _models.default.sequelize.query(query, {
      replacements,
      type: _models.default.sequelize.QueryTypes.SELECT
    });
    return {
      userId,
      startDate,
      endDate,
      ...result
    };
  }
}
exports.PlayerFinanceHandler = PlayerFinanceHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYmFzZUhhbmRsZXIiLCJfZGF5anMiLCJfdGltZXpvbmUiLCJfdXRjIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiUGxheWVyRmluYW5jZUhhbmRsZXIiLCJCYXNlSGFuZGxlciIsInJ1biIsInVzZXJJZCIsInN0YXJ0RGF0ZSIsImlucHV0U3RhcnREYXRlIiwiZW5kRGF0ZSIsImlucHV0RW5kRGF0ZSIsImFyZ3MiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJkYXlqcyIsImV4dGVuZCIsInV0YyIsInRpbWV6b25lIiwiUFNUIiwidHoiLCJzdGFydE9mIiwidG9JU09TdHJpbmciLCJhZGQiLCJ0b2RheSIsInN0YXJ0T2ZXZWVrIiwicmVwbGFjZW1lbnRzIiwicXVlcnkiLCJyZXN1bHQiLCJkYiIsInNlcXVlbGl6ZSIsInR5cGUiLCJRdWVyeVR5cGVzIiwiU0VMRUNUIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9oYW5kbGVycy91c2VyL3BsYXllckZpbmFuY2UuaGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZGIgZnJvbSAnQHNyYy9kYi9tb2RlbHMnXG4vLyBpbXBvcnQgeyBCYXNlSGFuZGxlciB9IGZyb20gJ0BzcmMvbGlicy9iYXNlSGFuZGxlcidcbi8vIGltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbi8vIGltcG9ydCB0aW1lem9uZSBmcm9tICdkYXlqcy9wbHVnaW4vdGltZXpvbmUnXG4vLyBpbXBvcnQgdXRjIGZyb20gJ2RheWpzL3BsdWdpbi91dGMnXG5cblxuLy8gZXhwb3J0IGNsYXNzIFBsYXllckZpbmFuY2VIYW5kbGVyIGV4dGVuZHMgQmFzZUhhbmRsZXIge1xuLy8gICBhc3luYyBydW4oKSB7XG4vLyAgICAgY29uc3QgeyB1c2VySWQsIHN0YXJ0RGF0ZTogaW5wdXRTdGFydERhdGUsIGVuZERhdGU6IGlucHV0RW5kRGF0ZSB9ID0gdGhpcy5hcmdzXG4vLyAgICBjb25zb2xlLmxvZyh0aGlzLmFyZ3MsXCJhcmdzX2hlcmVcIilcbi8vICAgICBpZiAoIXVzZXJJZCkge1xuLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VySWQgaXMgcmVxdWlyZWQnKVxuLy8gICAgIH1cblxuLy8gZGF5anMuZXh0ZW5kKHV0Yylcbi8vIGRheWpzLmV4dGVuZCh0aW1lem9uZSlcblxuLy8gY29uc3QgUFNUID0gJ0FtZXJpY2EvTG9zX0FuZ2VsZXMnXG5cbi8vIGxldCBzdGFydERhdGU7XG4vLyBsZXQgZW5kRGF0ZTtcblxuLy8gaWYgKGlucHV0U3RhcnREYXRlICYmIGlucHV0RW5kRGF0ZSkge1xuLy8gICBzdGFydERhdGUgPSBkYXlqcyhpbnB1dFN0YXJ0RGF0ZSlcbi8vICAgICAudHooUFNUKVxuLy8gICAgIC5zdGFydE9mKCdkYXknKVxuLy8gICAgIC50b0lTT1N0cmluZygpXG5cbi8vICAgZW5kRGF0ZSA9IGRheWpzKGlucHV0RW5kRGF0ZSlcbi8vICAgICAudHooUFNUKVxuLy8gICAgIC5hZGQoMSwgJ2RheScpXG4vLyAgICAgLnN0YXJ0T2YoJ2RheScpXG4vLyAgICAgLnRvSVNPU3RyaW5nKClcbi8vIH0gZWxzZSB7XG4vLyAgIGNvbnN0IHRvZGF5ID0gZGF5anMoKS50eihQU1QpLnN0YXJ0T2YoJ2RheScpXG4vLyAgIGNvbnN0IHN0YXJ0T2ZXZWVrID0gdG9kYXkuc3RhcnRPZignaXNvV2VlaycpXG5cbi8vICAgc3RhcnREYXRlID0gc3RhcnRPZldlZWsudG9JU09TdHJpbmcoKVxuLy8gICBlbmREYXRlID0gdG9kYXkuYWRkKDEsICdkYXknKS50b0lTT1N0cmluZygpXG4vLyB9XG5cbi8vICAgICBjb25zb2xlLmxvZyhzdGFydERhdGUsZW5kRGF0ZSxcImRhdGVzX2hlcmVcIilcblxuLy8gICAgIGNvbnN0IHJlcGxhY2VtZW50cyA9IHtcbi8vICAgICAgIHVzZXJJZCxcbi8vICAgICAgIHN0YXJ0RGF0ZSxcbi8vICAgICAgIGVuZERhdGVcbi8vICAgICB9XG5cbi8vICAgICBjb25zdCBxdWVyeSA9IGBcbi8vICAgICAgIFdJVEggYm9udXNfYnJlYWtkb3duIEFTIChcbi8vICAgICBTRUxFQ1Rcbi8vICAgICAgICAgdC5wdXJwb3NlIEFTIGJvbnVzX3R5cGUsXG4vLyAgICAgICAgIENPVU5UKCopIEFTIGJvbnVzX2NvdW50LFxuLy8gICAgICAgICBTVU0odC5zYyk6Om51bWVyaWMgQVMgdG90YWxfYm9udXNfc2Ncbi8vICAgICBGUk9NIHRyYW5zYWN0aW9ucyB0XG4vLyAgICAgV0hFUkUgdC51c2VyX2lkID0gOnVzZXJJZFxuLy8gICAgICAgQU5EIHQucHVycG9zZSBJTiAoXG4vLyAgICAgICAgICAgICAnYm9udXNfY2FzaCcsJ2JvbnVzX2Ryb3AnLCdib251c19yYWNrYmFjaycsJ3dlZWtseV9jYXNoYmFjaycsXG4vLyAgICAgICAgICAgICAnd2Vla2x5X2NvbW1pc3Npb24nLCd3aGVlbF9yZXdhcmQnLCd3ZWxjb21lX2JvbnVzJywncG9zdGFsX2NvZGUnLFxuLy8gICAgICAgICAgICAgJ2Vhcmx5X3VzZXJfYm9udXMnLCd2aXBfcmV3YXJkZWQnXG4vLyAgICAgICAgIClcbi8vICAgICAgIEFORCB0LmNyZWF0ZWRfYXQgPj0gOnN0YXJ0RGF0ZVxuLy8gICAgICAgQU5EIHQuY3JlYXRlZF9hdCA8ICA6ZW5kRGF0ZVxuLy8gICAgIEdST1VQIEJZIHQucHVycG9zZVxuLy8gKSxcbi8vIGJvbnVzX3RvdGFscyBBUyAoXG4vLyAgICAgU0VMRUNUIENPQUxFU0NFKFNVTSh0b3RhbF9ib251c19zYyksMCk6Om51bWVyaWMgQVMgdG90YWxfYm9udXNfc2Ncbi8vICAgICBGUk9NIGJvbnVzX2JyZWFrZG93blxuLy8gKSxcbi8vIGNhc2lub190b3RhbHMgQVMgKFxuLy8gICAgIFNFTEVDVFxuLy8gICAgICAgICBDT0FMRVNDRShTVU0oQ0FTRVxuLy8gICAgICAgICAgICAgV0hFTiBjdC5hY3Rpb25fdHlwZSA9ICdjYXNpbm9fYmV0J1xuLy8gICAgICAgICAgICAgIEFORCBjdC5jb2luX3R5cGUgIT0gJ0dDJ1xuLy8gICAgICAgICAgICAgVEhFTiBjdC5jb2luIEVMU0UgMCBFTkQpLDApOjpudW1lcmljIEFTIHRvdGFsX3dhZ2VyZWRfc2MsXG5cbi8vICAgICAgICAgQ09BTEVTQ0UoU1VNKENBU0Vcbi8vICAgICAgICAgICAgIFdIRU4gY3QuYWN0aW9uX3R5cGUgSU4gKCdjYXNpbm9fd2luJywnY2FzaW5vX3JlZnVuZCcpXG4vLyAgICAgICAgICAgICAgQU5EIGN0LmNvaW5fdHlwZSAhPSAnR0MnXG4vLyAgICAgICAgICAgICBUSEVOIGN0LmNvaW4gRUxTRSAwIEVORCksMCk6Om51bWVyaWMgQVMgdG90YWxfd2luX3NjXG4vLyAgICAgRlJPTSBjYXNpbm9fdHJhbnNhY3Rpb25zIGN0XG4vLyAgICAgV0hFUkUgY3QudXNlcl9pZCA9IDp1c2VySWRcbi8vICAgICAgIEFORCBjdC5jcmVhdGVkX2F0ID49IDpzdGFydERhdGVcbi8vICAgICAgIEFORCBjdC5jcmVhdGVkX2F0IDwgIDplbmREYXRlXG4vLyApLFxuLy8gcHVyY2hhc2VfcmVkZWVtIEFTIChcbi8vICAgICBTRUxFQ1Rcbi8vICAgICAgICAgQ09BTEVTQ0UoU1VNKFxuLy8gICAgICAgICAgICAgQ0FTRVxuLy8gICAgICAgICAgICAgICAgIFdIRU4gdC5wdXJwb3NlID0gJ3B1cmNoYXNlJ1xuLy8gICAgICAgICAgICAgICAgICBBTkQgdC5zdGF0dXMgPSAnc3VjY2Vzc2Z1bCdcbi8vICAgICAgICAgICAgICAgICAgQU5EIHQucGF5bWVudF9wcm92aWRlciAhPSAnT2ZmbGluZSdcbi8vICAgICAgICAgICAgICAgICAgQU5EICh0Lm1vcmVfZGV0YWlscy0+PidhbW91bnQnKSB+ICdeWzAtOV0rKFxcXFwuWzAtOV0rKT8kJ1xuLy8gICAgICAgICAgICAgICAgIFRIRU4gKHQubW9yZV9kZXRhaWxzLT4+J2Ftb3VudCcpOjpudW1lcmljXG4vLyAgICAgICAgICAgICAgICAgRUxTRSAwXG4vLyAgICAgICAgICAgICBFTkRcbi8vICAgICAgICAgKSwwKTo6bnVtZXJpYyBBUyBwdXJjaGFzZWRfYW1vdW50LFxuXG4vLyAgICAgICAgIENPVU5UKFxuLy8gICAgICAgICAgICAgQ0FTRVxuLy8gICAgICAgICAgICAgICAgIFdIRU4gdC5wdXJwb3NlID0gJ3B1cmNoYXNlJ1xuLy8gICAgICAgICAgICAgICAgICBBTkQgdC5zdGF0dXMgPSAnc3VjY2Vzc2Z1bCdcbi8vICAgICAgICAgICAgICAgICAgQU5EIHQucGF5bWVudF9wcm92aWRlciAhPSAnT2ZmbGluZSdcbi8vICAgICAgICAgICAgICAgICBUSEVOIDFcbi8vICAgICAgICAgICAgIEVORFxuLy8gICAgICAgICApIEFTIHB1cmNoYXNlZF9jb3VudCxcblxuLy8gICAgICAgICBDT0FMRVNDRShTVU0oXG4vLyAgICAgICAgICAgICBDQVNFXG4vLyAgICAgICAgICAgICAgICAgV0hFTiB0LnB1cnBvc2UgPSAncmVkZWVtJ1xuLy8gICAgICAgICAgICAgICAgICBBTkQgdC5zdGF0dXMgSU4gKCdzdWNjZXNzZnVsJywnYXBwcm92ZWQnKVxuLy8gICAgICAgICAgICAgICAgICBBTkQgdC5wYXltZW50X3Byb3ZpZGVyICE9ICdPZmZsaW5lJ1xuLy8gICAgICAgICAgICAgICAgIFRIRU4gdC5zY1xuLy8gICAgICAgICAgICAgICAgIEVMU0UgMFxuLy8gICAgICAgICAgICAgRU5EXG4vLyAgICAgICAgICksMCk6Om51bWVyaWMgQVMgcmVkZWVtZWRfYW1vdW50X3NjLFxuXG4vLyAgICAgICAgIENPVU5UKFxuLy8gICAgICAgICAgICAgQ0FTRVxuLy8gICAgICAgICAgICAgICAgIFdIRU4gdC5wdXJwb3NlID0gJ3JlZGVlbSdcbi8vICAgICAgICAgICAgICAgICAgQU5EIHQuc3RhdHVzIElOICgnc3VjY2Vzc2Z1bCcsJ2FwcHJvdmVkJylcbi8vICAgICAgICAgICAgICAgICAgQU5EIHQucGF5bWVudF9wcm92aWRlciAhPSAnT2ZmbGluZSdcbi8vICAgICAgICAgICAgICAgICBUSEVOIDFcbi8vICAgICAgICAgICAgIEVORFxuLy8gICAgICAgICApIEFTIHJlZGVlbWVkX2NvdW50XG4vLyAgICAgRlJPTSB0cmFuc2FjdGlvbnMgdFxuLy8gICAgIFdIRVJFIHQudXNlcl9pZCA9IDp1c2VySWRcbi8vICAgICAgIEFORCB0LmNyZWF0ZWRfYXQgPj0gOnN0YXJ0RGF0ZVxuLy8gICAgICAgQU5EIHQuY3JlYXRlZF9hdCA8ICA6ZW5kRGF0ZVxuLy8gKVxuXG4vLyBTRUxFQ1Rcbi8vICAgICBwci5wdXJjaGFzZWRfYW1vdW50LFxuLy8gICAgIHByLnB1cmNoYXNlZF9jb3VudCxcbi8vICAgICBwci5yZWRlZW1lZF9hbW91bnRfc2MsXG4vLyAgICAgcHIucmVkZWVtZWRfY291bnQsXG4vLyAgICAgY3QudG90YWxfd2FnZXJlZF9zYyxcbi8vICAgICBjdC50b3RhbF93aW5fc2MsXG4vLyAgICAgYnQudG90YWxfYm9udXNfc2MsXG4vLyAgICAgKFxuLy8gICAgICAgICBjdC50b3RhbF93YWdlcmVkX3NjXG4vLyAgICAgICAtIGN0LnRvdGFsX3dpbl9zY1xuLy8gICAgICAgLSBidC50b3RhbF9ib251c19zY1xuLy8gICAgICk6Om51bWVyaWMgQVMgbmdyLFxuLy8gICAgIChcbi8vICAgICAgICAgU0VMRUNUIGpzb25iX2FnZyhcbi8vICAgICAgICAgICAgIGpzb25iX2J1aWxkX29iamVjdChcbi8vICAgICAgICAgICAgICAgICAnYm9udXNfdHlwZScsIGJiLmJvbnVzX3R5cGUsXG4vLyAgICAgICAgICAgICAgICAgJ2NvdW50JywgYmIuYm9udXNfY291bnQsXG4vLyAgICAgICAgICAgICAgICAgJ3RvdGFsX3NjJywgYmIudG90YWxfYm9udXNfc2Ncbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgKVxuLy8gICAgICAgICBGUk9NIGJvbnVzX2JyZWFrZG93biBiYlxuLy8gICAgICkgQVMgYm9udXNfYnJlYWtkb3duXG4vLyBGUk9NIHB1cmNoYXNlX3JlZGVlbSBwclxuLy8gQ1JPU1MgSk9JTiBjYXNpbm9fdG90YWxzIGN0XG4vLyBDUk9TUyBKT0lOIGJvbnVzX3RvdGFscyBidGBcblxuLy8gICAgIGNvbnN0IFtyZXN1bHRdID0gYXdhaXQgZGIuc2VxdWVsaXplLnF1ZXJ5KHF1ZXJ5LCB7XG4vLyAgICAgICByZXBsYWNlbWVudHMsXG4vLyAgICAgICB0eXBlOiBkYi5zZXF1ZWxpemUuUXVlcnlUeXBlcy5TRUxFQ1Rcbi8vICAgICB9KVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHVzZXJJZCxcbi8vICAgICAgIHN0YXJ0RGF0ZSxcbi8vICAgICAgIGVuZERhdGUsXG4vLyAgICAgICAuLi5yZXN1bHRcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbmltcG9ydCBkYiBmcm9tICdAc3JjL2RiL21vZGVscydcbmltcG9ydCB7IEJhc2VIYW5kbGVyIH0gZnJvbSAnQHNyYy9saWJzL2Jhc2VIYW5kbGVyJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IHRpbWV6b25lIGZyb20gJ2RheWpzL3BsdWdpbi90aW1lem9uZSdcbmltcG9ydCB1dGMgZnJvbSAnZGF5anMvcGx1Z2luL3V0YydcblxuXG5leHBvcnQgY2xhc3MgUGxheWVyRmluYW5jZUhhbmRsZXIgZXh0ZW5kcyBCYXNlSGFuZGxlciB7XG4gIGFzeW5jIHJ1bigpIHtcbiAgICBjb25zdCB7IHVzZXJJZCwgc3RhcnREYXRlOiBpbnB1dFN0YXJ0RGF0ZSwgZW5kRGF0ZTogaW5wdXRFbmREYXRlIH0gPSB0aGlzLmFyZ3NcbiAgIGNvbnNvbGUubG9nKHRoaXMuYXJncyxcImFyZ3NfaGVyZVwiKVxuICAgIGlmICghdXNlcklkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXJJZCBpcyByZXF1aXJlZCcpXG4gICAgfVxuXG4gICAgZGF5anMuZXh0ZW5kKHV0YylcbiAgICBkYXlqcy5leHRlbmQodGltZXpvbmUpXG5cbiAgICBjb25zdCBQU1QgPSAnQW1lcmljYS9Mb3NfQW5nZWxlcydcblxuICAgIGxldCBzdGFydERhdGU7XG4gICAgbGV0IGVuZERhdGU7XG5cbiAgICBpZiAoaW5wdXRTdGFydERhdGUgJiYgaW5wdXRFbmREYXRlKSB7XG4gICAgICBzdGFydERhdGUgPSBkYXlqcyhpbnB1dFN0YXJ0RGF0ZSlcbiAgICAgICAgLnR6KFBTVClcbiAgICAgICAgLnN0YXJ0T2YoJ2RheScpXG4gICAgICAgIC50b0lTT1N0cmluZygpXG5cbiAgICAgIGVuZERhdGUgPSBkYXlqcyhpbnB1dEVuZERhdGUpXG4gICAgICAgIC50eihQU1QpXG4gICAgICAgIC5hZGQoMSwgJ2RheScpXG4gICAgICAgIC5zdGFydE9mKCdkYXknKVxuICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b2RheSA9IGRheWpzKCkudHooUFNUKS5zdGFydE9mKCdkYXknKVxuICAgICAgY29uc3Qgc3RhcnRPZldlZWsgPSB0b2RheS5zdGFydE9mKCdpc29XZWVrJylcblxuICAgICAgc3RhcnREYXRlID0gc3RhcnRPZldlZWsudG9JU09TdHJpbmcoKVxuICAgICAgZW5kRGF0ZSA9IHRvZGF5LmFkZCgxLCAnZGF5JykudG9JU09TdHJpbmcoKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHN0YXJ0RGF0ZSxlbmREYXRlLFwiZGF0ZXNfaGVyZVwiKVxuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRzID0ge1xuICAgICAgdXNlcklkLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gYFxuICAgICAgICBXSVRIIGJvbnVzX3R5cGVzIEFTIChcbiAgU0VMRUNUIHVubmVzdChBUlJBWVtcbiAgICAnYm9udXNfY2FzaCcsXG4gICAgJ2JvbnVzX2Ryb3AnLFxuICAgICd3ZWVrbHlfY2FzaGJhY2snLFxuICAgICd3ZWVrbHlfY29tbWlzc2lvbicsXG4gICAgJ3doZWVsX3Jld2FyZCcsXG4gICAgJ3dlbGNvbWVfYm9udXMnLFxuICAgICdwb3N0YWxfY29kZScsXG4gICAgJ2Vhcmx5X3VzZXJfYm9udXMnLFxuICAgICd2aXBfcmV3YXJkZWQnLFxuICAgICdib251c19yZWZlcnJhbCcsXG4gICAgJ21hbnVhbF9ib251cycsXG4gICAgJ3B1cmNoYXNlX2JvbnVzJyxcbiAgICAnZnJlZV9zcGluX2JvbnVzJ1xuICBdKTo6dGV4dCBBUyBib251c190eXBlXG4pLFxuXG5ib251c19icmVha2Rvd24gQVMgKFxuICBTRUxFQ1RcbiAgICBidC5ib251c190eXBlLFxuXG4gICAgQ09VTlQoXG4gICAgICBDQVNFXG4gICAgICAgIFdIRU4gYnQuYm9udXNfdHlwZSA9ICdwdXJjaGFzZV9ib251cydcbiAgICAgICAgIEFORCB0LnB1cnBvc2UgPSAncHVyY2hhc2UnXG4gICAgICAgICBBTkQgdC5zdGF0dXMgPSAnc3VjY2Vzc2Z1bCdcbiAgICAgICAgIEFORCB0LnBheW1lbnRfcHJvdmlkZXIgIT0gJ09mZmxpbmUnXG4gICAgICAgICBBTkQgKHQubW9yZV9kZXRhaWxzLT4+J2Ftb3VudCcpIElTIE5PVCBOVUxMXG4gICAgICAgICBBTkQgKHQubW9yZV9kZXRhaWxzLT4+J2Ftb3VudCcpIH4gJ15bMC05XSsoXFxcXC5bMC05XSspPyQnXG4gICAgICAgIFRIRU4gMVxuXG4gICAgICAgIFdIRU4gYnQuYm9udXNfdHlwZSAhPSAncHVyY2hhc2VfYm9udXMnXG4gICAgICAgICBBTkQgdC5wdXJwb3NlOjp0ZXh0ID0gYnQuYm9udXNfdHlwZVxuICAgICAgICBUSEVOIDFcbiAgICAgIEVORFxuICAgICkgQVMgYm9udXNfY291bnQsXG5cbiAgICBDT0FMRVNDRShcbiAgICAgIFNVTShcbiAgICAgICAgQ0FTRVxuICAgICAgICAgIFdIRU4gYnQuYm9udXNfdHlwZSA9ICdwdXJjaGFzZV9ib251cydcbiAgICAgICAgICAgQU5EIHQucHVycG9zZSA9ICdwdXJjaGFzZSdcbiAgICAgICAgICAgQU5EIHQuc3RhdHVzID0gJ3N1Y2Nlc3NmdWwnXG4gICAgICAgICAgIEFORCB0LnBheW1lbnRfcHJvdmlkZXIgIT0gJ09mZmxpbmUnXG4gICAgICAgICAgIEFORCAodC5tb3JlX2RldGFpbHMtPj4nYW1vdW50JykgSVMgTk9UIE5VTExcbiAgICAgICAgICAgQU5EICh0Lm1vcmVfZGV0YWlscy0+PidhbW91bnQnKSB+ICdeWzAtOV0rKFxcXFwuWzAtOV0rKT8kJ1xuICAgICAgICAgIFRIRU5cbiAgICAgICAgICAgIHQuc2MgLSAodC5tb3JlX2RldGFpbHMtPj4nYW1vdW50Jyk6Om51bWVyaWNcblxuICAgICAgICAgIFdIRU4gdC5wdXJwb3NlOjp0ZXh0ID0gYnQuYm9udXNfdHlwZVxuICAgICAgICAgIFRIRU5cbiAgICAgICAgICAgIHQuc2NcblxuICAgICAgICAgIEVMU0UgMFxuICAgICAgICBFTkRcbiAgICAgICksXG4gICAgICAwXG4gICAgKTo6bnVtZXJpYyBBUyB0b3RhbF9ib251c19zY1xuXG4gIEZST00gYm9udXNfdHlwZXMgYnRcbiAgTEVGVCBKT0lOIHRyYW5zYWN0aW9ucyB0XG4gICAgT04gdC51c2VyX2lkID0gOnVzZXJJZFxuICAgQU5EIHQuY3JlYXRlZF9hdCA+PSA6c3RhcnREYXRlXG4gICBBTkQgdC5jcmVhdGVkX2F0IDwgIDplbmREYXRlXG4gIEdST1VQIEJZIGJ0LmJvbnVzX3R5cGVcbiksXG4gICAgYm9udXNfdG90YWxzIEFTIChcbiAgICAgICAgU0VMRUNUIENPQUxFU0NFKFNVTSh0b3RhbF9ib251c19zYyksMCk6Om51bWVyaWMgQVMgdG90YWxfYm9udXNfc2NcbiAgICAgICAgRlJPTSBib251c19icmVha2Rvd25cbiAgICApLFxuICAgIGNhc2lub190b3RhbHMgQVMgKFxuICAgICAgICBTRUxFQ1RcbiAgICAgICAgICAgIENPQUxFU0NFKFNVTShDQVNFIFxuICAgICAgICAgICAgICAgIFdIRU4gY3QuYWN0aW9uX3R5cGUgPSAnY2FzaW5vX2JldCdcbiAgICAgICAgICAgICAgICAgQU5EIGN0LmNvaW5fdHlwZSAhPSAnR0MnXG4gICAgICAgICAgICAgICAgIEFORCBjdC5zdGF0dXMgPSAnc3VjY2Vzc2Z1bCdcbiAgICAgICAgICAgICAgICBUSEVOIGN0LmNvaW4gRUxTRSAwIEVORCksMCk6Om51bWVyaWMgQVMgdG90YWxfd2FnZXJlZF9zYyxcblxuICAgICAgICAgICAgQ09BTEVTQ0UoU1VNKENBU0UgXG4gICAgICAgICAgICAgICAgV0hFTiBjdC5hY3Rpb25fdHlwZSBJTiAoJ2Nhc2lub193aW4nLCdjYXNpbm9fcmVmdW5kJylcbiAgICAgICAgICAgICAgICAgQU5EIGN0LmNvaW5fdHlwZSAhPSAnR0MnXG4gICAgICAgICAgICAgICAgIEFORCBjdC5zdGF0dXMgPSAnc3VjY2Vzc2Z1bCdcbiAgICAgICAgICAgICAgICBUSEVOIGN0LmNvaW4gRUxTRSAwIEVORCksMCk6Om51bWVyaWMgQVMgdG90YWxfd2luX3NjXG4gICAgICAgIEZST00gY2FzaW5vX3RyYW5zYWN0aW9ucyBjdFxuICAgICAgICBXSEVSRSBjdC51c2VyX2lkID0gOnVzZXJJZFxuICAgICAgICAgIEFORCBjdC5jcmVhdGVkX2F0ID49IDpzdGFydERhdGVcbiAgICAgICAgICBBTkQgY3QuY3JlYXRlZF9hdCA8ICA6ZW5kRGF0ZVxuICAgICksXG4gICAgcHVyY2hhc2VfcmVkZWVtIEFTIChcbiAgICAgICAgU0VMRUNUXG4gICAgICAgICAgICBDT0FMRVNDRShTVU0oXG4gICAgICAgICAgICAgICAgQ0FTRSBcbiAgICAgICAgICAgICAgICAgICAgV0hFTiB0LnB1cnBvc2UgPSAncHVyY2hhc2UnXG4gICAgICAgICAgICAgICAgICAgICBBTkQgdC5zdGF0dXMgPSAnc3VjY2Vzc2Z1bCdcbiAgICAgICAgICAgICAgICAgICAgIEFORCB0LnBheW1lbnRfcHJvdmlkZXIgIT0gJ09mZmxpbmUnXG4gICAgICAgICAgICAgICAgICAgICBBTkQgKHQubW9yZV9kZXRhaWxzLT4+J2Ftb3VudCcpIH4gJ15bMC05XSsoXFxcXC5bMC05XSspPyQnXG4gICAgICAgICAgICAgICAgICAgIFRIRU4gKHQubW9yZV9kZXRhaWxzLT4+J2Ftb3VudCcpOjpudW1lcmljXG4gICAgICAgICAgICAgICAgICAgIEVMU0UgMFxuICAgICAgICAgICAgICAgIEVORFxuICAgICAgICAgICAgKSwwKTo6bnVtZXJpYyBBUyBwdXJjaGFzZWRfYW1vdW50LFxuXG4gICAgICAgICAgICBDT1VOVChcbiAgICAgICAgICAgICAgICBDQVNFIFxuICAgICAgICAgICAgICAgICAgICBXSEVOIHQucHVycG9zZSA9ICdwdXJjaGFzZSdcbiAgICAgICAgICAgICAgICAgICAgIEFORCB0LnN0YXR1cyA9ICdzdWNjZXNzZnVsJ1xuICAgICAgICAgICAgICAgICAgICAgQU5EIHQucGF5bWVudF9wcm92aWRlciAhPSAnT2ZmbGluZSdcbiAgICAgICAgICAgICAgICAgICAgVEhFTiAxXG4gICAgICAgICAgICAgICAgRU5EXG4gICAgICAgICAgICApIEFTIHB1cmNoYXNlZF9jb3VudCxcblxuICAgICAgICAgICAgQ09BTEVTQ0UoU1VNKFxuICAgICAgICAgICAgICAgIENBU0UgXG4gICAgICAgICAgICAgICAgICAgIFdIRU4gdC5wdXJwb3NlID0gJ3JlZGVlbSdcbiAgICAgICAgICAgICAgICAgICAgIEFORCB0LnN0YXR1cyBJTiAoJ3N1Y2Nlc3NmdWwnLCdhcHByb3ZlZCcpXG4gICAgICAgICAgICAgICAgICAgICBBTkQgdC5wYXltZW50X3Byb3ZpZGVyICE9ICdPZmZsaW5lJ1xuICAgICAgICAgICAgICAgICAgICBUSEVOIHQuc2NcbiAgICAgICAgICAgICAgICAgICAgRUxTRSAwXG4gICAgICAgICAgICAgICAgRU5EXG4gICAgICAgICAgICApLDApOjpudW1lcmljIEFTIHJlZGVlbWVkX2Ftb3VudF9zYyxcblxuICAgICAgICAgICAgQ09VTlQoXG4gICAgICAgICAgICAgICAgQ0FTRSBcbiAgICAgICAgICAgICAgICAgICAgV0hFTiB0LnB1cnBvc2UgPSAncmVkZWVtJ1xuICAgICAgICAgICAgICAgICAgICAgQU5EIHQuc3RhdHVzIElOICgnc3VjY2Vzc2Z1bCcsJ2FwcHJvdmVkJylcbiAgICAgICAgICAgICAgICAgICAgIEFORCB0LnBheW1lbnRfcHJvdmlkZXIgIT0gJ09mZmxpbmUnXG4gICAgICAgICAgICAgICAgICAgIFRIRU4gMVxuICAgICAgICAgICAgICAgIEVORFxuICAgICAgICAgICAgKSBBUyByZWRlZW1lZF9jb3VudFxuICAgICAgICBGUk9NIHRyYW5zYWN0aW9ucyB0XG4gICAgICAgIFdIRVJFIHQudXNlcl9pZCA9IDp1c2VySWRcbiAgICAgICAgICBBTkQgdC5jcmVhdGVkX2F0ID49IDpzdGFydERhdGVcbiAgICAgICAgICBBTkQgdC5jcmVhdGVkX2F0IDwgIDplbmREYXRlXG4gICAgKVxuXG4gICAgU0VMRUNUXG4gICAgICAgIHByLnB1cmNoYXNlZF9hbW91bnQsXG4gICAgICAgIHByLnB1cmNoYXNlZF9jb3VudCxcbiAgICAgICAgcHIucmVkZWVtZWRfYW1vdW50X3NjLFxuICAgICAgICBwci5yZWRlZW1lZF9jb3VudCxcbiAgICAgICAgY3QudG90YWxfd2FnZXJlZF9zYyxcbiAgICAgICAgY3QudG90YWxfd2luX3NjLFxuICAgICAgICBidC50b3RhbF9ib251c19zYyxcbiAgICAgICAgKFxuICAgICAgICAgICAgY3QudG90YWxfd2FnZXJlZF9zY1xuICAgICAgICAgIC0gY3QudG90YWxfd2luX3NjXG4gICAgICAgICAgLSBidC50b3RhbF9ib251c19zY1xuICAgICAgICApOjpudW1lcmljIEFTIG5ncixcbiAgICAgICAgKFxuICAgICAgICAgICAgU0VMRUNUIGpzb25iX2FnZyhcbiAgICAgICAgICAgICAgICBqc29uYl9idWlsZF9vYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICdib251c190eXBlJywgYmIuYm9udXNfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgJ2NvdW50JywgYmIuYm9udXNfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICd0b3RhbF9zYycsIGJiLnRvdGFsX2JvbnVzX3NjXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgRlJPTSBib251c19icmVha2Rvd24gYmJcbiAgICAgICAgKSBBUyBib251c19icmVha2Rvd25cbiAgICBGUk9NIHB1cmNoYXNlX3JlZGVlbSBwclxuICAgIENST1NTIEpPSU4gY2FzaW5vX3RvdGFscyBjdFxuICAgIENST1NTIEpPSU4gYm9udXNfdG90YWxzIGJ0YFxuXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBkYi5zZXF1ZWxpemUucXVlcnkocXVlcnksIHtcbiAgICAgIHJlcGxhY2VtZW50cyxcbiAgICAgIHR5cGU6IGRiLnNlcXVlbGl6ZS5RdWVyeVR5cGVzLlNFTEVDVFxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgdXNlcklkLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZSxcbiAgICAgIC4uLnJlc3VsdFxuICAgIH1cbiAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBNktBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFlBQUEsR0FBQUQsT0FBQTtBQUNBLElBQUFFLE1BQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFHLFNBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFJLElBQUEsR0FBQUwsc0JBQUEsQ0FBQUMsT0FBQTtBQUFrQyxTQUFBRCx1QkFBQU0sQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQWpMbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtJQUUzQixNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFHLE1BQU1DLGVBQUUsQ0FBQ0MsU0FBUyxDQUFDSCxLQUFLLENBQUNBLEtBQUssRUFBRTtNQUMvQ0QsWUFBWTtNQUNaSyxJQUFJLEVBQUVGLGVBQUUsQ0FBQ0MsU0FBUyxDQUFDRSxVQUFVLENBQUNDO0lBQ2hDLENBQUMsQ0FBQztJQUVGLE9BQU87TUFDTDNCLE1BQU07TUFDTkMsU0FBUztNQUNURSxPQUFPO01BQ1AsR0FBR21CO0lBQ0wsQ0FBQztFQUNIO0FBQ0Y7QUFBQ00sT0FBQSxDQUFBL0Isb0JBQUEsR0FBQUEsb0JBQUEiLCJpZ25vcmVMaXN0IjpbXX0=