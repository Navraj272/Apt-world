'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('packages', 'vip_tier_ids', {
      type: Sequelize.JSONB,
      allowNull: false,
      defaultValue: [],
      comment: 'Stores IDs or levels of VIP tiers applicable for this package'
    });

    await queryInterface.addColumn('packages', 'vip_points', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'XP points or VIP points associated with this package'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('packages', 'vip_tier_ids');
    await queryInterface.removeColumn('packages', 'vip_points');
  }
};
