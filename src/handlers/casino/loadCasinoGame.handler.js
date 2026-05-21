
import { BaseHandler } from '@src/libs/baseHandler'
import { LoadAleaGamesHandler } from './loadGames/loadAleaGames.service.handler'
// import { LoadIconic21GamesHandler } from './loadGames/iconic21Games.handler'
import { CASINO_AGGREGATORS } from '@src/utils/constants/casino.constants'
import { LoadIconic21GamesHandler } from './loadGames/iconic21Games.handler'
import { Load77GamingGamesHandler } from './loadGames/Load77GamingGames.handler'
// import { Load77GamingGamesHandler } from './loadGames/Load77GamingGames.handler';



export class LoadCasinoGameHandler extends BaseHandler {
  async run() {
    const casinoAggregator = this.args.casinoAggregator
    let result
    console.log("Casino Aggregator to load games for:", casinoAggregator)
    switch (casinoAggregator) {
      case CASINO_AGGREGATORS.ALEA:
        result = await LoadAleaGamesHandler.execute({}, this.context)
        break;
      case CASINO_AGGREGATORS.ICONIC21:
        result = await LoadIconic21GamesHandler.execute({}, this.context)
        break;
         case CASINO_AGGREGATORS.SEVENTY_SEVEN:
          result = await Load77GamingGamesHandler.execute({}, this.context)
          break;
      default:
        result = { message: "Wrong aggregtor Type" }
        break;
    }
    return { success: true, result }
  }
}
