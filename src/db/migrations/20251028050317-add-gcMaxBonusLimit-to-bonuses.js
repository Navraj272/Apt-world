'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('bonuses', 'gc_max_bonus_limit', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
    });
},

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('bonuses', 'gc_max_bonus_limit');
  },
};
