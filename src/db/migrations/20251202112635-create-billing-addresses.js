'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('billing_addresses', {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users', // Matches table name in users.model.js
            key: 'user_id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        address_line_1: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        address_line_2: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        country: {
          type: DataTypes.STRING(100),
          allowNull: false,
          defaultValue: 'US' // Default set to US
        },
        state: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        city: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        zip_code: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        is_primary: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false,
          comment: 'Indicates if this is the default billing address'
        },
        // is_active removed
        created_at: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
        }
      }, {
        schema: 'public',
        transaction
      });

      // Add index for faster lookups by user and primary status
      await queryInterface.addIndex('billing_addresses', ['user_id', 'is_primary'], {
        name: 'index_billing_addresses_on_user_id_and_is_primary',
        transaction
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('billing_addresses', { schema: 'public' });
  }
};
