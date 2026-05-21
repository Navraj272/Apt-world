import { SyncAvalaraW9Handler } from '@src/handlers/tax/syncAvalaraW9.handler'
import { ApiHelper } from '@src/utils/api.utils'

export class W9Controller {
  static async syncAvalaraW9 (req, res, next) {
    try {
      const data = await SyncAvalaraW9Handler.execute()
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
}
