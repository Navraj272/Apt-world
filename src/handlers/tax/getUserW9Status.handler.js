import { BaseHandler } from '@src/libs/baseHandler'
import db from '@src/db/models'
import { Op } from 'sequelize'
import { GLOBAL_SETTINGS, TIN_MATCH_STATUS, TRANSACTION_PURPOSE, TRANSACTION_STATUS } from '@src/utils/constants/public.constants'
import { W9Service } from '@src/libs/axios/avalaraW9.axios'
import { Logger } from '@src/libs/logger'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'

export class GetUserW9StatusHandler extends BaseHandler {
  async run () {
    const { userId } = this.args

    const parsedUserId = Number(userId)

    if (!Number.isInteger(parsedUserId) || parsedUserId <= 0) {
      throw new AppError(Errors.USER_NOT_EXISTS)
    }

    // Get threshold
    const setting = await db.GlobalSetting.findOne({
      where: { key: GLOBAL_SETTINGS.W9_WITHDRAWAL_THRESHOLD }
    })

    let threshold = setting?.value

    if (typeof threshold === 'string') {
      try {
        threshold = JSON.parse(threshold)
      } catch {
        threshold = null
      }
    }

    const thresholdAmount = threshold?.amount || 0
    const isW9Required = threshold?.enabled ?? false

    if (!isW9Required) {
      return {
        isW9Required,
        tinMatchStatus: null,
        thresholdAmount: null,
        redeemedAmount: null
      }
    }

    // Calculate redeemed SC (YTD)
    const startOfYear = new Date(new Date().getFullYear(), 0, 1)
    const tillNow = new Date()

    const totalRedeemed = await db.Transaction.sum('sc', {
      where: {
        userId,
        purpose: TRANSACTION_PURPOSE.REDEEM,
        status: TRANSACTION_STATUS.SUCCESS,
        updatedAt: {
          [Op.between]: [startOfYear, tillNow]
        }
      }
    })

    const redeemedAmount = Number(totalRedeemed || 0)

    // Get W9 record
    const w9 = await db.UserW9Details.findOne({
      where: { userId }
    })

    // If not submitted
    if (!w9) {
      return {
        isW9Required,
        tinMatchStatus: TIN_MATCH_STATUS.NOT_SUBMITTED,
        thresholdAmount,
        redeemedAmount
      }
    }

    // Sync with Avalara
    let tinMatchStatus = w9.tinMatchStatus || TIN_MATCH_STATUS.PENDING

    try {
      const latest = await W9Service.getW9StatusSummary(w9.avalaraFormId)
      tinMatchStatus = latest.tinMatchStatus

      const hasTinChanged = latest.tinMatchStatus !== w9.tinMatchStatus
      const hasEntryChanged = latest.entryStatus !== w9.entryStatus

      if (hasTinChanged || hasEntryChanged) {
        try {
          await w9.update({
            tinMatchStatus: latest.tinMatchStatus,
            entryStatus: latest.entryStatus,
            lastSyncedAt: new Date()
          })
        } catch (err) {
          Logger.error(err, 'W9 DB update failed')
        }
      }
    } catch (err) {
      Logger.error(err, 'W9 Avalara sync failed')
    }

    return {
      isW9Required,
      tinMatchStatus,
      thresholdAmount,
      redeemedAmount
    }
  }
}
