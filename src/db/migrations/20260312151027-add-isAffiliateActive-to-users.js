'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      { tableName: 'users', schema: 'public' }, // Targeting the public schema as defined in your model
      'is_affiliate_active',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Defaulting to true so existing affiliates continue receiving commissions
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    // This allows you to undo the migration if needed
    await queryInterface.removeColumn(
      { tableName: 'users', schema: 'public' },
      'is_affiliate_active'
    );
  }
};
