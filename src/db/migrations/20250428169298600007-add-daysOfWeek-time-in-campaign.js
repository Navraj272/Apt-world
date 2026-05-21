'use strict'

module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.addColumn(
            { tableName: 'campaigns', schema: 'public' },
            'days_of_week',
            {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
                defaultValue: null 
            }
        )

        await queryInterface.addColumn(
            { tableName: 'campaigns', schema: 'public' },
            'time',
            {
                type: DataTypes.STRING,
                allowNull: true, 
                defaultValue: null
            }
        )
    },

    async down(queryInterface, DataTypes) {
        await queryInterface.removeColumn(
            { tableName: 'campaigns', schema: 'public' },
            'days_of_week'
        )

        await queryInterface.removeColumn(
            { tableName: 'campaigns', schema: 'public' },
            'time'
        )
    }
}
