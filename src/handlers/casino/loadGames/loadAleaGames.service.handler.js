import config from '@src/configs/app.config'
import { aleaCasinoConfig } from '@src/configs/casinoProviders/alea.config'
import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { BaseHandler } from '@src/libs/baseHandler'
import { CASINO_AGGREGATORS, DEFAULT_CATEGORIES } from '@src/utils/constants/casino.constants'
import axios from 'axios'

export class LoadAleaGamesHandler extends BaseHandler {
  async run() {
    const transaction = await db.sequelize.transaction();
    const languages = this.args.languages;
    const env = config.get('env') !== 'production' ? 'gamesAvailable' : 'gamesReady';

    try {
      const allGames = await this.fetchAllGamesWithPagination(env);

      await this.processGameData(allGames, languages, transaction);
      await transaction.commit()
      return { success: true };
    } catch (error) {
      await transaction.rollback()
      console.error('Error in LoadAleaGamesHandler:', error);
      throw new AppError(error);
    }
  }

  async fetchAllGamesWithPagination(env) {
    const allGames = [];

    // Fetch first page
    const firstPageData = await this.fetchGamesPage(env, 0);
    const totalPages = firstPageData.page?.totalPages || 1;

    if (firstPageData.results) allGames.push(...firstPageData.results);

    // Fetch remaining pages
    for (let page = 1; page < totalPages; page++) {
      const pageData = await this.fetchGamesPage(env, page);
      if (pageData.results) allGames.push(...pageData.results);
    }

    return allGames;
  }


  async fetchGamesPage(env, pageNumber) {
    const query = `
      {
        ${env}(jurisdictionCode: "SC", size: 1000, page: ${pageNumber}) {
          page {
            number
            size
            totalPages
            totalElements
          }
          results {
            id
            name
            software {
              id
              name
            }
            type
            status
            genre
            jackpot
            freeSpinsCurrencies
            ratio
            rtp
            volatility
            minBet
            maxBet
            maxExposure
            maxWinMultiplier
            lines
            hitFrequency
            buyFeature
            releaseDate
            features
            assetsLink
            thumbnailLinks
            demoAvailable
          }
        }
      }
    `;

    const { data } = await this.executeGraphQLQuery(query);
    const section = data[env];

    return {
      results: section.results || [],
      page: section.page || {}
    };
  }

  async executeGraphQLQuery(query) {
    // const options = this.getAxiosOptions(query);

    try {

      let data = JSON.stringify({
        "query": "{ gamesAvailable(jurisdictionCode: \"SC\", size: 1000, page: 10) { page { number size totalPages totalElements } results { id name software { id name } type status genre jackpot freeSpinsCurrencies ratio rtp volatility minBet maxBet maxExposure maxWinMultiplier lines hitFrequency buyFeature releaseDate features assetsLink thumbnailLinks demoAvailable } } }"
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://customer-api.aleaplay.com/api/graphql',
        headers: {
          'Alea-CasinoId': '2417',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFcGljU3dlZXAtMjY0XzE3NTMxNzc0NzYiLCJpYXQiOjE3NTMxNzc0NzYsImV4cCI6MjM4Mzk3NzQ3NiwiaXNHYXRld2F5Ijp0cnVlLCJkb21haW4iOiJodHRwczovL2FwaS1kZXYuZXBpY3N3ZWVwLmNvbS9jYWxsYmFjay92MS9hbGVhIiwidHlwZSI6IlRFU1QiLCJ2ZXJzaW9uIjoidjIiLCJvcGVyYXRvciI6MjY0fQ.2wJuxrfhqb3hCzImf7Xz_54blYI9-U3tZwukShgYfLe-BGiVx6t2BaNuEPvJseZXLp7Ik7CWyvztggsD1j3sEQ'
        },
        data: data
      };
      const response = await axios.request(config)

      // const response = await axios(options);
      if (response.status === 200) {
        return response.data
      };
      throw new Error('Failed to execute GraphQL query');
    } catch (error) {
      console.error('Error executing GraphQL query:', error);
      throw error;
    }
  }

  getAxiosOptions(query) {
    return {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://customer-api.aleaplay.com/api/graphql',
      headers: {
        'Authorization': `Bearer ${aleaCasinoConfig.secretToken}`,
        'Alea-CasinoId': aleaCasinoConfig.casinoId,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ query, variables: {} }),
    };
  }

  async processGameData(data, languages, transaction) {
    const [aggregator, categoryMap] = await Promise.all([
      this.createAggregator(CASINO_AGGREGATORS.ALEA, languages, transaction),
      this.createCategories(DEFAULT_CATEGORIES, languages, transaction),
    ]);
    const providerIdsMap = await this.createProviders(aggregator.id, data, languages, transaction);
    await this.createGames(categoryMap, providerIdsMap, data, languages, transaction);
  }


  getNames(languages, defaultName) {
    return { EN: defaultName }
  }

  async createAggregator(name, languages, transaction) {
    const aggregatorNames = this.getNames(languages, name);


    let casinoAggregator = await db.CasinoAggregator.findOne({
      where: db.Sequelize.literal(`name->>'EN' = '${name}'`),
      transaction
    });


    if (!casinoAggregator) {
      casinoAggregator = await db.CasinoAggregator.create(
        { name: aggregatorNames },
        { transaction }
      );
    }


    return casinoAggregator;
  }


  async createProviders(aggregatorId, providers, languages, transaction) {
    const uniqueProvidersMap = new Map();


    providers.forEach(provider => {
      if (!uniqueProvidersMap.has(provider.software.id)) {
        uniqueProvidersMap.set(provider.software.id, {
          gameAggregatorId: aggregatorId,
          uniqueId: provider.software.id,
          name: this.getNames(languages, provider.software.name),
        });
      }
    });


    const uniqueProviders = Array.from(uniqueProvidersMap.values());

    const updatedProviders = await db.CasinoProvider.bulkCreate(uniqueProviders, {
      updateOnDuplicate: ['name'],
      retuning: true,
      transaction,
    });


    return updatedProviders.reduce((map, provider) => {
      map[provider.uniqueId] = provider.id;
      return map;
    }, {});
  }

  /**
     * @param {typeof DEFAULT_CATEGORIES[string]} categories
     * @param {Language[]} languages
     * @param {import ('sequelize').Transaction} transaction
     * @returns {Object.<string, string>}
     */
  async createCategories(categories, languages, transaction) {

    const updatedCategories = await db.CasinoCategory.bulkCreate(categories.map(category => {
      return {
        id: category.id,
        name: this.getNames(languages, category.name)
      }
    }), {
      returning: ['id'],
      updateOnDuplicate: ['name'],
      transaction,
      logging: true
    })

    return updatedCategories.reduce((prev, category) => {
      prev[category.name.EN] = category.id
      return prev
    }, {})
  }


  async createGames(categoryMap, providerIdsMap, games, languages, transaction) {
    console.log("Starting game data transformation...");

    const gameData = games.map(game => {
      const providerId = providerIdsMap[game.software.id];
      const categoryId = game.jackpot !== 'No jackpot'
        ? categoryMap['Jackpots']
        : categoryMap[game.genre] || categoryMap['Other'];

      return providerId ? {
        name: game.name,
        casinoGameId: game.id,
        casinoProviderId: providerId,
        casinoCategoryId: categoryId,
        thumbnailUrl: game.thumbnailLinks?.RATIO_3_4_WEBP || JSON.stringify(game.thumbnailLinks || {}),
        hasFreespins: game.features?.includes('FreeSpins') || false,
        demo: game.demoAvailable,
        returnToPlayer: game.rtp
      } : null;
    }).filter(Boolean);

    console.log("Finished preparing game data, deduplicating...");

    // ✅ Deduplicate globally by casinoGameId + casinoProviderId
    const uniqueMap = new Map();
    for (const game of gameData) {
      const key = `${game.casinoGameId}_${game.casinoProviderId}`;
      uniqueMap.set(key, game);
    }

    const uniqueGames = Array.from(uniqueMap.values());

    const chunkSize = 500;
    const chunks = [];

    for (let i = 0; i < uniqueGames.length; i += chunkSize) {
      chunks.push(uniqueGames.slice(i, i + chunkSize));
    }

    console.log(`Prepared ${chunks.length} chunks for insertion.`);

    // ⚠️ Use serial (not parallel) inserts to avoid any internal conflict risk
    for (let index = 0; index < chunks.length; index++) {
      const chunk = chunks[index];
      console.log(`Inserting chunk ${index + 1}/${chunks.length} with ${chunk.length} games`);

      await db.CasinoGame.bulkCreate(chunk, {
        updateOnDuplicate: [
          'name',
          'casinoCategoryId',
          'thumbnailUrl',
          'returnToPlayer',
          'hasFreespins',
          'demo'
        ],
        transaction,
      });
    }

    console.log("Game insertion complete.");
  }

}
