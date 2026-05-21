import { CreatePackageHandler } from '@src/handlers/package/createPackage.handler'
import { DeletePackageHandler } from '@src/handlers/package/deletePackage.handler'
import { GetAllPackagesHandler } from '@src/handlers/package/getAllPackages.handler'
import { GetPackageHandler } from '@src/handlers/package/getPackage.handler'
import { ReorderPackageHandler } from '@src/handlers/package/reorderPackage.handler'
import { UpdatePackageHandler } from '@src/handlers/package/updatePackage.handler'
import { ApiHelper } from '@src/utils/api.utils'
import { extractFiles } from '@src/helpers/uploadFiles.helpers'

export class PackageController {
  static async createPackage (req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await CreatePackageHandler.execute({ ...req.body, images }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)

    } catch (error) {
      next(error)
    }
  }

  static async getAllPackages (req, res, next) {
    try {
      const data = await GetAllPackagesHandler.execute(req.query, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getPackage (req, res, next) {
    try {
      const data = await GetPackageHandler.execute(req.query)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updatePackage (req, res, next) {
    try {
      const images = extractFiles(req.files);
      const data = await UpdatePackageHandler.execute({ ...req.body, images }, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }


  static async deletePackage (req, res, next) {
    try {
      const data = await DeletePackageHandler.execute({ ...req.query, ...req.body })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async reorderPackage (req, res, next) {
    try {
      const data = await ReorderPackageHandler.execute({ ...req.query, ...req.body })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
}
