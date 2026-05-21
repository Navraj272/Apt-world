'use strict'

module.exports = function (sequelize, DataTypes) {
  const EmailTemplate = sequelize.define('EmailTemplate', {
    emailTemplateId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false
    },
    templateProviderId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'email_templates',
    schema: 'public',
    timestamps: true,
    underscored: true
  })

  return EmailTemplate
}
