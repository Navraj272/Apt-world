'use strict'

const { EMAIL_EVENT_TYPES } = require("@src/utils/constants/sendgrid.constants")

module.exports = (sequelize, DataTypes) => {
  const EmailEvent = sequelize.define('EmailEvent', {
    emailEventId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventType: {
      type: DataTypes.ENUM(...Object.values(EMAIL_EVENT_TYPES)),
      allowNull: false,
      defaultValue: EMAIL_EVENT_TYPES.DELIVERED
    },
    sgMessageId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    response: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'email_events',
    schema: 'public',
    timestamps: true,
    underscored: true
  })


  EmailEvent.associate = models => {
    // EmailEvent.belongsTo(models.Campaign, {
    //   foreignKey: 'campaignId',
    // })
    // EmailEvent.belongsTo(models.User, {
    //   foreignKey: "userId",
    //   constraints: false,
    // });
  }

  return EmailEvent
}
