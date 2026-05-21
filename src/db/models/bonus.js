// const { Sequelize, DataTypes } = require("sequelize");
import { BONUS_STATUS, BONUS_TYPE } from "@src/utils/constants/bonus.constants";
module.exports = (Sequelize, DataTypes) => {
  const Bonus = Sequelize.define(
    "Bonus",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      bonusType: {
        type: DataTypes.ENUM(Object.values(BONUS_TYPE)),
        allowNull: false,
      },
      promotionTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gcAmount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0,
      },
      scAmount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0,
      },
      percentage: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true,
      },
      maxBonusLimit: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      gcMaxBonusLimit:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      maxReferralCap: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      minimumDepositRequired: {
        type : DataTypes.DECIMAL(10,2),
        allowNull : true,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mobileImageUrl: {
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
      termsConditions: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      validOnDays: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
    },
    {
      tableName: "bonuses",
      timestamps: true,
      underscored: true,
    }
  );

  //associations
  Bonus.associate = function (model) {
    Bonus.hasMany(model.UserBonus, {
      foreignKey: "bonusId",
      as: "userBonus",
    });
  };

  return Bonus;
};
