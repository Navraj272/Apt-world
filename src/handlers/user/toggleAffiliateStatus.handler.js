import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { Op } from 'sequelize'
import { identifyUser, trackEvent } from '@src/libs/customerio'
import { CUSTOMER_IO_CONSTANTS } from '@src/utils/constants/public.constants'

const CHUNK_SIZE = 100

export class ToggleAffiliateStatusHandler extends BaseHandler {

  chunkArray(array, size) {
    const chunks = []
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size))
    }
    return chunks
  }

  async run() {
    const { userIds } = this.args
    const transaction = this.context.transaction || null

    try {
      const uniqueUserIds = [...new Set(userIds)]
      const userChunks = this.chunkArray(uniqueUserIds, CHUNK_SIZE)

      let totalUpdated = 0
      const timestamp = new Date().toISOString()

      for (const chunk of userChunks) {

        const [affectedCount, updatedUsers] = await db.User.update(
          { isAffiliateActive: false },
          {
            where: {
              userId: chunk,
              isAffiliateActive: { [Op.ne]: false }
            },
            returning: true,
            transaction
          }
        )

        if (!affectedCount || !updatedUsers?.length) continue

        totalUpdated += affectedCount

        for (const user of updatedUsers) {
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
          identifyUser(user.userId.toString(),{
            is_affiliate_user_active : false,
            affiliate_user_detached_at : timestamp
          })
        }
      }

      return {
        success: true,
        totalUsersRequested: uniqueUserIds.length,
        totalUsersActuallyUpdated: totalUpdated
      }

    } catch (error) {
      return this.handleError(error)
    }
  }
}