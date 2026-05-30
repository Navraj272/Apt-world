import express from 'express'
import { affiliateController } from '@src/rest-resources/controllers/affiliate.controller'
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware'
import { isAdminAuthenticated } from '@src/rest-resources/middlewares/isAdminAuthenticated'
import { requestValidationMiddleware } from '@src/rest-resources/middlewares/requestValidation.middleware'
import { applicationModule } from '@src/utils/constants/public.constants' 
import { detachNpuUsersSchema } from '@src/json-schemas/affliate/detachNpuUsers.schema'

const args = { mergeParams: true }
const affiliateRouter = express.Router(args)

/**
 * @route POST /detach-npu-users
 */
affiliateRouter.post(
  '/detach-npu-users',
  contextMiddleware(false),
  isAdminAuthenticated(applicationModule.administrator.update),
  requestValidationMiddleware(detachNpuUsersSchema),
  affiliateController.detachNpuUsers
)

export { affiliateRouter }
