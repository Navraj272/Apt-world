'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('user_package_limits', {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        package_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        purchase_count: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        },
        created_at: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updated_at: {
          allowNull: false,
          type: DataTypes.DATE
        }
      }, { schema: 'public', transaction });

      // Add a unique constraint to ensure one record per user per package
      await queryInterface.addIndex('user_package_limits', ['user_id', 'package_id'], {
        unique: true,
        name: 'user_package_limits_user_id_package_id_unique',
        transaction
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('user_package_limits', { schema: 'public', transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};