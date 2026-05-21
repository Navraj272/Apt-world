'use strict'

module.exports = function (sequelize, DataTypes) {
  const UserTag = sequelize.define('UserTag', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tags',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_tags',
    schema: 'public',
    timestamps: true,
    underscored: true,
    paranoid: false
  })

  UserTag.associate = function (model) {
    // No additional associations needed as it's a junction table
  }

  return UserTag
}