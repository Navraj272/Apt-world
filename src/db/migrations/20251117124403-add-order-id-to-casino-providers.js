'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      { tableName: 'casino_providers', schema: 'public' },
      'order_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      { tableName: 'casino_providers', schema: 'public' },
      'order_id'
    );
  }
};
