"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("packages", "segment_id", {
      type: Sequelize.INTEGER,
      allowNull: true, // change to false if required
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("packages", "segment_id");
  },
};
