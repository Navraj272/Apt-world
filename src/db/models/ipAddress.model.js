'use strict'

module.exports = (sequelize, DataTypes) => {
    const IpAddress = sequelize.define('WhitelistedIpAddress', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        adminId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ipAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // adminName: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
    }, {
        sequelize,
        underscored: true,
        tableName: 'whitelisted_ip_addresses',
        schema: 'public',
        timestamps: true
    })

    IpAddress.associate = (models) => {
        IpAddress.belongsTo(models.AdminUser, {
            foreignKey: 'adminId',
            targetKey: 'adminUserId',
            as: 'admin'
        })
    }


    return IpAddress
}
