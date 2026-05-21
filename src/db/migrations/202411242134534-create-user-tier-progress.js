'use strict'

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('user_tier_progress', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      vip_tier_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      wagering_threshold: {
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
    await queryInterface.addIndex('user_tier_progress', ['user_id', 'vip_tier_id', 'is_active'], {
      name: 'index_user_tier_progress_on_user_id_and_vip_tier_id_and_is_active',
      unique: true
    })
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('user_tier_progress', { schema: 'public' })
  }
}
