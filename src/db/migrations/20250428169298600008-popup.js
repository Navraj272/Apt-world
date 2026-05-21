'use strict'

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('popups', {

      popup_id: {
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
      desktop_image_url: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      mobile_image_url: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      redirection: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      popup_name: {
        type: DataTypes.STRING(255),
        field: 'name',
        allowNull: true
      },
      text: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      package_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    }, {
      schema: 'public',
      timestamps: true
    })
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('popups', { schema: 'public' })
  }
}