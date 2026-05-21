'use strict'

module.exports = function (sequelize, DataTypes) {
    const UserTransactionSummary = sequelize.define('UserTransactionSummaryData', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        betCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        winCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        wagered: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        },
        won: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        },
        totalGamePlayed: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        purchased: {
            type:DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        },
        scCoinPurchased: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        },
        scPurchasedOffline: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        },
        scPurchasedCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        scRedeemedOffline: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        },
        redeemed: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        },
        bonusReferralEarned: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'user_transaction_summary_data',
        schema: 'public',
        timestamps: true,
        underscored: true,
        paranoid: false
    })

    return UserTransactionSummary
}
