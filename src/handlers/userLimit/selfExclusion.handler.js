import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES } from '@src/utils/constants/responsibleGambling.constants'
import { SELF_EXCLUSION_TYPES } from '@src/utils/constants/responsibleGambling.constants'
import { Op } from 'sequelize'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import {serverDayjs} from '@src/libs/dayjs'
import { client } from '@src/libs/redis'
import { identifyUser , trackEvent } from '@src/libs/customerio'
import { CUSTOMER_IO_CONSTANTS } from '@src/utils/constants/public.constants'
import { Logger } from '@src/libs/logger'

export class SelfExclusionHandler extends BaseHandler {
  async run() {
    const { userId, exclusionType, duration, reset } = this.args
    const transaction = this.dbTransaction
    const now = serverDayjs()
    let expireAt = null

    // If reset flag is true, remove self-exclusion
    if (reset) {
        const existingExclusion = await db.UserLimit.findOne({
          where: {
            userId,
            key: USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.SELF_EXCLUSION,
          },
          transaction,
        })
  
        if (!existingExclusion) {
          throw new AppError(Errors.SELF_EXCLUSION_NOT_FOUND)
        }
  
        await db.UserLimit.destroy({
          where: {
            userId,
            key: USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.SELF_EXCLUSION,
          },
          transaction,
        })


        try {
    Logger.info({ message: 'Tracking self-exclusion reset (ADMIN)', userId })

    //  Update segmentation attribute
     identifyUser(userId.toString(), { self_excluded: false })

    //  Compliance audit event (REQUIRED)
    trackEvent(
      userId.toString(),
      CUSTOMER_IO_CONSTANTS.COMPLIANCE_SELF_EXCLUSION_REVOKED,
      {
        revoked_at: now.toISOString(),
        original_expiry: existingExclusion.expireAt,
        was_permanent:
          existingExclusion.value === SELF_EXCLUSION_TYPES.PERMANENT,
        revoked_by: 'admin',
      }
    )

  } catch (error) {
    Logger.error({
      message: 'Failed to track admin reset in Customer.io',
      error: error.message,
      userId,
    })
  }
  
        return { success: true, message: "Self-exclusion has been reset successfully." }
      }
  

    // Handle Temporary Self-Exclusion
    if (exclusionType === SELF_EXCLUSION_TYPES.TEMPORARY) {
      expireAt = serverDayjs(duration)
    }

    // Check for an existing permanent self-exclusion
    const permanentExclusion = await db.UserLimit.findOne({
      where: {
        userId,
        key: USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.SELF_EXCLUSION,
        value: SELF_EXCLUSION_TYPES.PERMANENT, 
      },
      transaction,
    })

    if (permanentExclusion) {
      throw new AppError(Errors.SELF_EXCLUSION_EXISTS)
    }

    // Check for an existing active temporary self-exclusion
    const temporaryExclusion = await db.UserLimit.findOne({
      where: {
        userId,
        key: USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.SELF_EXCLUSION,
        value: SELF_EXCLUSION_TYPES.TEMPORARY,
        expireAt: { [Op.gt]: now.toDate() }, // Active temporary exclusion
      },
      transaction,
    })

    if (temporaryExclusion) {
        throw new AppError(Errors.SELF_EXCLUSION_EXISTS)
    }

    // Insert or update self-exclusion record
    await db.UserLimit.upsert(
      {
        userId,
        key: USER_RESPONSIBLE_GAMBLING_LIMIT_TYPES.SELF_EXCLUSION,
        value: exclusionType,
        expireAt,
      },
      { transaction }
    )

    try {
        Logger.info({ message: 'Tracking self-exclusion applied event', userId })
        identifyUser(userId.toString(), { self_excluded: reset ? false : true });
        trackEvent(userId.toString(), CUSTOMER_IO_CONSTANTS.SELF_EXCLUSION, {
            exclusion_type: exclusionType,
            set_by : 'admin',
            ...(exclusionType === SELF_EXCLUSION_TYPES.TEMPORARY && {
                duration: duration,
                expire_at_timestamp: expireAt,
            }),
            state: this.context.state,
        });
    } catch (error) {
        Logger.error({
        message: 'Failed to track self-exclusion applied event in Customer.io',
        error: error.message,
        userId,
      })
    }

    await client.del(`${userId}:ACCESS_TOKEN`)
    return { success: true, message: "Self-exclusion applied successfully." };
  }
}
