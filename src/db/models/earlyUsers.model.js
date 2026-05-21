'use strict'
import { GENDER } from '@src/utils/constants/public.constants'

module.exports = function (sequelize, DataTypes) {
  const EarlyUser = sequelize.define('EarlyUser', {
    userId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },

   zipCode: {
      type: DataTypes.STRING,
      allowNull: true
    }

  }, {
    sequelize,
    tableName: 'early_users',
    schema: 'public',
    timestamps: true,
    underscored: true,
    paranoid: false
  })


  return EarlyUser
}
