import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { USER_ACCOUNT_STATUS, CUSTOMER_IO_CONSTANTS } from '@src/utils/constants/public.constants'
import { trackEvent, identifyUser } from '@src/libs/customerio'
import { client } from "@src/libs/redis"
import { ALEA_SESSION_PREFIX } from '@src/utils/constants/public.constants'

const constraints = {
  type: 'object',
  properties: {
    userId: { type: ['string', 'number'] },
    status: { type: 'string' },
    reason: { type: 'string' },
    description: { type: 'string' }
  },
  required: ['userId', 'status']
}

/**
 * Update user account status (ACTIVE, INACTIVE, SUSPENDED, UNDER_REVIEW, CLOSED)
 */
export class UpdateUserAccountStatusHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { userId, status, reason, description, authenticatedAdminId } = this.args
    const transaction = this.context.transaction || null

    try {
      // Validate status
      if (!Object.values(USER_ACCOUNT_STATUS).includes(status)) {
        throw new Error(`Invalid status. Allowed values: ${Object.values(USER_ACCOUNT_STATUS).join(', ')}`)
      }

      const user = await db.User.findOne({
        where: { userId },
        transaction
      })

      if (!user) {
        throw new Error('User not found')
      }

      // Store old status for tracking
      const oldStatus = user.accountStatus

      // Update account status
      user.accountStatus = status

      // Update isActive for backward compatibility
      // ACTIVE = true, all others = false
      user.isActive = status === USER_ACCOUNT_STATUS.ACTIVE

      await user.save({ transaction })

      // Clear access tokens if user is not active
      if (status !== USER_ACCOUNT_STATUS.ACTIVE && userId) {
        await client.del(`${userId}:ACCESS_TOKEN`)
        await deleteAleaSessionsForUser(userId)
      }

      // Store status change reason in UserDetails
      if (reason && description) {
        let statusChangeReason = `${reason}:${description}`
        if (statusChangeReason.length > 250) {
          statusChangeReason = statusChangeReason.substring(0, 250)
        }

        await db.UserDetails.update(
          {
            disableReason: statusChangeReason
          },
          {
            where: { userId: userId },
            transaction
          }
        )
              // Create a database comment for the status change
      if (authenticatedAdminId) {
        const adminDetails = await db.AdminUser.findOne({
          where: { adminUserId: authenticatedAdminId },
          attributes: ['email'],
          include: {
            model: db.AdminRole,
            attributes: ['name']
          },
          transaction
        })

        const commentTitle = reason || status
        const commentText = description ? `${status}: ${description}` : status

        await db.Comment.create(
          {
            comment: commentText,
            title: commentTitle,
            commentedBy: adminDetails?.email || 'system',
            role: adminDetails?.AdminRole?.name || 'system',
            status: true,
            userId,
          },
          { transaction }
        )
      }
      }

      // Track status change events
      try {
        const userAttributes = {
          account_status: user.accountStatus,
          isActive: user.isActive,
        }

        identifyUser(userId.toString(), userAttributes)

        const eventName = this.getStatusChangeEventName(oldStatus, status)

        trackEvent(
          userId,
          eventName,
          {
            userId: user.userId,
            email: user.email,
            oldStatus,
            newStatus: status,
            changedAt: new Date().toISOString(),
          }
        )
      } catch (err) {
        this.context.logger.error({
          message: 'Failed to track Customer.io user status change event',
          error: err.message,
          userId: user.userId,
        })
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

      return {
        success: true,
        userId,
        oldStatus,
        newStatus: status,
        isActive: user.isActive
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  getStatusChangeEventName(oldStatus, newStatus) {
    const statusEvents = {
      [`${USER_ACCOUNT_STATUS.ACTIVE}_${USER_ACCOUNT_STATUS.INACTIVE}`]: 'user_deactivated',
      [`${USER_ACCOUNT_STATUS.INACTIVE}_${USER_ACCOUNT_STATUS.ACTIVE}`]: 'user_activated',
      [`${USER_ACCOUNT_STATUS.ACTIVE}_${USER_ACCOUNT_STATUS.SUSPENDED}`]: 'user_suspended',
      [`${USER_ACCOUNT_STATUS.SUSPENDED}_${USER_ACCOUNT_STATUS.ACTIVE}`]: 'user_suspension_lifted',
      [`${USER_ACCOUNT_STATUS.ACTIVE}_${USER_ACCOUNT_STATUS.UNDER_REVIEW}`]: 'user_under_review',
      [`${USER_ACCOUNT_STATUS.UNDER_REVIEW}_${USER_ACCOUNT_STATUS.ACTIVE}`]: 'user_review_passed',
      [`${USER_ACCOUNT_STATUS.ACTIVE}_${USER_ACCOUNT_STATUS.CLOSED}`]: 'user_account_closed',
    }

    return statusEvents[`${oldStatus}_${newStatus}`] || 'user_status_changed'
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
