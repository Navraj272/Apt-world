import { Sequelize, Op } from "sequelize";
import { BaseHandler } from "@src/libs/baseHandler";
import { Errors } from "@src/errors/errorCodes";
import { AppError } from "@src/errors/app.error";
import db from "@src/db/models";

export class GetCioSegmentsHandler extends BaseHandler {
  async run() {
    try {

      //  define once
      const providerNameLiteral = Sequelize.literal(
        `"CasinoProvider"."name"->>'EN'`
      );

      const segments = await db.FreeSpinBonus.findAll({
        attributes: [
          [Sequelize.col("FreeSpinBonus.segment_id"), "segmentId"],
          [Sequelize.col("CasinoGame.name"), "gameName"],
          [providerNameLiteral, "providerName"],
          [Sequelize.col("FreeSpinBonus.level"), "level"],
          [Sequelize.col("FreeSpinBonus.num_spins_granted"), "numSpinsGranted"],
        ],

        include: [
          {
            model: db.CasinoGame,
            attributes: [],
          },
          {
            model: db.CasinoProvider,
            attributes: [],
          },
        ],

        where: {
          segmentId: {
            [Op.ne]: null,
          },
        },

        group: [
          Sequelize.col("FreeSpinBonus.segment_id"),
          Sequelize.col("CasinoGame.name"),
          providerNameLiteral,
          Sequelize.col("FreeSpinBonus.level"),
          Sequelize.col("FreeSpinBonus.num_spins_granted"),
        ],

        raw: true,
      });

      return {
        success: true,
        segments,
      };

    } catch (err) {
      console.error("GetCioSegmentsHandler Error:", err);

      throw new AppError(
        Errors.INTERNAL_ERROR,
        "Failed to fetch segments"
      );
    }
  }
}