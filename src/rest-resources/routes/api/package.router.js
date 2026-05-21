import { createPackageSchema } from '@src/json-schemas/packages/createPackage.schema'
import { updatePackageSchema } from '@src/json-schemas/packages/updatePackage.schema'
import { PackageController } from '@src/rest-resources/controllers/package.controller'
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware'
import { isAdminAuthenticated } from '@src/rest-resources/middlewares/isAdminAuthenticated'
import { uploadDesktopAndMobileImage, uploadSingle } from '@src/rest-resources/middlewares/multer'
import { requestValidationMiddleware } from '@src/rest-resources/middlewares/requestValidation.middleware'
import { applicationModule } from '@src/utils/constants/starfManagement.constants'
import express from 'express'

const args = { mergeParams: true }
const packageRouter = express.Router(args)

packageRouter.route('/')
  .post(
    isAdminAuthenticated(applicationModule.packages.create),
    contextMiddleware(true),
    uploadDesktopAndMobileImage,
    requestValidationMiddleware(createPackageSchema),
    PackageController.createPackage
  )
  .put(
    isAdminAuthenticated(applicationModule.packages.update),
    contextMiddleware(true),
    uploadDesktopAndMobileImage,
    requestValidationMiddleware(updatePackageSchema),
    PackageController.updatePackage
  )
  .delete(
    isAdminAuthenticated(applicationModule.packages.delete),
    contextMiddleware(true),
    requestValidationMiddleware({}),
    PackageController.deletePackage)
  .get(
    isAdminAuthenticated(applicationModule.packages.read),
    contextMiddleware(false),
    requestValidationMiddleware({}),
    PackageController.getPackage
  )


packageRouter.route('/all').get(
  isAdminAuthenticated(applicationModule.packages.read),
  contextMiddleware(false),
  PackageController.getAllPackages
)

packageRouter.route('/reorder').put(
  isAdminAuthenticated(applicationModule.packages.update),
  contextMiddleware(true),
  PackageController.reorderPackage
)




export { packageRouter }
