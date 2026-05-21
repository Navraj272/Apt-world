import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { ApiHelper } from '@src/utils/api.utils'

export class GetTransactionHandler extends BaseHandler {
  async run() {
    const {
      purpose,
      email,
      username,
      userId,
      transactionId,
      paymentProvider,
      providerTransactionId,
      orderBy = 't.created_at',
      orderDirection = 'DESC',
      promoCode
    } = this.args

    const { offset, limit } = ApiHelper.getPagination(this.args.pageNo, this.args.limit, this.args.pagination)
    const { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.endDate)

    const whereClauses = []
    const replacements = { limit, offset }

    if (userId) {
      whereClauses.push("t.user_id = :userId")
      replacements.userId = userId
    }

    if (email) {
      whereClauses.push("u.email ILIKE CONCAT('%', :email, '%')")
      replacements.email = email
    }

    if (username) {
      whereClauses.push("u.username ILIKE CONCAT('%', :username, '%')")
      replacements.username = username
    }

    if (purpose) {
      whereClauses.push("t.purpose = :purpose")
      replacements.purpose = purpose
    }

    if (transactionId) {
      whereClauses.push("t.transaction_id = :transactionId")
      replacements.transactionId = transactionId
    }

    if (paymentProvider) {
      whereClauses.push("t.payment_provider = :paymentProvider")
      replacements.paymentProvider = paymentProvider
    }

    if (providerTransactionId) {
      whereClauses.push("t.payment_provider_id = :providerTransactionId")
      replacements.providerTransactionId = providerTransactionId
    }

    if (startDate && endDate) {
      whereClauses.push("t.created_at BETWEEN :startDate AND :endDate")
      replacements.startDate = startDate
      replacements.endDate = endDate
    }

    if (promoCode) {
      whereClauses.push(`t.more_details::jsonb -> 'packageDetail' ->> 'promoCode' = :promoCode`)
      replacements.promoCode = promoCode
    }

    // whereClauses.push("t.status NOT IN ('failed', 'cancelled')")

    const whereSQL = whereClauses.length ? `WHERE ${whereClauses.join(' AND ')}` : ''

    const dataQuery = `
      SELECT
        t.transaction_id,
        t.payment_provider_id,
        t.user_id,
        t.status,
CASE
  WHEN TRIM(au.first_name) IS NOT NULL AND TRIM(au.first_name) <> '' THEN CONCAT('admin-', TRIM(au.first_name))
  ELSE 'user'
END AS admin,        t.payment_provider,
        u.email,
        u.username,
        t.purpose,
        t.created_at,
        (t.more_details->>'amount')::numeric AS amount,
     t.more_details->>'paymentMethod' as payment_method,
        t.gc AS gccoin,
        t.sc AS sccoin,
        t.more_details::jsonb -> 'packageDetail' ->> 'promoCode' AS promoCode
      FROM transactions t
      LEFT JOIN users u ON t.user_id = u.user_id
      LEFT JOIN admin_users au ON au.admin_user_id = t.actionee_id
      ${whereSQL}
      ORDER BY ${orderBy} ${orderDirection}
      LIMIT :limit OFFSET :offset
    `

    const countQuery = `
      SELECT COUNT(*) AS count
      FROM transactions t
      LEFT JOIN users u ON t.user_id = u.user_id
      LEFT JOIN admin_users au ON au.admin_user_id = t.actionee_id
      ${whereSQL}
    `

    const [rows, countResult] = await Promise.all([
      db.sequelize.query(dataQuery, {
        replacements,
        type: db.sequelize.QueryTypes.SELECT,
      }),
      db.sequelize.query(countQuery, {
        replacements,
        type: db.sequelize.QueryTypes.SELECT,
      }),
    ])

    const total = Number(countResult?.[0]?.count || 0)

    return {
      data: rows,
      totalTransactions: total,
      totalPages: Math.ceil(total / limit),
      pageNo: this.args.pageNo || 1,
      limit,
    }
  }
}
