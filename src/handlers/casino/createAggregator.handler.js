import { Errors } from '@src/errors/errorCodes'
import { AppError } from '@src/errors/app.error'
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'


const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    isActive: { type: 'boolean' }
  },
  required: ['name']
}



export class CreateAggregatorHandler extends BaseHandler {
  async run () {
    const { name, isActive } = this.args
    const transaction = this.context.sequelizeTransaction

    const checkAggregatorExists = await db.CasinoAggregator.findOne({
      where: { name },
      attributes: ['gameAggregatorId'],
      transaction
    })
    if (checkAggregatorExists) throw new AppError(Errors.AGGREGATOR_EXISTS)

      const createAggregator = await db.CasinoAggregator.create(
        { name, isActive },
        { transaction }
      );

    return { createAggregator }
  }
}
