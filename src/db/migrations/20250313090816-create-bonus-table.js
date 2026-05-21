"use strict";

const {
  BONUS_STATUS,
  BONUS_TYPE,
} = require("@src/utils/constants/bonus.constants");
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("bonuses", {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      bonus_type: {
        type: DataTypes.ENUM(Object.values(BONUS_TYPE)),
        allowNull: false,
      },
      promotion_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gc_amount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0,
      },
      sc_amount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0,
      },
      percentage: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true,
      },
      max_bonus_limit: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mobile_image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM(Object.values(BONUS_STATUS)),
        defaultValue: BONUS_STATUS.ACTIVE,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      terms_conditions: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("bonuses");
  },
};
