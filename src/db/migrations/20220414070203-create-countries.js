'use strict'

module.exports = {
  async up (queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('countries', {
        country_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        code: {
          type: DataTypes.STRING,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        },
        kyc_method: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        },
        restricted_providers: {
          type: DataTypes.JSONB
        },
        restricted_games: {
          type: DataTypes.JSONB
        },
        language_id: {
          type: DataTypes.INTEGER,
          allowNull: true
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

      await queryInterface.addIndex('public.countries', ['code'], {
        name: 'index_countries_on_code', transaction
      })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.dropTable('countries', { schema: 'public' })
  }
}
