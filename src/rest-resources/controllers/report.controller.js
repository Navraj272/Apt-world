import { GetApplicationStatsHandler } from "@src/handlers/report/applicationStats.handler";
import { GetGameReportHandler } from "@src/handlers/report/gameReport.handler";
import { GetCasinoTransactionHandler } from "@src/handlers/report/getCasinoTransactions.handler";
import { GetTransactionHandler } from "@src/handlers/report/getTransactions.handler";
import { GetRealTimeActivityHandler } from "@src/handlers/report/realTimeActivity.handler";
import { GetSweepCoinsManagementHandler } from "@src/handlers/report/sweepCoinsManagement.handler";
import { GetTopTenHandler } from "@src/handlers/report/topTenPlayers.handler";
import { GetWithdrawRequestsHandler } from "@src/handlers/wallet/getWithdrawRequests.handler";
import { GetRefferalStatsHandler } from "@src/handlers/report/refferal.handler";
import { CasinoCallbackHandler } from "@src/handlers/report/CasinoCallback.handler";
import { ApiHelper } from "@src/utils/api.utils";
import { ComplianceHandler } from "@src/handlers/report/Compliance.handler";
import { DownloadReport } from "@src/handlers/report/downloadReports.handler";
import { fetchCountReportHandler } from "@src/handlers/report/fetchCountReport.handler";
import { fetchDuplicateReportHandler } from "@src/handlers/report/fetchDuplicateReport.handler";
import { TierStatsHandler } from "@src/handlers/report/tierStats.handler";


export class ReportController {
  static async fetchDashboardSummary(req, res, next) {
    try {
      const data = await GetApplicationStatsHandler.execute({
        ...req.query,
        ...req.body,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getCallbackReport(req, res, next) {
    try {
      const data = await CasinoCallbackHandler.execute({
        ...req.query,
        ...req.body,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchTopPlayers(req, res, next) {
    try {
      const data = await GetTopTenHandler.execute({
        ...req.query,
        ...req.body,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchGameWiseReport(req, res, next) {
    try {
      const data = await GetGameReportHandler.execute({
        ...req.query,
        ...req.body,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchTransactionLogs(req, res, next) {
    try {
      const data = await GetTransactionHandler.execute({ ...req.query });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchCasinoTransactions(req, res, next) {
    try {
      const data = await GetCasinoTransactionHandler.execute(req.query);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchCasinoRoundDetails(req, res, next) {
    try {
      const data = await GetCasinoTransactionHandler.execute(req.query);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchWithdrawRequests(req, res, next) {
    try {
      const data = await GetWithdrawRequestsHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchRealTimeActivity(req, res, next) {
    try {
      const data = await GetRealTimeActivityHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchSweepCoinsStats(req, res, next) {
    try {
      const data = await GetSweepCoinsManagementHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchReferralStats(req, res, next) {
    try {
      const data = await GetRefferalStatsHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getCompliance(req, res, next) {
    try {
      const data = await ComplianceHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async getTierStats(req, res, next) {
    try {
      const data = await TierStatsHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async downloadReports(req, res, next) {
    try {
      const { csvStream, reportName } = await DownloadReport.execute({ ...req.body, ...req.query });
  
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="${reportName}.csv"`);
  
      csvStream.pipe(res);
    } catch (error) {
      next(error);
    }
  }

  static async fetchCountReport(req, res, next) {
    try {
      const data = await fetchCountReportHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchDuplicateReport(req, res, next) {
    try {
      const data = await fetchDuplicateReportHandler.execute({
        ...req.body,
        ...req.query,
      });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
