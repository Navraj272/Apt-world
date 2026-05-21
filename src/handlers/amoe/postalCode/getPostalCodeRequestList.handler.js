import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { ApiHelper } from '@src/utils/api.utils';
import { Op } from 'sequelize';

export class GetPostalCodeRequestsHandler extends BaseHandler {
  async run () {
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit);
    const { userId, status, username, postalCode, startDate, endDate } = this.args;

    // Build the main filter for the AmoeRequest model
    const filter = {};
    if (userId) filter.userId = userId;
    if (status) filter.status = status;
    if (postalCode) {
      filter.postalCode = { [Op.iLike]: `%${postalCode}%` };
    }

    // Add date range filtering
    const { startDate: fromDate, endDate: toDate } = ApiHelper.getDateRange(startDate, endDate);
    if (fromDate && toDate) {
      filter.createdAt = {
        [Op.between]: [fromDate, toDate],
      };
    }

    // Build the filter for the included User model
    const userFilter = {};
    if (username) {
      userFilter.username = { [Op.iLike]: `%${username}%` };
    }

    const postalCodeRequests = await db.AmoeRequest.findAndCountAll({
      where: filter,
      include: [
        {
          model: db.User,
          as: 'user',
          attributes: ['username', 'userId', 'firstName', 'profileImage'],
          where: userFilter,
          required: true,
        },
      ],
      limit: limit,
      offset: offset,
      order: [['createdAt', 'DESC']],
    });

    return {
      postalCodeRequests: postalCodeRequests.rows,
      pageNo,
      totalPages: Math.ceil(postalCodeRequests.count / limit),
      totalCount: postalCodeRequests.count,
    };
  }
}
