import db from '@src/db/models'
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from '@src/libs/baseHandler'
import { ApiHelper } from '@src/utils/api.utils'
import { Op } from "sequelize"

export class GetVipTiersHandler extends BaseHandler {
  async run() {
    const { search, orderBy, sort, isActive, prioritySupport } = this.args;
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)

    // Initialize query filters
    let query = {};
    if (search) {
      query = { ...query, name: { [Op.iLike]: `%${search.trim()}%` } };
    }
    if (isActive) query = { ...query, isActive };
    if (prioritySupport != undefined) query = { ...query, prioritySupport };


    // Fetch data
    const vipTiers = await db.VipTier.findAndCountAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: query,
      order: [[orderBy || "level", sort || "ASC"]],
      limit: limit,
      offset: offset,
    });

    if (!vipTiers) throw new AppError(Errors.VIP_TIERS_NOT_EXISTS)

    // Response
    return {
      vipTiers: vipTiers.rows,
      pageNo,
      totalPages: Math.ceil(vipTiers.count / limit)
    }
  }
}
