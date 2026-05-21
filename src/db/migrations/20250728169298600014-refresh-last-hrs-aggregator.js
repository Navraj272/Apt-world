'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Add 'signups' column
    await queryInterface.addColumn('daily_aggregates', 'signups', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });

    // 2. Create or replace the refresh_last_hour_aggregate function
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION refresh_last_hour_aggregate()
      RETURNS void AS $$
      DECLARE
        from_time TIMESTAMP;
        to_time TIMESTAMP;
        rec RECORD;
      BEGIN
        SELECT date_trunc('hour', COALESCE(MAX(updated_at), NOW() - INTERVAL '1 hour'))
        INTO from_time
        FROM daily_aggregates;

        to_time := from_time + INTERVAL '1 hour';

        FOR rec IN
          WITH pst_data AS (
            SELECT
              DATE(created_at - INTERVAL '7 hours') AS pst_date,
              SUM(CASE WHEN ct.action_type = 'casino_bet' AND ct.coin_type != 'GC' THEN ct.coin ELSE 0 END) AS wagered,
              SUM(CASE WHEN ct.action_type IN ('casino_win', 'casino_refund') AND ct.coin_type != 'GC' THEN ct.coin ELSE 0 END) AS won,
              0::NUMERIC AS purchased, 0::NUMERIC AS purchased_offline,
              0::NUMERIC AS redeemed, 0::NUMERIC AS redeemed_offline,
              0::NUMERIC AS sc_coin_purchased,
              0::INTEGER AS signups
            FROM casino_transactions ct
            WHERE ct.created_at >= from_time AND ct.created_at < to_time
            GROUP BY DATE(ct.created_at - INTERVAL '7 hours')

            UNION ALL

            SELECT
              DATE(t.created_at - INTERVAL '7 hours') AS pst_date,
              0::NUMERIC, 0::NUMERIC,
              SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' AND payment_provider != 'Offline' AND (more_details->>'amount') IS NOT NULL THEN (more_details->>'amount')::decimal ELSE 0 END),
              SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' AND payment_provider = 'Offline' THEN sc ELSE 0 END),
              SUM(CASE WHEN purpose = 'redeem' AND status IN ('successful', 'approved') AND payment_provider != 'Offline' THEN sc ELSE 0 END),
              SUM(CASE WHEN purpose = 'redeem' AND status = 'successful' AND payment_provider = 'Offline' THEN sc ELSE 0 END),
              SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' THEN sc ELSE 0 END),
              0::INTEGER
            FROM transactions t
            WHERE t.created_at >= from_time AND t.created_at < to_time
            GROUP BY DATE(t.created_at - INTERVAL '7 hours')

            UNION ALL

            SELECT
              DATE(u.created_at - INTERVAL '7 hours') AS pst_date,
              0::NUMERIC, 0::NUMERIC,
              0::NUMERIC, 0::NUMERIC,
              0::NUMERIC, 0::NUMERIC,
              0::NUMERIC,
              COUNT(*)::INTEGER
            FROM users u
            WHERE u.created_at >= from_time AND u.created_at < to_time
            GROUP BY DATE(u.created_at - INTERVAL '7 hours')
          )
          SELECT
            pst_date,
            SUM(wagered) AS wagered,
            SUM(won) AS won,
            SUM(purchased) AS purchased,
            SUM(purchased_offline) AS purchased_offline,
            SUM(redeemed) AS redeemed,
            SUM(redeemed_offline) AS redeemed_offline,
            SUM(sc_coin_purchased) AS sc_coin_purchased,
            SUM(signups) AS signups
          FROM pst_data
          GROUP BY pst_date
        LOOP
          INSERT INTO daily_aggregates (
            date, wagered, won,
            purchased, purchased_offline,
            redeemed, redeemed_offline, sc_coin_purchased, signups,
            created_at, updated_at
          )
          VALUES (
            rec.pst_date, rec.wagered, rec.won,
            rec.purchased, rec.purchased_offline,
            rec.redeemed, rec.redeemed_offline, rec.sc_coin_purchased, rec.signups,
            NOW(), NOW()
          )
          ON CONFLICT (date) DO UPDATE SET
            wagered = daily_aggregates.wagered + EXCLUDED.wagered,
            won = daily_aggregates.won + EXCLUDED.won,
            purchased = daily_aggregates.purchased + EXCLUDED.purchased,
            purchased_offline = daily_aggregates.purchased_offline + EXCLUDED.purchased_offline,
            redeemed = daily_aggregates.redeemed + EXCLUDED.redeemed,
            redeemed_offline = daily_aggregates.redeemed_offline + EXCLUDED.redeemed_offline,
            sc_coin_purchased = daily_aggregates.sc_coin_purchased + EXCLUDED.sc_coin_purchased,
            signups = daily_aggregates.signups + EXCLUDED.signups,
            updated_at = NOW();
        END LOOP;
      END;
      $$ LANGUAGE plpgsql;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('daily_aggregates', 'signups');
    await queryInterface.sequelize.query(`
      DROP FUNCTION IF EXISTS refresh_last_hour_aggregate();
    `);
  }
};