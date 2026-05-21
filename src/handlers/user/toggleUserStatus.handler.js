import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { CUSTOMER_IO_CONSTANTS } from '@src/utils/constants/public.constants'
import { trackEvent, identifyUser } from '@src/libs/customerio'
import { client } from "@src/libs/redis"
import { ALEA_SESSION_PREFIX } from '@src/utils/constants/public.constants'


const constraints = {
  type: 'object',
  properties: {
    userId: { type: 'string' },
    reason: { type: 'string' },
    description: { type: 'string' }
  },
  // Only userId is strictly required to run the handler
  required: ['userId']
}

export class ToggleUserStatusHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { userId, reason, description } = this.args
    const transaction = this.context.transaction || null
console.log( userId, reason, description , " userId, reason, description")
    try {
      const user = await db.User.findOne({
        where: { userId },
        transaction
      })

      if (!user) {
        throw new Error('User not found')
      }

      // 1. Toggle User Status
      user.isActive = !user.isActive
      await user.save({ transaction })
      
      await client.del(`${userId}:ACCESS_TOKEN`)
      
      if (!user.isActive && userId) {
       await deleteAleaSessionsForUser(userId)
      }

      if (reason && description) {
        let disableReasonText = `${reason}:${description}`

        // Check length and trim to 250 chars if necessary
        if (disableReasonText.length > 250) {
          disableReasonText = disableReasonText.substring(0, 250)
        }

        await db.UserDetails.update(
          {
            disableReason: disableReasonText
          },
          {
            where: { userId: userId },
            transaction
          }
        )
      }


      try {
        const userAttributes = {
          isActive: user.isActive,
        };

        await identifyUser(userId.toString(), userAttributes);

        const eventName = user.isActive
          ? CUSTOMER_IO_CONSTANTS.USER_ACTIVATED
          : CUSTOMER_IO_CONSTANTS.USER_BLOCKED;

        await trackEvent(
          userId,
          eventName,
          {
            userId: user.userId,
            email: user.email,
            activatedAt: new Date().toISOString(),
          }
        )
      } catch (err) {
        this.context.logger.error({
          message: 'Failed to track Customer.io user status event',
          error: err.message,
          userId: user.userId,
        })
      }

      return { success: true }
    }
    catch (error) {
      return this.handleError(error)
    }
  }
}

async function deleteAleaSessionsForUser(userId) {
  const pattern = `${ALEA_SESSION_PREFIX}${userId}_*`
  let cursor = '0'

  do {
    const [nextCursor, keys] = await client.scan(
      cursor,
      'MATCH',
      pattern,
      'COUNT',
      100
    )

    cursor = nextCursor

    if (keys.length > 0) {
      await client.del(...keys)
    }
  } while (cursor !== '0')
}
