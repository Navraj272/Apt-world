import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { ApiHelper } from '@src/utils/api.utils'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { getDailySummaryReportQuery } from '@src/helpers/getDailyTransactionSummarySQL.helpers'
import { CACHE_KEYS } from '@src/utils/constants/public.constants'
import { getCache , setInternalCache} from '@src/libs/redis'
import { SELF_EXCLUSION_TYPES, USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from '@src/utils/constants/responsibleGambling.constants'

// Ensure plugins are loaded
dayjs.extend(utc)
dayjs.extend(timezone)

export class GetTopTenHandler extends BaseHandler {
 async run() {
   let {
     orderBy = 'ggr',
     orderDirection = 'DESC',
     userId,
     search,
     email,
     stateCode,
     minWageredAmount,
     maxWageredAmount,
     minWonAmount,
     maxWonAmount,
     minPurchasedAmount,
     maxPurchasedAmount,
     minRedeemedAmount,
     maxRedeemedAmount,
     minBonusReferralEarned,
     maxBonusReferralEarned,
     minGGR,
     maxGGR,
     campaignId,
     affiliateId,
     cxToken,
     minScBalance,
     maxScBalance,
     currencyCode,
     internalUser, // new boolean flag: if true, show only internal players
     isActive,
     isSelfExcluded,
     playerType,
     vipTierId,
     accountStatus,
     tagIds
   } = this.args
   console.log(isActive,"internalUser")

   const PST = 'America/Los_Angeles';
   const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit, this.args.pagination)

   // --- START OF TIMEZONE FIX ---
   let startDate; // Remains YYYY-MM-DD (for transaction subquery)
   let endDate;   // Remains YYYY-MM-DD (for transaction subquery)
   let startDateTime;     // Becomes ISO String (for FTP queries)
   let endDateExclusive;  // Becomes ISO String (for FTP queries)

   if (this.args.startDate && this.args.endDate) {
     startDate = this.args.startDate.split('T')[0];
     endDate = this.args.endDate.split('T')[0];
   } else {
     const todayPst = dayjs().tz(PST).startOf('day');
     const startOfWeekPst = todayPst.startOf('isoWeek');
     startDate = startOfWeekPst.format('YYYY-MM-DD');
     endDate = todayPst.format('YYYY-MM-DD');
   }

   // Logic: Treat the Date String as PST Midnight -> Convert to UTC ISO
   // Example: '2026-01-26' -> '2026-01-26T08:00:00.000Z'
   startDateTime = dayjs.tz(startDate, PST).startOf('day').toISOString();
   
   endDateExclusive = dayjs.tz(endDate, PST)
     .add(1, 'day')
     .startOf('day')
     .toISOString();

   console.log('📅 [TopPlayers] Parsed Dates (PST Adjusted):', { startDate, endDate, startDateTime, endDateExclusive })
   // --- END OF TIMEZONE FIX ---

   let filteredUserIds = null
   const whereConditions = []
   const havingConditions = []
   const replacements = {}
   let selfExclusionJoin = ''


   replacements.startDate = startDate
   replacements.endDate = endDate
   replacements.startDateTime = startDateTime
   replacements.endDateExclusive = endDateExclusive

   if (userId) {
     whereConditions.push(`u.user_id = :userId`)
     replacements.userId = userId
   }


   if (email) {
     whereConditions.push(`u.email ILIKE CONCAT('%', :email, '%')`)
     replacements.email = email
   }


   if (stateCode) {
     whereConditions.push(`ud.state_code ILIKE CONCAT('%', :stateCode, '%')`)
     replacements.stateCode = stateCode
   }

   if(accountStatus){
    whereConditions.push(`u.account_status = :accountStatus`)
    replacements.accountStatus = accountStatus;
   }

   if(campaignId){
    whereConditions.push(`u.campaign_id = :campaignId`)
    replacements.campaignId = campaignId
   }
   
   if (affiliateId) {
    whereConditions.push(`u.affiliate_id = :affiliateId AND u.is_affiliate_active = :isAffiliateActive`)
    replacements.affiliateId = affiliateId
    replacements.isAffiliateActive = true
  }

   if(cxToken){
    whereConditions.push(`TRIM(u.cx_token) = :cxToken`)
    replacements.cxToken = cxToken
   }

   if (search) {
     whereConditions.push(`u.user_name ILIKE CONCAT('%', :search, '%')`)
     replacements.search = search
   }

   if (isActive != null) {
      whereConditions.push(`u.is_active = :isActive`)
      replacements.isActive = isActive === 'true' || isActive === true
   }

   if (playerType === 'NPU') {
      // All-time NPUs
      whereConditions.push(`
        COALESCE(ud.is_first_purchase_claimed, false) = false
      `)
    }

    if (playerType === 'FTP') {
      whereConditions.push(`
        ud.is_first_purchase_claimed = TRUE
        AND ud.claimed_first_purchase_at >= :startDateTime
        AND ud.claimed_first_purchase_at < :endDateExclusive
      `)
    }
    console.log("internalUser param:", internalUser)


   // Internal player filter: use cache -> DB fallback
    let internalIds = [];

    if (internalUser === 'internal' || internalUser === 'real') {
      const cached = await getCache(CACHE_KEYS.INTERNAL_USERS);

      if (cached) {
        try {
          internalIds = JSON.parse(cached)
            .map(Number)
            .filter(Number.isFinite);
        } catch {
          internalIds = [];
        }
      }


      if (!cached || internalIds.length === 0) {
        try {
          const rows = await db.sequelize.query(
            `SELECT user_id FROM users WHERE is_internal_user = TRUE`,
            { type: db.sequelize.QueryTypes.SELECT }
          );

          internalIds = rows.map(r => Number(r.user_id)).filter(Number.isFinite);
        } catch {
          internalIds = [];
        }
      }
    }


    if (internalUser === 'internal') {
      whereConditions.push(`u.user_id IN (:internalIds)`)
      replacements.internalIds = internalIds
    }

    if (internalUser === 'real') {
      if (internalIds.length > 0) {
        whereConditions.push(`u.user_id NOT IN (:internalIds)`)
        replacements.internalIds = internalIds
      }
    }

    if (isSelfExcluded === true || isSelfExcluded === 'true') {
      // ONLY self-excluded users
      selfExclusionJoin = `INNER JOIN user_limits ul ON u.user_id = ul.user_id`

      whereConditions.push(`ul.key = :selfExclusionKey`)
      replacements.selfExclusionKey =
        USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.SELF_EXCLUSION

      whereConditions.push(`(
        ul.value != :temporaryType OR
        (ul.value = :temporaryType AND ul.expire_at > NOW())
      )`)
      replacements.temporaryType = SELF_EXCLUSION_TYPES.TEMPORARY

    } else if (isSelfExcluded === false || isSelfExcluded === 'false') {
      // ONLY non-self-excluded users
      whereConditions.push(`
        NOT EXISTS (
          SELECT 1
          FROM user_limits ul
          WHERE ul.user_id = u.user_id
            AND ul.key = :selfExclusionKey
            AND (
              ul.value != :temporaryType
              OR (ul.value = :temporaryType AND ul.expire_at > NOW())
            )
        )
      `)

      replacements.selfExclusionKey =
        USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.SELF_EXCLUSION
      replacements.temporaryType = SELF_EXCLUSION_TYPES.TEMPORARY
    }


    if (vipTierId) {
      whereConditions.push(`ud.vip_tier_id = :vipTierId`)
      replacements.vipTierId = vipTierId
    }

    if (tagIds && Array.isArray(tagIds) && tagIds.length > 0) {
      whereConditions.push(`
        (
          SELECT COUNT(DISTINCT ut.tag_id)
          FROM user_tags ut
          WHERE ut.user_id = u.user_id
          AND ut.tag_id IN (:tagIds)
        ) = :tagCount
      `)

  replacements.tagIds = tagIds
  replacements.tagCount = tagIds.length
}
   // Amount / having logic
   if (minWageredAmount) {
     havingConditions.push(`COALESCE(duts.sc_wagered_amount, 0) >= :minWageredAmount`)
     replacements.minWageredAmount = minWageredAmount
   }
   if (maxWageredAmount) {
     havingConditions.push(`COALESCE(duts.sc_wagered_amount, 0) <= :maxWageredAmount`)
     replacements.maxWageredAmount = maxWageredAmount
   }
   if (minWonAmount) {
     havingConditions.push(`COALESCE(duts.sc_won_amount, 0) >= :minWonAmount`)
     replacements.minWonAmount = minWonAmount
   }
   if (maxWonAmount) {
     havingConditions.push(`COALESCE(duts.sc_won_amount, 0) <= :maxWonAmount`)
     replacements.maxWonAmount = maxWonAmount
   }
   if (minPurchasedAmount) {
     havingConditions.push(`COALESCE(duts.sc_purchased_amount, 0) >= :minPurchasedAmount`)
     replacements.minPurchasedAmount = minPurchasedAmount
   }
   if (maxPurchasedAmount) {
     havingConditions.push(`COALESCE(duts.sc_purchased_amount, 0) <= :maxPurchasedAmount`)
     replacements.maxPurchasedAmount = maxPurchasedAmount
   }
   if (minRedeemedAmount) {
     havingConditions.push(`COALESCE(duts.sc_redeemed_amount, 0) >= :minRedeemedAmount`)
     replacements.minRedeemedAmount = minRedeemedAmount
   }
   if (maxRedeemedAmount) {
     havingConditions.push(`COALESCE(duts.sc_redeemed_amount, 0) <= :maxRedeemedAmount`)
     replacements.maxRedeemedAmount = maxRedeemedAmount
   }
   if (minBonusReferralEarned) {
     havingConditions.push(`COALESCE(duts.bonus_referral_earned, 0) >= :minBonusReferralEarned`)
     replacements.minBonusReferralEarned = minBonusReferralEarned
   }
   if (maxBonusReferralEarned) {
     havingConditions.push(`COALESCE(duts.bonus_referral_earned, 0) <= :maxBonusReferralEarned`)
     replacements.maxBonusReferralEarned = maxBonusReferralEarned
   }
   if (minGGR) {
     havingConditions.push(`(COALESCE(duts.sc_wagered_amount, 0) - COALESCE(duts.sc_won_amount, 0)) >= :minGGR`)
     replacements.minGGR = minGGR
   }
   if (maxGGR) {
     havingConditions.push(`(COALESCE(duts.sc_wagered_amount, 0) - COALESCE(duts.sc_won_amount, 0)) <= :maxGGR`)
     replacements.maxGGR = maxGGR
   }

   if (minScBalance || maxScBalance) {
     filteredUserIds = await this.getFilteredUserIds({ minScBalance, maxScBalance, currencyCode })
     if (filteredUserIds?.length === 0) {
       return { users: [], pageNo: 1, totalPages: 0 }
     }
     whereConditions.push(`u.user_id IN (:filteredUserIds)`)
     replacements.filteredUserIds = filteredUserIds
   }


   const whereClause = whereConditions.length ?`WHERE ${whereConditions.join(' AND ')}`: ''
   const havingClause = havingConditions.length ? `HAVING ${havingConditions.join(' AND ')}` : ''


   // transaction subquery helper
   const transactionSubQuery = getDailySummaryReportQuery(
     [],
     false,
     startDate ? ':startDate' : null,
     endDate ? ':endDate' : null
   ).replace(/;$/, '')


   console.log('🛠 [TopPlayers] Transaction SubQuery Snippet:', transactionSubQuery.substring(0, 500) + '...')


   const cteQuery = `
     WITH filtered_users AS (
       SELECT
         u.user_id,
         u.username,
         u.email,
         ud.state_code,
         s.name AS state_name,
         u.created_at AS created_at,
         COALESCE(w.gc_balance, 0) AS gc_balance,
         COALESCE(w.sc_balance, 0) AS sc_balance,
         COALESCE(duts.bet_count, 0) AS bet_count,
         COALESCE(duts.win_count, 0) AS win_count,
         COALESCE(duts.sc_wagered_amount, 0) AS sc_wagered_amount,
         COALESCE(duts.sc_won_amount, 0) AS sc_won_amount,
         COALESCE(duts.sc_purchased_amount, 0) AS sc_purchased_amount,
         COALESCE(duts.sc_redeemed_amount, 0) AS sc_redeemed_amount,
         COALESCE(duts.bonus_referral_earned, 0) AS bonus_referral_earned,
         COALESCE(duts.sc_purchased_offline, 0) AS sc_purchased_offline,
         (COALESCE(duts.sc_wagered_amount, 0) - COALESCE(duts.sc_won_amount, 0)) AS ggr
       FROM users u
       LEFT JOIN (
         SELECT
           user_id,
           SUM(CASE WHEN currency_code = 'GC' THEN balance ELSE 0 END) AS gc_balance,
           SUM(CASE WHEN currency_code IN ('PSC', 'BSC', 'RSC') THEN balance ELSE 0 END) AS sc_balance
         FROM wallets
         GROUP BY user_id
       ) w ON u.user_id = w.user_id
       LEFT JOIN (${transactionSubQuery}
       ) duts ON duts.user_id = u.user_id
       LEFT JOIN user_details ud ON u.user_id = ud.user_id
       LEFT JOIN states s ON s.state_code = ud.state_code
       ${selfExclusionJoin}
       ${whereClause}
       GROUP BY u.user_id, u.username, u.email, ud.state_code, s.name, w.gc_balance, w.sc_balance, duts.bet_count, duts.win_count,
                duts.sc_wagered_amount, duts.sc_won_amount, duts.sc_purchased_amount, duts.sc_redeemed_amount, duts.bonus_referral_earned,
                duts.sc_purchased_offline
       ${havingClause}
     )
   `


   const countQuery = `
     ${cteQuery}
     SELECT COUNT(*) AS total FROM filtered_users
   `


   const countResult = await db.sequelize.query(countQuery, {
     replacements,
     type: db.sequelize.QueryTypes.SELECT
   })


   const totalRecords = countResult[0].total
   const totalPages = Math.ceil(totalRecords / limit)


   const dataQuery = `
     ${cteQuery}
     SELECT *
     FROM filtered_users
     ORDER BY ${orderBy} ${orderDirection}, user_id ASC
     LIMIT ${limit}
     OFFSET ${offset}
   `


   console.log('🚀 [TopPlayers] Executing SQL:', dataQuery)
   console.log('🧩 [TopPlayers] With Replacements:', JSON.stringify(replacements, null, 2))


   const data = await db.sequelize.query(dataQuery, {
     replacements,
     type: db.sequelize.QueryTypes.SELECT
   })


   return {
     data,
     pageNo,
     totalPages,
     totalRecords: countResult[0].total
   }
 }


 async getFilteredUserIds() {
   const { minScBalance, maxScBalance, currencyCode } = this.args
   const currencyCodes = currencyCode ? [currencyCode] : ['PSC', 'BSC', 'RSC']
   const whereCurrency = currencyCodes.map(code => '${code}').join(',')


   const havingClauses = []
   if (minScBalance) {
     havingClauses.push(`COALESCE(SUM(w.balance), 0) >= ${parseFloat(minScBalance)}`)
   }
   if (maxScBalance) {
     havingClauses.push(`COALESCE(SUM(w.balance), 0) <= ${parseFloat(maxScBalance)}`)
   }


   const havingSql = havingClauses.length ? `HAVING ${havingClauses.join(' AND ')}` : ''
   const query = `
     SELECT u.user_id
     FROM users u
     JOIN wallets w ON u.user_id = w.user_id
     WHERE w.currency_code IN (${whereCurrency})
     GROUP BY u.user_id
     ${havingSql}`


   const results = await db.sequelize.query(query, {
     type: db.Sequelize.QueryTypes.SELECT
   })
   return results.map(row => row.user_id)
 }
}