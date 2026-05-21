'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('free_spin_bonus', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      record_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      casino_bonus_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      provider_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      currency: {
        type: Sequelize.STRING(10),
        allowNull: false
      },

      num_spins_granted: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },

      status: {
        type: Sequelize.ENUM(
          'pending',
          'in_progress',
          'completed',
          'expired',
          'failed',
          'cancelled'
        ),
        allowNull: false,
        defaultValue: 'pending'   // ⚠ fixed to match enum value
      },

      payout_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },

      bonus_payout_transaction_id: {
        type: Sequelize.STRING,
        allowNull: true
      },

      expires_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('free_spin_bonus');

    // Drop enum manually (important for Postgres)
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_free_spin_bonus_status";'
    );
  }
};