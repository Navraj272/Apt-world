'use strict'
import { BONUS_STATUS, BONUS_TYPE } from '@src/utils/constants/bonus.constants'
module.exports=(Sequelize,DataTypes)=>{

  const UserBonus = Sequelize.define('UserBonus', {
id:{
  autoIncrement: true,
  type:DataTypes.INTEGER,
  primaryKey:true,
  allowNull:false,
},
userId:{
  type:DataTypes.INTEGER,
  allowNull:false,
},
bonusId:{
  type:DataTypes.INTEGER,
  allowNull:false,
},
gcAmount:{
  type:DataTypes.DECIMAL(10, 2),
  defaultValue: 0.0
},
scAmount:{
  type:DataTypes.DECIMAL(10, 2),
  defaultValue: 0.0
},
bonusStatus:{
  type:DataTypes.ENUM(Object.values(BONUS_STATUS)),
  defaultValue: BONUS_STATUS.ACTIVE
},
purchaseAmount: {
  type: DataTypes.DECIMAL(10, 2),
  allowNull: true // doubt
}

  } ,{
    tableName: 'user_bonuses',
    timestamps: true,
    underscored: true
  }
)
UserBonus.associate = function (models) { 
  UserBonus.belongsTo(models.User, { 
    foreignKey: 'userId',
    as: 'user'
  })
  UserBonus.belongsTo(models.Bonus, {
    foreignKey: 'bonusId',
    as: 'bonus'
  }) 
};
return UserBonus

}