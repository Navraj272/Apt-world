import { AdminController } from '@src/rest-resources/controllers/admin.controller'
import AdminRoleController from '@src/rest-resources/controllers/adminRole.controller'
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware'
import { isAdminAuthenticated } from '@src/rest-resources/middlewares/isAdminAuthenticated'
import { requestValidationMiddleware } from '@src/rest-resources/middlewares/requestValidation.middleware'
import { applicationModule } from '@src/utils/constants/public.constants' 
import express from 'express'

// JSON Schemas
// import { createAdminUserSchema } from '@src/json-schemas/admin/createAdminUser.schema'
// import { getAdminChildsSchema } from '@src/json-schemas/admin/getAdminChilds.schema'
// import { getAdminUserDetailsSchema } from '@src/json-schemas/admin/getAdminUserDetails.schema'
// import { getAdminUsersSchema } from '@src/json-schemas/admin/getAdminUsers.schema'
// import { updateAdminProfileSchema } from '@src/json-schemas/admin/updateAdminProfile.schema'
// import { updateAdminUserSchema } from '@src/json-schemas/admin/updateAdminUser.schema'
// import { updateStatusSchema } from '@src/json-schemas/admin/updateStatus.schema'
// import { createAdminRoleSchema } from '@src/json-schemas/adminRole/createAdminRole.schema'
// import { deleteAdminRoleSchema } from '@src/json-schemas/adminRole/deleteAdminRole.schema'
// import { getAdminRoleSchema } from '@src/json-schemas/adminRole/getAdminRole.schema'
// import { updateAdminRoleSchema } from '@src/json-schemas/adminRole/updateAdminRole.schema'
// import { changePasswordSchema } from '@src/json-schemas/admin/changePassword.schema'
// import { affiliateController } from '@src/rest-resources/controllers/affiliate.controller'
// import { W9Controller } from '@src/rest-resources/controllers/w9Avalara.controller'

const args = { mergeParams: true }
const adminRouter = express.Router(args)

/**
 * @route GET /admin/roles
 */
adminRouter.get(
  '/roles',
  contextMiddleware(false),
  isAdminAuthenticated(applicationModule.administrator.read),
  AdminRoleController.getAllAdminRoles
)

/**
 * @route GET /admin/role
 * @route POST /admin/role
 * @route PUT /admin/role
 * @route DELETE /admin/role
 */
adminRouter
  .route('/role')
  .get(
    contextMiddleware(false),
    // requestValidationMiddleware(getAdminRoleSchema),
    isAdminAuthenticated(applicationModule.administrator.read),
    AdminRoleController.getAdminRole
  )
  .post(
    contextMiddleware(true),
    // requestValidationMiddleware(createAdminRoleSchema),
    isAdminAuthenticated(applicationModule.administrator.create),
    AdminRoleController.createAdminRole
  )
  .put(
    contextMiddleware(true),
    // requestValidationMiddleware(updateAdminRoleSchema),
    isAdminAuthenticated(applicationModule.administrator.update),
    AdminRoleController.updateAdminRole
  )
  .delete(
    contextMiddleware(true),
    // requestValidationMiddleware(deleteAdminRoleSchema),
    isAdminAuthenticated(applicationModule.administrator.delete),
    AdminRoleController.deleteAdminRole
  )

/**
 * @route GET /admin/children
 */
adminRouter.get(
  '/children',
  contextMiddleware(false),
  isAdminAuthenticated(applicationModule.administrator.read),
  // requestValidationMiddleware(getAdminChildsSchema),
  AdminController.getAdminChilds
)

/**
 * @route GET /admin/details
 */
adminRouter.get(
  '/details',
  contextMiddleware(false),
  isAdminAuthenticated(applicationModule.administrator.read),
  // requestValidationMiddleware(getAdminUserDetailsSchema),
  AdminController.getAdminUserDetails
)

/**
 * @route POST /admin/login
 */
adminRouter.post('/login', AdminController.adminLogin)

/**
 * @route GET /admin
 * @route POST /admin
 * @route PUT /admin
 */
adminRouter
  .route('/')
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.administrator.read),
    // requestValidationMiddleware(getAdminUsersSchema),
    AdminController.getAdminUsers
  )
  .post(
    contextMiddleware(true),
    isAdminAuthenticated(applicationModule.administrator.create),
    // requestValidationMiddleware(createAdminUserSchema),
    AdminController.createAdminUser
  )
  .put(
    contextMiddleware(true),
    isAdminAuthenticated(applicationModule.administrator.update),
    // requestValidationMiddleware(updateAdminUserSchema),
    AdminController.updateAdminUser
  )

/**
 * @route POST /admin/toggle-status
 */
adminRouter.post(
  '/toggle',
  contextMiddleware(true),
  isAdminAuthenticated(applicationModule.administrator.toggle),
  // requestValidationMiddleware(updateStatusSchema),
  AdminController.updateStatus
)

/**
 * @route PUT /admin/update-profile
 */
adminRouter.put(
  '/update-profile',
  contextMiddleware(true),
  // requestValidationMiddleware(updateAdminProfileSchema),
  isAdminAuthenticated(applicationModule.administrator.update),
  AdminController.updateAdminProfile
)
/**
 * @route post /admin/change/change-password
 */
adminRouter.post(
  '/change-password', contextMiddleware(true), 
  // requestValidationMiddleware(changePasswordSchema), 
  isAdminAuthenticated(applicationModule.administrator.create),
  AdminController.changePassword
)

adminRouter.post(
  '/affiliate/sync',
  contextMiddleware(true),
  isAdminAuthenticated(applicationModule.administrator.update), // Using update permission
  // affiliateController.syncAffnookData
)

adminRouter.post(
  '/affiliate/sync-bonus',
  contextMiddleware(true),
  isAdminAuthenticated(applicationModule.administrator.update),
  // affiliateController.syncPurchaseBonus
)

adminRouter.post(
  '/affiliate/sync-missing-bonus',
  contextMiddleware(true),
  isAdminAuthenticated(applicationModule.administrator.update),
  // affiliateController.syncBonus
)

adminRouter.post(
  '/w9/sync',
  contextMiddleware(true),
  isAdminAuthenticated(applicationModule.appConfiguration.create),
  // W9Controller.syncAvalaraW9
)

export { adminRouter }
