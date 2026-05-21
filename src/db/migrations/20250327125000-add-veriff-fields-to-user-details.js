"use strict";

const { VERIFF_STATUS } = require("src/utils/constants/public.constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    // await queryInterface.addColumn("user_details", "veriff_applicant_id", {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // });
    // await queryInterface.addColumn("user_details", "other_veriff_details", {
    //   type: DataTypes.JSONB,
    //   allowNull: true,
    // });
    // await queryInterface.addColumn("user_details", "veriff_status", {
    //   type: DataTypes.ENUM(Object.values(VERIFF_STATUS)),
    //   allowNull: true
    // });
  },

  async down(queryInterface, DataTypes) {
    // await queryInterface.dropColumn("user_details", "veriff_applicant_id");
    // await queryInterface.dropColumn("user_details", "veriff_status");
    // await queryInterface.dropColumn("user_details", "other_veriff_details");
  },
};
