'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.addColumn(
      { tableName: 'transactions', schema: 'public' },
      'parent_txn',
      {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'transactions',
            schema: 'public'
          },
          key: 'transaction_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    );
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.removeColumn(
      { tableName: 'transactions', schema: 'public' },
      'parent_txn'
    );
  }
};
