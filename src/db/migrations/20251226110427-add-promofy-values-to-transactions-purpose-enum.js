'use strict';

module.exports = {
  async up(queryInterface) {
    const PURPOSE_ENUM = 'enum_transactions_purpose';
    const PAYMENT_PROVIDER_ENUM = 'enum_transactions_payment_provider';

    const newPurposeValues = [
      'promofy_cash',
      'promofy_sc_reward',
      'promofy_gc_reward',
      'promofy_gc_sc_reward',
      'promofy_free_spins',
      'manual_credit',
      'manual_debit',   
      'manual_bonus',
      'sc_expiry',
      'account_closure',
      'confiscation',
      'manual_refund'
    ];

    // Add new purpose enum values
    for (const val of newPurposeValues) {
      await queryInterface.sequelize.query(`
        ALTER TYPE "${PURPOSE_ENUM}" ADD VALUE IF NOT EXISTS '${val}';
      `);
    }

    // Add payment provider enum value
    await queryInterface.sequelize.query(`
      ALTER TYPE "${PAYMENT_PROVIDER_ENUM}" ADD VALUE IF NOT EXISTS 'promofy';
    `);
  },

  async down() {
    console.log(
      'Down migration not supported for ENUM value removal in PostgreSQL.'
    );
  }
};

