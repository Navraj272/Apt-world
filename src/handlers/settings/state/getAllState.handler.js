import db from "@src/db/models"
import { BaseHandler } from "@src/libs/baseHandler"
import { ApiHelper } from "@src/utils/api.utils"
import { Op } from "sequelize"

export class getAllStateHandler extends BaseHandler {
  async run() {
    let { search, isActive,allData='false' } = this.args
    let query

    if (isActive) query = { isActive: isActive === 'true' }
    if (search) {
      query = {
        ...query,
        [Op.or]: [
          {
            name: { [Op.iLike]: `%${search}%` },
          },
        ],
      }
    }


    let { offset, limit } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    
    let condition = {
      where : { ...query },
      order: [["name", "ASC"]]
    }
    if(allData === 'false'){
      condition.limit =  limit,
      condition.offset = offset
    }

    const stateData = await db.State.findAndCountAll(condition)

    return { stateData }
  }
}
