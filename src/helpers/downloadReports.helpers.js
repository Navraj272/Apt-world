import { GetCasinoTransactionHandler } from '@src/handlers/report/getCasinoTransactions.handler'
import { GetPlayersHandler } from '@src/handlers/user/getPlayers.handler'
import { GetGameReportHandler } from '@src/handlers/report/gameReport.handler'
import { GetTopTenHandler } from '@src/handlers/report/topTenPlayers.handler'
import { GetApplicationStatsHandler } from '@src/handlers/report/applicationStats.handler'
import { GetRefferalStatsHandler } from '@src/handlers/report/refferal.handler'
import { GetRealTimeActivityHandler } from '@src/handlers/report/realTimeActivity.handler'
import { GetSweepCoinsManagementHandler } from '@src/handlers/report/sweepCoinsManagement.handler'
import { CasinoCallbackHandler } from '@src/handlers/report/CasinoCallback.handler'
import { GetTransactionHandler } from '@src/handlers/report/getTransactions.handler'

export const reportGenerators = {
  getCasinoTransactions: GetCasinoTransactionHandler,
  getPlayers: GetPlayersHandler,
  gameReport: GetGameReportHandler,
  topTenPlayers: GetTopTenHandler,
  applicationStats: GetApplicationStatsHandler,
  refferal: GetRefferalStatsHandler,
  realTimeActivity: GetRealTimeActivityHandler,
  sweepCoinsManagement: GetSweepCoinsManagementHandler,
  casinoCallback: CasinoCallbackHandler,
  getBankingTransaction: GetTransactionHandler,
}
