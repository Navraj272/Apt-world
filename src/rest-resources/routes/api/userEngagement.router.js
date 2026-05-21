import { getSpinWheelListSchema } from '@src/json-schemas/spinWheel/getSpinWheelList.schema'
import { updateMultipleDivisionPrioritiesSchema } from '@src/json-schemas/spinWheel/updateMultipleDivisionPrioritiesSchema.schema'
import { updateSpinWheelListSchema } from '@src/json-schemas/spinWheel/updateSpinWheelList.schema'
import { getVipTierDetailsSchema } from '@src/json-schemas/vipTier/getVipTierDetails.schema'
import { getVipTiersSchema } from '@src/json-schemas/vipTier/getVipTiers.schema'
import { updateUserVipTiersSchema } from '@src/json-schemas/vipTier/updateUserVipTiers.schema'
import { updateVipTierSchema } from '@src/json-schemas/vipTier/updateVipTier.schema'
import { SpinWheelController, VipTierController } from '@src/rest-resources/controllers/userEngagement.controller'
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware'
import { isAdminAuthenticated } from '@src/rest-resources/middlewares/isAdminAuthenticated'
import { uploadDesktopAndMobileImage, uploadSingle } from '@src/rest-resources/middlewares/multer'
import { requestValidationMiddleware } from '@src/rest-resources/middlewares/requestValidation.middleware'
import { applicationModule } from '@src/utils/constants/starfManagement.constants'
// import { updateMultipleDivisionPrioritiesSchema } from '@src/json-schemas/spinWheel/updateMultipleDivisionPrioritiesSchema.schema'

import express from 'express'

const args = { mergeParams: true }
const userEngagementRouter = express.Router(args)

userEngagementRouter.route('/spin-wheel-configuration')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getSpinWheelListSchema),
    isAdminAuthenticated(applicationModule.playerEngagement.read),
    SpinWheelController.getSpinWheelList
  )
  .put(
    requestValidationMiddleware(updateSpinWheelListSchema),
    contextMiddleware(true),
    isAdminAuthenticated(applicationModule.playerEngagement.update),
    SpinWheelController.updateSpinWheel
  )

  userEngagementRouter.route('/spin-wheel-configuration-all')
  .put(
    requestValidationMiddleware(updateMultipleDivisionPrioritiesSchema),
    contextMiddleware(true),
    isAdminAuthenticated(applicationModule.playerEngagement.update),
    SpinWheelController.updateAllSpinWheel
  )
userEngagementRouter.route('/vip-tier')
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.playerEngagement.read),
    requestValidationMiddleware(getVipTierDetailsSchema),
    VipTierController.getVipTierDetails
  )
  .post(contextMiddleware(true),
    uploadDesktopAndMobileImage,
    isAdminAuthenticated(applicationModule.playerEngagement.create),
    requestValidationMiddleware({}),
    VipTierController.createVipTier
  )
  .put(contextMiddleware(true),
    uploadDesktopAndMobileImage,
    isAdminAuthenticated(applicationModule.playerEngagement.update),
    requestValidationMiddleware(updateVipTierSchema),
    VipTierController.updateVipTier
  )




userEngagementRouter.route('/vip-tier/update-user-vip').put(
  isAdminAuthenticated(applicationModule.playerEngagement.update),
  requestValidationMiddleware(updateUserVipTiersSchema),
  contextMiddleware(true),
  VipTierController.updateUserVipTier
)

userEngagementRouter.route('/vip-tier/all').get(
  contextMiddleware(false),
  isAdminAuthenticated(applicationModule.playerEngagement.read),
  requestValidationMiddleware({ getVipTiersSchema }),
  VipTierController.getVipTiers
)

export { userEngagementRouter }
