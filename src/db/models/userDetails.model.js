"use strict";

const { DIDIT_STATUS, SIGNUP_TYPES } = require("@src/utils/constants/public.constants");

module.exports = function (sequelize, DataTypes) {
  const UserDetails = sequelize.define(
    "UserDetails",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      referralCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stateCode: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
          model: "states",
          key: "stateCode",
        },
      },
      googleId:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      facebookId:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      disableReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vipTierId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      nextVipTierId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ipAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      loginIpAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      newPasswordRequested: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      isFirstPurchaseClaimed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      identity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      diditApplicantId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      diditStatus: {
        type: DataTypes.ENUM(Object.values(DIDIT_STATUS)),
        allowNull: true,
      },
      otherDiditDetails: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      customerId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firstPurchaseAmount:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      claimedFirstPurchaseAt:{
        type: DataTypes.DATE,
        allowNull: true,
      },
      lastLoginDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      emailSubscribed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      smsSubscribed: {
       type: DataTypes.BOOLEAN,
       allowNull: false,
       defaultValue: false,
      },
        signupType: {
        type: DataTypes.ENUM(Object.values(SIGNUP_TYPES)),
        defaultValue: SIGNUP_TYPES.NORMAL,
      },
      agreedToSweepRules: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      agreedToSelfExclusionRules: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      moreDetails: {
        type: DataTypes.JSONB,
        allowNull: true 
      }
    },
    {
      sequelize,
      tableName: "user_details",
      schema: "public",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          fields: ["userId"],
        },
      ],
    }
  );

  UserDetails.associate = function (model) {
    UserDetails.belongsTo(model.User, {
      foreignKey: "userId",
      constraints: false,
    });
    UserDetails.belongsTo(model.VipTier, {
      foreignKey: "vipTierId",
      constraints: false,
    });
    UserDetails.belongsTo(model.VipTier, {
      foreignKey: "nextVipTierId",
      as: "nextVipTier",
      constraints: false,
    });
    UserDetails.belongsTo(model.State, {
      foreignKey: "stateCode",
      as: "state",
      constraints: false,
    });
  };

  return UserDetails;
};
