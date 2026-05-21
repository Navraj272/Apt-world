CREATE MATERIALIZED VIEW user_transaction_summary AS
WITH
  casino_activity_summary AS (
    SELECT
      ct.user_id,
      COUNT(CASE WHEN ct.action_type = 'casino_bet' THEN 1 END) AS bet_count,
      COUNT(CASE WHEN ct.action_type IN ('casino_win', 'casino_refund') THEN 1 END) AS win_count,
      SUM(CASE WHEN ct.coin_type != 'GC' AND ct.action_type = 'casino_bet' THEN ct.coin ELSE 0 END) AS sc_wagered_amount,
      SUM(CASE WHEN ct.coin_type != 'GC' AND ct.action_type IN ('casino_win', 'casino_refund') THEN ct.coin ELSE 0 END) AS sc_won_amount
    FROM casino_transactions ct
    GROUP BY ct.user_id
  ),

  banking_activity_summary AS (
    SELECT
      bt.user_id,
      
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

      SUM(CASE WHEN bt.purpose = 'bonus_referral' THEN bt.sc ELSE 0 END) AS bonus_referral_earned

    FROM transactions bt 
    GROUP BY bt.user_id
  )

SELECT
  COALESCE(casino_activity_summary.user_id, banking_activity_summary.user_id) AS user_id,

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
  COALESCE(banking_activity_summary.bonus_referral_earned, 0) AS bonus_referral_earned

FROM casino_activity_summary
FULL OUTER JOIN banking_activity_summary
  ON casino_activity_summary.user_id = banking_activity_summary.user_id;
