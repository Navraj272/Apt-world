'use strict'

module.exports = {
  async up (queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('user_w9_details', {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },

        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },

        // Avalara linkage
        avalara_form_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },

        reference_id: {
          type: DataTypes.STRING(100),
          allowNull: true
        },

        // status tracking (local cache)
        status: {
          type: DataTypes.STRING(50), // pending | signed | completed | failed | expired
          allowNull: false,
          defaultValue: 'pending'
        },

        tin_match_status: {
          type: DataTypes.STRING(50), // pending | matched | failed
          allowNull: true
        },

        last_synced_at: {
          type: DataTypes.DATE,
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
      }, {
        schema: 'public',
        transaction
      })

      // indexes
      await queryInterface.addIndex('user_w9_details', ['user_id'], {
        name: 'idx_user_w9_user_id',
        transaction
      })

      await queryInterface.addIndex('user_w9_details', ['avalara_form_id'], {
        name: 'idx_user_w9_form_id',
        transaction
      })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface) {
    await queryInterface.dropTable('user_w9_details', { schema: 'public' })
  }
}
