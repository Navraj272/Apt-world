import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { ApiHelper } from '@src/utils/api.utils'
import { SELF_EXCLUSION_TYPES, USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from '@src/utils/constants/responsibleGambling.constants'
// import { SELF_EXCLUSION_TYPES, USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from '@src/utils/constants/responsibleGambling.constants' //

export class GetPlayersHandler extends BaseHandler {
  async run() {
    // 1. Add isSelfExcluded to args
    const { search, isActive, isInternal, userId, refParentId, cxToken, diditStatus, stateCode, isSelfExcluded ,lastLoginStartDate , lastLoginEndDate, startDate ,endDate , affiliateId, tagIds, accountStatus} = this.args

    const { offset, limit, pageNo } = ApiHelper.getPagination(
      this.args.pageNo,
      this.args.limit,
      this.args.pagination
    )

    const isDefined = (v) => v !== undefined && v !== null && v !== ''
    const whereConditions = []
    const replacements = {}

    // 2. Initialize dynamic joins variable
    let extraJoins = ''

    if (isDefined(userId)) {
      whereConditions.push(`u.user_id = :userId`)
      replacements.userId = userId
    }

    if (isDefined(affiliateId)) {
      whereConditions.push(`u.affiliate_id = :affiliateId`)
      replacements.affiliateId = affiliateId
    }

    if (isDefined(isActive)) {
      whereConditions.push(`u.is_active = :isActive`)
      replacements.isActive = isActive
    }
    if (isDefined(accountStatus)) {
      whereConditions.push(`u.account_status = :accountStatus`)
      replacements.accountStatus = accountStatus
    }
    if (isDefined(isInternal)) {
      whereConditions.push(`u.is_internal_user = :isInternal`)
      replacements.isInternal = isInternal
    }
    if (isDefined(diditStatus)) {
      whereConditions.push(`ud.didit_status = :diditStatus`)
      replacements.diditStatus = diditStatus
    }
    if (isDefined(refParentId)) {
      whereConditions.push(`u.ref_parent_id = :refParentId`)
      replacements.refParentId = refParentId
    }
    if (isDefined(cxToken)) {
      whereConditions.push(`u.cx_token = :cxToken`)
      replacements.cxToken = cxToken
    }
    if (isDefined(search)) {
      whereConditions.push(`(
        u.username ILIKE :search OR
        u.email ILIKE :search OR
        CONCAT(u.first_name, ' ', u.last_name) ILIKE :search
      )`)
      replacements.search = `%${search}%`
    }
    if (isDefined(stateCode)) {
      whereConditions.push(`ud.state_code IN (:stateCode)`)
      replacements.stateCode = stateCode
    }

   const toDateOnly = (v) => String(v).slice(0, 10)

if (isDefined(lastLoginStartDate)) {
  whereConditions.push(`
    DATE(ud.last_login_date AT TIME ZONE 'America/Los_Angeles')
      >= :lastLoginStartDate
  `)
  replacements.lastLoginStartDate = toDateOnly(lastLoginStartDate)
}

if (isDefined(lastLoginEndDate)) {
  whereConditions.push(`
    DATE(ud.last_login_date AT TIME ZONE 'America/Los_Angeles')
      <= :lastLoginEndDate
  `)
  replacements.lastLoginEndDate = toDateOnly(lastLoginEndDate)
}

if (isDefined(startDate)) {
  whereConditions.push(`
    DATE(u.created_at AT TIME ZONE 'America/Los_Angeles')
      >= :createdStartDate
  `)
  replacements.createdStartDate = toDateOnly(startDate)
}

if (isDefined(endDate)) {
  whereConditions.push(`
    DATE(u.created_at AT TIME ZONE 'America/Los_Angeles')
      <= :createdEndDate
  `)
  replacements.createdEndDate = toDateOnly(endDate)
}


    // 3. Logic for Self Excluded Users
    if (isDefined(isSelfExcluded) && isSelfExcluded === 'true') {
      // Only join user_limits if filtering by self-exclusion
      extraJoins += ` INNER JOIN user_limits ul ON u.user_id = ul.user_id`

      // Add conditions: Key must be SELF_EXCLUSION AND (Value is NOT Temporary OR (Value IS Temporary AND Date > Now))
      whereConditions.push(`ul.key = :selfExclusionKey`)
      whereConditions.push(`(
        ul.value != :temporaryType OR
        (ul.value = :temporaryType AND ul.expire_at > NOW())
      )`)

      replacements.selfExclusionKey = USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.SELF_EXCLUSION
      replacements.temporaryType = SELF_EXCLUSION_TYPES.TEMPORARY
    }

    // 4. Logic for Tag Filtering
if (isDefined(tagIds) && Array.isArray(tagIds) && tagIds.length > 0) {
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

    const whereClause = whereConditions.length ? `WHERE ${whereConditions.join(' AND ')}` : ''
    console.log(whereClause, "+++++++++++++++++++")

    // 5. Update queries to include ${extraJoins}
    const baseUsersQuery = `
      SELECT
        u.user_id,
        u.username AS "userName",
        u.first_name AS "firstName",
        u.last_name AS "lastName",
        u.email,
        u.cx_token AS "cxToken",
        u.affiliate_id AS "affiliateId",
        u.is_active AS "isActive",
        u.account_status AS "accountStatus",
        u.created_at AS "createdAt",
        ud.didit_status AS "kycStatus",
        ud.state_code AS "stateCode",
        u.phone,
        u.ref_parent_id AS "refParentUserId"
      FROM users u
      LEFT JOIN user_details ud ON u.user_id = ud.user_id
      ${extraJoins}
      ${whereClause} ORDER BY u.user_id DESC
      LIMIT ${limit} OFFSET ${offset}`

    const countQuery = `
      SELECT COUNT(*) AS total_count
      FROM users u
      LEFT JOIN user_details ud ON u.user_id = ud.user_id
      ${extraJoins}
      ${whereClause}`

    const [baseUsers, countResult] = await Promise.all([
      db.sequelize.query(baseUsersQuery, {
        replacements,
        type: db.sequelize.QueryTypes.SELECT,
      }),
      db.sequelize.query(countQuery, {
        replacements,
        type: db.sequelize.QueryTypes.SELECT,
      })
    ])

    const totalRecords = parseInt(countResult[0]?.total_count || 0)
    return {
      data: baseUsers,
      pageNo,
      totalPages: Math.ceil(totalRecords / limit),
      totalUsers: totalRecords,
    }
  }
}
