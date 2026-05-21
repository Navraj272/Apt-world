'use strict'

const { PROMOTIONS_TYPE } = require("@src/utils/constants/public.constants")

module.exports = (sequelize, DataTypes) => {
  const Promotions = sequelize.define('Promotions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mobileImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    content: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: PROMOTIONS_TYPE.CASINO_PROMOTIONS,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'promotions',
    schema: 'public',
    timestamps: true,
    underscored: true
  })

  return Promotions
}
