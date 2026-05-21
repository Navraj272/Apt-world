"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      {
        tableName: "user_details",
        schema: "public",
      },
      "claimed_first_purchase_at",
      {
        type: Sequelize.DATE,
        allowNull: true,
      }
    );

    await queryInterface.addColumn(
      {
        tableName: "user_details",
        schema: "public",
      },
      "first_purchase_amount",
      {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(
      {
        tableName: "user_details",
        schema: "public",
      },
      "first_purchase_amount"
    );

    await queryInterface.removeColumn(
      {
        tableName: "user_details",
        schema: "public",
      },
      "claimed_first_purchase_at"
    );
  },
};

