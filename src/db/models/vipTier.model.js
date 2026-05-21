"use strict";

module.exports = function (sequelize, DataTypes) {
  const VipTier = sequelize.define(
    "VipTier",
    {
      vipTierId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        description: "Unique identifier for each VIP tier.",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        description: "Name of the VIP tier (e.g., Bronze, Silver, Gold).",
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: true,
        description: "Image of icon which represent level",
      },
      mobileIcon: {
        type: DataTypes.STRING,
        allowNull: true,
        description: "Image of icon which represent level for mobile"
      },
      level: {
        // Priority Order
        type: DataTypes.INTEGER,
        allowNull: false,
        description:
          "Defines the hierarchy of the tier, with higher numbers for better tiers.",
      },
      wageringThreshold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        description:
          "Minimum spend amount required for this tier - minimum amount of bet need to place",
      },


      timeBasedConsistency: {
        type: DataTypes.INTEGER,
        allowNull: false,
        description:
          "Minimum number of months the player needs to meet spending criteria (e.g., $1,000/month).",
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        description: "Indicates if this VIP tier is currently active.",
      },
      cashBonus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        description: 'Total amount of bonus',
      },
      commissionRate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        description: 'Total percentage of commission',
      },
      rackback: {
        type: DataTypes.INTEGER,
        allowNull: false,
        description: 'return some percentage of lost amount  to user',
      },
     conversion_rate_gc_to_vip: {
  type: DataTypes.DECIMAL(10, 8),
  allowNull: false,
  comment: 'conversion rate from gc to vip points',
},
conversion_rate_sc_to_vip: {
  type: DataTypes.DECIMAL(10, 8),
  allowNull: false,
  comment: 'conversion rate from sc to vip points',
},
     dailyWithdrawalLimit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        description: "Daily SC withdrawal limit for this tier",
      },
      weeklyWithdrawalLimit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        description: "Weekly SC withdrawal limit for this tier",
      },
      monthlyWithdrawalLimit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        description: "Monthly SC withdrawal limit for this tier",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "VipTier",
      tableName: "vip_tiers",
      schema: "public",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          fields: ["level"],
        },
      ],
    }
  );

  VipTier.associate = function (models) {
    VipTier.hasMany(models.UserDetails, { foreignKey: "vipTierId" });
  };

  return VipTier;
};
