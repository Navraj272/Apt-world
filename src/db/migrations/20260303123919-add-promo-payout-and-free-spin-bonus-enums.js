'use strict';

module.exports = {
  async up(queryInterface) {
    const CASINO_ACTION_TYPE_ENUM = 'enum_casino_transactions_action_type';
    const PURPOSE_ENUM = 'enum_transactions_purpose';

    // Add new action type enum value
    await queryInterface.sequelize.query(`
      ALTER TYPE "${CASINO_ACTION_TYPE_ENUM}" 
      ADD VALUE IF NOT EXISTS 'promo-payout';
    `);

    // Add new purpose enum value
    await queryInterface.sequelize.query(`
      ALTER TYPE "${PURPOSE_ENUM}" 
      ADD VALUE IF NOT EXISTS 'free_spin_bonus';
    `);
  },

  async down() {
    console.log(
      'Down migration not supported for ENUM value removal in PostgreSQL.'
    );
  }
};

