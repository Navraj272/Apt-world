'use strict'

const { GLOBAL_SETTINGS } = require('../../utils/constants/public.constants')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { tableName: 'global_settings', schema: 'public' },
      [
        {
          key: GLOBAL_SETTINGS.PAYMENT_METHOD_WITHDRAWAL_LIMITS_AND_FIAT_FEE,
          value: JSON.stringify({
            fiat_fee: {
              fee_percentage: 1.2
            },
            crypto: {
              minAmount: 100,
              maxAmount: 5000
            },
            basic_card: {
              minAmount: 100,
              maxAmount: 3000
            },
            bank_transfer: {
              minAmount: 100,
              maxAmount: 5000
            }
          }),
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { tableName: 'global_settings', schema: 'public' },
      {
        key: GLOBAL_SETTINGS.PAYMENT_METHOD_WITHDRAWAL_LIMITS_AND_FIAT_FEE
      }
    )
  }
}
