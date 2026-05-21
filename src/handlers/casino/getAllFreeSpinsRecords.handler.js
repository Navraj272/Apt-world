import { BaseHandler } from "@src/libs/baseHandler";
import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { Op } from "sequelize";
import { ApiHelper } from "@src/utils/api.utils";

export class GetAllFreeSpinsRecords extends BaseHandler {
  async run() {
    try {
      const { vipTierId, gameName, providerName } = this.args;

        const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)

      const where = {};

    //   // Filter: vipTierId exists inside vipTierIds array column
    //   if (vipTierId) {
    //     where.vipTierIds = {
    //       [Op.contains]: [Number(vipTierId)],
    //     };
    //   }

      if (gameName) {
        where.gameName = { [Op.iLike]: `%${gameName}%` };
      }

      if (providerName) {
        where.providerName = { [Op.iLike]: `%${providerName}%` };
      }

      const result = await db.FreeSpinRecords.findAndCountAll({
        where,
        attributes:['id','vipTierIds','gameName','providerName','numSpins','level','expiresAt','createdAt'],
        offset,
        limit,
        order: [["id", "DESC"]],
      });

      return {
       
        rows: result.rows,
        pageNo,
        count: result.count,
        totalPages: Math.ceil(result.count / limit),
      };

    } catch (err) {
      console.log("GetFreeSpinRecordsHandler error:", err);
      throw new AppError(Errors.INTERNAL_ERROR);
    }
  }
}
