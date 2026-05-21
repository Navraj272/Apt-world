"use strict";

const {
  TRANSACTION_PURPOSE,
  PAYMENT_PROVIDER,
  TRANSACTION_STATUS,
} = require("@src/utils/constants/public.constants");

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      transactionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        refrences: {
          model: "users",
          key: "user_id",
        },
      },
      paymentProviderId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      packageId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      actioneeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        refrences: {
          model: "admin_users",
          key: "admin_user_id",
        },
      },
      withdrawalId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        refrences: {
          model: "withdrawals",
          key: "id",
        },
      },
      purpose: {
        type: DataTypes.ENUM(Object.values(TRANSACTION_PURPOSE)),
        allowNull: false,
      },
      moreDetails: {
        type: DataTypes.JSONB(),
        allowNull: true,
      },
      paymentProvider: {
        type: DataTypes.ENUM(Object.values(PAYMENT_PROVIDER)),
        allowNull: false,
        defaultValue: PAYMENT_PROVIDER.OFFLINE,
      },
      status: {
        type: DataTypes.ENUM(Object.values(TRANSACTION_STATUS)),
        allowNull: true,
      },
      parentTxn: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'transactions',
          key: 'transaction_id'
        }
      },
      gc: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
      },
      sc: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
      },
    },
    {
      tableName: "transactions",
      timestamps: true,
      underscored: true,
    }
  );

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.User, { foreignKey: "userId" });
    Transaction.belongsTo(models.Withdrawal, { foreignKey: "withdrawalId" });
    Transaction.belongsTo(models.Package, {
      foreignKey: 'package_id',
      onDelete: 'SET NULL',
    })
    Transaction.hasMany(models.TransactionLedger, {
      foreignKey: "transactionId",
      as: "bankingLedger",
      onDelete: "cascade",
      scope: {
        transaction_type: "banking",
      },
    });
    Transaction.belongsTo(models.Transaction, {
      foreignKey: 'parentTxn',
      as: 'ParentTransaction'
    });
  };

  return Transaction;
};
