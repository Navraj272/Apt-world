import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { Op } from 'sequelize'
import { trackEvent } from '@src/libs/customerio'
import { CUSTOMER_IO_CONSTANTS } from '@src/utils/constants/public.constants'

const CHUNK_SIZE = 100

export class DetachNpuUsersHandler extends BaseHandler {

  chunkArray(array, size) {
    const chunks = []
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size))
    }
    return chunks
  }

  async run() {
    const { affiliateId, cutoffDate } = this.args
    const transaction = this.context.transaction || null

    try {
      const users = await db.User.findAll({
        where: {
          affiliateId : String(affiliateId),
          createdAt: { [Op.lte]: cutoffDate },
          isAffiliateActive: { [Op.ne]: false }
        },
        attributes: ['userId', 'email'],
        include: [
          {
            model: db.UserDetails,
            as: 'userDetails',
            where: {
              [Op.or]: [
                { isFirstPurchaseClaimed: false }
                // { isFirstPurchaseClaimed: null }
              ]
            },
            attributes: []
          }
        ],
        transaction
      })

      if (!users || users.length === 0) {
        return {
          success: true,
          totalProcessed: 0,
        }
      }

      const userChunks = this.chunkArray(users, CHUNK_SIZE)
      let totalUpdated = 0
      const timestamp = new Date().toISOString()

      for (const chunk of userChunks) {
        const userIds = chunk.map((u) => u.userId)

        const [affectedCount] = await db.User.update(
          { isAffiliateActive: false },
          {
            where: {
              userId: userIds,
              isAffiliateActive: { [Op.ne]: false }
            },
            transaction
          }
        )

        if (affectedCount) {
          totalUpdated += affectedCount
        }

        for (const user of chunk) {
          trackEvent(
            user.userId,
            CUSTOMER_IO_CONSTANTS.USER_DEATTACHED_FROM_AFFILIATE,
            {
              userId: user.userId,
              email: user.email,
              detached_at: timestamp
            }
          ).catch((err) => {
            console.error(`Customer.io trackEvent failed for user ${user.userId}`, err)
          })
        }
      }

      return {
        success: true,
        totalFound: users.length,
        totalUpdated
      }

    } catch (error) {
      return this.handleError(error)
    }
  }
}
