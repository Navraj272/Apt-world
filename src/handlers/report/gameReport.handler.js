
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { ApiHelper } from '@src/utils/api.utils'
import { dateOptionsFilter } from '@src/utils/date.utils'
import { dayjs } from '@src/libs/dayjs'

export class GetGameReportHandler extends BaseHandler {
 async run() {
   const { dateOptions, tab, gameName, orderBy, orderDirection = 'ASC', providerId } = this.args


   const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit, this.args.pagination)
   let { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.endDate)

   const PST = 'America/Los_Angeles';

   if (!this.args.startDate && !this.args.endDate && !dateOptions) {
  const today = dayjs().tz(PST).startOf('day');
  const startOfWeek = today.startOf('isoWeek');
  startDate = startOfWeek.format('YYYY-MM-DD');
  endDate = today.format('YYYY-MM-DD');
}

    console.log('📅 [TopPlayers] Parsed Dates: game-report', { startDate, endDate })

   if (!this.args.startDate && !this.args.endDate && !dateOptions) {
  const today = dayjs().tz(PST).startOf('day');
  const startOfWeek = today.startOf('isoWeek');
  startDate = startOfWeek.format('YYYY-MM-DD');
  endDate = today.format('YYYY-MM-DD');
}

    console.log('📅 [TopPlayers] Parsed Dates: game-report', { startDate, endDate })


   let whereClause = `ct.created_at IS NOT NULL `
   const replacements = {}


   if (gameName) {
     whereClause +=  `AND cg.name ILIKE :gameName`
     replacements.gameName = `%${gameName}%`
   }


   if (providerId) {
     whereClause +=  `AND cp.unique_id = :providerId`
     replacements.providerId = providerId
   }


   let selectClause, groupByClause, orderClause

   if (tab === 'provider') {
     selectClause = `
       cp.unique_id AS provider_id,
       cp.name AS provider_name
     `
     groupByClause = `cp.unique_id, cp.name`
     orderClause = 'provider_name'
   } else {
     selectClause = `
       ct.casino_game_id AS game_id,
       cg.name AS game_name
     `
     groupByClause = `ct.casino_game_id, cg.name`
     orderClause = 'game_name'
   }


   if (dateOptions) {
  const { fromDate, toDate } = dateOptionsFilter(dateOptions)
  whereClause += ` AND ct.created_at BETWEEN :startDate AND :endDate`
  replacements.startDate = fromDate
  replacements.endDate = toDate
} else if (this.args.startDate && this.args.endDate) {
  whereClause += ` AND ct.created_at BETWEEN :startDate AND :endDate`
  replacements.startDate = startDate
  replacements.endDate = endDate
}


const ALLOWED_ORDER_BY = ['game_name', 'gc_wagered', 'sc_wagered', 'sc_won', 'gc_won', 'ggr']

const ORDER_MAP = {
  game_name: 'game_name',    // cg.name AS game_name
  sc_wagered: 'sc_wagered',  // alias from SUM(...)
  sc_won: 'sc_won',
  gc_wagered: 'gc_wagered',
  gc_won: 'gc_won',
  ggr: 'ggr'
}


const direction = (orderDirection && orderDirection.toUpperCase() === 'DESC') ? 'DESC' : 'ASC'


if (orderBy && ALLOWED_ORDER_BY.includes(orderBy)) {
  if (tab === 'provider') {
    if (orderBy === 'ggr' || orderBy === 'sc_wagered' || orderBy === 'sc_won' || orderBy === 'gc_wagered' || orderBy === 'gc_won') {
      orderClause = ORDER_MAP[orderBy]
    } else {
      orderClause = 'provider_name'
    }
  } else {
    orderClause = ORDER_MAP[orderBy] || orderClause
  }
}



   const countQuery = `
     SELECT COUNT(*) AS total FROM (
       SELECT ${selectClause}
       FROM casino_transactions ct
       JOIN casino_games cg ON ct.casino_game_id = cg.id
       JOIN casino_providers cp ON cp.id = cg.casino_provider_id
       WHERE ${whereClause}
       GROUP BY ${groupByClause}
     ) AS sub
   `


   const totalCountResult = await db.sequelize.query(countQuery, {
     type: db.Sequelize.QueryTypes.SELECT,
     replacements
   })


   const totalCount = totalCountResult[0]?.total || 0
   const totalPages = Math.ceil(totalCount / limit)


   const gameReportQuery = `
     SELECT
       ${selectClause},
       SUM(CASE WHEN ct.action_type = 'casino_bet' AND ct.coin_type = 'SC' THEN ct.coin ELSE 0 END) AS sc_wagered,
       SUM(CASE WHEN ct.action_type = 'casino_win' AND ct.coin_type = 'SC' THEN ct.coin ELSE 0 END) AS sc_won,
       SUM(CASE WHEN ct.action_type = 'casino_bet' AND ct.coin_type = 'GC' THEN ct.coin ELSE 0 END) AS gc_wagered,
       SUM(CASE WHEN ct.action_type = 'casino_win' AND ct.coin_type = 'GC' THEN ct.coin ELSE 0 END) AS gc_won,
       (SUM(CASE WHEN ct.action_type = 'casino_bet' AND ct.coin_type = 'SC' THEN ct.coin ELSE 0 END) -
        SUM(CASE WHEN ct.action_type = 'casino_win' AND ct.coin_type = 'SC' THEN ct.coin ELSE 0 END)) AS ggr,
       ROUND(
         (SUM(CASE WHEN ct.action_type = 'casino_win' AND ct.coin_type = 'SC' THEN ct.coin ELSE 0 END) /
          NULLIF(SUM(CASE WHEN ct.action_type = 'casino_bet' AND ct.coin_type = 'SC' THEN ct.coin ELSE 0 END), 0))
         * 100, 2) AS payout
     FROM casino_transactions ct
     JOIN casino_games cg ON ct.casino_game_id = cg.id
     JOIN casino_providers cp ON cp.id = cg.casino_provider_id
     WHERE ${whereClause}
     GROUP BY ${groupByClause}
     ORDER BY ${orderClause} ${orderDirection}
     LIMIT :limit OFFSET :offset
   `


   const gameReport = await db.sequelize.query(gameReportQuery, {
     type: db.Sequelize.QueryTypes.SELECT,
     replacements: { ...replacements, limit, offset }
   })


   return {
     data: gameReport,
     totalPages,
     pageNo,
     totalCount: totalCountResult[0]?.total
   }
 }
}
