'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('tags', 'color_code', {
      type: Sequelize.STRING(20),
      allowNull: false
    })
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('tags', 'color_code')
  }
}