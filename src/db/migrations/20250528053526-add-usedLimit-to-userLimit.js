'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('user_limits', 'used_limit', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '0',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('user_limits', 'used_limit');
  }
};
