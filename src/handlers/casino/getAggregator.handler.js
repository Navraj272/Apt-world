import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { ApiHelper } from '@src/utils/api.utils'


export class GetAggregatorsHandler extends BaseHandler {


  async run () {
    const { offset, limit,pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    let aggregators

    if (offset && limit) {
      aggregators = await db.CasinoAggregator.findAndCountAll({
        order: [['id', 'ASC']],
        limit: limit,
        offset: offset
      })
    } else {
      aggregators = await db.CasinoAggregator.findAndCountAll({
        order: [['id', 'ASC']],
        attributes: ['id', 'name', 'isActive']
      })
    }
    if (!aggregators) throw new AppError(Errors.AGGREGATOR_NOT_FOUND)

    return { aggregators,pageNo,totalPages: Math.ceil(aggregators.count / limit) }
  }
}
