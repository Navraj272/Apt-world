"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add source field
    await queryInterface.addColumn("free_spin_bonus", "source", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "admin backoffice",
    });

    // Add segment_id field
    await queryInterface.addColumn("free_spin_bonus", "segment_id", {
      type: Sequelize.STRING,
      allowNull: true, // optional since not all flows have segments
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("free_spin_bonus", "segment_id");
    await queryInterface.removeColumn("free_spin_bonus", "source");
  },
};