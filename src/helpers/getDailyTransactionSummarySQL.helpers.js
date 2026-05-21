export const getDailySummaryReportQuery = (userIDs = [], groupByDate = true , startDate = null, endDate = null) => {
  const groupByFields = groupByDate ? 'user_id, date' : 'user_id';
  const groupByClause = `GROUP BY ${groupByFields} ORDER BY ${groupByFields}`;
  const selectDateColumn = groupByDate ? 'date,' : '';

  let dateFilter = '';
  if (startDate && endDate) {
    dateFilter = `AND date BETWEEN ${startDate} AND ${endDate}`;
  } else if (startDate) {
    dateFilter = `AND date >= ${startDate}`;
  } else if (endDate) {
    dateFilter = `AND date <= ${endDate}`;
  }
  
  // FIX: Changed "WHERE" to "AND" because "WHERE 1=1" is used below
  const userFilter = userIDs.length
    ? `AND user_id IN (${userIDs.map(id => Number(id)).join(',')})`
    : '';

  const liveFnCall = userIDs.length
    ? `public.get_user_incremental_aggregate_data(ARRAY[${userIDs.map(id => Number(id)).join(',')}])`
    : `public.get_user_incremental_aggregate_data(NULL)`;

  return `
    WITH historical AS (
      SELECT
        ${groupByDate ? 'user_id, date,' : 'user_id,'}
        SUM(bet_count) AS bet_count,
        SUM(win_count) AS win_count,
        SUM(wagered) AS wagered,
        SUM(won) AS won,
        SUM(total_game_played) AS total_game_played,
        SUM(purchased) AS purchased,
        SUM(purchased_offline) AS purchased_offline,
        SUM(sc_purchased_count) AS sc_purchased_count,
        SUM(redeemed) AS redeemed,
        SUM(redeemed_offline) AS redeemed_offline,
        SUM(sc_coin_purchased) AS sc_coin_purchased,
        SUM(bonus_referral_earned) AS bonus_referral_earned
      FROM user_transaction_summary_aggregates
      WHERE 1=1 
      ${userFilter}
      ${dateFilter}      
      GROUP BY ${groupByFields}
    ),

    live AS (
      SELECT
        ${groupByDate ? 'user_id, date,' : 'user_id,'}
        SUM(bet_count) AS bet_count,
        SUM(win_count) AS win_count,
        SUM(wagered) AS wagered,
        SUM(won) AS won,
        SUM(total_game_played) AS total_game_played,
        SUM(purchased) AS purchased,
        SUM(purchased_offline) AS purchased_offline,
        SUM(sc_purchased_count) AS sc_purchased_count,
        SUM(redeemed) AS redeemed,
        SUM(redeemed_offline) AS redeemed_offline,
        SUM(sc_coin_purchased) AS sc_coin_purchased,
        SUM(bonus_referral_earned) AS bonus_referral_earned
      FROM ${liveFnCall} 
      WHERE 1=1  -- FIX: Removed double "where WHERE"
      ${dateFilter}
      GROUP BY ${groupByFields}
    ),

    combined AS (
      SELECT * FROM historical
      UNION ALL
      SELECT * FROM live
    )

    SELECT
      user_id,
      ${selectDateColumn}
      SUM(bet_count) AS bet_count,
      SUM(win_count) AS win_count,
      SUM(wagered) AS sc_wagered_amount,
      SUM(won) AS sc_won_amount,
      SUM(total_game_played) AS total_game_played,
      SUM(purchased) AS sc_purchased_amount,
      SUM(purchased_offline) AS sc_purchased_offline,
      SUM(sc_purchased_count) AS sc_purchased_count,
      SUM(redeemed) AS sc_redeemed_amount,
      SUM(redeemed_offline) AS sc_redeemed_offline,
      SUM(sc_coin_purchased) AS sc_coin_purchased,
      SUM(bonus_referral_earned) AS bonus_referral_earned
    FROM combined
    ${groupByClause}
  `;
};