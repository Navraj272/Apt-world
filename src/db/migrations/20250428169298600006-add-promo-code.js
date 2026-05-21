'use strict'

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.addColumn(
      { tableName: 'users', schema: 'public' },
      'promo_code',
      {
        type: DataTypes.STRING,
        allowNull: true
      })
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.removeColumn(
      { tableName: 'users', schema: 'public' },
      'promo_code')
  }
}
