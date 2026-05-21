'use strict'

// ES5 Import
const { TRANSACTION_PURPOSE, PAYMENT_PROVIDER, TRANSACTION_STATUS } = require("@src/utils/constants/public.constants");

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('transactions', {
      transaction_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
        }
      },
      package_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'packages',
          key: 'id'
        },
        onDelete: 'SET NULL',
      },
      actionee_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      withdrawal_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'withdrawals',
          key: 'id'
        }
      },
      purpose: {
        type: DataTypes.ENUM(Object.values(TRANSACTION_PURPOSE)),
        allowNull: false
      },
      payment_provider_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      more_details: {
        type: DataTypes.JSONB,
        allowNull: true
      },
      payment_provider: {
        type: DataTypes.ENUM(Object.values(PAYMENT_PROVIDER)),
        allowNull: false,
        defaultValue: PAYMENT_PROVIDER.OFFLINE
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      status: {
        type: DataTypes.ENUM(Object.values(TRANSACTION_STATUS)),
        allowNull: true,
      }
    }, { schema: 'public' })
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('transactions', { schema: 'public' })
  }
}
