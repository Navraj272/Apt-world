export const addFeaturedGamesSchema = {
  body: {
    type: 'object',
    properties: {
      casinoGameId: { type: 'string' }
    },
    required: ['casinoGameId']
  }
}