'use strict'
module.exports = (sequelize, DataTypes) => {
  const Popup = sequelize.define('Popup', {
      popupId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    visibility: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    desktopImageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobileImageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    redirection: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    popupName: {
      type: DataTypes.STRING(255),
      field: 'name',
      allowNull: true
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    packageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize,

    underscored: true,
    tableName: 'popups',
    schema: 'public',
    timestamps: true,
    
  })

  
  Popup.associate = function (models) {
    // associations can be defined here
  }
  return Popup
}