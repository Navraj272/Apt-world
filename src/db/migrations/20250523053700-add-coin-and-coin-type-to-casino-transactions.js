'use strict'
const { COINS } = require("@src/utils/constants/public.constants");

module.exports = {
  async up(queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      // await queryInterface.addColumn(
      //   { tableName: 'casino_transactions', schema: 'public' },
      //   'coin',
      //   {
      //     type: DataTypes.DECIMAL(10, 2),
      //     allowNull: false,
      //     defaultValue: 0,
      //   },
      //   { transaction }
      // );

      // await queryInterface.addColumn(
      //   { tableName: 'casino_transactions', schema: 'public' },
      //   'coin_type',
      //   {
      //     type: DataTypes.ENUM([COINS.GOLD_COIN, COINS.SWEEP_COINS]),
      //     allowNull: false,
      //     defaultValue: COINS.GOLD_COIN,
      //   },
      //   { transaction }
      // );


      await queryInterface.addColumn(
        { tableName: 'vip_tiers', schema: 'public' },
        'cash_bonus',
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        { transaction }
      );

      await queryInterface.addColumn(
        { tableName: 'vip_tiers', schema: 'public' },
        'commission_rate',
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        { transaction }
      );

      await queryInterface.addColumn(
        { tableName: 'vip_tiers', schema: 'public' },
        'rackback',
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      // await queryInterface.removeColumn(
      //   { tableName: 'casino_transactions', schema: 'public' },
      //   'coin',
      //   { transaction }
      // );

      // await queryInterface.removeColumn(
      //   { tableName: 'casino_transactions', schema: 'public' },
      //   'coin_type',
      //   { transaction }
      // );


      await queryInterface.removeColumn(
        { tableName: 'vip_tiers', schema: 'public' },
        'cash_bonus',
        { transaction }
      );

      await queryInterface.removeColumn(
        { tableName: 'vip_tiers', schema: 'public' },
        'commission_rate',
        { transaction }
      );

      await queryInterface.removeColumn(
        { tableName: 'vip_tiers', schema: 'public' },
        'rackback',
        { transaction }
      )

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
