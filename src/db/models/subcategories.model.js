'use strict';

module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define('Subcategory', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {},
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: {},
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specSchema: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: [],
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    sequelize,
    tableName: 'subcategories',
    schema: 'public',
    timestamps: true,
    underscored: true,
  });

  Subcategory.associate = function (models) {
    Subcategory.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
    });
    Subcategory.hasMany(models.Product, {
      foreignKey: 'subcategoryId',
      as: 'products',
    });
  };

  return Subcategory;
};
