'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.JSONB, // Multilingual name
      allowNull: false,
      defaultValue: {},
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.JSONB, // Multilingual description
      allowNull: true,
      defaultValue: {},
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specSchema: {
      type: DataTypes.JSONB, // Defines technical fields for products in this category
      allowNull: true,
      defaultValue: [],
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    sortOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    sequelize,
    hooks: {
      // New rows go to the end of their list unless an explicit order is given
      beforeCreate: async (instance) => {
        if (instance.sortOrder) return;
        const max = await sequelize.models.Category.max('sortOrder', {});
        instance.sortOrder = (max || 0) + 1;
      },
    },
    tableName: 'categories',
    schema: 'public',
    timestamps: true,
    underscored: true,
  });

  Category.associate = function (models) {
    Category.hasMany(models.Subcategory, {
      foreignKey: 'categoryId',
      as: 'subcategories',
    });
    Category.hasMany(models.Product, {
      foreignKey: 'categoryId',
      as: 'products',
    });
  };

  return Category;
};
