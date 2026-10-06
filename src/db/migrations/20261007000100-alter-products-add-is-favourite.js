'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products', 'is_favourite', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
    await queryInterface.addIndex('products', ['is_favourite'], { name: 'products_is_favourite_idx' });
  },

  down: async (queryInterface) => {
    await queryInterface.removeIndex('products', 'products_is_favourite_idx');
    await queryInterface.removeColumn('products', 'is_favourite');
  },
};
