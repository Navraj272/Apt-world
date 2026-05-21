import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { ApiHelper } from '@src/utils/api.utils';
import dayjs from 'dayjs';
import { Op, Sequelize } from 'sequelize';

export class GetUsersHandler extends BaseHandler {

  async getFilteredUserIds() {
    const {
      scBalance,
      currencyCode
    } = this.args;

    const include = [];
    const having = [];

    if (scBalance) {
      const currencyCodes = currencyCode
        ? [currencyCode]
        : ['PSC', 'BSC', 'RSC'];

      include.push({
        model: db.Wallet,
        as: 'userWallet',
        attributes: [],
        where: { currency_code: currencyCodes },
        required: true
      });
      having.push(`COALESCE(SUM("userWallet".balance), 0) >= ${parseFloat(scBalance)}`);
    }

    const filteredUsers = await db.User.findAll({
      attributes: ['userId'],
      include,
      group: ['User.user_id'],
      having: Sequelize.literal(having.join(' AND '))
    });

    return filteredUsers.map(user => user.userId);
  }





  async run() {
    const {
      search, isActive, kycStatus, isInternal,
      userId, phoneNumber, refParentId, level, affiliateId, stateCodes,
      orderBy = 'created_at',sort = 'DESC', scBalance, currencyCode, isKycVerified, minScPurchasedCount,
      maxScPurchasedCount
    } = this.args;

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit);
    let filteredUserIds = null;
    const baseQuery = {
      ...(isInternal !== undefined && { isInternalUser: isInternal }),
      ...(userId && { userId }),
      ...(kycStatus && { kycStatus }),
      ...(isActive !== undefined && { isActive }),
      ...(refParentId && { refParentId }),
      ...(isKycVerified && { isKycVerified }),
      ...(search && {
        [Op.or]: [
          Sequelize.where(
            Sequelize.fn('concat', Sequelize.col('User.first_name'), ' ', Sequelize.col('User.last_name')),
            { [Op.iLike]: `%${search}%` }
          ),
          { email: { [Op.iLike]: `%${search}%` } },
          { username: { [Op.iLike]: `%${search}%` } }
        ]
      })
    };


    if (this.args.startDate) {
      const startOfDay = dayjs(this.args.startDate).startOf('day').toDate();
      const endOfDay = dayjs(this.args.startDate).endOf('day').toDate();

      baseQuery.created_at = {
        [Op.between]: [startOfDay, endOfDay],
      };
    }
    if (scBalance) {
      filteredUserIds = await this.getFilteredUserIds();
    }

    if (filteredUserIds?.length === 0) {
      return { users: [], pageNo: 1, totalPages: 0 };
    }

    const query = {
      ...baseQuery,
      ...(filteredUserIds && { userId: { [Op.in]: filteredUserIds } })
    };

    const havingConditions = [];

    if (minScPurchasedCount !== undefined) {
      havingConditions.push(db.Sequelize.literal(`scPurchasedCount >= ${minScPurchasedCount}`));
    }

    if (maxScPurchasedCount !== undefined) {
      havingConditions.push(db.Sequelize.literal(`scPurchasedCount <= ${maxScPurchasedCount}`));
    }

    const havingClause = havingConditions.length ? { [Op.and]: havingConditions } : undefined;
    const users = await db.User.findAndCountAll({
      where: query,
      attributes: [
        'userId',
        'username',
        'email',
        'firstName',
        'lastName',
        'phone',
        'createdAt',
        'isActive',
        'isKycVerified',
        [
          db.Sequelize.literal(`
          COALESCE(
            (SELECT SUM(balance) 
             FROM wallets 
             WHERE wallets.user_id = "User"."user_id"
             ${currencyCode ? `AND wallets.currency_code = '${currencyCode}'` : `AND wallets.currency_code IN ('PSC', 'BSC', 'RSC')`}
            ), 
            0
          )
        `), 'totalBalance'],
        [
          db.Sequelize.literal(`
            COALESCE(
              (SELECT SUM(sc_wagered_amount)
               FROM daily_user_transaction_summary
               WHERE daily_user_transaction_summary.user_id = "User"."user_id"
              ), 
              0
            )
          `),
          'scWageredAmount'
        ],
        [
          db.Sequelize.literal(`
            COALESCE(
              (SELECT SUM(sc_won_amount)
               FROM daily_user_transaction_summary
               WHERE daily_user_transaction_summary.user_id = "User"."user_id"
              ), 
              0
            )
          `),
          'scWonAmount'
        ],
        [
          db.Sequelize.literal(`
            COALESCE(
              (SELECT SUM(sc_purchased_amount)
               FROM daily_user_transaction_summary
               WHERE daily_user_transaction_summary.user_id = "User"."user_id"
              ), 
              0
            )
          `),
          'scPurchasedAmount'
        ],
        [
          db.Sequelize.literal(`
            COALESCE(
              (SELECT SUM(sc_redeemed_amount)
               FROM daily_user_transaction_summary
               WHERE daily_user_transaction_summary.user_id = "User"."user_id"
              ), 
              0
            )
          `),
          'scRedeemedAmount'
        ],
        [
          db.Sequelize.literal(`
            (SELECT risk_flag
             FROM daily_user_transaction_summary
             WHERE daily_user_transaction_summary.user_id = "User"."user_id"
             ORDER BY transaction_date DESC LIMIT 1
            )
          `),
          'riskFlag'
        ],
        [
          db.Sequelize.literal(`
          COALESCE(
            (SELECT COUNT(casino_game_id) 
             FROM casino_transactions 
             WHERE casino_transactions.user_id = "User"."user_id"
            ), 
            0
          )
        `), 'totalGamePlayed'
        ],
        [
          db.Sequelize.literal(`
            COALESCE(
              (SELECT SUM(sc_purchased_count)
               FROM daily_user_transaction_summary
               WHERE daily_user_transaction_summary.user_id = "User"."user_id"
              ), 
              0
            )
          `),
          'scPurchasedCount'
        ]
      ],
      include: [
        {
          model: db.UserDetails,
          as: 'userDetails',
          attributes: ['veriffStatus'],
          required: false,
          include: [
            {
              model: db.State,
              as: 'state',
              attributes: ['name'],
              where: stateCodes ? { stateCode: { [Op.in]: stateCodes } } : {},
              required: false
            }
          ]
        }
      ],
      group: ['User.user_id','userDetails.id','userDetails.state.state_code'],
      having: havingClause,
      order: [[orderBy, sort]],
      limit: limit,
      offset: offset
    });

    return {
      users: users.rows,
      pageNo,
      totalPages: Math.ceil(users.count / limit)
    };
  }
}