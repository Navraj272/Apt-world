'use strict'

const { GLOBAL_SETTINGS } = require('@src/utils/constants/public.constants')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { tableName: 'global_settings', schema: 'public' },
      [
        {
          key: GLOBAL_SETTINGS.W9_WITHDRAWAL_THRESHOLD,
          value: JSON.stringify({
            amount: 2000,
            currency: 'USD',
            enabled: true
          }),
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { tableName: 'global_settings', schema: 'public' },
      {
        key: [GLOBAL_SETTINGS.W9_WITHDRAWAL_THRESHOLD]
      }
    )
  }
}
