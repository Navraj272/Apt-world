'use strict'

module.exports = {
  async up (queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('affiliate_requests', {
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
        status: {
          type: DataTypes.ENUM('PENDING', 'APPROVED', 'REJECTED', 'REREQUESTED'),
          allowNull: false,
          defaultValue: 'PENDING'
        },
        reason: {
          type: DataTypes.STRING,
          allowNull: true
        },
        action_id: {
          type: DataTypes.INTEGER,
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
      }, {
        schema: 'public',
        transaction
      })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.dropTable('affiliate_requests', { schema: 'public' })
  }
}
