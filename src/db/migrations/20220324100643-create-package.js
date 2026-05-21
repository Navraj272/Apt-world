'use strict';

/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: 0.0
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gc_coin: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
      },
      sc_coin: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_visible_in_store: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true
      },
      mobile_image_url: {
        type: DataTypes.STRING,
        allowNull: true
      },
      order_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      max_purchase_per_user: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      discount_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      welcome_package: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('packages');
  }
};
