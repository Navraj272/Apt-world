'use strict';
/** @type {import('sequelize-cli').Migration} */
import { USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from '@src/utils/constants/responsibleGambling.constants';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_limits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // Ensure this matches your Users table name
          key: 'user_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      key: {
        type: Sequelize.ENUM(Object.values(USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES)),
        allowNull: false
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expire_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });

    // Add the UNIQUE constraint
    await queryInterface.addConstraint('user_limits', {
      fields: ['user_id', 'key'],
      type: 'unique',
      name: 'unique_user_limit'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('user_limits', 'unique_user_limit');
    await queryInterface.dropTable('user_limits');
  }
};
