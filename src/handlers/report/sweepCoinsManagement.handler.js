// import db from '@src/db/models'
// import { BaseHandler } from '@src/libs/baseHandler'
// import { serverDayjs } from '@src/libs/dayjs'
// import { MathPrecision } from '@src/libs/mathOperation'
// import { ApiHelper } from '@src/utils/api.utils'
// import { COINS, TRANSACTION_PURPOSE, TRANSACTION_STATUS } from '@src/utils/constants/public.constants'
// import { getDateRanges } from '@src/utils/date.utils'

// export class GetSweepCoinsManagementHandler extends BaseHandler {
//   async run() {
//     const todayISO = serverDayjs().toISOString()
//     const { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.endDate)
//     const { currentStart, currentEnd, previousStart, previousEnd } = getDateRanges(startDate, endDate)
//     const [
//       currentSummary,
//       totalInCirculation,
//       previousSummary,
//       todayPurchases,
//       todayRedeems,
//       currentDepositConversion,
//       previousDepositConversion
//     ] = await Promise.all([
//       db.sequelize.query(
//         `SELECT 
//             COALESCE(SUM(sc_purchased_amount), 0) AS total_purchased, 
//             COALESCE(SUM(sc_purchased_offline), 0) AS total_purchased_offline,
//             COALESCE(SUM(sc_redeemed_offline), 0) AS total_redeemed_offline,  
//             COALESCE(SUM(sc_redeemed_amount), 0) AS total_redeemed 
//            FROM daily_transaction_summary 
//            WHERE transaction_date BETWEEN :currentStart AND :currentEnd;`,
//         {
//           replacements: { currentStart, currentEnd },
//           type: db.Sequelize.QueryTypes.SELECT
//         }
//       ),
//       db.Wallet.sum('balance', {
//         where: { currency_code: { [db.Sequelize.Op.ne]: COINS.GOLD_COIN } }
//       }),
//       db.sequelize.query(
//         `SELECT 
//             COALESCE(SUM(sc_purchased_amount), 0) AS total_purchased,
//             COALESCE(SUM(sc_purchased_offline), 0) AS total_purchased_offline,
//             COALESCE(SUM(sc_redeemed_offline), 0) AS total_redeemed_offline,
//             COALESCE(SUM(sc_redeemed_amount), 0) AS total_redeemed 
//            FROM daily_transaction_summary 
//            WHERE transaction_date BETWEEN :previousStart AND :previousEnd;`,
//         {
//           replacements: { previousStart, previousEnd },
//           type: db.Sequelize.QueryTypes.SELECT
//         }
//       ),
//       db.sequelize.query(
//         `SELECT 
//             SUM(bt.sc) AS total,
//             SUM(CASE WHEN bt.payment_provider = 'Offline' THEN bt.sc ELSE 0 END) AS offline_total
//            FROM transactions bt
//            WHERE bt.created_at >= :today
//              AND bt.status = :status
//              AND bt.purpose = :purpose`,
//         {
//           replacements: {
//             today: todayISO,
//             coin: COINS.GOLD_COIN,
//             status: TRANSACTION_STATUS.SUCCESS,
//             purpose: TRANSACTION_PURPOSE.PURCHASE
//           },
//           type: db.Sequelize.QueryTypes.SELECT
//         }
//       ),
//       db.sequelize.query(
//         `SELECT SUM(bt.sc) AS total
//            FROM transactions bt
//            WHERE bt.created_at >= :today
//              AND bt.status = :status
//              AND bt.purpose = :purpose`,
//         {
//           replacements: {
//             today: todayISO,
//             coin: COINS.GOLD_COIN,
//             status: TRANSACTION_STATUS.SUCCESS,
//             purpose: TRANSACTION_PURPOSE.REDEEM
//           },
//           type: db.Sequelize.QueryTypes.SELECT
//         }
//       ),
//       db.sequelize.query(`
//           WITH user_counts AS (
//             SELECT COUNT(*) AS total_registered_users
//             FROM users
//             WHERE created_at BETWEEN :currentStart AND :currentEnd
//           ),
//           deposit_counts AS (
//             SELECT COUNT(*) AS depositors
//             FROM (
//               SELECT MIN(t.transaction_id)
//               FROM transactions t
//               JOIN users u ON t.user_id = u.user_id
//               WHERE u.created_at BETWEEN :currentStart AND :currentEnd
//                 AND t.purpose = '${TRANSACTION_PURPOSE.PURCHASE}'
//               GROUP BY t.user_id
//             ) subquery
//           )
//           SELECT
//             CASE 
//               WHEN depositors = 0 THEN 0 
//               ELSE ROUND(depositors::numeric / total_registered_users::numeric, 2) * 100 
//             END AS conversion_rate,
//             total_registered_users
//           FROM deposit_counts, user_counts;`,
//         {
//           replacements: { currentStart, currentEnd },
//           type: db.Sequelize.QueryTypes.SELECT
//         }
//       ),
//       db.sequelize.query(`
//           WITH user_counts AS (
//             SELECT COUNT(*) AS total_registered_users
//             FROM users
//             WHERE created_at BETWEEN :previousStart AND :previousEnd
//           ),
//           deposit_counts AS (
//             SELECT COUNT(*) AS depositors
//             FROM (
//               SELECT MIN(t.transaction_id)
//               FROM transactions t
//               JOIN users u ON t.user_id = u.user_id
//               WHERE u.created_at BETWEEN :previousStart AND :previousEnd
//                 AND t.purpose = '${TRANSACTION_PURPOSE.PURCHASE}'
//               GROUP BY t.user_id
//             ) subquery
//           )
//           SELECT
//             CASE 
//               WHEN depositors = 0 THEN 0 
//               ELSE ROUND(depositors::numeric / total_registered_users::numeric, 2) * 100 
//             END AS conversion_rate,
//             total_registered_users
//           FROM deposit_counts, user_counts;`,
//         {
//           replacements: { previousStart, previousEnd },
//           type: db.Sequelize.QueryTypes.SELECT
//         }
//       )
//     ])

//     const currentPurchased = Number(currentSummary[0].total_purchased || 0)
//     const todayPurchased = Number(todayPurchases[0].total || 0)
//     const currentTotalIssued = currentPurchased + todayPurchased

//     const currentRedeemed = Number(currentSummary[0].total_redeemed || 0)
//     const todayRedeemed = Number(todayRedeems[0].total || 0)
//     const currentTotalRedeemed = currentRedeemed + todayRedeemed

//     const previousIssued = Number(previousSummary[0].total_purchased || 0)
//     const previousRedeemed = Number(previousSummary[0].total_redeemed || 0)

//     const issuedChangePercent = previousIssued > 0
//       ? MathPrecision.round(((currentTotalIssued - previousIssued) / previousIssued) * 100)
//       : 0

//     const currentRedemptionRate = currentTotalIssued > 0
//       ? MathPrecision.round((currentTotalRedeemed / currentTotalIssued) * 100)
//       : 0

//     const previousRedemptionRate = previousIssued > 0
//       ? MathPrecision.round((previousRedeemed / previousIssued) * 100)
//       : 0

//     const depositRateCurrent = Number(currentDepositConversion[0]?.conversion_rate || 0)
//     const depositRatePrevious = Number(previousDepositConversion[0]?.conversion_rate || 0)
//     const depositRateChange = depositRatePrevious > 0
//       ? MathPrecision.round(((depositRateCurrent - depositRatePrevious) / depositRatePrevious) * 100)
//       : 0

//     return {
//       totalIssued: currentTotalIssued,
//       totalIssuedPercentChange: issuedChangePercent,
//       redemptionRate: currentRedemptionRate,
//       redemptionRateChange: previousRedemptionRate,
//       inCirculation: totalInCirculation || 0,
//       depositConversionRate: depositRateCurrent,
//       depositConversionChange: depositRateChange
//     }
//   }
// }
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { dayjs, serverDayjs } from '@src/libs/dayjs'
import { MathPrecision } from '@src/libs/mathOperation'
import { COINS, PST_TIMEZONE, TRANSACTION_PURPOSE, TRANSACTION_STATUS } from '@src/utils/constants/public.constants'
import { getDateRanges } from '@src/utils/date.utils'

export class GetSweepCoinsManagementHandler extends BaseHandler {
  async run() {
    console.log("Starting GetSweepCoinsManagementHandler...")

    const todayISO = serverDayjs().toISOString()
    let startDate;
    let endDate;

    // 1. Determine Date Range
    if (this.args.startDate && this.args.endDate) {
      startDate = this.args.startDate.split('T')[0];
      endDate = this.args.endDate.split('T')[0];
    } else {
      const today = dayjs().tz(PST_TIMEZONE).startOf('day');
      const startOfWeek = today.startOf('isoWeek'); // Sunday
      startDate = startOfWeek.format('YYYY-MM-DD');
      endDate = today.format('YYYY-MM-DD');
    }

    const { currentStart, currentEnd, previousStart, previousEnd } = getDateRanges(startDate, endDate)

    // 2. Execute Parallel Queries
    // Optimized: Wallet stats are now fetched in a single query at index 1
    const [
      currentSummary,
      walletStats,
      previousSummary,
      currentDepositConversion,
      previousDepositConversion
    ] = await Promise.all([
      // Query 0: Current Period Aggregates
      db.sequelize.query(
        `SELECT 
          COALESCE(SUM(sc_coin_purchased), 0) AS total_purchased, 
          COALESCE(SUM(purchased_offline), 0) AS total_purchased_offline,
          COALESCE(SUM(redeemed_offline), 0) AS total_redeemed_offline,  
          COALESCE(SUM(redeemed), 0) AS total_redeemed 
         FROM daily_aggregates 
         WHERE date BETWEEN :currentStart AND :currentEnd;`,
        {
          replacements: { currentStart, currentEnd },
          type: db.Sequelize.QueryTypes.SELECT
        }
      ),

      // Query 1: Wallet Stats (Optimized Single Call)
      db.Wallet.findOne({
        attributes: [
          [
            db.sequelize.literal(`
              COALESCE(SUM(CASE 
                WHEN currency_code = '${COINS.SWEEP_COIN.PURCHASE_SWEEP_COIN}' THEN balance 
                ELSE 0 
              END), 0)
            `), 
            'totalPSC'
          ],
          [
            db.sequelize.literal(`
              COALESCE(SUM(CASE 
                WHEN currency_code = '${COINS.SWEEP_COIN.REDEEMABLE_SWEEP_COIN}' THEN balance 
                ELSE 0 
              END), 0)
            `), 
            'totalRSC'
          ]
        ],
        raw: true
      }),

      // Query 2: Previous Period Aggregates
      db.sequelize.query(
        `SELECT 
          COALESCE(SUM(sc_coin_purchased), 0) AS total_purchased,
          COALESCE(SUM(purchased_offline), 0) AS total_purchased_offline,
          COALESCE(SUM(redeemed_offline), 0) AS total_redeemed_offline,
          COALESCE(SUM(redeemed), 0) AS total_redeemed 
         FROM daily_aggregates 
         WHERE date BETWEEN :previousStart AND :previousEnd;`,
        {
          replacements: { previousStart, previousEnd },
          type: db.Sequelize.QueryTypes.SELECT
        }
      ),

      // Query 3: Current Deposit Conversion
      db.sequelize.query(`
        WITH user_counts AS (
          SELECT COUNT(*) AS total_registered_users
          FROM users
          WHERE created_at BETWEEN :currentStart AND :currentEnd
        ),
        deposit_counts AS (
          SELECT COUNT(*) AS depositors
          FROM (
            SELECT MIN(t.transaction_id)
            FROM transactions t
            JOIN users u ON t.user_id = u.user_id
            WHERE u.created_at BETWEEN :currentStart AND :currentEnd
              AND t.purpose = '${TRANSACTION_PURPOSE.PURCHASE}'
            GROUP BY t.user_id
          ) subquery
        )
        SELECT
          CASE 
            WHEN depositors = 0 THEN 0 
            ELSE ROUND(depositors::numeric / total_registered_users::numeric, 2) * 100 
          END AS conversion_rate,
          total_registered_users
        FROM deposit_counts, user_counts;`,
        {
          replacements: { currentStart, currentEnd },
          type: db.Sequelize.QueryTypes.SELECT
        }
      ),

      // Query 4: Previous Deposit Conversion
      db.sequelize.query(`
        WITH user_counts AS (
          SELECT COUNT(*) AS total_registered_users
          FROM users
          WHERE created_at BETWEEN :previousStart AND :previousEnd
        ),
        deposit_counts AS (
          SELECT COUNT(*) AS depositors
          FROM (
            SELECT MIN(t.transaction_id)
            FROM transactions t
            JOIN users u ON t.user_id = u.user_id
            WHERE u.created_at BETWEEN :previousStart AND :previousEnd
              AND t.purpose = '${TRANSACTION_PURPOSE.PURCHASE}'
            GROUP BY t.user_id
          ) subquery
        )
        SELECT
          CASE 
            WHEN depositors = 0 THEN 0 
            ELSE ROUND(depositors::numeric / total_registered_users::numeric, 2) * 100 
          END AS conversion_rate,
          total_registered_users
        FROM deposit_counts, user_counts;`,
        {
          replacements: { previousStart, previousEnd },
          type: db.Sequelize.QueryTypes.SELECT
        }
      )
    ])

    // 3. Process Wallet Data
    const totalPSC = Number(walletStats?.totalPSC || 0)
    const totalRSC = Number(walletStats?.totalRSC || 0)
    
    // Calculated in Memory (PSC + RSC)
    const totalInCirculation = MathPrecision.plus(totalPSC, totalRSC)

    console.log(totalPSC, totalRSC, "totalPSC, totalRSC")

    // 4. Process Aggregates & Rates
    const currentTotalIssued = Number(currentSummary[0].total_purchased || 0)
    const currentTotalRedeemed = Number(currentSummary[0].total_redeemed || 0) + Number(currentSummary[0].total_redeemed_offline || 0)

    const previousIssued = Number(previousSummary[0].total_purchased || 0)
    const previousRedeemed = Number(previousSummary[0].total_redeemed || 0)

    const issuedChangePercent = previousIssued > 0
      ? MathPrecision.round(((currentTotalIssued - previousIssued) / previousIssued) * 100)
      : 0

    const currentRedemptionRate = currentTotalIssued > 0
      ? MathPrecision.round((currentTotalRedeemed / currentTotalIssued) * 100)
      : 0

    const previousRedemptionRate = previousIssued > 0
      ? MathPrecision.round((previousRedeemed / previousIssued) * 100)
      : 0

    const depositRateCurrent = Number(currentDepositConversion[0]?.conversion_rate || 0)
    const depositRatePrevious = Number(previousDepositConversion[0]?.conversion_rate || 0)
    const depositRateChange = depositRatePrevious > 0
      ? MathPrecision.round(((depositRateCurrent - depositRatePrevious) / depositRatePrevious) * 100)
      : 0

    return {
      totalIssued: currentTotalIssued,
      totalIssuedPercentChange: issuedChangePercent,
      redemptionRate: currentRedemptionRate,
      redemptionRateChange: previousRedemptionRate,
      inCirculation: totalInCirculation,
      totalPSC,
      totalRSC,
      depositConversionRate: depositRateCurrent,
      depositConversionChange: depositRateChange
    }
  }
}