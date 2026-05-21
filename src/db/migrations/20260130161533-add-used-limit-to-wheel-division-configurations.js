'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'wheel_division_configurations',
      'used_limit',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      }
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'wheel_division_configurations',
      'used_limit'
    )
  }
}
