'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('enquiries', 'franchise_location_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'franchise_locations',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('enquiries', 'franchise_location_id');
  },
};
