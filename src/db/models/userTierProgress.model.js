'use strict'

module.exports = function (sequelize, DataTypes) {
  const UserTierProgress = sequelize.define(
    'UserTierProgress',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      vipTierId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      wageringThreshold: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
        description: 'Minimum spend amount required for this tier',
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        description: 'Indicates if this VIP tier is currently active.',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'UserTierProgress',
      tableName: 'user_tier_progress',
      schema: 'public',
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ['user_id', 'vip_tier_id']
        }
      ]
    }
  )

  UserTierProgress.associate = function (models) {
    UserTierProgress.belongsTo(models.VipTier, { foreignKey: 'vipTierId', as: 'viptier' })
    UserTierProgress.belongsTo(models.User, { foreignKey: 'userId', constraints: false })
  }

  return UserTierProgress
}
