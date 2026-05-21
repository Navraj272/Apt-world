"use strict";

const { SIGNUP_TYPES } = require("@src/utils/constants/public.constants");

module.exports = {
  async up(queryInterface, DataTypes) {
    // changed "signupType" to "signup_type"
    return queryInterface.addColumn("user_details", "signup_type", {
      type: DataTypes.ENUM(Object.values(SIGNUP_TYPES)),
      allowNull: false,
      defaultValue: SIGNUP_TYPES.NORMAL,
    });
  },

  async down(queryInterface, DataTypes) {
    return queryInterface.removeColumn("user_details", "signup_type");
  },
};
