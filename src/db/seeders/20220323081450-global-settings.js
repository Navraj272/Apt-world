'use strict'

const { GLOBAL_SETTINGS } = require("@src/utils/constants/public.constants")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert({ tableName: 'global_settings', schema: 'public' }, [
      {
        key: GLOBAL_SETTINGS.FAUCET,
        value: JSON.stringify({
          SC: 1,
          GC: 100,
          interval: 24
        }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        key: GLOBAL_SETTINGS.WITHDRAWAL_LIMITS,
        value: JSON.stringify({
          minAmount: 30,
          maxAmountWithoutRequest: 100
        }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        key: GLOBAL_SETTINGS.GLOBAL_DAILY_WITHDRAWAL_ALLOWED,
        value: '50000',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        key: GLOBAL_SETTINGS.SOCIAL_MEDIA_LINKS,
        value: JSON.stringify({
          facebook: '',
          twitter: '',
          instagram: '',
          telegram: '',
          discord: ''
        }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        key: GLOBAL_SETTINGS.KILL_SWITCH,
        value: JSON.stringify({
          enabled: false,
          message: 'Site is under maintenance'
        }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        key: GLOBAL_SETTINGS.SITE_INFORMATION,
        value: JSON.stringify({
          siteName: 'Epic Sweeps',
          web: 'https://example.com/logo-desktop.png',
          mobile: 'https://example.com/logo-mobile.png',
          supportEmail: 'support@example.com',
          contactNumber: '+1234567890',
          termsUrl: 'https://example.com/terms',
          privacyPolicyUrl: 'https://example.com/privacy-policy'
        }),
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete({ tableName: 'global_settings', schema: 'public' }, {
      key: [
        GLOBAL_SETTINGS.SITE_INFORMATION,
        GLOBAL_SETTINGS.FAUCET,
        GLOBAL_SETTINGS.WITHDRAWAL_LIMITS,
        GLOBAL_SETTINGS.SOCIAL_MEDIA_LINKS,
        GLOBAL_SETTINGS.KILL_SWITCH,
        GLOBAL_SETTINGS.DEPOSIT_LIMITS,
      ]
    })
  }
}
