import { InternalController } from '@src/rest-resources/controllers/internal.controller'
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware'
import { requestValidationMiddleware } from '@src/rest-resources/middlewares/requestValidation.middleware'
import express from 'express'

const args = { mergeParams: true }
const internalRouter = express.Router(args)

internalRouter.route('/populate-data').get(contextMiddleware(true), requestValidationMiddleware({}), InternalController.populateData)
internalRouter.route('/cashback').get(contextMiddleware(true), requestValidationMiddleware({}), InternalController.affiliateCommission)
internalRouter.route('/rackback').get(contextMiddleware(true), requestValidationMiddleware({}), InternalController.cashbackDistribution)

export { internalRouter }
