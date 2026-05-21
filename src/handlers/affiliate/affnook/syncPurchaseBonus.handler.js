import { BaseHandler } from '@src/libs/baseHandler';
import db from '@src/db/models';
import { activityAffiliateUser } from '@src/helpers/affiliate.helpers';
import { TRANSACTION_PURPOSE, TRANSACTION_STATUS } from '@src/utils/constants/public.constants';
import { Op } from 'sequelize';

export class SyncPurchaseBonusHandler extends BaseHandler {
  async run() {
    const batchSize = 500; // Increased batch size
    let offset = 0;

    let totalProcessed = 0;
    let successCount = 0;
    let failureCount = 0;

    while (true) {
      const transactions = await db.Transaction.findAll({
        where: {
          purpose: TRANSACTION_PURPOSE.PURCHASE,
          status: TRANSACTION_STATUS.SUCCESS,
          paymentProvider: {
            [Op.ne]: 'Offline'
          }
        },
        include: [
          {
            model: db.User,
            where: {
              affiliateId: { [Op.ne]: null }
            },
            required: true
          }
        ],
        limit: batchSize,
        offset,
        order: [['createdAt', 'ASC']]
      });

      if (!transactions.length) break;

      for (const txn of transactions) {
        try {
          const packageDetail = txn.moreDetails?.packageDetail;
          if (!packageDetail) continue;

          const amount = parseFloat(txn.moreDetails?.amount || 0);
          const scCoin = parseFloat(packageDetail.scCoin || 0);
          const bonus = Number((scCoin - amount).toFixed(2));

          if (bonus <= 0) continue;

          await activityAffiliateUser(
            txn.userId,
            'bonuses',
            `pb-${txn.transactionId}`,
            bonus
          );

          successCount++;

        } catch (error) {
          failureCount++;
          console.error(
            `Failed for txn ${txn.transactionId}`,
            error?.response?.data || error.message
          );
        }
      }

      totalProcessed += transactions.length;
      offset += batchSize;
    }

    return {
      processed: totalProcessed,
      success: successCount,
      failed: failureCount
    };
  }
}
