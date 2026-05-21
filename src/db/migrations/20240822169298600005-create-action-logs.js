'use strict'

const { CRM_ACTION_LOGS } = require("@src/utils/constants/crm.constants")

module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('action_logs', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'user_id'
                },
                onDelete: 'CASCADE'
            },
            flow_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'flows',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            action_type: {
                type: DataTypes.ENUM(Object.values(CRM_ACTION_LOGS)),
                allowNull: true,
                defaultValue: CRM_ACTION_LOGS.EMAIL
            },
            status: {
                type: DataTypes.STRING,
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
        }, { schema: 'public' })
    },
    async down(queryInterface, DataTypes) {
        await queryInterface.dropTable('action_logs', { schema: 'public' })
    }
}
