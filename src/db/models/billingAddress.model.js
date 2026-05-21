'use strict';

module.exports = (sequelize, DataTypes) => {
  const BillingAddress = sequelize.define('BillingAddress', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'address_line_1' // Explicitly maps to 'address_line_1' in DB
    },
    addressLine2: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'address_line_2' // Explicitly maps to 'address_line_2' in DB
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'US'
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isPrimary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'billing_addresses',
    schema: 'public',
    timestamps: true,
    underscored: true
  });

  BillingAddress.associate = function (models) {
    BillingAddress.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return BillingAddress;
};
