import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { ApiHelper } from '@src/utils/api.utils'

export class GetDropBonusClaimsHandler extends BaseHandler {
  async run() {
    const {
      dropBonusId,
      userId,
      email,
      isActive,
      startDate,
      endDate,
      pageNo,
      limit,
      pagination
    } = this.args

    const { offset, limit: pageLimit, pageNo: currentPageNo } = ApiHelper.getPagination(
      pageNo,
      limit,
      pagination
    )

    // Helper to check if a value is actually provided
    const isDefined = (v) => v !== undefined && v !== null && v !== ''

    // 1. Get Drop Bonus details first
    const dropBonus = await db.DropBonus.findOne({
      where: { id: dropBonusId },
      attributes: ['id', 'name', 'code', 'createdAt']
    })

    if (!dropBonus) {
      throw new Error('Drop bonus not found')
    }

    const { Op } = db.Sequelize
    const bonusCreatedDate = new Date(dropBonus.createdAt)
    const now = new Date()

    // 2. Logic for Date Filtering
    // Convert inputs to Date objects or use defaults
    let effectiveStart = isDefined(startDate) ? new Date(startDate) : bonusCreatedDate
    let effectiveEnd = isDefined(endDate) ? new Date(endDate) : now

    // Validation: Don't allow searching before the bonus existed
    if (effectiveStart < bonusCreatedDate) {
      effectiveStart = bonusCreatedDate
    }

    // CRITICAL FIX: Set time boundaries so we don't miss records on the same day
    // effectiveStart -> 2026-05-05 00:00:00
    effectiveStart.setHours(0, 0, 0, 0) 
    // effectiveEnd -> 2026-10-05 23:59:59
    effectiveEnd.setHours(23, 59, 59, 999)

    // 3. Construct Where Clauses
    const bonusClaimWhere = {
      bonusId: dropBonusId,
      createdAt: {
        [Op.gte]: effectiveStart,
        [Op.lte]: effectiveEnd
      }
    }

    const userWhere = {}
    if (isDefined(userId)) userWhere.userId = userId
    
    if (isDefined(email)) {
      userWhere.email = { [Op.iLike]: `${email}%` }
    }

    if (isDefined(isActive)) {
      // Handles both "true" string and true boolean
      userWhere.isActive = String(isActive).toLowerCase() === 'true'
    }

    const userFilterApplied = Object.keys(userWhere).length > 0

    const include = [
      {
        model: db.User,
        where: userFilterApplied ? userWhere : undefined,
        attributes: [
          'userId', 'username', 'firstName', 'lastName', 
          'email', 'isActive', 'isInternalUser', 
          'affiliateId', 'refParentId', 'cxToken'
        ],
        required: userFilterApplied
      }
    ]

    // 4. Execute Query
    const { count: totalRecords, rows } = await db.BonusClaim.findAndCountAll({
      where: bonusClaimWhere,
      include,
      order: [['createdAt', 'DESC'], ['id', 'DESC']],
      limit: pageLimit,
      offset,
      distinct: true
    })

    // 5. Format Response
    return {
      dropBonus: {
        id: dropBonus.id,
        name: dropBonus.name,
        code: dropBonus.code,
        createdAt: dropBonus.createdAt
      },
      claims: rows.map((claim) => ({
        claimId: claim.id,
        userId: claim.userId,
        userName: claim.User?.username,
        firstName: claim.User?.firstName,
        lastName: claim.User?.lastName,
        email: claim.User?.email,
        isActive: claim.User?.isActive,
        isInternal: claim.User?.isInternalUser,
        affiliateId: claim.User?.affiliateId,
        refParentUserId: claim.User?.refParentId,
        cxToken: claim.User?.cxToken,
        claimCoin: claim.claimCoin,
        claimedAt: claim.createdAt
      })),
      pageNo: currentPageNo,
      totalPages: Math.ceil(totalRecords / pageLimit),
      totalClaims: totalRecords,
      filters: {
        // Return ISO strings for the frontend to see what was actually used
        effectiveStartDate: effectiveStart.toISOString(),
        effectiveEndDate: effectiveEnd.toISOString()
      }
    }
  }
}