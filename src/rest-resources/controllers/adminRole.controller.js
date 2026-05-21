import { CreateAdminRoleHandler } from '@src/handlers/adminRoles/createAdminRole.handler'
import { DeleteAdminRoleHandler } from '@src/handlers/adminRoles/deleteAdminRole.handler'
import { GetAdminRoleHandler } from '@src/handlers/adminRoles/getAdminRole.handler'
import { GetAllAdminRolesHandler } from '@src/handlers/adminRoles/getAllAdminRoles.handler'
import { UpdateAdminRoleHandler } from '@src/handlers/adminRoles/updateAdminRole.handler'
import { ApiHelper } from '@src/utils/api.utils'

export default class AdminRoleController {
  static async createAdminRole (req, res, next) {
    try {
      const data = await CreateAdminRoleHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getAllAdminRoles (req, res, next) {
    try {
      const data = await GetAllAdminRolesHandler.execute(req.query, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getAdminRole (req, res, next) {
    try {
      const data = await GetAdminRoleHandler.execute(req.query)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateAdminRole (req, res, next) {
    try {
      const data = await UpdateAdminRoleHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async deleteAdminRole (req, res, next) {
    try {
      const data = await DeleteAdminRoleHandler.execute(req.query)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
}
