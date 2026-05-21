import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { fn, col } from 'sequelize'

export class TierStatsHandler extends BaseHandler {
  async run() {

    const rows = await db.UserDetails.findAll({
      attributes: [
        ['vip_tier_id', 'vipTierId'],
        [fn('COUNT', col('user_id')), 'userCount']
      ],
      where: {
        vip_tier_id: {
          [db.Sequelize.Op.between]: [1, 7]
        }
      },
      group: ['vip_tier_id'],
      raw: true
    })

    const vipTiersData = await db.VipTier.findAll({
      attributes: ['vipTierId', 'mobileIcon', 'icon', 'name', 'level'],
      order: [['level', 'ASC']],
      raw: true
    })

    const tierUserCountMap = rows.reduce((acc, row) => {
      acc[Number(row.vipTierId)] = Number(row.userCount)
      return acc
    }, {})

    const combinedData = vipTiersData.map(tier => ({
      vipTierId: tier.vipTierId,
      name: tier.name,
      icon: tier.icon,
      mobileIcon: tier.mobileIcon,
      userCount: tierUserCountMap[tier.vipTierId] ?? 0
    }))

    const totalUsers = combinedData.reduce(
    (sum, tier) => sum + tier.userCount,0)

    return {
      tiersData: combinedData,
      totalUsers
    }
  }
}

