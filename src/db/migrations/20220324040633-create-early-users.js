'use strict'
import { GENDER } from "@src/utils/constants/public.constants";

module.exports = {
  async up(queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('early_users', {
        user_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        first_name: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        last_name: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        email: {
          type: DataTypes.STRING(50),
          unique: true,
          allowNull: true
        },
        zip_code: {
          type: DataTypes.STRING(10),
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
      }, { schema: 'public', transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('early_users', { schema: 'public' })
  }
}
