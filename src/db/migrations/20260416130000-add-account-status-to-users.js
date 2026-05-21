'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Create ENUM type
    await queryInterface.sequelize.query(`
      CREATE TYPE "enum_users_account_status" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED', 'UNDER_REVIEW', 'CLOSED');
    `);

    // Add status column with default ACTIVE
    await queryInterface.addColumn('users', 'account_status', {
      type: Sequelize.ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED', 'UNDER_REVIEW', 'CLOSED'),
      allowNull: false,
      defaultValue: 'ACTIVE',
      comment: 'User account status: ACTIVE, INACTIVE, SUSPENDED, UNDER_REVIEW, CLOSED'
    });

    // Migrate existing data from is_active to account_status
    await queryInterface.sequelize.query(`
      UPDATE users 
      SET account_status = CASE 
        WHEN is_active = true THEN 'ACTIVE'::enum_users_account_status 
        ELSE 'INACTIVE'::enum_users_account_status 
      END;
    `);

    // // Add index for faster queries
    // await queryInterface.addIndex('users', ['account_status'], {
    //   name: 'index_users_account_status'
    // });
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.removeIndex('users', 'index_users_account_status');
    await queryInterface.removeColumn('users', 'account_status');
    await queryInterface.sequelize.query(`DROP TYPE "enum_users_account_status";`);
  }
};
