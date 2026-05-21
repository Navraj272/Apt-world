'use strict'

const { GLOBAL_SETTINGS } = require("@src/utils/constants/public.constants")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      { tableName: 'global_settings', schema: 'public' },
      {
        value: JSON.stringify({
          gcMax: 300,
          scMax: 1,
          gcMin: 1,
          scMin: 0,
          interval: 1440,
          postalCodeValidTill: 60
        }),
        updated_at: new Date()
      },
      {
        key: GLOBAL_SETTINGS.POSTAL_CODE
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      { tableName: 'global_settings', schema: 'public' },
      {
        value: JSON.stringify({
          gcCoin: 25,
          scCoin: 2,
          interval: 1440,
          postalCodeValidTill: 60
        }),
        updated_at: new Date()
      },
      {
        key: GLOBAL_SETTINGS.POSTAL_CODE
      }
    )
  }
}
