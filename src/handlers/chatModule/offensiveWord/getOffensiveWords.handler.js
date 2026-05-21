import db from "@src/db/models"
import { ApiHelper } from '@src/utils/api.utils'
import { BaseHandler } from "@src/libs/baseHandler"
import _ from "lodash"
import { Op, Sequelize } from "sequelize"

export default class GetOffensiveWordsHandler extends BaseHandler {
  async run () {

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.startDate)
    const { search } = this.args
    let query = {}
    if (search) query = {
      ...query,
      [Op.or]: [{ word: { [Op.iLike]: `%${search}%` } }]
    }
    if (startDate || endDate) query = {
      ...query,
      [Op.and]: [
        Sequelize.where(Sequelize.fn('date', Sequelize.col(`OffensiveWord.created_at`)), '>=', new Date(startDate)),
        Sequelize.where(Sequelize.fn('date', Sequelize.col(`OffensiveWord.created_at`)), '<=', new Date(endDate))
      ]
    }
    const filterCondition = _.omitBy(query, _.isNil)
    const offensiveWords = await db.OffensiveWord.findAndCountAll({
      where: filterCondition,
      order: [['id', 'desc']],
      limit,
      offset: offset
    })
    return { offensiveWords: offensiveWords.rows, pageNo, totalPages: Math.ceil(offensiveWords.count / limit) }
  }
}
