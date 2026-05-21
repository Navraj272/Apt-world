"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      {
        tableName: "user_details",
        schema: "public",
      },
      "more_details",
      {
        type: Sequelize.JSONB,
        allowNull: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      {
        tableName: "user_details",
        schema: "public",
      },
      "more_details"
    );
  },
};
