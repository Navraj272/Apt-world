'use strict'

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('flows', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      campaign_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'campaigns',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      structure: {
        type: DataTypes.JSONB,
        allowNull: false
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
    await queryInterface.dropTable('flows', { schema: 'public' });
  }
};
