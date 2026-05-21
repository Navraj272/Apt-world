'use strict';

import { USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from '@src/utils/constants/responsibleGambling.constants';

module.exports = function (sequelize, DataTypes) {
  const UserLimit = sequelize.define('UserLimit', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    key: {
      type: DataTypes.ENUM(Object.values(USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES)),
      // type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    expireAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    usedLimit: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0',
    },    
  }, {
    sequelize,
    tableName: 'user_limits',
    schema: 'public',
    timestamps: true,
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'key'] // Add a unique constraint on userId + key
      }
    ]
  })

  UserLimit.associate = function (model) {
    UserLimit.belongsTo(model.User, {
      foreignKey: 'userId',
      constraints: false
    })
  }

  return UserLimit
}
