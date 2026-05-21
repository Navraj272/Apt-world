import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { Op, Sequelize } from 'sequelize'
import { ApiHelper } from '@src/utils/api.utils'


export class GetAllProvidersHandler extends BaseHandler {


  async run() {
    const { search, isActive,pagination = 'true'} = this.args
    let query, providerList


    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    if (search) {
      let providerName = search
      providerName = providerName.replace(/\\/g, '\\\\').replace(/%/g, '\\%').replace(/_/g, '\\_')
      query = {
        ...query,
        [Op.or]: [
          Sequelize.where(Sequelize.cast(Sequelize.col('name'), 'text'), 'ILIKE', `%${providerName}%`)]
      }
    }

    if (isActive && (isActive !== '' || isActive !== null)) query = { ...query, isActive }
    if (pagination == 'true') {
      providerList = await db.CasinoProvider.findAndCountAll({
        where: query,
        order: [['orderId', 'ASC'], ['name', 'ASC']],
        attributes: ['name', 'id', 'isActive', 'thumbnailUrl', 'mobileThumbnailUrl', 'gameAggregatorId','orderId'],
        limit,
        offset
      })
    } else {
      providerList = await db.CasinoProvider.findAndCountAll({
        order: [['orderId', 'ASC'], ['name', 'ASC']],
        where: query,
        attributes: ['name', 'id', 'isActive', 'thumbnailUrl', 'gameAggregatorId','orderId']
      })
    }
    if (!providerList) throw new AppError(Errors.CASINO_PROVIDER_NOT_FOUND)

    return {
      providerList,
      pageNo,
      totalPages: pagination == 'true' ? Math.ceil(providerList.count / limit) : 1
    }
  }
}
