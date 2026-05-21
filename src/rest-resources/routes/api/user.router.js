import { addCommentSchema } from '@src/json-schemas/user/addComment.schema'
import { getCommentsSchema } from '@src/json-schemas/user/getComments.schema'
import { getDuplicateUsersSchema } from '@src/json-schemas/user/getDuplicateUsers.schema'
import { getUsersSchema } from '@src/json-schemas/user/getUsers.schema'
import { resetPasswordSchema } from '@src/json-schemas/user/resetPassword.schema'
import { setUserInternalSchema } from '@src/json-schemas/user/setUserInternal.schema'
import { toggleAffiliateStatusSchema } from '@src/json-schemas/user/toggleAffiliateStatus.schema'
import { toggleOtpVerifyStatus } from '@src/json-schemas/user/toggleOtpVerifyStatus.schema'
import { toggleStatusSchema } from '@src/json-schemas/user/toggleUserStatus.schema'
import { updateAffiliatePercentageSchema } from '@src/json-schemas/user/updateAffiliatePercentage.schema'
import { updateCommentsStatusSchema } from '@src/json-schemas/user/updateCommentsStatus.schema'
import { updatePasswordSchema } from '@src/json-schemas/user/updatePassword.schema'
import { updateUserSchema } from '@src/json-schemas/user/updateUser.schema'
import { selfExclusionSchema } from '@src/json-schemas/user/userLimit/selfExclusion.schema'
import { setDepositLimitSchema } from '@src/json-schemas/user/userLimit/setDepositLimit.schema'
import { setWithdrwalLimitSchema } from '@src/json-schemas/user/userLimit/setWithdrawalLimit.schema'
import { verifyEmailSchema } from '@src/json-schemas/user/verifyEmail.schema'
import { affiliateController } from '@src/rest-resources/controllers/affiliate.controller'
import { UserController } from '@src/rest-resources/controllers/user.controller'
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware'
import { isAdminAuthenticated } from '@src/rest-resources/middlewares/isAdminAuthenticated'
import { requestValidationMiddleware } from '@src/rest-resources/middlewares/requestValidation.middleware'
import { applicationModule } from '@src/utils/constants/starfManagement.constants'
import { getDropBonusClaimsSchema } from "@src/json-schemas/user/getDropBonusClaims.schema";
import { updateUserAccountStatusSchema } from "@src/json-schemas/user/updateAccountStatus.schema";
import { getUserAccountStatusSchema } from "@src/json-schemas/user/getUserAccountStatus.schema";
import { createOrMapUserTagSchema } from "@src/json-schemas/user/createOrMapUserTag.schema";
import { getAllTagsSchema } from "@src/json-schemas/user/getAllTags.schema";
import { createUserTagSchema } from "@src/json-schemas/user/createUserTag.schema";
import { getUserTagsSchema } from "@src/json-schemas/user/getUserTags.schema";
import { DeleteUserTagSchema } from "@src/json-schemas/user/deleteUserTag.schema";
import { DeleteTagSchema } from "@src/json-schemas/user/deleteTag.schema";

import express from 'express'

const args = { mergeParams: true }
const userRouter = express.Router(args)

userRouter.route('/all').get(
  contextMiddleware(false),
  requestValidationMiddleware(getUsersSchema),
  isAdminAuthenticated(applicationModule.players.read),
  UserController.getUsers
)

userRouter
  .route('/referrals')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware({}),
    isAdminAuthenticated(applicationModule.players.read),
    affiliateController.getReferredUsers
  )

userRouter
  .route('/')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware({}),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.getUser
  )
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(updateUserSchema),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.updateUser
  )

userRouter
  .route('/status')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(toggleStatusSchema),
    isAdminAuthenticated(applicationModule.players.toggle),
    UserController.toggleUserStatus
  )

userRouter
  .route('/set-withdrawal-limit')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(setWithdrwalLimitSchema),
    isAdminAuthenticated(),
    UserController.setWithdrawalLimit
  )

userRouter
  .route('/mobile-otp-verify')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(toggleOtpVerifyStatus),
    isAdminAuthenticated(applicationModule.players.toggle),
    UserController.toggleUserOtpVerify
  )

userRouter
  .route('/set-deposit-limit')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(setDepositLimitSchema),
    isAdminAuthenticated(),
    UserController.SetDepositLimit
  )

userRouter
  .route('/set-self-exclusion')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(selfExclusionSchema),
    isAdminAuthenticated(),
    UserController.SetSelfExclusion
  )

userRouter
  .route('/internal')
  .put(
    contextMiddleware(false),
    requestValidationMiddleware(setUserInternalSchema),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.setUserInternal
  )

userRouter
  .route('/verify-email')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(verifyEmailSchema),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.toggleEmailVerification
  )

userRouter
  .route('/update-password')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(updatePasswordSchema),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.updatePassword
  )

userRouter
  .route('/reset-password')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(resetPasswordSchema),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.resetPassword
  )

userRouter
  .route('/duplicate')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getDuplicateUsersSchema),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.getDuplicateUsers
  )

userRouter
  .route('/comment')
  .post(
    contextMiddleware(false),
    requestValidationMiddleware(addCommentSchema),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.addComment
  )

userRouter
  .route('/comments')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getCommentsSchema),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.getComments
  )

userRouter
  .route('/comment-status')
  .put(
    contextMiddleware(false),
    requestValidationMiddleware(updateCommentsStatusSchema),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.updateCommentsStatus
  )

userRouter
  .route('/update-affiliate-percentage')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(updateAffiliatePercentageSchema),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.updateAffiliatePercentage
  )

// userRouter
//   .route("/self-exclusion")
//   .put(
//     contextMiddleware(true),
//     requestValidationMiddleware(updateSelfExclusionSchema),
//     isAdminAuthenticated(applicationModule.players.update),
//     UserController.updateSelfExclusion
//   );

userRouter
  .route('/verify-kyc')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(toggleStatusSchema),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.toggleKycVerification
  )
userRouter
  .route('/reset-kyc')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(toggleStatusSchema),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.resetKycVerification
  )
userRouter
  .route('/admin/reset-password')
  .put(
    contextMiddleware(true),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.resetPasswordByAdmin
  )
userRouter
  .route('/demographic-user')
  .get(
    contextMiddleware(false),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.demographicUser
  )

userRouter
  .route('/player-finance')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware({}),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.getPlayerFinance
  )

userRouter
  .route('/affiliate-status')
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(toggleAffiliateStatusSchema),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.toggleAffiliateStatus
  )

userRouter
  .route('/w9/status')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware({}),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.getUserW9Status
  )

  userRouter
  .route("/drop-bonus-claims")
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getDropBonusClaimsSchema),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.getDropBonusClaims
  );

// Account Status Management Routes
userRouter
  .route("/account-status/update")
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(updateUserAccountStatusSchema),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.updateUserAccountStatus
  );

userRouter
  .route("/account-status/get")
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getUserAccountStatusSchema),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.getUserAccountStatus
  );

  userRouter
  .route("/tag")
  .post(
    contextMiddleware(true),
    requestValidationMiddleware(createUserTagSchema),
    isAdminAuthenticated(applicationModule.players.create),
    UserController.createUserTag
  );

userRouter
  .route("/tag")
  .put(
    contextMiddleware(true),
    requestValidationMiddleware(createOrMapUserTagSchema),
    isAdminAuthenticated(applicationModule.players.update),
    UserController.createOrMapUserTag
  );

userRouter
  .route("/tags")
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getAllTagsSchema),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.getAllTags
  );

 userRouter
  .route("/user-tag")
  .delete(
    contextMiddleware(true),
    requestValidationMiddleware(DeleteUserTagSchema),
    isAdminAuthenticated(applicationModule.players.delete),
    UserController.deleteUserTag
   );

    userRouter
  .route("/tag")
  .delete(
    contextMiddleware(true),
    requestValidationMiddleware(DeleteTagSchema),
    isAdminAuthenticated(applicationModule.players.delete),
    UserController.deleteTag
   );

userRouter
  .route("/user-tags")
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getUserTagsSchema),
    isAdminAuthenticated(applicationModule.players.read),
    UserController.getUserTags
  );
  
export { userRouter }
