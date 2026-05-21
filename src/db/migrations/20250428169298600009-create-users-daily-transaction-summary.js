'use strict'

module.exports = {
  async up(queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('user_transaction_summary_aggregates', {
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        bet_count: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
        win_count: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
        wagered: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.0
        },
        won: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.0
        },
        total_game_played: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
        purchased: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.0
        },
        sc_coin_purchased: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.0
        },
        purchased_offline: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.0
        },
        sc_purchased_count: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
        redeemed_offline: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.0
        },
        redeemed: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.0
        },
        bonus_referral_earned: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.0
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false
        },
        created_at: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updated_at: {
          allowNull: false,
          type: DataTypes.DATE
        }
      }, {
        schema: 'public',
        transaction
      })

      await queryInterface.addConstraint('user_transaction_summary_aggregates', {
        fields: ['user_id', 'date'],
        type: 'unique',
        name: 'user_transaction_summary_unique',
        transaction
      })

      // Add index on user_id
      await queryInterface.addIndex('user_transaction_summary_aggregates', ['user_id'], {
        name: 'idx_user_transaction_summary_user_id',
        transaction
      })

      // Add index on date
      await queryInterface.addIndex('user_transaction_summary_aggregates', ['date'], {
        name: 'idx_user_transaction_summary_date',
        transaction
      })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('user_transaction_summary_aggregates', { schema: 'public' })
  }
}
