'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    const tableIdentifier = { tableName: 'vip_tiers', schema: 'public' };

    // Add Daily Limit
    await queryInterface.addColumn(tableIdentifier, 'daily_withdrawal_limit', {
      type: DataTypes.INTEGER,
      allowNull: true, // Allow null to imply "no limit" if needed, or use 0
      defaultValue: 0,
      comment: 'Daily SC withdrawal limit for this tier'
    });

    // Add Weekly Limit
    await queryInterface.addColumn(tableIdentifier, 'weekly_withdrawal_limit', {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Weekly SC withdrawal limit for this tier'
    });

    // Add Monthly Limit
    await queryInterface.addColumn(tableIdentifier, 'monthly_withdrawal_limit', {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Monthly SC withdrawal limit for this tier'
    });
  },

  async down(queryInterface, DataTypes) {
    const tableIdentifier = { tableName: 'vip_tiers', schema: 'public' };

    await queryInterface.removeColumn(tableIdentifier, 'daily_withdrawal_limit');
    await queryInterface.removeColumn(tableIdentifier, 'weekly_withdrawal_limit');
    await queryInterface.removeColumn(tableIdentifier, 'monthly_withdrawal_limit');
  }
};
