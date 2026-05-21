"use strict";

module.exports = (sequelize, DataTypes) => {
  const FreeSpinRecords = sequelize.define(
    "FreeSpinRecords",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      vipTierIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
      },

      userIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
        comment: "List of user IDs who received free spins",
      },

      gameName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      providerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      numSpins: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "free_spin_records",
      underscored: true,
    }
  );

  FreeSpinRecords.associate = (models) => {
    FreeSpinRecords.hasMany(models.FreeSpinBonus, {
      foreignKey: "recordId",
      as: "freeSpinBonuses",
    });
  };

  return FreeSpinRecords;
};
