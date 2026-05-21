import { getCasinoRoundReportSchema } from "@src/json-schemas/report/getCasinoRoundReport.schema"
import { getCasinoTransactionsSchema } from "@src/json-schemas/report/getCasinoTransactions.schema"
import { getGameReportSchema } from "@src/json-schemas/report/getGameReport.schema"
import { getTopPlayerSchema } from "@src/json-schemas/report/getTopPlayer.schema"
import { getTransactionsSchema } from "@src/json-schemas/report/getTransactions.schema"
import { getAllWithdrawRequestSchema } from "@src/json-schemas/wallet/getAllWithdrawRequest.schema"
import { ReportController } from "@src/rest-resources/controllers/report.controller"
import { contextMiddleware } from "@src/rest-resources/middlewares/context.middleware"
import { isAdminAuthenticated } from "@src/rest-resources/middlewares/isAdminAuthenticated"
import { requestValidationMiddleware } from "@src/rest-resources/middlewares/requestValidation.middleware"
import { applicationModule } from "@src/utils/constants/starfManagement.constants"
import express from "express"

const args = { mergeParams: true }
const reportRouter = express.Router(args)

// Dashboard Metrics: Summary of key business stats
reportRouter
  .route("/dashboard-summary")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    ReportController.fetchDashboardSummary
  )

// Top 10 Players by Wagers/Profit/etc.
reportRouter
  .route("/top-players")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    requestValidationMiddleware(getTopPlayerSchema),
    ReportController.fetchTopPlayers
  )

// Report per game (aggregated)
reportRouter
  .route("/game-report")
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getGameReportSchema),
    isAdminAuthenticated(applicationModule.reports.read),
    ReportController.fetchGameWiseReport
  )

// All general transactions
reportRouter
  .route("/transactions")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    requestValidationMiddleware(getTransactionsSchema),
    ReportController.fetchTransactionLogs
  )

// Casino-specific transaction logs
reportRouter
  .route("/casino/transactions")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    requestValidationMiddleware(getCasinoTransactionsSchema),
    ReportController.fetchCasinoTransactions
  )

// Casino round details (per round insights)
reportRouter
  .route("/casino/round-details")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    requestValidationMiddleware(getCasinoRoundReportSchema),
    ReportController.fetchCasinoRoundDetails
  )

// Withdraw requests report
reportRouter
  .route("/withdraw-requests")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    requestValidationMiddleware(getAllWithdrawRequestSchema),
    ReportController.fetchWithdrawRequests
  )

// Real-time activity feed
reportRouter
  .route("/real-time-activity")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    ReportController.fetchRealTimeActivity
  )

// Sweep coins statistics (earned, used, etc.)
reportRouter
  .route("/sweep-coins/stats")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    ReportController.fetchSweepCoinsStats
  )

// Referral program statistics
reportRouter
  .route("/referrals/summary")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    ReportController.fetchReferralStats
  )

reportRouter.route("/casino/callback-report").get(
  contextMiddleware(false),
  // isAdminAuthenticated(applicationModule.reports.read),
  ReportController.getCallbackReport
)

reportRouter.route("/compliance").get(
  contextMiddleware(false),
  // isAdminAuthenticated(applicationModule.reports.read),
  ReportController.getCompliance
)

reportRouter.route('/download/Reports').post(
  contextMiddleware(false),
  //isAdminAuthenticated(applicationModule.reports.read),
  ReportController.downloadReports
)

reportRouter
  .route("/tier-stats")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    ReportController.getTierStats
  )

reportRouter
  .route("/count-report")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    ReportController.fetchCountReport
  )

reportRouter
  .route("/duplicate-report")
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.reports.read),
    ReportController.fetchDuplicateReport
  )


export { reportRouter };
