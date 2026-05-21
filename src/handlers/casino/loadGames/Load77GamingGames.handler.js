import db from "@src/db/models";
import { BaseHandler } from "@src/libs/baseHandler";
import { CASINO_AGGREGATORS } from "@src/utils/constants/casino.constants";
import { SeventySevenAxios } from "@src/libs/axios/seventySeven.axios";
import { Op } from "sequelize";

export class Load77GamingGamesHandler extends BaseHandler {
  async run() {
    const transaction = this.dbTransaction;
    const api = new SeventySevenAxios();

    try {
      /**
       * 1. Aggregator
       */
      let aggregator = await db.CasinoAggregator.findOne({
        where: db.Sequelize.literal(`name->>'EN' = '77Gaming'`),
        transaction
      });

      if (!aggregator) {
        aggregator = await db.CasinoAggregator.create(
          { name: { EN: CASINO_AGGREGATORS.SEVENTY_SEVEN || "77Gaming" } },
          { transaction }
        );
      }

      /**
       * 2. Provider (77Gaming)
       */
      let provider = await db.CasinoProvider.findOne({
        where: db.Sequelize.literal(`name->>'EN' = '77Gaming'`),
        transaction
      });

      if (!provider) {
        provider = await db.CasinoProvider.create(
          {
            name: { EN: "77Gaming" },
            gameAggregatorId: aggregator.id,
            uniqueId: "77gaming"
          },
          { transaction }
        );
      }

      /**
       * 3. Category (Slots)
       */
      let category = await db.CasinoCategory.findOne({
        where: db.Sequelize.literal(`name->>'EN' = 'Slots'`),
        transaction
      });

      if (!category) {
        category = await db.CasinoCategory.create(
          { name: { EN: "Slots" } },
          { transaction }
        );
      }

      /**
       * 4. Fetch games from 77Gaming
       */
      const games = await api.getGameList();
console.log(`Fetched ${games.length} games from 77Gaming`);

console.log("Sample game data:", games[0]);
      /**
       * 5. Prepare DB payload
       */
      const payload = games.map((game, index) => ({
        casinoGameId: String(game.id),
        name: game.name?.en || game.name,
        casinoProviderId: provider.id,
        casinoCategoryId: category.id,
        thumbnailUrl: game?.thumbnail?.straight_url || null,
        mobileThumbnailUrl: game?.thumbnail?.straight_url || null,
        demo: Boolean(game.demo_url),
        isActive: true,
        orderId: index + 1,
        moreDetails: game
      }));

      /**
       * 6. Upsert games
       */
      await db.CasinoGame.bulkCreate(payload, {
        updateOnDuplicate: [
          "name",
          "thumbnailUrl",
          "mobileThumbnailUrl",
          "demo",
          "isActive",
          "moreDetails",
          "orderId"
        ],
        transaction
      });

      /**
       * 7. Disable removed games
       */
      const activeGameIds = payload.map(g => g.casinoGameId);

      await db.CasinoGame.update(
        { isActive: false },
        {
          where: {
            casinoProviderId: provider.id,
            casinoGameId: { [Op.notIn]: activeGameIds }
          },
          transaction
        }
      );

      return {
        success: true,
        totalGames: payload.length
      };
    } catch (error) {
      console.error("Load77GamingGamesHandler Error:", error);
      throw error;
    }
  }
}
