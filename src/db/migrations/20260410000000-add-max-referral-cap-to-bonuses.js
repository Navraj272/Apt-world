'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('bonuses', 'max_referral_cap', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
      comment: 'Lifetime maximum total referral bonus a single user can earn',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('bonuses', 'max_referral_cap');
  },
};
