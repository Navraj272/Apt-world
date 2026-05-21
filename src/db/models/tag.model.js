'use strict'

module.exports = function (sequelize, DataTypes) {
  const Tag = sequelize.define('Tag', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    colorCode: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tags',
    schema: 'public',
    timestamps: true,
    underscored: true,
    paranoid: false
  })

  Tag.associate = function (model) {
    Tag.belongsToMany(model.User, {
      through: model.UserTag,
      foreignKey: 'tag_id',
      otherKey: 'user_id',
      as: 'users'
    })
  }

  return Tag
}