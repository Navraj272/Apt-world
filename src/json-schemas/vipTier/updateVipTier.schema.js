
export const updateVipTierSchema = {
  body: {
    type: 'object',
    properties: {
      vipTierId: { type: 'string' },
      name: { type: 'string' },
      file: { type: 'object' },
      level: { type: 'string' },
      wageringThreshold: { type: 'string' },
      gamesPlayed: { type: 'string' },
      bigBetsThreshold: { type: 'string' },
      bigBetAmount: { type: 'string' },
      depositsThreshold: { type: 'string' },
      loginStreak: { type: 'string' },
      referralsCount: { type: 'string' },
      timeBasedConsistency: { type: 'string' },
      rackback: { type: 'string' },
      cashBonus: { type: 'string' },
      conversion_rate_gc_to_vip: { type: 'string' },
      conversion_rate_sc_to_vip: { type: 'string' },

      dailyWithdrawalLimit: { type: 'string' },
      weeklyWithdrawalLimit: { type: 'string' },
      monthlyWithdrawalLimit: { type: 'string' },
      isActive: {
        type: 'string',
        enum: ["true", "false"]
      },
      // rewards: { type: 'object' },
      rewards: {
        type: 'array',
        items: { type: 'object' } // This specifies that rewards is an array of objects
      },
    },
    required: [
      'vipTierId'
    ]
  },
}
