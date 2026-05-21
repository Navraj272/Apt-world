
import { GetFaucetHandler } from '@src/handlers/amoe/faucet/getFaucet.service.handler'
import { SetFaucetHandler } from '@src/handlers/amoe/faucet/setFaucet.service.handler'
import { GetPostalCodeRequestsHandler } from '@src/handlers/amoe/postalCode/getPostalCodeRequestList.handler'
import { UpdatePostalCodeHandler } from '@src/handlers/amoe/postalCode/updatePostalCode.handler'
import { UpdatePostalCodeRequestStatusHandler } from '@src/handlers/amoe/postalCode/updatePostalCodeRequestStatus.handler'
import { ApiHelper } from '@src/utils/api.utils'


export class FaucetController {

  static async setFaucet (req, res, next) {
    try {
      const data = await SetFaucetHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getFaucet (req, res, next) {
    try {
      const data = await GetFaucetHandler.execute(req.body)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
}



export class PostalCodeController {

  static async updatePostalCodeRequestStatus (req, res, next) {
    try {
      const data = await UpdatePostalCodeRequestStatusHandler.execute({ ...req.body }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
 static async updatePostalCode (req, res, next) {
    try {
      const data = await UpdatePostalCodeHandler.execute({ ...req.body }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }


  static async getPostalCodeRequestList (req, res, next) {
    try {
      const data = await GetPostalCodeRequestsHandler.execute(req.query)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
}
