'use strict';

// import { CRM_ACTION_LOGS } from "@src/utils/constants/public.constants"; 

module.exports = function (sequelize, DataTypes) {
  const ActionLog = sequelize.define('ActionLog', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userId'
      },
      onDelete: 'CASCADE'
    },
    flowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'flows',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    // actionType: {
    //   type: DataTypes.ENUM(Object.values(CRM_ACTION_LOGS)),
    //   allowNull: false,
    //   defaultValue: CRM_ACTION_LOGS.EMAIL
    // },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    tableName: 'action_logs',
    schema: 'public',
    timestamps: true,
    underscored: true
  });

  ActionLog.associate = function (models) {
    // ActionLog.belongsTo(models.User, {
    //   foreignKey: 'userId'
    // });

    // ActionLog.belongsTo(models.Flow, {
    //   foreignKey: 'flowId'
    // });
  };


  return ActionLog;
};
