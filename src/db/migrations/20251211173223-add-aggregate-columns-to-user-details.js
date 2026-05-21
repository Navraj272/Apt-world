'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const table = 'user_details';

    // We use a transaction to ensure all columns are added or none are
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(table, 'total_wagered_sc', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
      }, { transaction });

      await queryInterface.addColumn(table, 'total_won_sc', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
      }, { transaction });

      await queryInterface.addColumn(table, 'total_deposited', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
      }, { transaction });

      await queryInterface.addColumn(table, 'total_withdrawn', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
      }, { transaction });

      await queryInterface.addColumn(table, 'total_bonus_claimed', {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
      }, { transaction });
    });
  },

  async down(queryInterface, Sequelize) {
    const table = 'user_details';

    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn(table, 'total_wagered_sc', { transaction });
      await queryInterface.removeColumn(table, 'total_won_sc', { transaction });
      await queryInterface.removeColumn(table, 'total_deposited', { transaction });
      await queryInterface.removeColumn(table, 'total_withdrawn', { transaction });
      await queryInterface.removeColumn(table, 'total_bonus_claimed', { transaction });
    });
  }
};
