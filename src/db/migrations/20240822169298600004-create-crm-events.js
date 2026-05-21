'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('crm_events', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'  // use 'id' if your users table uses 'id' instead of 'user_id'
        },
        onDelete: 'CASCADE'
      },
      event_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      payload: {
        type: DataTypes.JSONB,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }, { schema: 'public' });
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.dropTable('crm_events', { schema: 'public' });
  }
};
