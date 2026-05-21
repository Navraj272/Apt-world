'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TYPE enum_transactions_purpose ADD VALUE IF NOT EXISTS 'early_user_bonus';
    `);
  },

  async down(queryInterface) {
    // ⚠️ Postgres doesn't support removing ENUM values directly.
    // You'd need to recreate the enum if you ever rollback.
    // Leaving this empty intentionally.
  }
};
