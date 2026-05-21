import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { ApiHelper } from '@src/utils/api.utils';


export class CasinoCallbackHandler extends BaseHandler {
 async run() {
   const {
     currencyCode,
     transactionType,
     userId,
     providerTransactionId,
     gameRoundId,
     trasactionId,
     gameName,
     email,
   } = this.args;


   const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit, this.args.pagination);
   const { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.endDate);


   // Dynamic WHERE clauses
   const whereClauses = [];
   if (userId) whereClauses.push('ct.user_id = :userId');
   if (currencyCode) whereClauses.push('ct.coin_type = :currencyCode');
   if (transactionType) whereClauses.push('ct.action_type = :transactionType');
   if (providerTransactionId) whereClauses.push('ct.transaction_id = :providerTransactionId');
   if (gameRoundId) whereClauses.push('ct.game_round_id = :gameRoundId');
   if (trasactionId) whereClauses.push('ct.id = :trasactionId');
   if (gameName) whereClauses.push('cg.name ILIKE :gameName');
   if (email) whereClauses.push('u.email ILIKE :email');
   if (startDate && endDate) {
     whereClauses.push('ct.created_at BETWEEN :startDate AND :endDate');
   } else if (startDate) {
     whereClauses.push('ct.created_at >= :startDate');
   } else if (endDate) {
     whereClauses.push('ct.created_at <= :endDate');
   }


   const whereCondition = whereClauses.length ? `WHERE ${whereClauses.join(' AND ')}` : '';


   const baseQuery = `
     SELECT
       ct.id AS casino_transaction_id,
       ct.transaction_id AS provider_transaction_id,
       ct.game_round_id,
       ct.casino_game_id,
       ct.user_id,
       ct.coin,
       ct.coin_type,
       u.email,
       u.username,
       cg.name AS casino_game_name,
       ct.action_type,
       ct.created_at,
       ct.more_details
     FROM casino_transactions ct
     LEFT JOIN casino_games cg ON cg.id = ct.casino_game_id
     LEFT JOIN users u ON u.user_id = ct.user_id
     ${whereCondition}
   `;


   // Get total count
   const countQuery = `SELECT COUNT(*) AS total_count FROM (${baseQuery}) AS sub`;


   // Get paginated data
   const paginatedQuery = `
     ${baseQuery}
     ORDER BY ct.created_at DESC
     LIMIT :limit OFFSET :offset
   `;


   const [countResult, dataRows] = await Promise.all([
     db.sequelize.query(countQuery, {
       replacements: {
         userId,
         currencyCode,
         transactionType,
         startDate,
         endDate,
         providerTransactionId,
         gameRoundId,
         trasactionId,
         gameName: gameName ? `%${gameName}%` : undefined,
         email : email ? `%${email}%` : undefined,
       },
       type: db.sequelize.QueryTypes.SELECT,
     }),
     db.sequelize.query(paginatedQuery, {
       replacements: {
         userId,
         currencyCode,
         transactionType,
         startDate,
         endDate,
         limit,
         offset,
         providerTransactionId,
         gameRoundId,
         trasactionId,
         gameName: gameName ? `%${gameName}%` : undefined,
         email : email ? `%${email}%` : undefined,
       },
       type: db.sequelize.QueryTypes.SELECT,
     }),
   ]);


   return {
     data: dataRows,
     totalPages: Math.ceil((countResult?.[0]?.total_count || 0) / limit),
     pageNo,
     totalTransactions : countResult?.[0]?.total_count
   };
 }
}
