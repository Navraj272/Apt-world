import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
// import initialize from '../../../scripts/transactionSeeder'

export class PopulateDummyDataHandler extends BaseHandler {
   async run() {
      // await initialize(this.dbTransaction)
      await db.sequelize.query('REFRESH MATERIALIZED VIEW daily_user_transaction_summary;', { transaction: this.dbTransaction })
      return { success: true }

   }
}
