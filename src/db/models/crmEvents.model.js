'use strict';

module.exports = function (sequelize, DataTypes) {
  const CrmEvent = sequelize.define('CrmEvent', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userId'
      }
    },
    eventType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payload: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    tableName: 'crm_events',
    schema: 'public',
    timestamps: true,
    underscored: true
  });

  CrmEvent.associate = function (models) {
    CrmEvent.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };

  return CrmEvent;
};
