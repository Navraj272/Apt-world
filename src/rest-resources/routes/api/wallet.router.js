import { manageWaletSchema } from '@src/json-schemas/admin/manageWallet.schema'
import { manageWalletFromCioWebhookSchema } from '@src/json-schemas/admin/manageWalletFromCioWebhook.schema'
import { resetCooldownSchema } from '@src/json-schemas/admin/resetCooldown.schema'
import { acceptWithdrawRequestSchema } from '@src/json-schemas/wallet/acceptWithdrawRequest.schema'
import { rejectWithdrawRequestSchema } from '@src/json-schemas/wallet/rejectWithdrawRequest.schema'
import { WalletController } from '@src/rest-resources/controllers/wallet.controller'
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware'
import { verifyCustomerIOSignatureMiddleware } from '@src/rest-resources/middlewares/customerioSignatureValidator.middleware'
import { isAdminAuthenticated } from '@src/rest-resources/middlewares/isAdminAuthenticated'
import { requestValidationMiddleware } from '@src/rest-resources/middlewares/requestValidation.middleware'
import { applicationModule, applicationModules } from '@src/utils/constants/starfManagement.constants'
import express from 'express'

const args = { mergeParams: true };
const walletRouter = express.Router(args);

// Ensure that the controller methods are defined correctly
walletRouter.route('/approve/withdrawal')
  .post(contextMiddleware(true),
    isAdminAuthenticated(applicationModules.reports.update),
    requestValidationMiddleware(acceptWithdrawRequestSchema),
    WalletController.acceptWithdrawRequest
  );

walletRouter.route('/reject/withdrawal')
  .post(contextMiddleware(true),
    isAdminAuthenticated(applicationModules.reports.update),
    requestValidationMiddleware(rejectWithdrawRequestSchema),
    WalletController.rejectWithdrawRequest
  );

walletRouter.route('/manage-wallet').post(
  contextMiddleware(true),
  isAdminAuthenticated(applicationModule.players.update),
  requestValidationMiddleware(manageWaletSchema),
  WalletController.manageWallet)

walletRouter.route('/manage-wallet-cio').post(
  contextMiddleware(true),
  verifyCustomerIOSignatureMiddleware,
  requestValidationMiddleware(manageWalletFromCioWebhookSchema),
  WalletController.manageWalletFromCioWebhook)

  walletRouter.route('/reset-cooldown')
    .post(
        contextMiddleware(false),
       isAdminAuthenticated(applicationModule.players.update),
       requestValidationMiddleware(resetCooldownSchema),
        WalletController.resetCooldown
    );

export { walletRouter }
