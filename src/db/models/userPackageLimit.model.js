"use strict";

module.exports = function (sequelize, DataTypes) {
  const UserPackageLimit = sequelize.define(
    "UserPackageLimit",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      packageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      purchaseCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: "user_package_limits",
      schema: "public",
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["user_id", "package_id"],
          name: "user_package_limits_user_id_package_id_unique",
        },
      ],
    }
  );

  UserPackageLimit.associate = function (models) {
  UserPackageLimit.belongsTo(models.Package, {
    foreignKey: 'packageId',
    onDelete: 'RESTRICT',
  });

  UserPackageLimit.belongsTo(models.User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
  });
};

  return UserPackageLimit;
};
