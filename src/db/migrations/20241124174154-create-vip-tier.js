'use strict'

module.exports = {
  async up(queryInterface, DataTypes) {

    await queryInterface.createTable('vip_tiers', {

      vip_tier_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: true
      },
      mobile_icon: {
        type: DataTypes.STRING,
        allowNull: true
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      wagering_threshold: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      time_based_consistency: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
        cash_bonus: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      rackback: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      schema: 'public',
    })
    await queryInterface.addIndex('vip_tiers', ['level'], {
      name: 'index_vip_tiers_on_level',
    })
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.dropTable('vip_tiers', { schema: 'public' })
  }
}
