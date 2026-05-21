'use strict'

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('payment_providers',
      [{
        name: 'A1',
        group: 'Other',
        settings: JSON.stringify({
          requiredFields: [
            { name: 'amount', dataType: 'number' },
            { name: 'phoneNumber', dataType: 'number' }
          ]
        }),
        supports_deposit: true,
        supports_withdrawal: false,
        regions: JSON.stringify({
          supported: {
            BG: 'Bulgaria'
          }
        }),
        aggregator: 'Liminal',
        is_active: false,
        created_at: new Date(),
        updated_at: new Date()
      }]
    )
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('payment_providers', null, {})
  }
}
