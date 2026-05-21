'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION get_incremental_aggregate_data()
      RETURNS TABLE (
        date DATE,
        wagered NUMERIC,
        won NUMERIC,
        purchased NUMERIC,
        purchased_offline NUMERIC,
        redeemed NUMERIC,
        redeemed_offline NUMERIC,
        sc_coin_purchased NUMERIC,
        signups BIGINT
      ) AS $$
      DECLARE
        from_time TIMESTAMP;
        to_time TIMESTAMP := NOW();
      BEGIN
        -- Get last updated time or fallback to 1 hour ago
        SELECT COALESCE(MAX(updated_at), NOW() - INTERVAL '1 hour')
        INTO from_time
        FROM daily_aggregates;
        
        RETURN QUERY
        WITH casino_data AS (
          SELECT
            DATE(created_at + INTERVAL '-7 hours') AS date,
            SUM(CASE WHEN action_type = 'casino_bet' AND coin_type != 'GC' THEN coin ELSE 0 END) AS wagered,
            SUM(CASE WHEN action_type IN ('casino_win', 'casino_refund') AND coin_type != 'GC' THEN coin ELSE 0 END) AS won
          FROM casino_transactions
          WHERE created_at >= from_time AND created_at < to_time
          GROUP BY DATE(created_at + INTERVAL '-7 hours')
        ),
        txn_data AS (
          SELECT
            DATE(created_at + INTERVAL '-7 hours') AS date,
            SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' AND payment_provider != 'Offline' AND (more_details->>'amount') IS NOT NULL THEN (more_details->>'amount')::decimal ELSE 0 END) AS purchased,
            SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' AND payment_provider = 'Offline' THEN sc ELSE 0 END) AS purchased_offline,
            SUM(CASE WHEN purpose = 'redeem' AND status IN ('successful', 'approved') AND payment_provider != 'Offline' THEN sc ELSE 0 END) AS redeemed,
            SUM(CASE WHEN purpose = 'redeem' AND status = 'successful' AND payment_provider = 'Offline' THEN sc ELSE 0 END) AS redeemed_offline,
            SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' THEN sc ELSE 0 END) AS sc_coin_purchased
          FROM transactions
          WHERE created_at >= from_time AND created_at < to_time
          GROUP BY DATE(created_at + INTERVAL '-7 hours')
        ),
        signups_data AS (
          SELECT
            DATE(created_at + INTERVAL '-7 hours') AS date,
            COUNT(*) AS signups
          FROM users
          WHERE created_at >= from_time AND created_at < to_time
          GROUP BY DATE(created_at + INTERVAL '-7 hours')
        ),
        merged AS (
          SELECT
            COALESCE(c.date, t.date, s.date) AS date,
            COALESCE(c.wagered, 0) AS wagered,
            COALESCE(c.won, 0) AS won,
            COALESCE(t.purchased, 0) AS purchased,
            COALESCE(t.purchased_offline, 0) AS purchased_offline,
            COALESCE(t.redeemed, 0) AS redeemed,
            COALESCE(t.redeemed_offline, 0) AS redeemed_offline,
            COALESCE(t.sc_coin_purchased, 0) AS sc_coin_purchased,
            COALESCE(s.signups, 0) AS signups
          FROM casino_data c
          FULL OUTER JOIN txn_data t ON c.date = t.date
          FULL OUTER JOIN signups_data s ON COALESCE(c.date, t.date) = s.date
        )
        SELECT * FROM merged ORDER BY date;
      END;
      $$ LANGUAGE plpgsql;
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      DROP FUNCTION IF EXISTS get_incremental_aggregate_data();
    `);
  }
};