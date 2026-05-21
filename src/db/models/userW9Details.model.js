'use strict'

module.exports = function (sequelize, DataTypes) {
  const UserW9Details = sequelize.define(
    'UserW9Details',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        unique: true
      },

      avalaraFormId: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'avalara_form_id'
      },

      referenceId: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'reference_id'
      },

      entryStatus: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'pending',
        field: 'entry_status'
      },

      tinMatchStatus: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'tin_match_status'
      },

      lastSyncedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'last_synced_at'
      }
    },
    {
      sequelize,
      tableName: 'user_w9_details',
      schema: 'public',
      timestamps: true,
      underscored: true,
      indexes: [
        {
          fields: ['userId']
        },
        {
          fields: ['avalaraFormId']
        }
      ]
    }
  )

  UserW9Details.associate = function (model) {
    UserW9Details.belongsTo(model.User, {
      foreignKey: 'userId',
      constraints: false // consistent with your project
    })
  }

  return UserW9Details
}
