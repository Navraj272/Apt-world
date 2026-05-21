export const CASINO_AGGREGATORS = {
  GSOFT: 'GSOFT',
  ICONIC21: 'ICONIC21',
  ALEA: 'ALEA',
   SEVENTY_SEVEN: '77Gaming'
}

export const CASINO_PROVIDERS = {
  GSOFT: 'GSOFT',
  ICONIC21: 'ICONIC21'
}

export const PRAGMATIC_PLAY = {
  GAME_AGGREGATOR: 'Pragmatic Play',
  GAME_PROVIDER: 'Pragmatic Play',
  CATEGORY: {
    CLASSIC_SLOTS: 'Classic Slots',
    VIDEO_SLOTS: 'Video Slots',
    LIVE_GAMES: 'Live games',
    BACCARAT: 'Baccarat',
    BACCARAT_NEW: 'Baccarat New',
    ROULETTE: 'Roulette',
    SCRACH_CARD: 'Scratch card'
  }
}

export const CASINO_ROUND_STATUS = {
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed'
}


/**
 * @type {Object.<string, { id: string, name: string, subCategories: { id: string, name: string }[] }[]>}
 */
/**
 * @type {Object.<string, { id: string, name: string, subCategories: { id: string, name: string }[] }[]>}
 */
export const DEFAULT_CATEGORIES = [
  { id: 1, name: 'Andar Bahar' },
  { id: 2, name: 'Baccarat' },
  { id: 3, name: 'Bingo' },
  { id: 4, name: 'Blackjack' },
  { id: 5, name: 'Board Game' },
  { id: 6, name: 'Coin Dozer' },
  { id: 7, name: 'Craps' },
  { id: 8, name: 'Crash' },
  { id: 9, name: 'Dice' },
  { id: 10, name: 'Dragon Tiger' },
  { id: 11, name: 'Heads & Tails' },
  { id: 12, name: 'Hi Lo' },
  { id: 13, name: 'Instant Win' },
  { id: 14, name: 'Keno' },
  { id: 15, name: 'Live Blackjack' },
  { id: 16, name: 'Live Roulette' },
  { id: 17, name: 'Ladder' },
  { id: 18, name: 'Lobby' },
  { id: 19, name: 'Match & Win' },
  { id: 20, name: 'Mine' },
  { id: 21, name: 'Plinko' },
  { id: 22, name: 'Poker' },
  { id: 23, name: 'Roulette' },
  { id: 24, name: 'Scratchcards' },
  { id: 25, name: 'Sette e Mezzo' },
  { id: 26, name: 'Shooting' },
  { id: 27, name: 'Show' },
  { id: 28, name: 'Sic Bo' },
  { id: 29, name: 'Slots' },
  { id: 30, name: 'Video Poker' },
  { id: 31, name: 'Wheel' },
  { id: 32, name: 'Jackpots' }, // Newly added category
  { id: 33, name: 'Other' }
]

export const DEFAULT_GAME_CATEGORY = {
  id: 33
}
