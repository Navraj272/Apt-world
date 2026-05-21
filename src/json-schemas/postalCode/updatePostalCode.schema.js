export const updatePostalCodeSchema = {
  body: {
    type: 'object',
    properties: {
      gcMin: {
        type: 'number',
        minimum: 0,
      },
      scMin: {
        type: 'number',
        minimum: 0,
      },
      scMax: {
        type: 'number',
        minimum: 0,
      },
      gcMax: {
        type: 'number',
        minimum: 0,
      },
      postalCodeValidTill: {
        type: 'number',
        minimum: 0,
      },
      interval: {
        type: 'number',
        minimum: 0,
      },
    },
    minProperties: 1,
  },
};
