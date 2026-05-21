"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.addColumn("user_details", "agreed_to_sweep_rules", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.removeColumn(
      "user_details",
      "agreed_to_sweep_rules"
    );
  },
};
