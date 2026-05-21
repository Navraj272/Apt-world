import { AcceptWithdrawRequestHandler } from '@src/handlers/wallet/acceptWithdrawRequest.handler'
import { ManageWalletHandler } from '@src/handlers/wallet/manageWallet.handler'
import { ManageWalletFromCioWebhookHandler } from '@src/handlers/wallet/manageWalletFromCioWebhook.handler'
import { RejectWithdrawRequestHandler } from '@src/handlers/wallet/rejectWithdrawRequest.handler'
import { ResetFyntekCooldownHandler } from '@src/handlers/wallet/resetCooldown.handler'
import { ApiHelper } from '@src/utils/api.utils'

export class WalletController {

  static async acceptWithdrawRequest(req, res, next) {
    try {
      const data = await AcceptWithdrawRequestHandler.execute({ ...req.body, ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async rejectWithdrawRequest(req, res, next) {
    try {
      const data = await RejectWithdrawRequestHandler.execute({ ...req.body, ...req.query }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async manageWallet(req, res, next) {
    try {
      const data = await ManageWalletHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

   static async manageWalletFromCioWebhook(req, res, next) {
    try {
      const data = await ManageWalletFromCioWebhookHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
  
  static async resetCooldown(req, res, next) {
    try {
      const data = await ResetFyntekCooldownHandler.execute(req.body);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
