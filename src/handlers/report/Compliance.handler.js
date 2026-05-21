import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { WITHDRAWAL_STATUS, CACHE_KEYS } from '@src/utils/constants/public.constants'
import { getCache } from '@src/libs/redis'

export class ComplianceHandler extends BaseHandler {
  async run() {
    const { value } = this.args;
    let mode = this.args.internalUser; // expected: 'all' | 'internal' | 'real'

    // normalize to lowercase
    mode = typeof mode === 'string' ? mode.toLowerCase() : undefined;

    // load cached internal user IDs
    const cached = await getCache(CACHE_KEYS.INTERNAL_USERS);
    let internalIds = [];
    if (cached) {
      try {
        internalIds = JSON.parse(cached)
          .map(n => Number(n))
          .filter(Number.isFinite);
      } catch (e) {
        internalIds = [];
      }
    }

    // build filter: only apply when mode ≠ 'all'
    let userFilter = "";
    if (mode === 'internal') {
      userFilter = internalIds.length
        ? ` AND u.user_id IN (${internalIds.join(',')})`
        : ` AND u.is_internal_user = true`;
    }

    if (mode === 'real') {
      userFilter = internalIds.length
        ? ` AND u.user_id NOT IN (${internalIds.join(',')})`
        : ` AND u.is_internal_user = false`;
    }

    const query = `
      SELECT
        -- verified users for the requested segment
        (SELECT COUNT(DISTINCT CASE WHEN u.is_kyc_verified = true THEN u.user_id END)
         FROM users u
         WHERE 1=1 ${userFilter}) AS verified_user_count,

        -- withdrawals for the requested segment
        (SELECT COUNT(w.id)
         FROM users u
         LEFT JOIN withdrawals w ON u.user_id = w.user_id
         WHERE w.amount > :value AND w.status = :status
         ${userFilter}
        ) AS transactions_gt,

        -- total registered users for the requested segment
        (SELECT COUNT(u.user_id)
         FROM users u
         WHERE 1=1 ${userFilter}) AS total_registered_user
    `;

    const data = await db.sequelize.query(query, {
      type: db.sequelize.QueryTypes.SELECT,
      replacements: {
        value: Number(value) || 0,
        status: WITHDRAWAL_STATUS.PENDING
      }
    });

    return { success: true, data };
  }
}
