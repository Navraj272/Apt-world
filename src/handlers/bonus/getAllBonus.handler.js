import db from "@src/db/models";
import { Errors } from "@src/errors/errorCodes";
import { AppError } from "@src/errors/app.error";
import { BaseHandler } from "@src/libs/baseHandler";
import { ApiHelper } from "@src/utils/api.utils";
import { Op } from 'sequelize'

export class GetAllBonusHandler extends BaseHandler {
  async run() {
    let { bonusId, bonusType, search } = this.args;
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    let query = {};
    if (bonusId) query = { ...query, id: bonusId };

    if (bonusType) query = { ...query, bonusType };
    if (search) {
      search = search
        .replace(/\\/g, "\\\\")
        .replace(/%/g, "\\%")
        .replace(/_/g, "\\_");
      query = {
        ...query,
        [Op.or]: [
          { promotionTitle: { [Op.iLike]: `%${search}%` } },
          { description: { [Op.iLike]: `%${search}%` } },
        ],
      };
    }

    const bonus = await db.Bonus.findAndCountAll({
      where: query,
      order: [["id", "DESC"]],
      limit,
      offset
    })

    if (!bonus) {
      throw new AppError(Errors.BONUS_NOT_FOUND);
    }
    return { bonus,pageNo,totalPages: Math.ceil(bonus.count / limit) };
  }
}
