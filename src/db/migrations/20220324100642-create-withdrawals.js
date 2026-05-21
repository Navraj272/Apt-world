'use strict'

const { WITHDRAWAL_STATUS } = require("@src/utils/constants/public.constants")

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('withdrawals', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM(Object.values(WITHDRAWAL_STATUS)),
        allowNull: false,
        defaultValue: WITHDRAWAL_STATUS.PENDING
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      approved_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      confirmed_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      comment: {
        type: DataTypes.STRING,
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
      schema: 'public'
    })

  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('withdraw_requests', { schema: 'public' })
  }
}
