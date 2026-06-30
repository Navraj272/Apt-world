'use strict';

module.exports = (sequelize, DataTypes) => {
  const FranchiseLocation = sequelize.define('FranchiseLocation', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    sequelize,
    tableName: 'franchise_locations',
    schema: 'public',
    timestamps: true,
    underscored: true,
  });

  FranchiseLocation.associate = function (models) {
    FranchiseLocation.hasMany(models.Enquiry, {
      foreignKey: 'franchiseLocationId',
      as: 'enquiries',
    });
  };

  return FranchiseLocation;
};
