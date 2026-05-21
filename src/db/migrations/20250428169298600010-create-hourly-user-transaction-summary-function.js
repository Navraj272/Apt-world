'use strict';

module.exports = {
  async up(queryInterface) {
    // Step 1: Create the summary function
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION public.refresh_user_hourly_summary()
      RETURNS void
      LANGUAGE plpgsql
      AS $$
      DECLARE
        from_time TIMESTAMP;
        to_time TIMESTAMP;
        rec RECORD;
      BEGIN
        SELECT date_trunc('hour', COALESCE(MAX(updated_at), NOW() - INTERVAL '1 hour'))
        INTO from_time
        FROM public.user_transaction_summary_aggregates;

        to_time := from_time + INTERVAL '1 hour';

        FOR rec IN
          WITH pst_data AS (
            SELECT
              ct.user_id AS user_id,
              DATE(created_at - INTERVAL '7 hours') AS pst_date,
              COUNT(*) FILTER (WHERE ct.action_type = 'casino_bet' AND ct.coin_type != 'GC') AS bet_count,
              COUNT(*) FILTER (WHERE ct.action_type = 'casino_win' AND ct.coin_type != 'GC') AS win_count,
              SUM(CASE WHEN ct.action_type = 'casino_bet' AND ct.coin_type != 'GC' THEN ct.coin ELSE 0 END) AS wagered,
              SUM(CASE WHEN ct.action_type IN ('casino_win', 'casino_refund') AND ct.coin_type != 'GC' THEN ct.coin ELSE 0 END) AS won,
              COUNT(DISTINCT ct.casino_game_id) AS total_game_played,
              0::NUMERIC AS purchased, 0::NUMERIC AS purchased_offline,
              0::NUMERIC AS sc_purchased_count,
              0::NUMERIC AS redeemed, 0::NUMERIC AS redeemed_offline,
              0::NUMERIC AS sc_coin_purchased,
              0::NUMERIC AS bonus_referral_earned
            FROM casino_transactions ct
            WHERE ct.created_at >= from_time AND ct.created_at < to_time
            GROUP BY ct.user_id, DATE(ct.created_at - INTERVAL '7 hours')

            UNION ALL

            SELECT
              t.user_id AS user_id,
              DATE(t.created_at - INTERVAL '7 hours') AS pst_date,
              0::NUMERIC, 0::NUMERIC,0::NUMERIC,0::NUMERIC,0::NUMERIC,
              SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' AND payment_provider != 'Offline' AND (more_details->>'amount') IS NOT NULL THEN (more_details->>'amount')::decimal ELSE 0 END),
              SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' AND payment_provider = 'Offline' THEN sc ELSE 0 END),
              COUNT(*) FILTER (WHERE t.purpose = 'purchase' AND t.status = 'successful' AND t.payment_provider != 'Offline') AS sc_purchased_count,
              SUM(CASE WHEN purpose = 'redeem' AND status IN ('successful', 'approved') AND payment_provider != 'Offline' THEN sc ELSE 0 END),
              SUM(CASE WHEN purpose = 'redeem' AND status = 'successful' AND payment_provider = 'Offline' THEN sc ELSE 0 END),
              SUM(CASE WHEN purpose = 'purchase' AND status = 'successful' THEN sc ELSE 0 END),
              SUM(CASE WHEN t.purpose = 'weekly_commission' THEN t.sc ELSE 0 END) AS bonus_referral_earned
            FROM transactions t
            WHERE t.created_at >= from_time AND t.created_at < to_time
            GROUP BY t.user_id, DATE(t.created_at - INTERVAL '7 hours')
          )

          SELECT
            user_id,
            pst_date,
            SUM(wagered) AS wagered,
            SUM(won) AS won,
            SUM(bet_count) AS bet_count,
            SUM(win_count) AS win_count,
            SUM(total_game_played) AS total_game_played,
            SUM(purchased) AS purchased,
            SUM(purchased_offline) AS purchased_offline,
            SUM(sc_purchased_count) AS sc_purchased_count,
            SUM(redeemed) AS redeemed,
            SUM(redeemed_offline) AS redeemed_offline,
            SUM(sc_coin_purchased) AS sc_coin_purchased,
            SUM(bonus_referral_earned) bonus_referral_earned
          FROM pst_data
          GROUP BY user_id, pst_date

        LOOP
          -- Upsert for each date
          INSERT INTO user_transaction_summary_aggregates (
            user_id,date,bet_count,win_count,wagered,won,total_game_played,
            purchased,purchased_offline,sc_purchased_count,redeemed,
            redeemed_offline,sc_coin_purchased,bonus_referral_earned,
            created_at, updated_at
          )
          VALUES (
            rec.user_id,rec.pst_date,rec.bet_count,rec.win_count,rec.wagered,rec.won,
            rec.total_game_played,rec.purchased,rec.purchased_offline,rec.sc_purchased_count,
            rec.redeemed,rec.redeemed_offline,rec.sc_coin_purchased,rec.bonus_referral_earned,
            NOW(), NOW()
          )
          ON CONFLICT (user_id,date) DO UPDATE SET
            bet_count =  user_transaction_summary_aggregates.bet_count + EXCLUDED.bet_count,
            win_count =  user_transaction_summary_aggregates.win_count + EXCLUDED.win_count,
            wagered = user_transaction_summary_aggregates.wagered + EXCLUDED.wagered,
            won = user_transaction_summary_aggregates.won + EXCLUDED.won,
            total_game_played = user_transaction_summary_aggregates.total_game_played + EXCLUDED.total_game_played,
            purchased = user_transaction_summary_aggregates.purchased + EXCLUDED.purchased,
            purchased_offline = user_transaction_summary_aggregates.purchased_offline + EXCLUDED.purchased_offline,
            sc_purchased_count = user_transaction_summary_aggregates.sc_purchased_count + EXCLUDED.sc_purchased_count,
            redeemed = user_transaction_summary_aggregates.redeemed + EXCLUDED.redeemed,
            redeemed_offline = user_transaction_summary_aggregates.redeemed_offline + EXCLUDED.redeemed_offline,
            sc_coin_purchased = user_transaction_summary_aggregates.sc_coin_purchased + EXCLUDED.sc_coin_purchased,
            bonus_referral_earned = user_transaction_summary_aggregates.bonus_referral_earned + EXCLUDED.bonus_referral_earned,
            updated_at = NOW();
        END LOOP;
        END;
      $$;
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      DROP FUNCTION IF EXISTS public.refresh_user_hourly_summary();
    `);
  }
};
