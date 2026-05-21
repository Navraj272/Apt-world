'use strict'

const { POSTAL_CODE_STATUS } = require("@src/utils/constants/public.constants");

module.exports = (sequelize, DataTypes) => {
  const AmoeRequests = sequelize.define('AmoeRequest', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gcCoin: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    scCoin: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM(Object.values(POSTAL_CODE_STATUS)),
      allowNull: false,
      defaultValue: POSTAL_CODE_STATUS.PENDING
    },
  }, {
    sequelize,
    tableName: 'amoe_requests',
    schema: 'public',
    timestamps: true,
    underscored: true
  })

  AmoeRequests.associate = function (model) {
    AmoeRequests.belongsTo(model.User, {
      foreignKey: 'userId',
      as: 'user',
      constraints: false
    })
  }

  return AmoeRequests
}
