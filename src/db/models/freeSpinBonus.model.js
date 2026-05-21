"use strict";
module.exports = (sequelize, DataTypes) => {
  const FreeSpinBonus = sequelize.define(
    "FreeSpinBonus",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      recordId:{
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      casinoBonusId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gameId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      providerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      numSpinsGranted: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.ENUM("pending", "in_progress", "completed", "expired", "failed","cancelled"),
        allowNull: false,
        defaultValue: "pending",
      },
      payoutAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      segmentId:{
        type: DataTypes.STRING,
        allowNull: true
      },
      source:{
        type: DataTypes.STRING,
        allowNull: false
      },
      bonusPayoutTransactionId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "free_spin_bonus",
      timestamps: true,
      underscored: true,
    }
  );

  FreeSpinBonus.associate = (models) => {
    FreeSpinBonus.belongsTo(models.User, { foreignKey: "userId" });
    FreeSpinBonus.belongsTo(models.FreeSpinRecords, {
      foreignKey: "recordId",
      as: "record",
    });
    FreeSpinBonus.belongsTo(models.CasinoGame, {
     foreignKey: "gameId",
    });
    FreeSpinBonus.belongsTo(models.CasinoProvider, {
     foreignKey: "providerId",
    });
  };

  return FreeSpinBonus;
};
