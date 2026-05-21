'use strict'

module.exports = {
  async up (queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('payment_providers', {
        payment_provider_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        display_name: {
          type: DataTypes.STRING
        },
        name: {
          type: DataTypes.STRING
        },
        group: {
          type: DataTypes.STRING
        },
        settings: {
          type: DataTypes.JSONB
        },
        supports_deposit: {
          type: DataTypes.BOOLEAN
        },
        supports_withdrawal: {
          type: DataTypes.BOOLEAN
        },
        regions: {
          type: DataTypes.JSONB
        },
        aggregator: {
          type: DataTypes.STRING
        },
        is_active: {
          type: DataTypes.BOOLEAN
        },
        category: {
          type: DataTypes.STRING
        },
        amount_keys: {
          type: DataTypes.JSONB
        },
        kyc_countries: {
          type: DataTypes.JSONB
        },
        created_at: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updated_at: {
          allowNull: false,
          type: DataTypes.DATE
        }
      }, { schema: 'public', transaction })

      await queryInterface.addIndex('public.payment_providers', ['aggregator'], {
        name: 'index_payment_providers_on_aggregator', transaction
      })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.dropTable('payment_providers', { schema: 'public' })
  }
}
