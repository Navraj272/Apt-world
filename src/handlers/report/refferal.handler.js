import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';



export class GetRefferalStatsHandler extends BaseHandler {
  async run() {
    const [
      [totalReferralsCount],
      [activePlayersLast7Days],
      [totalReferralBonuses],
      topReferrers
    ] = await Promise.all([
      // Total number of users who were referred by someone
      db.sequelize.query(
        `
        SELECT COUNT(*)::INTEGER AS total_referrals
        FROM users
        WHERE ref_parent_id IS NOT NULL;
        `,
        { type: db.Sequelize.QueryTypes.SELECT }
      ),

      // Count of unique users who made transactions in the last 7 days
      db.sequelize.query(
        `
        WITH ActiveUsers AS (
          SELECT DISTINCT w.user_id
          FROM transaction_ledgers tl
          JOIN wallets w ON tl.wallet_id = w.id
          WHERE tl.created_at >= NOW() - INTERVAL '7 days'
        )
        SELECT COUNT(user_id)::INTEGER AS active_users_count FROM ActiveUsers;
        `,
        { type: db.Sequelize.QueryTypes.SELECT }
      ),

      // Total earned commissions from referred users
      db.sequelize.query(
        `
        SELECT COALESCE(SUM(sc), 0)::NUMERIC AS total_bonus
        FROM transactions
        WHERE purpose = 'bonus_referral'
        AND status = 'successful';
        `,
        { type: db.Sequelize.QueryTypes.SELECT }
      ),

      // Top 4 referrers based on total referrals and commission earned
      db.sequelize.query(
        `
        WITH ReferralStats AS (
          SELECT 
            ua.affiliate_user_id, 
            COUNT(ua.referred_user_id) AS total_referrals,
            COALESCE(SUM(ua.earned_commission), 0) AS total_commission
          FROM user_affiliations ua
          GROUP BY ua.affiliate_user_id
        ),
        ActiveReferrals AS (
          SELECT 
            ua.affiliate_user_id, 
            COUNT(DISTINCT t.user_id) AS active_referred_users
          FROM user_affiliations ua
          JOIN transactions t ON ua.referred_user_id = t.user_id
          WHERE t.created_at >= NOW() - INTERVAL '7 days'
          GROUP BY ua.affiliate_user_id
        )
        SELECT 
          rs.affiliate_user_id,
          u.username AS affiliate_username,
          rs.total_referrals,
          rs.total_commission,
          COALESCE(ar.active_referred_users, 0) AS active_referred_users,
          CASE 
            WHEN rs.total_referrals > 0 
            THEN ROUND((COALESCE(ar.active_referred_users, 0) * 100.0) / rs.total_referrals, 2) 
            ELSE 0 
          END AS active_referred_percentage
        FROM ReferralStats rs
        LEFT JOIN ActiveReferrals ar ON rs.affiliate_user_id = ar.affiliate_user_id
        LEFT JOIN users u ON rs.affiliate_user_id = u.user_id
        ORDER BY rs.total_referrals DESC, rs.total_commission DESC
        LIMIT 4;
        `,
        { type: db.Sequelize.QueryTypes.SELECT }
      )
    ]);

    return {
      totalReferrals: totalReferralsCount?.total_referrals || 0,
      activePlayers: activePlayersLast7Days?.active_users_count || 0,
      totalReferralBonuses: totalReferralBonuses?.total_bonus || 0,
      topReferrers
    };
  }
}
