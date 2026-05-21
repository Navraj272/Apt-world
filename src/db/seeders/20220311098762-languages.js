'use strict'

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('languages', [
      {
        code: 'EN',
        language_name: 'English',
        created_at: new Date(),
        updated_at: new Date()
      }
      // {
      //   code: 'ES',
      //   language_name: 'Spanish',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'PT',
      //   language_name: 'Portuguese',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'ID',
      //   language_name: 'Indonesian',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // }
      // {
      //   code: 'NO',
      //   language_name: 'Norwegian',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'RU',
      //   language_name: 'Russian',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'PS',
      //   language_name: 'Pasto',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'AR',
      //   language_name: 'Arabic',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'DE',
      //   language_name: 'German',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'DU',
      //   language_name: 'Dutch',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'FR',
      //   language_name: 'French',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'SR',
      //   language_name: 'Serbian',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'BS',
      //   language_name: 'Bosnian',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'BG',
      //   language_name: 'Bulgarian',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'CN',
      //   language_name: 'Mandarin Chinese',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'JA',
      //   language_name: 'Japanese',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'MS',
      //   language_name: 'Malay',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'GR',
      //   language_name: 'Greek',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'TR',
      //   language_name: 'Turkish',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'CZ',
      //   language_name: 'Czech',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'SK',
      //   language_name: 'Slovak',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'DA',
      //   language_name: 'Danish',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'HI',
      //   language_name: 'Hindi',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'FI',
      //   language_name: 'Finnish',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'SW',
      //   language_name: 'Swedish',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'HU',
      //   language_name: 'Hungarian',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'FA',
      //   language_name: 'Persian',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'IT',
      //   language_name: 'Italian',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'KO',
      //   language_name: 'Korean',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'MT',
      //   language_name: 'Maltese',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'MU',
      //   language_name: 'Mauritian Creole',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'RO',
      //   language_name: 'Romanian',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'TH',
      //   language_name: 'Thai',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'VI',
      //   language_name: 'Vietnamese',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   code: 'PL',
      //   language_name: 'Polish',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // }

    ])
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('languages', null, {})
  }
}
