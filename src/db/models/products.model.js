'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
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
    subcategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'subcategories',
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
    images: {
      type: DataTypes.JSONB, // Array of image URLs
      allowNull: false,
      defaultValue: [],
    },
    baseCode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    specs: {
      type: DataTypes.JSONB, // Category/Subcategory specific fields
      allowNull: true,
      defaultValue: {},
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // mobile_thumbnail: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: true,
    underscored: true,
  });

  Product.associate = function (models) {
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
    });
    Product.belongsTo(models.Subcategory, {
      foreignKey: 'subcategoryId',
      as: 'subcategory',
    });
    Product.hasMany(models.Enquiry, {
      foreignKey: 'productId',
      as: 'enquiries',
    });
  };

  return Product;
};
