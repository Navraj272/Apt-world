import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { ApiHelper } from '@src/utils/api.utils'
import { BaseHandler } from '@src/libs/baseHandler'
import { filterByDate, filterByEmailName } from '@src/utils/common'
import { Op } from 'sequelize'


export class GetWithdrawRequestHandler extends BaseHandler {


  async run () {

    const { status, search, paymentProvider } = this.args
    let query

    const { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.startDate)
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)

    if (startDate || endDate) query = filterByDate(query, startDate, endDate, 'WithdrawRequest')
    if (search) query = filterByEmailName(query, search)
    if (status && (status !== '' || status !== null)) query = { ...query, status }

    if (paymentProvider) {
      const name = paymentProvider.replace(/\\/g, '\\\\').replace(/%/g, '\\%').replace(/_/g, '\\_')
      query = { ...query, paymentProvider: { [Op.iLike]: `%${name}%` } }
    }

    const withdrawRequest = await db.WithdrawRequest.findAndCountAll({
      order: [['createdAt', 'DESC']],
      where: query,
      include: { model: db.User, attributes: ['currencyCode'] },
      attributes: { exclude: ['accountNumber', 'ifscCode', 'phoneNumber', 'actionableId'] },
      limit,
      offset
    })

    if (!withdrawRequest) throw new AppError(Errors.WITHDRAW_REQUEST_NOT_FOUND)

    return { withdrawRequest, pageNo, totalPages: Math.ceil(withdrawRequest.count / limit) }
  }
}
