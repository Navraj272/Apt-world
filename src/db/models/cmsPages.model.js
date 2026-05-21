'use strict'

const { CMS_CATEGORIES } = require("@src/utils/constants/public.constants")

module.exports = (sequelize, DataTypes) => {
  const CmsPage = sequelize.define('CmsPage', {
    cmsPageId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.JSONB, // Supports multilingual content
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    content: {
      type: DataTypes.JSONB, // Structured content sections
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM(Object.values(CMS_CATEGORIES)),
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'cms_pages',
    schema: 'public',
    timestamps: true,
    underscored: true
  })

  return CmsPage
}
