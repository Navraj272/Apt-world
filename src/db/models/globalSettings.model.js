'use strict'

const { GLOBAL_SETTINGS } = require("@src/utils/constants/public.constants")

module.exports = function (sequelize, DataTypes) {
  const GlobalSetting = sequelize.define('GlobalSetting', {
    key: {
      type: DataTypes.ENUM(Object.values(GLOBAL_SETTINGS)),
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    value: {
      type: DataTypes.JSONB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'global_settings',
    schema: 'public',
    timestamps: true,
    underscored: true
  })

  return GlobalSetting
}
