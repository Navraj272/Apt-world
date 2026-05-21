'use strict'

module.exports = {
  async up(queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('whitelisted_ip_addresses', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        admin_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'admin_users',
            key: 'admin_user_id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        name:{
          type:DataTypes.STRING,
          allowNull: true
        },
        ip_address: {
          type: DataTypes.STRING,
          allowNull: false
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: true
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true
        }
      }, { schema: 'public', transaction })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('whitelisted_ip_addresses', { schema: 'public' })
  }
}
