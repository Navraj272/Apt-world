import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { IconicCasinoAxios } from '@src/libs/axios/iconicCasino.axios';
import { BaseHandler } from '@src/libs/baseHandler';
import { CASINO_AGGREGATORS, CASINO_PROVIDERS, DEFAULT_CATEGORIES, ICONIC_CUSTOM_CATEGORIES_MAP } from '@src/utils/constants/casino.constants';
import { Op } from 'sequelize';
import pluralize from 'pluralize';

export class LoadIconic21GamesHandler extends BaseHandler {



   /**u
        * @param {typeof DEFAULT_CATEGORIES[string]} categories
        * @param {Language[]} languages
        * @param {import ('sequelize').Transaction} transaction
        * @returns {Object.<string, string>}
        */
   async createCategories(categories) {
      const updatedCategories = await db.CasinoCategory.bulkCreate(categories.map(category => {
         return {
            id: category.id,
            name: { EN: category.name }
         }
      }), {
         returning: ['id'],
         updateOnDuplicate: ['name'],
         logging: true
      })

      return updatedCategories.reduce((prev, category) => {
         prev[category.name.EN.toLowerCase()] = category.id
         return prev
      }, {})
   }

   /**
    * Ensures the required database entries for aggregator, provider, and category.
    * @param {Object} transaction - The current database transaction.
    * @returns {Object} Required DB IDs for creating casino games.
    */
   async ensureDatabaseEntries(transaction) {
      // Ensure Casino Aggregator
      let casinoAggregator = await db.CasinoAggregator.findOne({
         where: {
            name: {
               [Op.contains]: { EN: CASINO_AGGREGATORS.ICONIC21 },
            },
         },
         transaction
      })
      if (!casinoAggregator) {
         casinoAggregator = await db.CasinoAggregator.create(
            { name: { EN: CASINO_AGGREGATORS.ICONIC21 } },
            { transaction }
         );
      }

      // Ensure Casino Provider
      let casinoProvider = await db.CasinoProvider.findOne({
         where: { name: { EN: CASINO_PROVIDERS.ICONIC21 } },
      });
      if (!casinoProvider) {
         casinoProvider = await db.CasinoProvider.create(
            {
               name: { EN: CASINO_AGGREGATORS.ICONIC21 }, gameAggregatorId: casinoAggregator.id,
               uniqueId: CASINO_AGGREGATORS.ICONIC21
            },
            { transaction }
         );
      }

      // Ensure Casino Category
      let casinoCategory = await db.CasinoCategory.findOne({
         where: { name: { [Op.contains]: { EN: 'Live' } } },
      });
      if (!casinoCategory) {
         casinoCategory = await db.CasinoCategory.create(
            { name: { EN: 'Live' } },
            { transaction }
         );
      }

      return {
         casinoProviderId: casinoProvider.id
      };
   }

   /**
    * Processes and transforms game data for bulk creation.
    * @param {Array} games - Games fetched from the Iconic Casino API.
    * @param {Object} ids - Required DB IDs for provider and category.
    * @returns {Array} Processed game data for insertion.
    */
   prepareGameData(games, ids) {

      const categoryMap = this.createCategories(DEFAULT_CATEGORIES)
      return games.map((game) => {
         const singular = pluralize.singular(game.productType.toLowerCase());
         const plural = pluralize.plural(game.productType.toLowerCase());

         const categoryId = categoryMap[singular] || categoryMap[plural] || categoryMap['Other'];
         return {
            casinoProviderId: ids.casinoProviderId,
            casinoCategoryId: categoryId,
            casinoGameId: game.launchAlias,
            name: game.names[0]?.tableName || 'Unknown',
            returnToPlayer: game.rtp,
            thumbnailUrl: game.images[0]?.staticImageUrl,
            moreDetails: game,
         }
      });
   }

   /**
    * Main handler to fetch and store games from Iconic Casino.
    */
   async run() {
      const iconicCasinoAPI = new IconicCasinoAxios();
      const transaction = this.dbTransaction;

      try {
         const languages = ['en'];
         const currencies = ['GC', 'SC'];
         const resolutions = ['556_420'];

         // Ensure database entries and get necessary IDs
         const ids = await this.ensureDatabaseEntries(transaction);

         // Fetch games from Iconic Casino API
         const casinoGames = await iconicCasinoAPI.getAvailableTables(languages, currencies, resolutions);
         // Prepare game data for bulk creation
         const casinoGameData = this.prepareGameData(casinoGames.tables, ids);
         // Bulk create or update games in the database
         await db.CasinoGame.bulkCreate(casinoGameData, {
            updateOnDuplicate: ['name', 'thumbnailUrl'],
            logging: true,
            transaction,
         });
         return true
      } catch (error) {
         throw new AppError(Errors.INTERNAL_ERROR)
      };
   }
}