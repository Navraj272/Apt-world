'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('daily_aggregates', {
      date: {
        type: Sequelize.DATEONLY,
        primaryKey: true,
        allowNull: false,
      },
      wagered: {
        type: Sequelize.NUMERIC,
        defaultValue: 0,
      },
      won: {
        type: Sequelize.NUMERIC,
        defaultValue: 0,
      },
      purchased: {
        type: Sequelize.NUMERIC,
        defaultValue: 0,
      },
      purchased_offline: {
        type: Sequelize.NUMERIC,
        defaultValue: 0,
      },
      redeemed: {
        type: Sequelize.NUMERIC,
        defaultValue: 0,
      },
      redeemed_offline: {
        type: Sequelize.NUMERIC,
        defaultValue: 0,
      },
      sc_coin_purchased: {
        type: Sequelize.NUMERIC,
        defaultValue: 0,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('daily_aggregates');
  },
};