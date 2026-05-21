"use strict";
import {
  CASINO_TRANSACTION_PURPOSE,
  COINS,
  TRANSACTION_STATUS,
} from "@src/utils/constants/public.constants";
import { CASINO_ROUND_STATUS } from "@src/utils/constants/casino.constants";

module.exports = (sequelize, DataTypes) => {
  const CasinoTransaction = sequelize.define(
    "CasinoTransaction",
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
      transactionId: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      casinoGameId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      gameRoundId: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "game round id",
      },
      roundStatus: {
        type: DataTypes.ENUM(Object.values(CASINO_ROUND_STATUS)),
        allowNull: true,
        comment: "game round status",
      },
      actionType: {
        type: DataTypes.ENUM(Object.values(CASINO_TRANSACTION_PURPOSE)),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(Object.values(TRANSACTION_STATUS)),
        allowNull: false,
        defaultValue: TRANSACTION_STATUS.PENDING,
      },
      moreDetails: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      coin: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      coinType: {
        type: DataTypes.ENUM([COINS.GOLD_COIN, COINS.SWEEP_COINS]),
        allowNull: false,
        defaultValue: COINS.GOLD_COIN,
      },
    },
    {
      sequelize,
      tableName: "casino_transactions",
      schema: "public",
      timestamps: true,
      updatedAt: false,
      underscored: true
    }
  );

  CasinoTransaction.associate = function (models) {
    CasinoTransaction.belongsTo(models.User, {
      foreignKey: "userId",
    });
    CasinoTransaction.belongsTo(models.CasinoGame, {
      foreignKey: "casinoGameId",
      targetKey: "casinoGameId",
    });
  };

  return CasinoTransaction;
};
