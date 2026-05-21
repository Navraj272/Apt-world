import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { getCache, setCache } from '@src/libs/redis'
import { ApiHelper } from '@src/utils/api.utils'
import { CASINO_TRANSACTION_PURPOSE } from '@src/utils/constants/public.constants'

export class GetCasinoTransactionHandler extends BaseHandler {
  async run() {
    const {
      userId,
      username,
      email,
      gameName,
      gameRoundId,
      orderBy = 'created_at',
      orderDirection = 'DESC'
    } = this.args

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit, this.args.pagination)
    const { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.endDate)
    
    if (!userId && !email && !username && !gameName && this.args.pagination) {
      const cachedData = await getCache('CASINO_TXN')
      if (cachedData) return JSON.parse(cachedData)
    }

    let whereClause = `WHERE ct.created_at >= :startDate AND ct.created_at < :endDate`
    const replacements = {
      startDate,
      endDate,
      limit,
      offset,
      betPurpose: CASINO_TRANSACTION_PURPOSE.CASINO_BET,
      winPurpose: CASINO_TRANSACTION_PURPOSE.CASINO_WIN
    }

    // Apply filters
    if (userId) {
      whereClause += ` AND ct.user_id = :user_id`
      replacements.user_id = userId
    }
    // if (username) {
    //   whereClause += ` AND u.username ILIKE :username`
    //   replacements.username = `%${username}%`
    // }
    // if (email) {
    //   whereClause += ` AND u.email ILIKE :email`
    //   replacements.email = `%${email}%`
    // }

    if (email) {
      whereClause += ` AND (u.username ILIKE :search OR u.email ILIKE :search)`
      replacements.search = `%${email}%`
    }

    if (gameName) {
      whereClause += ` AND cg.name ILIKE :game_name`
      replacements.game_name = `%${gameName}%`
    }

    if (gameRoundId) {
      whereClause += ` AND ct.game_round_id = :gameRoundId`
      replacements.gameRoundId = gameRoundId
    }

    const baseQuery = `
      SELECT
        ct.user_id,
        ct.game_round_id,
        ct.casino_game_id,
        u.email,
        u.username, 
        MIN(ct.created_at) AS created_at,
        cg.name AS casino_game_name,
        ct.coin_type,
        SUM(CASE WHEN ct.action_type = :betPurpose THEN ct.coin ELSE 0 END) AS bet_amount,
        SUM(CASE WHEN ct.action_type = :winPurpose THEN ct.coin ELSE 0 END) AS win_amount
      FROM casino_transactions ct
      LEFT JOIN users u ON u.user_id = ct.user_id
      LEFT JOIN casino_games cg ON cg.id = ct.casino_game_id
      ${whereClause}
      GROUP BY ct.user_id, ct.game_round_id, ct.casino_game_id, u.email, u.username, cg.name,ct.coin_type
      ORDER BY ${orderBy} ${orderDirection}
      LIMIT :limit OFFSET :offset
    `

    const countQuery = `
      SELECT COUNT(*) AS total
      FROM (
        SELECT 1
        FROM casino_transactions ct
        LEFT JOIN users u ON u.user_id = ct.user_id
        LEFT JOIN casino_games cg ON cg.id = ct.casino_game_id
        ${whereClause}
        GROUP BY ct.user_id, ct.game_round_id, ct.casino_game_id, u.email, u.username, cg.name
      ) AS sub
    `

    const [results, countResult] = await Promise.all([
      db.sequelize.query(baseQuery, {
        replacements,
        type: db.sequelize.QueryTypes.SELECT
      }),
      db.sequelize.query(countQuery, {
        replacements,
        type: db.sequelize.QueryTypes.SELECT
      })
    ])

    const totalCount = parseInt(countResult?.[0]?.total ?? '0', 10)

    await setCache('CASINO_TXN', JSON.stringify({
      data: results,
      totalTransactions: totalCount,
      totalPages: Math.ceil(totalCount / limit),
      pageNo,
      limit,
      message: 'Transactions fetched successfully.',
    }), 60 * 60)

    return {
      data: results,
      totalTransactions: totalCount,
      totalPages: Math.ceil(totalCount / limit),
      pageNo,
      limit,
      message: 'Transactions fetched successfully.',
    }
  }
}
