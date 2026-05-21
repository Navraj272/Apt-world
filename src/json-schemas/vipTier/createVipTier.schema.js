export const addVipTierSchema = {
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      icon: { type: 'object' },
      level: { type: 'string' },
      wageringThreshold: { type: 'string' },
      gamesPlayed: { type: 'string' },
      bigBetsThreshold: { type: 'string' },
      bigBetAmount: { type: 'string' },
      depositsThreshold: { type: 'string' },
      loginStreak: { type: 'string' },
      referralsCount: { type: 'string' },
      timeBasedConsistency: { type: 'string' },
      isActive: {
        type: 'string',
        enum: ["true", "false"]
      },
      dailyWithdrawalLimit: { type: 'string' },
      weeklyWithdrawalLimit: { type: 'string' },
      monthlyWithdrawalLimit: { type: 'string' },
      rewards: {
        type: 'array',
        items: { type: 'object' } // This specifies that rewards is an array of objects
      },
    },
    required: [
      'name',
      'level',
      'wageringThreshold',
      'gamesPlayed',
      'bigBetsThreshold',
      'bigBetAmount',
      'depositsThreshold',
      'loginStreak',
      'referralsCount',
      'timeBasedConsistency',
      'rewards'
    ]
  },
};
