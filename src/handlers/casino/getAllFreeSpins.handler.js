import db from "@src/db/models";
import { BaseHandler } from "@src/libs/baseHandler";
import { ApiHelper } from "@src/utils/api.utils";
import { Op, Sequelize } from "sequelize";

export class GetAllFreeSpins extends BaseHandler {
  async run() {
    const {
      recordId,
      casinoBonusId,
      status,
      userId,
      source,
      segmentId,
      gameName,
      providerName,
      numSpinsGranted,
    } = this.args;

    console.log("args-here", this.args);

    const { offset, limit, pageNo } = ApiHelper.getPagination(
      this.args.pageNo,
      this.args.limit,
    );

    const where = {};

    if (casinoBonusId) where.casinoBonusId = casinoBonusId;
    if (status) where.status = status;
    if (userId) where.userId = userId;
    if (recordId) where.recordId = recordId;
    if (source) where.source = source;
    if (segmentId) where.segmentId = segmentId;
    if (numSpinsGranted) where.numSpinsGranted = numSpinsGranted;

    const result = await db.FreeSpinBonus.findAndCountAll({
      where,
      offset,
      limit,
      order: [["id", "DESC"]],
      include: [
        {
          model: db.CasinoGame,
          attributes: ["id", "name"],
          required: !!gameName,
          where: gameName
            ? {
                name: {
                  [Op.iLike]: `%${gameName}%`, // partial match
                },
              }
            : undefined,
        },
        {
          model: db.CasinoProvider,
          attributes: ["id", "name"],
          required: !!providerName,
          where: providerName
            ? Sequelize.where(
                Sequelize.literal(`"CasinoProvider"."name"->>'EN'`),
                {
                  [Op.iLike]: `%${providerName}%`,
                },
              )
            : undefined,
        },
      ],
    });

    return {
      result: result.rows,
      pageNo,
      totalPages: Math.ceil(result.count / limit) || 1,
      totalCount: result?.count,
    };
  }
}
