'use strict';

module.exports = (sequelize, DataTypes) => {
  const Enquiry = sequelize.define('Enquiry', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM('general', 'distributor', 'product', 'rental', 'franchise_product'),
      allowNull: false,
      defaultValue: 'general',
    },
    distributorTier: {
      type: DataTypes.ENUM('platinum', 'gold'),
      allowNull: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'products',
        key: 'id',
      },
    },
    franchiseLocationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'franchise_locations',
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'contacted', 'resolved'),
      allowNull: false,
      defaultValue: 'pending',
    },
  }, {
    sequelize,
    tableName: 'enquiries',
    schema: 'public',
    timestamps: true,
    underscored: true,
  });

  Enquiry.associate = function (models) {
    Enquiry.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'product',
    });
    Enquiry.belongsTo(models.FranchiseLocation, {
      foreignKey: 'franchiseLocationId',
      as: 'franchiseLocation',
    });
  };

  return Enquiry;
};
