'use strict'
import { GENDER, USER_ACCOUNT_STATUS } from "@src/utils/constants/public.constants";

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    userId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isPhoneVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    phoneCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    locale: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'EN',
    },
    isInternalUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    refParentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cxToken: {
      type: DataTypes.STRING,
      allowNull: true
    },
    affiliateId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isAffiliateActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    campaignId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isKycVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    promoCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM(Object.values(GENDER)),
      allowNull: true,
      defaultValue: 'Male'
    },
    accountStatus: {
      type: DataTypes.ENUM(Object.values(USER_ACCOUNT_STATUS)),
      allowNull: false,
      defaultValue: USER_ACCOUNT_STATUS.ACTIVE,
      comment: 'User account status: ACTIVE, INACTIVE, SUSPENDED, UNDER_REVIEW, CLOSED'
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: true,
    underscored: true,
    paranoid: false
  })

  User.associate = function (model) {
    User.hasMany(model.Wallet, { as: 'userWallet', foreignKey: 'userId', onDelete: 'cascade' })
    User.hasMany(model.UserLimit, { as: 'userLimit', foreignKey: 'userId', onDelete: 'cascade' })
    User.hasMany(model.CasinoFavoriteGame, { foreignKey: 'userId', onDelete: 'cascade' })
    User.hasMany(model.CasinoTransaction, { as: 'casinoTransactions', foreignKey: 'userId', onDelete: 'cascade' })
    // User.hasMany(model.UserAffiliations, { foreignKey: 'affiliateUserId', as: 'affiliations' });
    User.hasOne(model.UserAffiliations, { foreignKey: 'referredUserId', as: 'affiliation' });
    User.belongsTo(model.User, { foreignKey: 'refParentId', as: 'referrer' })
    User.hasMany(User, { foreignKey: 'refParentId', as: 'referredUsers' });
    User.hasOne(model.UserDetails, { foreignKey: 'userId', as: 'userDetails', constraints: false, onDelete: 'cascade' })
    User.hasMany(model.Withdrawal, { foreignKey: 'userId' })
    // User.hasOne(model.Limit, { foreignKey: 'userId', as: 'userLimits', constraints: false, onDelete: 'cascade' })
    // User.hasMany(model.ChatRainUser, { foreignKey: 'userId', as: 'chatRainUsers' })
    // User.hasMany(model.Message, { foreignKey: 'actioneeId', as: 'sentMessages' })
    // User.hasMany(model.Message, { foreignKey: 'recipientId', as: 'receivedMessages' })
    // User.hasMany(model.ReportedUser, { foreignKey: 'reportedUserId', as: 'reportedByUsers' })
    // User.hasMany(model.ReportedUser, { foreignKey: 'actioneeId', as: 'reportsMadeByUsers' })
    User.hasMany(model.BonusClaim, { foreignKey: 'userId', as: 'bonusClaims', onDelete: 'cascade' });
    // User.hasMany(model.Tip, { foreignKey: 'userId', as: 'sentTips' });
    // User.hasMany(model.Tip, { foreignKey: 'recipientId', as: 'receivedTips' });
    // User.hasMany(model.UserChatGroup, { foreignKey: 'userId', as: 'userChatGroups' });
    User.hasMany(model.UserTierProgress, { foreignKey: 'userId', as: 'userTierProgresses' })
    User.hasMany(model.AmoeRequest, { foreignKey: 'userId', as: 'AmoeRequests', onDelete: 'cascade' })
    User.hasMany(model.State, { foreignKey: 'stateCode' })
    User.hasMany(model.UserBonus, { foreignKey: 'userId',as: 'bonus',onDelete: 'cascade',constraints: false,});
    User.hasMany(model.UserDocument, { foreignKey: 'userId'});
    User.belongsToMany(model.Tag, {
      through: model.UserTag,
      foreignKey: 'userId',
      otherKey: 'tagId',
      as: 'tags'
    });
    // User.hasMany(model.CrmEvent, { foreignKey: 'userId'});
    // User.hasMany(model.ActionLog, { foreignKey: 'userId'});
    // User.hasMany(model.EmailEvent, { foreignKey: 'userId'});
};
  return User
}
