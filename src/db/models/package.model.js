"use strict";

const { PROMO_TAG_TYPES } = require("@src/utils/constants/public.constants");

module.exports = function (sequelize, DataTypes) {
  const Package = sequelize.define(
    "Package",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gcCoin: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      scCoin: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      segmentId:{
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isVisibleInStore: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mobileImageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      maxPurchasePerUser: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      welcomePackage: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      vipTierIds: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: [],
        comment:
          "Stores IDs or levels of VIP tiers applicable for this package",
      },
      vipPoints: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "XP points or VIP points associated with this package",
      },
      discountAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      maxPurchaseTotal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      totalSold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      availableFrom: {
       type: DataTypes.DATE,
       allowNull: true,
      },
      availableUntil: {
       type: DataTypes.DATE,
       allowNull: true,
      },
      promoTag: {
        type: DataTypes.ENUM(Object.values(PROMO_TAG_TYPES)),
        allowNull: false,
        defaultValue: "NONE",
      },
      extraFreePercentage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      promoCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "packages",
      schema: "public",
      timestamps: true,
      underscored: true,
    }
  );
  Package.associate = function (models) {
  Package.hasMany(models.Transaction, {
    foreignKey: 'package_id',
    onDelete: 'SET NULL',
  });

  Package.hasMany(models.UserPackageLimit, {
    foreignKey: 'packageId',
    onDelete: 'RESTRICT',
  });
};

  return Package;
};
