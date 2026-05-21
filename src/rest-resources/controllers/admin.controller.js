import { AdminLoginHandler } from '@src/handlers/adminUsers/adminLogin.handler'
import { ChangePasswordHandler } from '@src/handlers/adminUsers/changePassword.handler'
import { CreateAdminUserHandler } from '@src/handlers/adminUsers/createAdminUser.handler'
import { ForgetPasswordHandler } from '@src/handlers/adminUsers/forgetPassword.handler'
import { GetAdminChildren } from '@src/handlers/adminUsers/getAdminChilds.handler'
import { GetAdminRolesHandler } from '@src/handlers/adminUsers/getAdminRoles.handler'
import { GetAdminUserDetailsHandler } from '@src/handlers/adminUsers/getAdminUserDetails.handler'
import { GetAdminUsersHandler } from '@src/handlers/adminUsers/getAdminUsers.handler'
import { ToggleAdminUserHandler } from '@src/handlers/adminUsers/toggleAdminUser.handler'
import { UpdateAdminProfile } from '@src/handlers/adminUsers/updateAdminProfile.handler'
import { UpdateAdminUserHandler } from '@src/handlers/adminUsers/updateAdminUser.handler'
import { UpdateProfileDetail } from '@src/handlers/adminUsers/updateProfileDetail.handler'
import { VerifyForgetPasswordHandler } from '@src/handlers/adminUsers/verifyForgetPassword.handler'
import { ApiHelper } from '@src/utils/api.utils'

/**
 * @class AdminController
 * Handles administrative user-related operations such as login, profile updates, role management,
 * and user management in the system.
 */
export class AdminController {
  /**
   * Handles admin login.
   * @param {Request} req - Express request object containing login credentials.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async adminLogin(req, res, next) {
    try {
      const data = await AdminLoginHandler.execute({ ...req.body });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      console.log(">>>>>>>>>>>>>>error", error);
      
      next(error);
    }
  }

  /**
   * Updates the profile of an admin user.
   * @param {Request} req - Express request object containing profile data.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async updateProfile(req, res, next) {
    try {
      const data = await UpdateProfileDetail.execute(req.body, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Retrieves child admin users under a specific admin.
   * @param {Request} req - Express request object with query parameters.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async getAdminChilds(req, res, next) {
    try {
      const data = await GetAdminChildren.execute({ ...req.query, ...req.body });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Toggles the status (active/inactive) of an admin user.
   * @param {Request} req - Express request object containing user ID and new status.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async updateStatus(req, res, next) {
    try {
      const data = await ToggleAdminUserHandler.execute(req.body);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Initiates the forget password process for an admin user.
   * @param {Request} req - Express request object containing email.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async forgetPassword(req, res, next) {
    try {
      const data = await ForgetPasswordHandler.execute({ ...req.body, ...req.query });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Verifies the forget password token and allows password reset.
   * @param {Request} req - Express request object containing reset token and new password.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async verifyForgetPassword(req, res, next) {
    try {
      const data = await VerifyForgetPasswordHandler.execute(req.body);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
  //change password 
  static async changePassword(req, res, next) {
    try {
      const data = await ChangePasswordHandler.execute({ ...req.body, ...req.query });
      ApiHelper.sendResponse({ req, res, next }, data);
    }
    catch (error) {
      next(error);
    }
  }
  /**
   * Creates a new admin user.
   * @param {Request} req - Express request object containing user details.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async createAdminUser(req, res, next) {
    try {
      const data = await CreateAdminUserHandler.execute(req.body, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Retrieves the list of admin roles.
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async getAdminRoles(req, res, next) {
    try {
      const data = await GetAdminRolesHandler.execute(req.body);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Updates an existing admin user's details.
   * @param {Request} req - Express request object containing updated user data.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async updateAdminUser(req, res, next) {
    try {
      const data = await UpdateAdminUserHandler.execute(req.body, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Updates an admin user's profile.
   * @param {Request} req - Express request object containing profile data.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async updateAdminProfile(req, res, next) {
    try {
      const data = await UpdateAdminProfile.execute(req.body, req.context);
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Retrieves details of a specific admin user.
   * @param {Request} req - Express request object containing user ID.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async getAdminUserDetails(req, res, next) {
    try {
      const data = await GetAdminUserDetailsHandler.execute({ ...req.query, ...req.body });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Retrieves a list of all admin users.
   * @param {Request} req - Express request object with pagination/filtering options.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async getAdminUsers(req, res, next) {
    try {
      const data = await GetAdminUsersHandler.execute({ ...req.query, ...req.body });
      ApiHelper.sendResponse({ req, res, next }, data);
    } catch (error) {
      next(error);
    }
  }
}
