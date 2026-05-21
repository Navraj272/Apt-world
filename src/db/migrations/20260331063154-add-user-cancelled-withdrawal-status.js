'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TYPE "enum_withdrawals_status" ADD VALUE 'User-Cancelled';
    `)
  },

  async down(queryInterface, Sequelize) {
  }
}
