'use strict';

module.exports = function (sequelize, DataTypes) {
  const Flow = sequelize.define('Flow', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    campaignId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'campaigns',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    structure: {
      type: DataTypes.JSONB,
      allowNull: false
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
    tableName: 'flows',
    schema: 'public',
    timestamps: true,
    underscored: true
  });

  Flow.associate = function (models) {
    Flow.belongsTo(models.Campaign, {
      foreignKey: 'campaignId'
    });

    Flow.hasMany(models.ActionLog, {
      foreignKey: 'flowId'
    })
  };

  return Flow;
};
