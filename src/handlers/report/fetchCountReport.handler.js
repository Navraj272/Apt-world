// import db from "@src/db/models";
// import { BaseHandler } from "@src/libs/baseHandler";
// import dayjs from "dayjs";
// import { Op } from "sequelize";

// const PST = "America/Los_Angeles";

// export class fetchCountReportHandler extends BaseHandler {
//   async run() {
//     let startDate;
//     let endDateExclusive;


//     if (this.args.startDate && this.args.endDate) {
//       // Treat frontend values as DATE, not moment
//       const start = this.args.startDate.split("T")[0];
//       const end = this.args.endDate.split("T")[0];

//       startDate = `${start} 00:00:00`;
//       endDateExclusive = dayjs(end)
//         .add(1, "day")
//         .format("YYYY-MM-DD 00:00:00");
//     } else {
//       const todayPST = dayjs().tz(PST).startOf("day");
//       const startOfWeek = todayPST.startOf("isoWeek");

//       startDate = startOfWeek.format("YYYY-MM-DD 00:00:00");
//       endDateExclusive = todayPST
//         .add(1, "day")
//         .format("YYYY-MM-DD 00:00:00");
//     }

//     const [
//       registeredUsers,
//       userStatusCounts,
//       purchaseMetrics,
//       bonusBreakdown,
//     ] = await Promise.all([
//       // Registered users
//       db.User.count({
//         where: {
//           createdAt: {
//             [Op.gte]: startDate,
//             [Op.lt]: endDateExclusive,
//           },
//         },
//       }),

//       // Active / inactive users
//       db.User.findOne({
//         attributes: [
//           [
//             db.Sequelize.fn(
//               "SUM",
//               db.Sequelize.literal("CASE WHEN is_active THEN 1 ELSE 0 END")
//             ),
//             "activeUsers",
//           ],
//           [
//             db.Sequelize.fn(
//               "SUM",
//               db.Sequelize.literal("CASE WHEN NOT is_active THEN 1 ELSE 0 END")
//             ),
//             "inactiveUsers",
//           ],
//         ],
//         raw: true,
//       }),

//       // First-time purchasers
//       db.sequelize.query(
//         `
//         SELECT
//           COUNT(*) AS first_time_purchasers,
//           COALESCE(SUM(amount), 0) AS total_amount
//         FROM (
//           SELECT DISTINCT ON (t.user_id)
//             t.user_id,
//             (t.more_details->>'amount')::NUMERIC AS amount
//           FROM transactions t
//           WHERE
//             t.purpose = 'purchase'
//             AND t.payment_provider != 'Offline'
//             AND t.status = 'successful'
//             AND t.more_details ? 'amount'
//             AND EXISTS (
//               SELECT 1
//               FROM user_details ud
//               WHERE ud.user_id = t.user_id
//                 AND ud.created_at >= :startDate
//                 AND ud.created_at < :endDateExclusive
//             )
//           ORDER BY t.user_id, t.created_at ASC
//         ) first_purchases;
//         `,
//         {
//           replacements: { startDate, endDateExclusive },
//           type: db.Sequelize.QueryTypes.SELECT,
//         }
//       ),

//       // Bonus breakdown
//       db.sequelize.query(
//         `
//         WITH bonus_types(bonus_type) AS (
//           SELECT UNNEST(ARRAY[
//             'bonus_cash',
//             'bonus_drop',
//             'weekly_cashback',
//             'weekly_commission',
//             'wheel_reward',
//             'welcome_bonus',
//             'postal_code',
//             'early_user_bonus',
//             'vip_rewarded',
//             'manual_bonus'
//           ])
//         )
//         SELECT
//           bt.bonus_type,
//           COALESCE(SUM(t.sc), 0) AS total_amount
//         FROM bonus_types bt
//         LEFT JOIN transactions t
//           ON t.purpose = bt.bonus_type::enum_transactions_purpose
//          AND t.status = 'successful'
//          AND t.created_at >= :startDate
//          AND t.created_at < :endDateExclusive
//         GROUP BY bt.bonus_type
//         ORDER BY bt.bonus_type;
//         `,
//         {
//           replacements: { startDate, endDateExclusive },
//           type: db.Sequelize.QueryTypes.SELECT,
//         }
//       ),
//     ]);

//     const activeUsers = Number(userStatusCounts?.activeUsers || 0);
//     const inactiveUsers = Number(userStatusCounts?.inactiveUsers || 0);

//     const firstTimePurchasers = Number(
//       purchaseMetrics?.[0]?.first_time_purchasers || 0
//     );

//     const totalFirstPurchaseAmount = Number(
//       purchaseMetrics?.[0]?.total_amount || 0
//     );

//     const totalBonusAmount = bonusBreakdown.reduce(
//       (sum, row) => sum + Number(row.total_amount || 0),
//       0
//     );

//     return {
//       success: true,
//       data: {
//         registeredUsers,
//         activeUsers,
//         inactiveUsers,
//         firstTimePurchasers,
//         totalFirstPurchaseAmount,
//         bonusBreakdown,
//         totalBonusAmount
//       },
//     };
//   }
// }

// import db from "@src/db/models";
// import { BaseHandler } from "@src/libs/baseHandler";
// import dayjs from "dayjs";
// import { Op } from "sequelize";
// import { getCache } from "@src/libs/redis";
// import { CACHE_KEYS } from "@src/utils/constants/public.constants";

// const PST = "America/Los_Angeles";

// export class fetchCountReportHandler extends BaseHandler {
//   async run() {
//     let startDate;
//     let endDateExclusive;

//     const { internalUser } = this.args;

//     if (this.args.startDate && this.args.endDate) {
//       const start = this.args.startDate.split("T")[0];
//       const end = this.args.endDate.split("T")[0];

//       startDate = `${start} 00:00:00`;
//       endDateExclusive = dayjs(end)
//         .add(1, "day")
//         .format("YYYY-MM-DD 00:00:00");
//     } else {
//       const todayPST = dayjs().tz(PST).startOf("day");
//       const startOfWeek = todayPST.startOf("isoWeek");

//       startDate = startOfWeek.format("YYYY-MM-DD 00:00:00");
//       endDateExclusive = todayPST
//         .add(1, "day")
//         .format("YYYY-MM-DD 00:00:00");
//     }

//     let internalUserIds;

//     if (internalUser === "internal" || internalUser === "real") {
//       const cached = await getCache(CACHE_KEYS.INTERNAL_USERS);

//       if (cached) {
//         try {
//           internalUserIds = JSON.parse(cached)
//             .map(Number)
//             .filter(Number.isFinite);
//         } catch {
//           internalUserIds = [];
//         }
//       }
//     }

//     const userIdWhere =
//       internalUser === "internal"
//         ? { [Op.in]: internalUserIds }
//         : internalUser === "real"
//         ? { [Op.notIn]: internalUserIds }
//         : null;

//     const [
//       registeredUsers,
//       userStatusCounts,
//       purchaseMetrics,
//       bonusBreakdown,
//     ] = await Promise.all([
//       // Registered users
//       db.User.count({
//         where: {
//           ...(userIdWhere ? { user_id: userIdWhere } : {}),
//           createdAt: {
//             [Op.gte]: startDate,
//             [Op.lt]: endDateExclusive,
//           },
//         },
//       }),

//       db.User.findOne({
//         attributes: [
//           [
//             db.Sequelize.fn(
//               "SUM",
//               db.Sequelize.literal("CASE WHEN is_active THEN 1 ELSE 0 END")
//             ),
//             "activeUsers",
//           ],
//           [
//             db.Sequelize.fn(
//               "SUM",
//               db.Sequelize.literal("CASE WHEN NOT is_active THEN 1 ELSE 0 END")
//             ),
//             "inactiveUsers",
//           ],
//         ],
//         where: userIdWhere ? { user_id: userIdWhere } : {},
//         raw: true,
//       }),

//       db.sequelize.query(
//         `
//         SELECT
//           COUNT(*) AS first_time_purchasers,
//           COALESCE(SUM(amount), 0) AS total_amount
//         FROM (
//           SELECT DISTINCT ON (t.user_id)
//             t.user_id,
//             (t.more_details->>'amount')::NUMERIC AS amount
//           FROM transactions t
//           WHERE
//             t.purpose = 'purchase'
//             AND t.payment_provider != 'Offline'
//             AND t.status = 'successful'
//             AND t.more_details ? 'amount'
//             ${
//               userIdWhere
//                 ? internalUser === "internal"
//                   ? "AND t.user_id IN (:internalUserIds)"
//                   : "AND t.user_id NOT IN (:internalUserIds)"
//                 : ""
//             }
//             AND EXISTS (
//               SELECT 1
//               FROM user_details ud
//               WHERE ud.user_id = t.user_id
//                 AND ud.created_at >= :startDate
//                 AND ud.created_at < :endDateExclusive
//             )
//           ORDER BY t.user_id, t.created_at ASC
//         ) first_purchases;
//         `,
//         {
//           replacements: {
//             startDate,
//             endDateExclusive,
//             internalUserIds,
//           },
//           type: db.Sequelize.QueryTypes.SELECT,
//         }
//       ),

//       db.sequelize.query(
//         `
//         WITH bonus_types(bonus_type) AS (
//           SELECT UNNEST(ARRAY[
//             'bonus_cash',
//             'bonus_drop',
//             'weekly_cashback',
//             'weekly_commission',
//             'wheel_reward',
//             'welcome_bonus',
//             'postal_code',
//             'early_user_bonus',
//             'vip_rewarded',
//             'manual_bonus'
//           ])
//         )
//         SELECT
//           bt.bonus_type,
//           COALESCE(SUM(t.sc), 0) AS total_amount
//         FROM bonus_types bt
//         LEFT JOIN transactions t
//           ON t.purpose = bt.bonus_type::enum_transactions_purpose
//          AND t.status = 'successful'
//          AND t.created_at >= :startDate
//          AND t.created_at < :endDateExclusive
//          ${
//            userIdWhere
//              ? internalUser === "internal"
//                ? "AND t.user_id IN (:internalUserIds)"
//                : "AND t.user_id NOT IN (:internalUserIds)"
//              : ""
//          }
//         GROUP BY bt.bonus_type
//         ORDER BY bt.bonus_type;
//         `,
//         {
//           replacements: {
//             startDate,
//             endDateExclusive,
//             internalUserIds,
//           },
//           type: db.Sequelize.QueryTypes.SELECT,
//         }
//       ),
//     ]);


//     const activeUsers = Number(userStatusCounts?.activeUsers || 0);
//     const inactiveUsers = Number(userStatusCounts?.inactiveUsers || 0);

//     const firstTimePurchasers = Number(
//       purchaseMetrics?.[0]?.first_time_purchasers || 0
//     );

//     const totalFirstPurchaseAmount = Number(
//       purchaseMetrics?.[0]?.total_amount || 0
//     );

//     const totalBonusAmount = bonusBreakdown.reduce(
//       (sum, row) => sum + Number(row.total_amount || 0),
//       0
//     );

//     return {
//       success: true,
//       data: {
//         registeredUsers,
//         activeUsers,
//         inactiveUsers,
//         firstTimePurchasers,
//         totalFirstPurchaseAmount,
//         bonusBreakdown,
//         totalBonusAmount,
//       },
//     };
//   }
// }
import db from "@src/db/models";
import { BaseHandler } from "@src/libs/baseHandler";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Op } from "sequelize";
import { getCache } from "@src/libs/redis";
import { CACHE_KEYS } from "@src/utils/constants/public.constants";

// Ensure plugins are loaded
dayjs.extend(utc);
dayjs.extend(timezone);

const PST = "America/Los_Angeles";

export class fetchCountReportHandler extends BaseHandler {
  async run() {
    let startDate;
    let endDateExclusive;

    const { internalUser } = this.args;

    // --- TIMEZONE LOGIC UPDATE START ---
    // We generate timestamps that correspond to midnight PST,
    // but convert them to .toISOString() (UTC) so the DB queries the correct absolute time.

    // --- PST DATE RANGE NORMALIZATION ---

const PST = "America/Los_Angeles";

if (this.args.startDate && this.args.endDate) {
  // 1. Extract ONLY the date part (ignore time + offset)
  const startDateOnly = this.args.startDate.slice(0, 10); // YYYY-MM-DD
  const endDateOnly = this.args.endDate.slice(0, 10);     // YYYY-MM-DD

  // 2. Interpret these dates as PST calendar days
  const startPst = dayjs.tz(startDateOnly, "YYYY-MM-DD", PST).startOf("day");
  const endPstExclusive = dayjs
    .tz(endDateOnly, "YYYY-MM-DD", PST)
    .add(1, "day")
    .startOf("day");

  // 3. Convert to UTC ISO for DB
  startDate = startPst.toISOString();
  endDateExclusive = endPstExclusive.toISOString();
} else {
  // Default: current ISO week in PST
  const todayPST = dayjs().tz(PST).startOf("day");
  const startOfWeekPST = todayPST.startOf("isoWeek");

  startDate = startOfWeekPST.toISOString();
  endDateExclusive = todayPST.add(1, "day").startOf("day").toISOString();
}

    // --- TIMEZONE LOGIC UPDATE END ---

    let internalUserIds;

    if (internalUser === "internal" || internalUser === "real") {
      const cached = await getCache(CACHE_KEYS.INTERNAL_USERS);

      if (cached) {
        try {
          internalUserIds = JSON.parse(cached)
            .map(Number)
            .filter(Number.isFinite);
        } catch {
          internalUserIds = [];
        }
      }
    }

    const userIdWhere =
      internalUser === "internal"
        ? { [Op.in]: internalUserIds }
        : internalUser === "real"
        ? { [Op.notIn]: internalUserIds }
        : null;

    const [
      userStatusCounts,
      purchaseMetrics,
      nonPurchaseMetrics,
      bonusBreakdown,
    ] = await Promise.all([
      // Active / Inactive users
      // Note: This query calculates the CURRENT status of users. 
      // It does not filter by date range, so timezone logic applies only to the snapshot moment (now).
      db.User.findOne({
        attributes: [
          [
            db.Sequelize.fn(
              "SUM",
              db.Sequelize.literal("CASE WHEN is_active THEN 1 ELSE 0 END")
            ),
            "activeUsers",
          ],
          [
            db.Sequelize.fn(
              "SUM",
              db.Sequelize.literal("CASE WHEN NOT is_active THEN 1 ELSE 0 END")
            ),
            "inactiveUsers",
          ],
        ],
        where: userIdWhere ? { user_id: userIdWhere } : {},
        raw: true,
      }),

      // First-time purchasers
  // First-time purchasers (FTP in date range)
db.sequelize.query(
  `
  SELECT
    COUNT(*) AS ftp_users,
    COALESCE(SUM(ud.first_purchase_amount), 0) AS total_amount
  FROM user_details ud
  WHERE
    ud.is_first_purchase_claimed = TRUE
    AND ud.claimed_first_purchase_at >= :startDate
    AND ud.claimed_first_purchase_at < :endDateExclusive
    ${
      userIdWhere
        ? internalUser === "internal"
          ? "AND ud.user_id IN (:internalUserIds)"
          : "AND ud.user_id NOT IN (:internalUserIds)"
        : ""
    }
  `,
  {
    replacements: {
      startDate,
      endDateExclusive,
      internalUserIds,
    },
    type: db.Sequelize.QueryTypes.SELECT,
  }
),

// All-time NPUs
db.sequelize.query(
  `
  SELECT COUNT(*) AS npu_users
  FROM user_details ud
  WHERE ud.is_first_purchase_claimed = FALSE
  ${
    userIdWhere
      ? internalUser === "internal"
        ? "AND ud.user_id IN (:internalUserIds)"
        : "AND ud.user_id NOT IN (:internalUserIds)"
      : ""
  }
  `,
  {
    replacements: {
      internalUserIds,
    },
    type: db.Sequelize.QueryTypes.SELECT,
  }
),


      // Bonus breakdown
      db.sequelize.query(
        `
        WITH bonus_types(bonus_type) AS (
          SELECT UNNEST(ARRAY[
            'bonus_cash',
            'bonus_drop',
            'weekly_cashback',
            'weekly_commission',
            'wheel_reward',
            'welcome_bonus',
            'postal_code',
            'early_user_bonus',
            'vip_rewarded',
            'manual_bonus',
            'bonus_referral',
            'free_spin_bonus'
          ])
        )
        SELECT
          bt.bonus_type,
          COALESCE(SUM(t.sc), 0) AS total_amount
        FROM bonus_types bt
        LEFT JOIN transactions t
          ON t.purpose = bt.bonus_type::enum_transactions_purpose
         AND t.status = 'successful'
         -- t.created_at is compared against our UTC-converted PST timestamps
         AND t.created_at >= :startDate
         AND t.created_at < :endDateExclusive
         ${
           userIdWhere
             ? internalUser === "internal"
               ? "AND t.user_id IN (:internalUserIds)"
               : "AND t.user_id NOT IN (:internalUserIds)"
             : ""
         }
        GROUP BY bt.bonus_type
        ORDER BY bt.bonus_type;
        `,
        {
          replacements: {
            startDate,
            endDateExclusive,
            internalUserIds,
          },
          type: db.Sequelize.QueryTypes.SELECT,
        }
      ),
    ]);

    const activeUsers = Number(userStatusCounts?.activeUsers || 0);
    const inactiveUsers = Number(userStatusCounts?.inactiveUsers || 0);

    const firstTimePurchasers = Number(
  purchaseMetrics?.[0]?.ftp_users || 0
);

const totalFirstPurchaseAmount = Number(
  purchaseMetrics?.[0]?.total_amount || 0
);

const npuUsers = Number(
  nonPurchaseMetrics?.[0]?.npu_users || 0
);

    const totalBonusAmount = bonusBreakdown.reduce(
      (sum, row) => sum + Number(row.total_amount || 0),
      0
    );

    return {
      success: true,
      data: {
    activeUsers,
    inactiveUsers,
    firstTimePurchasers,       // FTP (date range)
    npuUsers,                  // NPU (all-time)
    totalFirstPurchaseAmount,
    bonusBreakdown,
    totalBonusAmount,
      },
    };
  }
}