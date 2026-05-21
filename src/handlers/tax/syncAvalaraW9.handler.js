import db from '@src/db/models'
import { Logger } from '@src/libs/logger'
import { BaseHandler } from '@src/libs/baseHandler'
import { Op } from 'sequelize'
import { w9Users } from './alreadyExistedW9UsersData'
import config from '@src/configs/app.config'
import { W9Service } from '@src/libs/axios/avalaraW9.axios'
import { TIN_MATCH_STATUS } from '@src/utils/constants/public.constants'

export class SyncAvalaraW9Handler extends BaseHandler {
  async run () {
    const transaction = this.dbTransaction
    const TARGET_COMPANY_ID = config.get('avalara1099.companyId')

    // Validate users exist
    const userIds = w9Users.map(u => u.userId)

    const usersInDb = await db.User.findAll({
      where: { userId: { [Op.in]: userIds } },
      attributes: ['userId'],
      transaction
    })

    if (usersInDb.length !== userIds.length) {
      const foundIds = new Set(usersInDb.map(u => u.userId))
      const missing = userIds.filter(id => !foundIds.has(id))

      throw new Error(`Some users do not exist in DB: ${missing.join(', ')}`)
    }

    // Build email → user map
    const emailMap = new Map()
    for (const u of w9Users) {
      if (!u.email) continue
      emailMap.set(u.email.toLowerCase().trim(), u)
    }

    // Fetch Avalara forms
    const forms = await W9Service.getAllW9FormsPaginated()

    const recordMap = new Map() // ✅ key: userId
    const unmatchedEmails = []

    for (const form of forms) {
      try {
        if (form.companyId !== TARGET_COMPANY_ID) continue

        const email = form.email?.toLowerCase().trim()

        if (!email || !emailMap.has(email)) {
          if (email) unmatchedEmails.push(email)
          continue
        }

        const user = emailMap.get(email)

        const newRecord = {
          userId: user.userId,
          avalaraFormId: form.id,
          referenceId: form.referenceId,
          entryStatus: form.entryStatus?.status || 'unknown',
          tinMatchStatus:
            form.tinMatchStatus?.status || TIN_MATCH_STATUS.PENDING,
          lastSyncedAt: new Date()
        }

        const existing = recordMap.get(user.userId)

        // ✅ Deduplication + conflict resolution
        if (!existing) {
          recordMap.set(user.userId, newRecord)
          continue
        }

        /**
         * 🧠 Business rule (important):
         * Priority:
         * 1. signed > requested
         * 2. Matched > others
         * 3. otherwise keep existing
         */

        const isNewBetter =
          // Prefer signed over anything else
          (newRecord.entryStatus === 'signed' &&
            existing.entryStatus !== 'signed') ||

          // Prefer Matched over non-Matched
          (newRecord.tinMatchStatus === 'Matched' &&
            existing.tinMatchStatus !== 'Matched')

        if (isNewBetter) {
          recordMap.set(user.userId, newRecord)
        }

      } catch (err) {
        Logger.error(err, `Failed processing form ${form.id}`)
      }
    }

    const records = Array.from(recordMap.values())

    if (!records.length) {
      return {
        message: 'No matching records found',
        unmatchedEmails: [...new Set(unmatchedEmails)]
      }
    }

    // Bulk upsert (based on userId UNIQUE)
    await db.UserW9Details.bulkCreate(records, {
      updateOnDuplicate: [
        'avalaraFormId',
        'referenceId',
        'entryStatus',
        'tinMatchStatus',
        'lastSyncedAt'
      ],
      transaction
    })

    return {
      totalFetched: forms.length,
      totalMatched: records.length,
      unmatchedEmails: [...new Set(unmatchedEmails)]
    }
  }
}