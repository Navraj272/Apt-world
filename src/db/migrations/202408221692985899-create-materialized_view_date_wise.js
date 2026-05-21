'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the materialized view
    await queryInterface.sequelize.query(`
      CREATE MATERIALIZED VIEW daily_transaction_summary AS
      WITH
        casino_activity_summary AS (
          SELECT
            DATE(ct.created_at) AS transaction_date,
            COUNT(CASE WHEN ct.action_type = 'casino_bet' THEN 1 END) AS bet_count,
            COUNT(CASE WHEN ct.action_type IN ('casino_win', 'casino_refund') THEN 1 END) AS win_count,
            SUM(CASE WHEN ct.coin_type != 'GC' AND ct.action_type = 'casino_bet' THEN ct.coin ELSE 0 END) AS sc_wagered_amount,
            SUM(CASE WHEN ct.coin_type != 'GC' AND ct.action_type IN ('casino_win', 'casino_refund') THEN ct.coin ELSE 0 END) AS sc_won_amount
          FROM casino_transactions ct
          GROUP BY DATE(ct.created_at)
        ),

    banking_activity_summary AS (
      SELECT
        DATE(bt.created_at) AS transaction_date,
        
        SUM(CASE
            WHEN bt.purpose = 'purchase'
              AND bt.status = 'successful'
              AND bt.payment_provider != 'Offline'
              AND (bt.more_details->>'amount') IS NOT NULL
            THEN (bt.more_details->>'amount')::decimal
            ELSE 0
        END) AS sc_purchased_amount,
  
        SUM(CASE WHEN bt.purpose = 'purchase' THEN bt.sc ELSE 0 END) AS sc_coin_purchased,
  
        SUM(CASE
            WHEN bt.purpose = 'purchase'
              AND bt.payment_provider = 'Offline'
            THEN bt.sc ELSE 0
        END) AS sc_purchased_offline,
  
        SUM(CASE
            WHEN bt.purpose = 'redeem'
              AND bt.payment_provider = 'Offline'
            THEN bt.sc ELSE 0
        END) AS sc_redeemed_offline,
  
        COUNT(CASE
            WHEN bt.purpose = 'purchase'
              AND bt.status = 'successful'
              AND bt.payment_provider != 'Offline'
            THEN 1 END) AS sc_purchased_count,
  
        SUM(CASE
            WHEN bt.purpose = 'redeem'
              AND bt.status IN ('successful', 'approved')
              AND bt.payment_provider != 'Offline'
            THEN bt.sc ELSE 0
        END) AS sc_redeemed_amount,
  
        SUM(CASE WHEN bt.purpose = 'weekly_commission' THEN bt.sc ELSE 0 END) AS bonus_referral_earned
  
      FROM transactions bt 
      GROUP BY DATE(bt.created_at)
    ),

  user_signup_summary AS (
    SELECT
      DATE(created_at) AS transaction_date,
      COUNT(*) AS user_signup_count
    FROM users
    GROUP BY DATE(created_at)
  )

  SELECT
    COALESCE(casino_activity_summary.transaction_date,
    banking_activity_summary.transaction_date,
    user_signup_summary.transaction_date) AS transaction_date,
    COALESCE(casino_activity_summary.bet_count, 0) AS bet_count,
    COALESCE(casino_activity_summary.win_count, 0) AS win_count,
    COALESCE(casino_activity_summary.sc_wagered_amount, 0) AS sc_wagered_amount,
    COALESCE(casino_activity_summary.sc_won_amount, 0) AS sc_won_amount,
    COALESCE(banking_activity_summary.sc_purchased_amount, 0) AS sc_purchased_amount,
    COALESCE(banking_activity_summary.sc_coin_purchased, 0) AS sc_coin_purchased,
    COALESCE(banking_activity_summary.sc_purchased_offline, 0) AS sc_purchased_offline,
    COALESCE(banking_activity_summary.sc_redeemed_offline, 0) AS sc_redeemed_offline,
    COALESCE(banking_activity_summary.sc_purchased_count, 0) AS sc_purchased_count,
    COALESCE(banking_activity_summary.sc_redeemed_amount, 0) AS sc_redeemed_amount,
    COALESCE(banking_activity_summary.bonus_referral_earned, 0) AS bonus_referral_earned,
    COALESCE(user_signup_summary.user_signup_count, 0) AS user_signup_count
  FROM casino_activity_summary
  FULL OUTER JOIN banking_activity_summary
    ON casino_activity_summary.transaction_date = banking_activity_summary.transaction_date
  FULL OUTER JOIN user_signup_summary
    ON COALESCE(casino_activity_summary.transaction_date, banking_activity_summary.transaction_date)
       = user_signup_summary.transaction_date;
  `);
    await queryInterface.sequelize.query(`CREATE UNIQUE INDEX CONCURRENTLY idx_unique_daily_transaction_summary 
  ON daily_transaction_summary (transaction_date);
  `)
  },

  async down(queryInterface, Sequelize) {
    // Drop the materialized view
    await queryInterface.sequelize.query(`DROP MATERIALIZED VIEW IF EXISTS daily_transaction_summary;`);
  },
};
