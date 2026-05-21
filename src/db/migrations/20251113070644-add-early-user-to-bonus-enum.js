"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TYPE enum_bonuses_bonus_type ADD VALUE IF NOT EXISTS 'early_user';
    `);
  },

  async down(queryInterface, Sequelize) {
    // Postgres doesn’t support removing enum values easily.
    // Typically you'd recreate the enum if you ever need to roll back.
  },
};
