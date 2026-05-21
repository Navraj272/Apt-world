export const getTopPlayerSchema = {
  query: {
    type: 'object',
    properties: {
      orderDirection: { enum: ['ASC', 'DESC'] },
      orderBy: {
        enum: ['bet_count', 'win_count', 'sc_wagered_amount', 'sc_won_amount', 'sc_purchased_amount', 'sc_redeemed_amount','bonus_referral_earned','ggr','sc_balance']
      },
      userId: { type: 'string' },
      search: { type: 'string' },
      pageNo: { type: 'string' },
      limit: { type: 'string' },
      email: { type: 'string' },
      affiliateId: { type: 'string'},
      campaignId: { type: 'string'},
      cxToken: { type: 'string' },
      stateCode : { type: 'string' },
      minWageredAmount: { type: 'string' },
      maxWageredAmount: { type: 'string' },
      minPurchasedAmount: { type: 'string' },
      maxPurchasedAmount: { type: 'string' },
      minRedeemedAmount: { type: 'string' },
      maxRedeemedAmount: { type: 'string' },
      minWonAmount: { type: 'string' },
      maxWonAmount: { type: 'string' },
      minBonusReferralEarned: { type: 'string' },
      maxBonusReferralEarned: { type: 'string' },
      minGGR: { type: 'string' },
      maxGGR: { type: 'string' },
      minScBalance: { type: 'string' },
      maxScBalance: { type: 'string' },
      endDate: { type: 'string' },
      startDate: { type: 'string' },
      internalUser: { type: 'string' },
      isSelfExcluded: { type: 'string' },
      isActive: { type: 'string' },
      playerType: { type: 'string' },
      vipTierId: { type: ["string","number"]},
      accountStatus: { type: ['string', 'null'], enum: ['ACTIVE','INACTIVE','SUSPENDED','UNDER_REVIEW','CLOSED'] },
      tagIds: { type: ['array', 'null'] },

    }
  }
}
