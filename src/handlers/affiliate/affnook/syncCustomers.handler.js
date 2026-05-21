import { BaseHandler } from '@src/libs/baseHandler';
import config from '@src/configs/app.config';
import axios from 'axios';
import models from '@src/db/models';

export class SyncAffnookCustomersHandler extends BaseHandler {
  async run() {
    const apiKey = config.get('affnook.apiKey');
    const baseUrl = config.get('affnook.baseUrl');

    let page = 1;
    const limit = 100;
    let totalSynced = 0;
    let hasMore = true;

    const start = this.args.start || '2026-03-23';
    const end =
      this.args.end || new Date().toISOString().split('T')[0];
    
    try {
      while (hasMore) {
        const response = await axios.get(
          `${baseUrl}/api/admin/v2/customers`,
          {
            params: { start, end, page, limit },
            headers: { 'x-api-key': apiKey }
          }
        );

        //  Correct structure based on actual API response
        const customers = response.data?.data?.customers || [];
        const pagination = response.data?.pagination || {};

        // Safety guard
        if (!Array.isArray(customers) || customers.length === 0) {
          hasMore = false;
          break;
        }

        await this.syncBatch(customers);

        totalSynced += customers.length;

        // Pagination logic
        const totalCount = pagination.count || 0;

        if (totalSynced >= totalCount) {
          hasMore = false;
        } else {
          page++;
        }
      }

      return {
        success: true,
        message: `Successfully synced ${totalSynced} customers.`
      };
    } catch (error) {
      console.error('Affnook Sync Error:', error.response?.data || error);
      throw error;
    }
  }

  /**
   * Bulk updates affiliateId & campaignId
   */
  async syncBatch(customers) {
    if (!Array.isArray(customers)) {
      throw new Error('Expected customers to be an array');
    }

    const updatePromises = customers.map((customer) => {
      return models.User.update(
        {
          campaignId: customer.campaign_id?.toString() || null
        },
        {
          where: {
            //  Correct field from API response
            userId: customer.customer_id
          }
        }
      );
    });

    await Promise.all(updatePromises);
  }
}
