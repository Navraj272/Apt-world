import { BaseHandler } from '@src/libs/baseHandler';
import db from '@src/db/models';
import axios from 'axios';
import config from '@src/configs/app.config';
import { activityAffiliateUser} from '@src/helpers/affiliate.helpers';
import { Op } from 'sequelize';

export class SyncMissingBonusToAffnookHandler extends BaseHandler {
  async run() {
    const apiKey = config.get('affnook.apiKey');
    const baseUrl = config.get('affnook.baseUrl');

    const { purpose } = this.args;

    if (!purpose) {
      throw new Error('Purpose is required');
    }
    console.log(purpose, "purpose-here")

    const transactions = await db.Transaction.findAll({
      where: {
        purpose,
        status: 'successful',
        sc: { [Op.gt]: 0 }
      },
      include: [{
        model: db.User,
        where: { cxToken: { [Op.ne]: null } },
        required: true
      }],
      order: [['createdAt', 'ASC']]
    });

    let synced = 0;
    let skipped = 0;
    let failed = 0;

    for (const txn of transactions) {
      const affTxnId = txn.transactionId.toString(); // adjust if prefixed

      try {
        // Check existence on Affnook
        const checkResponse = await axios.get(
          `${baseUrl}/api/admin/v2/activities`,
          {
            params: { txnId: affTxnId },
            headers: { 'x-api-key': apiKey }
          }
        );

        const activities = checkResponse.data?.data?.activities || [];

        if (activities.length > 0) {
          skipped++;
          continue;
        }

        //  Sync if missing
        await activityAffiliateUser(
          txn.userId,
          'bonuses',
          affTxnId,
          Number(parseFloat(txn.sc).toFixed(2)),
        );

        synced++;

      } catch (error) {
        failed++;
        console.error(
          `Error processing txn ${affTxnId}`,
          error?.response?.data || error.message
        );
      }
    }

    return {
      purpose,
      totalChecked: transactions.length,
      synced,
      skipped,
      failed
    };
  }
}
