import { AddCommentHandler } from '@src/handlers/user/addUserComment.handler'
import { DemographicUserHandler } from '@src/handlers/user/demographicUser.handler'
import { GetDuplicateUsersHandler } from '@src/handlers/user/getDuplicateUsers.handler'
import { GetUserByIdHandler } from '@src/handlers/user/getUserById.handler'
import { GetAllCommentsPageHandler } from '@src/handlers/user/getUserComment.handler'
import { GetUsersHandler } from '@src/handlers/user/getUsers.handler'
import { ResetUserPasswordHandler } from '@src/handlers/user/resetPassword.handler'
import { ResetPasswordByAdminHandler } from '@src/handlers/user/ResetPasswordByAdmin.handler'
import { SetInternalUserHandler } from '@src/handlers/user/setInternalUser.handler'
import { ToggleEmailVerificationHandler } from '@src/handlers/user/ToggleEmailVerificationHandler'
import { ToggleKycVerificationHandler } from '@src/handlers/user/ToggleKycVerificationHandler'
import { ToggleUserStatusHandler } from '@src/handlers/user/toggleUserStatus.handler'
import { UpdateCommentStatusHandler } from '@src/handlers/user/updateCommentStatus.handler'
import { UpdatePasswordHandler } from '@src/handlers/user/updatePassword.handler'
import { UpdateAffiliatePercentage } from '@src/handlers/user/updateReferralPercentage.handler'
import { UpdateUserHandler } from '@src/handlers/user/updateUser.handler'
import { VerifyUserEmailHandler } from '@src/handlers/user/verifyUserEmail.handler'
import { SelfExclusionHandler } from '@src/handlers/userLimit/selfExclusion.handler'
import { SetDepositLimitHandler } from '@src/handlers/userLimit/setDepositLimit.handler'
import { SetWithdrawalLimitHandler } from '@src/handlers/userLimit/setWithdrawalLimit.handler'
import { GetPlayersHandler } from '@src/handlers/user/getPlayers.handler'
import { ApiHelper } from '@src/utils/api.utils'
import { ToggleUserOtpVerifyHandler } from '@src/handlers/user/ToggleUserOtpVerifyHandler'
import { AdminResetKycHandler } from '@src/handlers/user/resetKycStatus.handler'
import { PlayerFinanceHandler } from '@src/handlers/user/playerFinance.handler'
import { ToggleAffiliateStatusHandler } from '@src/handlers/user/toggleAffiliateStatus.handler'
import { GetUserW9StatusHandler } from '@src/handlers/tax/getUserW9Status.handler'
import { GetDropBonusClaimsHandler } from "@src/handlers/user/getDropBonusClaims.handler"
import { UpdateUserAccountStatusHandler } from "@src/handlers/user/updateAccountStatus.handler"
import { GetUserAccountStatusHandler } from "@src/handlers/user/getUserAccountStatus.handler"
import { CreateOrMapUserTagHandler } from "@src/handlers/user/createOrMapUserTag.handler"
import { GetAllTagsHandler } from "@src/handlers/user/getAllTags.handler"
import { CreateTagHandler } from "@src/handlers/user/createTag.handler"
import { GetUserTagsHandler } from "@src/handlers/user/getUserTags.handler"
import { RemoveUserTagHandler } from "@src/handlers/user/removeUserTag.handler"
import { RemoveTagHandler } from "@src/handlers/user/removeTag.handler"


export class UserController {
  static async getUsers (req, res, next) {
    try {
      const data = await GetPlayersHandler.execute({ ...req.body, ...req.query })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getUser (req, res, next) {
    try {
      const data = await GetUserByIdHandler.execute({
        ...req.body,
        ...req.query
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async toggleUserStatus (req, res, next) {
    try {
      const data = await ToggleUserStatusHandler.execute({
        ...req.body,
        ...req.query
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async toggleUserOtpVerify (req, res, next) {
    try {
      const data = await ToggleUserOtpVerifyHandler.execute({
        ...req.body,
        ...req.query
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getDuplicateUsers (req, res, next) {
    try {
      const data = await GetDuplicateUsersHandler.execute({
        ...req.body,
        ...req.query
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async setWithdrawalLimit (req, res, next) {
    try {
      const data = await SetWithdrawalLimitHandler.execute(req.body)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async SetDepositLimit (req, res, next) {
    try {
      const data = await SetDepositLimitHandler.execute(req.body)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async SetSelfExclusion (req, res, next) {
    try {
      const data = await SelfExclusionHandler.execute(req.body)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async setTimeLimit (req, res, next) {
    try {
      const data = await SelfExclusionHandler.execute(req.body)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async setUserInternal (req, res, next) {
    try {
      const data = await SetInternalUserHandler.execute(req.body)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async addComment (req, res, next) {
    try {
      const data = await AddCommentHandler.execute(req.body)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getComments (req, res, next) {
    try {
      const data = await GetAllCommentsPageHandler.execute({
        ...req.body,
        ...req.query
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateCommentsStatus (req, res, next) {
    try {
      const data = await UpdateCommentStatusHandler.execute(
        req.body,
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async verifyEmail (req, res, next) {
    try {
      const data = await VerifyUserEmailHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updatePassword (req, res, next) {
    try {
      const data = await UpdatePasswordHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async resetPassword (req, res, next) {
    try {
      const data = await ResetUserPasswordHandler.execute(
        req.body,
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateUser (req, res, next) {
    try {
      const data = await UpdateUserHandler.execute(
        { ...req.body },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async updateAffiliatePercentage (req, res, next) {
    try {
      const data = await UpdateAffiliatePercentage.execute(
        req.body,
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async toggleKycVerification (req, res, next) {
    try {
      const data = await ToggleKycVerificationHandler.execute({
        ...req.body,
        ...req.query
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async resetKycVerification (req, res, next) {
    try {
      const data = await AdminResetKycHandler.execute({
        ...req.body,
        ...req.query
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async toggleEmailVerification (req, res, next) {
    try {
      const data = await ToggleEmailVerificationHandler.execute({
        ...req.body,
        ...req.query
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async resetPasswordByAdmin (req, res, next) {
    try {
      const data = await ResetPasswordByAdminHandler.execute(req.body, req.context)
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async demographicUser (req, res, next) {
    try {
      const data = await DemographicUserHandler.execute(
        { ...req.query },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getPlayerFinance (req, res, next) {
    try {
      const data = await PlayerFinanceHandler.execute(
        { ...req.query },
        req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async toggleAffiliateStatus (req, res, next) {
    try {
      const data = await ToggleAffiliateStatusHandler.execute({
        ...req.body,
        ...req.query
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getUserW9Status (req, res, next) {
    try {
      const data = await GetUserW9StatusHandler.execute(
        { ...req.body, ...req.query }, req.context
      )
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getDropBonusClaims(req, res, next) {
    try {
      const data = await GetDropBonusClaimsHandler.execute({
        ...req.body,
        ...req.query,
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  // Account Status Management
  static async updateUserAccountStatus(req, res, next) {
    try {
      const data = await UpdateUserAccountStatusHandler.execute({
        ...req.body,
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getUserAccountStatus(req, res, next) {
    try {
      const data = await GetUserAccountStatusHandler.execute({
        ...req.body,
        ...req.query,
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async createUserTag(req, res, next) {
    try {
      const data = await CreateTagHandler.execute({
        ...req.body,
        ...req.query,
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async createOrMapUserTag(req, res, next) {
    try {
      const data = await CreateOrMapUserTagHandler.execute({
        ...req.body,
        ...req.query,
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getAllTags(req, res, next) {
    try {
      const data = await GetAllTagsHandler.execute({
        ...req.body,
        ...req.query,
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

  static async getUserTags(req, res, next) {
    try {
      const data = await GetUserTagsHandler.execute({
        ...req.body,
        ...req.query,
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
  
    static async deleteUserTag(req, res, next) {
    try {
      const data = await RemoveUserTagHandler.execute({
        ...req.body,
        ...req.query,
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }

      static async deleteTag(req, res, next) {
    try {
      const data = await RemoveTagHandler.execute({
        ...req.body,
        ...req.query,
      })
      ApiHelper.sendResponse({ req, res, next }, data)
    } catch (error) {
      next(error)
    }
  }
}
