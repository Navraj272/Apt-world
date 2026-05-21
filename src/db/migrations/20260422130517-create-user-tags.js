'use strict'

module.exports = {
  async up(queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('user_tags', {
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'user_id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        tag_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'tags',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
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
        transaction,
        indexes: [
          {
            unique: true,
            fields: ['user_id', 'tag_id']
          }
        ]
      })

      // Add composite primary key
      await queryInterface.addConstraint('user_tags', {
        fields: ['user_id', 'tag_id'],
        type: 'primary key',
        name: 'user_tags_pkey',
        schema: 'public',
        transaction
      })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('user_tags', { schema: 'public' })
  }
}