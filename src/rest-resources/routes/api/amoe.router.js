import { getPostalCodeListSchema } from '@src/json-schemas/postalCode/getPostalCodeList.schema'
import { updatePostalCodeRequestSchema } from '@src/json-schemas/postalCode/updatePostalCodeRequestStatus.schema'
import { FaucetController, PostalCodeController } from '@src/rest-resources/controllers/amoe.controller'
import { isAdminAuthenticated } from '@src/rest-resources/middlewares/isAdminAuthenticated'
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware'
import { requestValidationMiddleware } from '@src/rest-resources/middlewares/requestValidation.middleware'
import express from 'express'
import { updatePostalCodeSchema } from '@src/json-schemas/postalCode/updatePostalCode.schema'


const args = { mergeParams: true }
const amoeRouter = express.Router(args)

amoeRouter.route('/faucet')
  .get(contextMiddleware(false), requestValidationMiddleware({}), isAdminAuthenticated(), FaucetController.getFaucet)
  .put(contextMiddleware(true), requestValidationMiddleware({}), isAdminAuthenticated(), FaucetController.setFaucet)


amoeRouter.route('/postcode/request').put(contextMiddleware(true), isAdminAuthenticated(), requestValidationMiddleware(updatePostalCodeRequestSchema), PostalCodeController.updatePostalCodeRequestStatus)
amoeRouter.route('/postcode/request').get(contextMiddleware(false), isAdminAuthenticated(), requestValidationMiddleware(getPostalCodeListSchema), PostalCodeController.getPostalCodeRequestList)


amoeRouter.route('/postcode').put(contextMiddleware(true), isAdminAuthenticated(), requestValidationMiddleware(updatePostalCodeSchema), PostalCodeController.updatePostalCode)





export { amoeRouter }
