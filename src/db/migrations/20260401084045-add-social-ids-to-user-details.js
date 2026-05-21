"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("user_details", "google_id", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("user_details", "facebook_id", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("user_details", "google_id");
    await queryInterface.removeColumn("user_details", "facebook_id");
  },
};