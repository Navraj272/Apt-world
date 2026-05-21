'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION get_user_incremental_aggregate_data(user_ids INTEGER[] DEFAULT NULL)
      RETURNS TABLE (
        user_id INTEGER,
        date DATE,
        bet_count BIGINT,
        win_count BIGINT,
        wagered NUMERIC,
        won NUMERIC,
        total_game_played BIGINT,
        purchased NUMERIC,
        purchased_offline NUMERIC,
        sc_purchased_count BIGINT,
        redeemed NUMERIC,
        redeemed_offline NUMERIC,
        sc_coin_purchased NUMERIC,
        bonus_referral_earned NUMERIC
      ) AS $$
      DECLARE
          from_time TIMESTAMP;
          to_time TIMESTAMP := NOW();
      BEGIN
          SELECT COALESCE(MAX(updated_at), NOW() - INTERVAL '1 hour')
          INTO from_time
          FROM user_transaction_summary_aggregates;

          RETURN QUERY
          WITH casino_data AS (
            SELECT
              ct.user_id,
              DATE(ct.created_at + INTERVAL '-7 hours') AS date,
              COUNT(*) FILTER (WHERE ct.action_type = 'casino_bet' AND ct.coin_type != 'GC') AS bet_count,
              COUNT(*) FILTER (WHERE ct.action_type = 'casino_win' AND ct.coin_type != 'GC') AS win_count,
              SUM(CASE WHEN ct.action_type = 'casino_bet' AND ct.coin_type != 'GC' THEN ct.coin ELSE 0 END) AS wagered,
              SUM(CASE WHEN ct.action_type IN ('casino_win', 'casino_refund') AND ct.coin_type != 'GC' THEN ct.coin ELSE 0 END) AS won,
              COUNT(DISTINCT ct.casino_game_id) AS total_game_played
            FROM casino_transactions ct
            WHERE ct.created_at >= from_time AND ct.created_at < to_time
              AND (
                user_ids IS NULL
                OR array_length(user_ids, 1) IS NULL
                OR ct.user_id = ANY(user_ids)
              )
            GROUP BY ct.user_id, DATE(ct.created_at + INTERVAL '-7 hours')
          ),
          txn_data AS (
            SELECT
              t.user_id,
              DATE(t.created_at + INTERVAL '-7 hours') AS date,
              SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' AND payment_provider != 'Offline' AND (more_details->>'amount') IS NOT NULL THEN (more_details->>'amount')::decimal ELSE 0 END) AS purchased,
              SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' AND payment_provider = 'Offline' THEN sc ELSE 0 END) AS purchased_offline,
              COUNT(*) FILTER (WHERE purpose = 'purchase' AND status = 'successful' AND payment_provider != 'Offline') AS sc_purchased_count,
              SUM(CASE WHEN purpose = 'redeem' AND status IN ('successful', 'approved') AND payment_provider != 'Offline' THEN sc ELSE 0 END) AS redeemed,
              SUM(CASE WHEN purpose = 'redeem' AND status = 'successful' AND payment_provider = 'Offline' THEN sc ELSE 0 END) AS redeemed_offline,
              SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' THEN sc ELSE 0 END) AS sc_coin_purchased,
              SUM(CASE WHEN purpose = 'weekly_commission' THEN sc ELSE 0 END) AS bonus_referral_earned
            FROM transactions t
            WHERE t.created_at >= from_time AND t.created_at < to_time
              AND (
                user_ids IS NULL
                OR array_length(user_ids, 1) IS NULL
                OR t.user_id = ANY(user_ids)
              )
            GROUP BY t.user_id, DATE(t.created_at + INTERVAL '-7 hours')
          ),
          merged AS (
            SELECT
              COALESCE(c.user_id, t.user_id) AS user_id,
              COALESCE(c.date, t.date) AS date,
              c.bet_count,
              c.win_count,
              c.wagered,
              c.won,
              c.total_game_played,
              t.purchased,
              t.purchased_offline,
              t.sc_purchased_count,
              t.redeemed,
              t.redeemed_offline,
              t.sc_coin_purchased,
              t.bonus_referral_earned
            FROM casino_data c
            FULL OUTER JOIN txn_data t ON c.user_id = t.user_id AND c.date = t.date
          )

          SELECT
            m.user_id,
            m.date,
            m.bet_count,
            m.win_count,
            m.wagered,
            m.won,
            m.total_game_played,
            m.purchased,
            m.purchased_offline,
            m.sc_purchased_count,
            m.redeemed,
            m.redeemed_offline,
            m.sc_coin_purchased,
            m.bonus_referral_earned
          FROM merged m
          ORDER BY m.date;
      END;
      $$ LANGUAGE plpgsql;
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      DROP FUNCTION IF EXISTS get_user_incremental_aggregate_data(INTEGER[]);
    `);
  }
};
