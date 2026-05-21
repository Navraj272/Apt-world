'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      // Remove duplicates (keep latest record per user)
      await queryInterface.sequelize.query(`
        DELETE FROM user_w9_details
        WHERE id NOT IN (
          SELECT MAX(id)
          FROM user_w9_details
          GROUP BY user_id
        );
      `, { transaction })

      // Rename column
      await queryInterface.renameColumn(
        'user_w9_details',
        'status',
        'entry_status',
        { transaction }
      )

      // Add unique constraint
      await queryInterface.addConstraint('user_w9_details', {
        fields: ['user_id'],
        type: 'unique',
        name: 'unique_user_w9_user_id',
        transaction
      })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      // Remove constraint
      await queryInterface.removeConstraint(
        'user_w9_details',
        'unique_user_w9_user_id',
        { transaction }
      )

      // Rename back
      await queryInterface.renameColumn(
        'user_w9_details',
        'entry_status',
        'status',
        { transaction }
      )

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}
