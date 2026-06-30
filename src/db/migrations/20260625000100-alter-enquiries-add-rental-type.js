'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(
      `ALTER TYPE "enum_enquiries_type" ADD VALUE 'rental'`
    );
  },

  down: async (queryInterface) => {
    // PostgreSQL does not support removing values from enums directly.
    // A full type recreation would be needed:
    await queryInterface.sequelize.query(
      `ALTER TYPE "enum_enquiries_type" RENAME TO "enum_enquiries_type_old"`
    );
    await queryInterface.sequelize.query(
      `CREATE TYPE "enum_enquiries_type" AS ENUM('general', 'distributor', 'product')`
    );
    await queryInterface.sequelize.query(
      `ALTER TABLE "enquiries" ALTER COLUMN "type" TYPE "enum_enquiries_type" USING "type"::text::"enum_enquiries_type"`
    );
    await queryInterface.sequelize.query(
      `DROP TYPE "enum_enquiries_type_old"`
    );
  },
};
