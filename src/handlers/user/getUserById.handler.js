import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { getDailySummaryReportQuery } from '@src/helpers/getDailyTransactionSummarySQL.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { serverDayjs } from '@src/libs/dayjs'
import { getCache } from '@src/libs/redis'
import { CACHE_KEYS } from '@src/utils/constants/public.constants'
import { SELF_EXCLUSION_TYPES, USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from '@src/utils/constants/responsibleGambling.constants'
import { Op } from 'sequelize'

export class GetUserByIdHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { userId } = this.args
 const now = serverDayjs();
    // Fetch user details with relations
    const getUser = await db.User.findOne({
      where: { userId },
      attributes: { exclude: ['password'] },
      include: [
        {
          model: db.Wallet,
          as: 'userWallet',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          separate: true,
          order: [['currencyCode', 'ASC']]
        },
        {
          model: db.UserDetails,
          as: 'userDetails',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          include: [
            {
              model: db.VipTier,
              required: false,
              attributes: ['vipTierId', 'name', 'icon', 'level']
            },
            {
              model: db.VipTier,
              as: 'nextVipTier',
               attributes: ['vipTierId', 'name', 'icon', 'level', 'wageringThreshold'],
            },
          ]
        },
        {
          model: db.UserTierProgress,
          as: 'userTierProgresses',
          required: false,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          include: {
            model: db.VipTier,
            as: 'viptier',
            required: false,
            attributes: ['name', 'icon', 'level'],
          },
        },
        {
           model: db.Tag,
           as: 'tags',
           attributes: ['id', 'name', 'colorCode'],
            through: {
              attributes: []
            },
            required: false
          },
        {
          model: db.UserLimit,
          required: false,
          as: 'userLimit',
          // attributes: { exclude: [ 'updatedAt'] },
          where: {
            [Op.or]: [
               {
                value: { [Op.ne]: SELF_EXCLUSION_TYPES.TEMPORARY }
              },
              {
                value: SELF_EXCLUSION_TYPES.TEMPORARY,
                expireAt: { [Op.gt]: now.toDate() }
              }
            ]
          }
        },

      ]
    })

    if (!getUser) throw new AppError(Errors.USER_NOT_EXISTS)


    const replacements = { userId }
    const whereConditions = [`user_id = :userId`]
    const userIDs = [];
    userIDs.push(userId)

    // Fetch last 90 days of transaction data
    const transactionHistory = await db.sequelize.query(`
      SELECT
        sc_purchased_amount AS totalScPurchase,
        sc_redeemed_amount AS totalScRedeemed,
        sc_wagered_amount AS totalScWagered,
        sc_won_amount AS totalScWon,
        bonus_referral_earned AS totalBonusEarned,
        sc_purchased_offline AS sc_purchased_offline
      FROM (
        ${getDailySummaryReportQuery(userIDs).replace(/;$/, '')}
      ) AS summary
      WHERE ${whereConditions.join(' AND ')}
    `, {
      replacements,
      type: db.Sequelize.QueryTypes.SELECT
    });


    const totalTransaction = await db.sequelize.query(
      `SELECT
          sc_purchased_amount AS totalScPurchase,
          sc_redeemed_amount AS totalScRedeemed,
          sc_wagered_amount AS totalScWagered,
          sc_won_amount AS totalScWon,
          bonus_referral_earned AS totalBonusEarned,
          sc_purchased_offline AS scPurchasedOffline
        FROM (
        ${getDailySummaryReportQuery(userIDs,false).replace(/;$/, '')}
        ) AS summary
        WHERE user_id = :userId`,
      {
        replacements: { userId },
        type: db.Sequelize.QueryTypes.SELECT
      }
    )

    const totalCoinback = await db.sequelize.query(
      `SELECT
          SUM(CASE WHEN t.purpose = 'weekly_cashback' AND t.status = 'successful' THEN t.sc ELSE 0 END) AS coinback
      FROM transactions t
      WHERE t.user_id = :userId`,
      {
        replacements: { userId},
        type: db.Sequelize.QueryTypes.SELECT
      })

    if(totalTransaction.length){
      totalTransaction[0].totalCoinbackEarned = totalCoinback[0].coinback
    }
    const cooldownCache = await getCache(`${CACHE_KEYS.FYNTEK_REDEEM_COOLDOWN}:${userId}`);

    const isFyntekCooldownActive = (cooldownCache && cooldownCache !== '{}');


    getUser.setDataValue('isFyntekCooldownActive', isFyntekCooldownActive);
    // Attach transaction history to user data
    getUser.setDataValue('dailyTransactionSummary', transactionHistory)
    getUser.setDataValue('totalTransactionSummary', totalTransaction[0])
    return { getUser }
  }
}
