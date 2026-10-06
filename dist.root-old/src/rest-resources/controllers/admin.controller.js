"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminController = void 0;
var _adminLogin = require("../../handlers/adminUsers/adminLogin.handler");
var _changePassword = require("../../handlers/adminUsers/changePassword.handler");
var _createAdminUser = require("../../handlers/adminUsers/createAdminUser.handler");
var _forgetPassword = require("../../handlers/adminUsers/forgetPassword.handler");
var _getAdminChilds = require("../../handlers/adminUsers/getAdminChilds.handler");
var _getAdminRoles = require("../../handlers/adminUsers/getAdminRoles.handler");
var _getAdminUserDetails = require("../../handlers/adminUsers/getAdminUserDetails.handler");
var _getAdminUsers = require("../../handlers/adminUsers/getAdminUsers.handler");
var _toggleAdminUser = require("../../handlers/adminUsers/toggleAdminUser.handler");
var _updateAdminProfile = require("../../handlers/adminUsers/updateAdminProfile.handler");
var _updateAdminUser = require("../../handlers/adminUsers/updateAdminUser.handler");
var _updateProfileDetail = require("../../handlers/adminUsers/updateProfileDetail.handler");
var _verifyForgetPassword = require("../../handlers/adminUsers/verifyForgetPassword.handler");
var _api = require("../../utils/api.utils");
/**
 * @class AdminController
 * Handles administrative user-related operations such as login, profile updates, role management,
 * and user management in the system.
 */
class AdminController {
  /**
   * Handles admin login.
   * @param {Request} req - Express request object containing login credentials.
   * @param {Response} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  static async adminLogin(req, res, next) {
    try {
      const data = await _adminLogin.AdminLoginHandler.execute({
        ...req.body
      });
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
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
      const data = await _updateProfileDetail.UpdateProfileDetail.execute(req.body, req.context);
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
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
      const data = await _getAdminChilds.GetAdminChildren.execute({
        ...req.query,
        ...req.body
      });
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
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
      const data = await _toggleAdminUser.ToggleAdminUserHandler.execute(req.body);
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
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
      const data = await _forgetPassword.ForgetPasswordHandler.execute({
        ...req.body,
        ...req.query
      });
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
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
      const data = await _verifyForgetPassword.VerifyForgetPasswordHandler.execute(req.body);
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
    } catch (error) {
      next(error);
    }
  }
  //change password 
  static async changePassword(req, res, next) {
    try {
      const data = await _changePassword.ChangePasswordHandler.execute({
        ...req.body,
        ...req.query
      });
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
    } catch (error) {
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
      const data = await _createAdminUser.CreateAdminUserHandler.execute(req.body, req.context);
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
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
      const data = await _getAdminRoles.GetAdminRolesHandler.execute(req.body);
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
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
      const data = await _updateAdminUser.UpdateAdminUserHandler.execute(req.body, req.context);
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
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
      const data = await _updateAdminProfile.UpdateAdminProfile.execute(req.body, req.context);
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
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
      const data = await _getAdminUserDetails.GetAdminUserDetailsHandler.execute({
        ...req.query,
        ...req.body
      });
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
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
      const data = await _getAdminUsers.GetAdminUsersHandler.execute({
        ...req.query,
        ...req.body
      });
      _api.ApiHelper.sendResponse({
        req,
        res,
        next
      }, data);
    } catch (error) {
      next(error);
    }
  }
}
exports.AdminController = AdminController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYWRtaW5Mb2dpbiIsInJlcXVpcmUiLCJfY2hhbmdlUGFzc3dvcmQiLCJfY3JlYXRlQWRtaW5Vc2VyIiwiX2ZvcmdldFBhc3N3b3JkIiwiX2dldEFkbWluQ2hpbGRzIiwiX2dldEFkbWluUm9sZXMiLCJfZ2V0QWRtaW5Vc2VyRGV0YWlscyIsIl9nZXRBZG1pblVzZXJzIiwiX3RvZ2dsZUFkbWluVXNlciIsIl91cGRhdGVBZG1pblByb2ZpbGUiLCJfdXBkYXRlQWRtaW5Vc2VyIiwiX3VwZGF0ZVByb2ZpbGVEZXRhaWwiLCJfdmVyaWZ5Rm9yZ2V0UGFzc3dvcmQiLCJfYXBpIiwiQWRtaW5Db250cm9sbGVyIiwiYWRtaW5Mb2dpbiIsInJlcSIsInJlcyIsIm5leHQiLCJkYXRhIiwiQWRtaW5Mb2dpbkhhbmRsZXIiLCJleGVjdXRlIiwiYm9keSIsIkFwaUhlbHBlciIsInNlbmRSZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVByb2ZpbGUiLCJVcGRhdGVQcm9maWxlRGV0YWlsIiwiY29udGV4dCIsImdldEFkbWluQ2hpbGRzIiwiR2V0QWRtaW5DaGlsZHJlbiIsInF1ZXJ5IiwidXBkYXRlU3RhdHVzIiwiVG9nZ2xlQWRtaW5Vc2VySGFuZGxlciIsImZvcmdldFBhc3N3b3JkIiwiRm9yZ2V0UGFzc3dvcmRIYW5kbGVyIiwidmVyaWZ5Rm9yZ2V0UGFzc3dvcmQiLCJWZXJpZnlGb3JnZXRQYXNzd29yZEhhbmRsZXIiLCJjaGFuZ2VQYXNzd29yZCIsIkNoYW5nZVBhc3N3b3JkSGFuZGxlciIsImNyZWF0ZUFkbWluVXNlciIsIkNyZWF0ZUFkbWluVXNlckhhbmRsZXIiLCJnZXRBZG1pblJvbGVzIiwiR2V0QWRtaW5Sb2xlc0hhbmRsZXIiLCJ1cGRhdGVBZG1pblVzZXIiLCJVcGRhdGVBZG1pblVzZXJIYW5kbGVyIiwidXBkYXRlQWRtaW5Qcm9maWxlIiwiVXBkYXRlQWRtaW5Qcm9maWxlIiwiZ2V0QWRtaW5Vc2VyRGV0YWlscyIsIkdldEFkbWluVXNlckRldGFpbHNIYW5kbGVyIiwiZ2V0QWRtaW5Vc2VycyIsIkdldEFkbWluVXNlcnNIYW5kbGVyIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXN0LXJlc291cmNlcy9jb250cm9sbGVycy9hZG1pbi5jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkbWluTG9naW5IYW5kbGVyIH0gZnJvbSAnQHNyYy9oYW5kbGVycy9hZG1pblVzZXJzL2FkbWluTG9naW4uaGFuZGxlcidcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkSGFuZGxlciB9IGZyb20gJ0BzcmMvaGFuZGxlcnMvYWRtaW5Vc2Vycy9jaGFuZ2VQYXNzd29yZC5oYW5kbGVyJ1xuaW1wb3J0IHsgQ3JlYXRlQWRtaW5Vc2VySGFuZGxlciB9IGZyb20gJ0BzcmMvaGFuZGxlcnMvYWRtaW5Vc2Vycy9jcmVhdGVBZG1pblVzZXIuaGFuZGxlcidcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkSGFuZGxlciB9IGZyb20gJ0BzcmMvaGFuZGxlcnMvYWRtaW5Vc2Vycy9mb3JnZXRQYXNzd29yZC5oYW5kbGVyJ1xuaW1wb3J0IHsgR2V0QWRtaW5DaGlsZHJlbiB9IGZyb20gJ0BzcmMvaGFuZGxlcnMvYWRtaW5Vc2Vycy9nZXRBZG1pbkNoaWxkcy5oYW5kbGVyJ1xuaW1wb3J0IHsgR2V0QWRtaW5Sb2xlc0hhbmRsZXIgfSBmcm9tICdAc3JjL2hhbmRsZXJzL2FkbWluVXNlcnMvZ2V0QWRtaW5Sb2xlcy5oYW5kbGVyJ1xuaW1wb3J0IHsgR2V0QWRtaW5Vc2VyRGV0YWlsc0hhbmRsZXIgfSBmcm9tICdAc3JjL2hhbmRsZXJzL2FkbWluVXNlcnMvZ2V0QWRtaW5Vc2VyRGV0YWlscy5oYW5kbGVyJ1xuaW1wb3J0IHsgR2V0QWRtaW5Vc2Vyc0hhbmRsZXIgfSBmcm9tICdAc3JjL2hhbmRsZXJzL2FkbWluVXNlcnMvZ2V0QWRtaW5Vc2Vycy5oYW5kbGVyJ1xuaW1wb3J0IHsgVG9nZ2xlQWRtaW5Vc2VySGFuZGxlciB9IGZyb20gJ0BzcmMvaGFuZGxlcnMvYWRtaW5Vc2Vycy90b2dnbGVBZG1pblVzZXIuaGFuZGxlcidcbmltcG9ydCB7IFVwZGF0ZUFkbWluUHJvZmlsZSB9IGZyb20gJ0BzcmMvaGFuZGxlcnMvYWRtaW5Vc2Vycy91cGRhdGVBZG1pblByb2ZpbGUuaGFuZGxlcidcbmltcG9ydCB7IFVwZGF0ZUFkbWluVXNlckhhbmRsZXIgfSBmcm9tICdAc3JjL2hhbmRsZXJzL2FkbWluVXNlcnMvdXBkYXRlQWRtaW5Vc2VyLmhhbmRsZXInXG5pbXBvcnQgeyBVcGRhdGVQcm9maWxlRGV0YWlsIH0gZnJvbSAnQHNyYy9oYW5kbGVycy9hZG1pblVzZXJzL3VwZGF0ZVByb2ZpbGVEZXRhaWwuaGFuZGxlcidcbmltcG9ydCB7IFZlcmlmeUZvcmdldFBhc3N3b3JkSGFuZGxlciB9IGZyb20gJ0BzcmMvaGFuZGxlcnMvYWRtaW5Vc2Vycy92ZXJpZnlGb3JnZXRQYXNzd29yZC5oYW5kbGVyJ1xuaW1wb3J0IHsgQXBpSGVscGVyIH0gZnJvbSAnQHNyYy91dGlscy9hcGkudXRpbHMnXG5cbi8qKlxuICogQGNsYXNzIEFkbWluQ29udHJvbGxlclxuICogSGFuZGxlcyBhZG1pbmlzdHJhdGl2ZSB1c2VyLXJlbGF0ZWQgb3BlcmF0aW9ucyBzdWNoIGFzIGxvZ2luLCBwcm9maWxlIHVwZGF0ZXMsIHJvbGUgbWFuYWdlbWVudCxcbiAqIGFuZCB1c2VyIG1hbmFnZW1lbnQgaW4gdGhlIHN5c3RlbS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFkbWluQ29udHJvbGxlciB7XG4gIC8qKlxuICAgKiBIYW5kbGVzIGFkbWluIGxvZ2luLlxuICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcSAtIEV4cHJlc3MgcmVxdWVzdCBvYmplY3QgY29udGFpbmluZyBsb2dpbiBjcmVkZW50aWFscy5cbiAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzIC0gRXhwcmVzcyByZXNwb25zZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHQgLSBFeHByZXNzIG5leHQgbWlkZGxld2FyZSBmdW5jdGlvbi5cbiAgICovXG4gIHN0YXRpYyBhc3luYyBhZG1pbkxvZ2luKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBBZG1pbkxvZ2luSGFuZGxlci5leGVjdXRlKHsgLi4ucmVxLmJvZHkgfSk7XG4gICAgICBBcGlIZWxwZXIuc2VuZFJlc3BvbnNlKHsgcmVxLCByZXMsIG5leHQgfSwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiPj4+Pj4+Pj4+Pj4+Pj5lcnJvclwiLCBlcnJvcik7XG4gICAgICBcbiAgICAgIG5leHQoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwcm9maWxlIG9mIGFuIGFkbWluIHVzZXIuXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxIC0gRXhwcmVzcyByZXF1ZXN0IG9iamVjdCBjb250YWluaW5nIHByb2ZpbGUgZGF0YS5cbiAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzIC0gRXhwcmVzcyByZXNwb25zZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHQgLSBFeHByZXNzIG5leHQgbWlkZGxld2FyZSBmdW5jdGlvbi5cbiAgICovXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVQcm9maWxlKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBVcGRhdGVQcm9maWxlRGV0YWlsLmV4ZWN1dGUocmVxLmJvZHksIHJlcS5jb250ZXh0KTtcbiAgICAgIEFwaUhlbHBlci5zZW5kUmVzcG9uc2UoeyByZXEsIHJlcywgbmV4dCB9LCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbmV4dChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBjaGlsZCBhZG1pbiB1c2VycyB1bmRlciBhIHNwZWNpZmljIGFkbWluLlxuICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcSAtIEV4cHJlc3MgcmVxdWVzdCBvYmplY3Qgd2l0aCBxdWVyeSBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXMgLSBFeHByZXNzIHJlc3BvbnNlIG9iamVjdC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dCAtIEV4cHJlc3MgbmV4dCBtaWRkbGV3YXJlIGZ1bmN0aW9uLlxuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEFkbWluQ2hpbGRzKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBHZXRBZG1pbkNoaWxkcmVuLmV4ZWN1dGUoeyAuLi5yZXEucXVlcnksIC4uLnJlcS5ib2R5IH0pO1xuICAgICAgQXBpSGVscGVyLnNlbmRSZXNwb25zZSh7IHJlcSwgcmVzLCBuZXh0IH0sIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBuZXh0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgc3RhdHVzIChhY3RpdmUvaW5hY3RpdmUpIG9mIGFuIGFkbWluIHVzZXIuXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxIC0gRXhwcmVzcyByZXF1ZXN0IG9iamVjdCBjb250YWluaW5nIHVzZXIgSUQgYW5kIG5ldyBzdGF0dXMuXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlcyAtIEV4cHJlc3MgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0IC0gRXhwcmVzcyBuZXh0IG1pZGRsZXdhcmUgZnVuY3Rpb24uXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgdXBkYXRlU3RhdHVzKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBUb2dnbGVBZG1pblVzZXJIYW5kbGVyLmV4ZWN1dGUocmVxLmJvZHkpO1xuICAgICAgQXBpSGVscGVyLnNlbmRSZXNwb25zZSh7IHJlcSwgcmVzLCBuZXh0IH0sIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBuZXh0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhdGVzIHRoZSBmb3JnZXQgcGFzc3dvcmQgcHJvY2VzcyBmb3IgYW4gYWRtaW4gdXNlci5cbiAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXEgLSBFeHByZXNzIHJlcXVlc3Qgb2JqZWN0IGNvbnRhaW5pbmcgZW1haWwuXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlcyAtIEV4cHJlc3MgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0IC0gRXhwcmVzcyBuZXh0IG1pZGRsZXdhcmUgZnVuY3Rpb24uXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZm9yZ2V0UGFzc3dvcmQocmVxLCByZXMsIG5leHQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEZvcmdldFBhc3N3b3JkSGFuZGxlci5leGVjdXRlKHsgLi4ucmVxLmJvZHksIC4uLnJlcS5xdWVyeSB9KTtcbiAgICAgIEFwaUhlbHBlci5zZW5kUmVzcG9uc2UoeyByZXEsIHJlcywgbmV4dCB9LCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbmV4dChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSBmb3JnZXQgcGFzc3dvcmQgdG9rZW4gYW5kIGFsbG93cyBwYXNzd29yZCByZXNldC5cbiAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXEgLSBFeHByZXNzIHJlcXVlc3Qgb2JqZWN0IGNvbnRhaW5pbmcgcmVzZXQgdG9rZW4gYW5kIG5ldyBwYXNzd29yZC5cbiAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzIC0gRXhwcmVzcyByZXNwb25zZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHQgLSBFeHByZXNzIG5leHQgbWlkZGxld2FyZSBmdW5jdGlvbi5cbiAgICovXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlGb3JnZXRQYXNzd29yZChyZXEsIHJlcywgbmV4dCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgVmVyaWZ5Rm9yZ2V0UGFzc3dvcmRIYW5kbGVyLmV4ZWN1dGUocmVxLmJvZHkpO1xuICAgICAgQXBpSGVscGVyLnNlbmRSZXNwb25zZSh7IHJlcSwgcmVzLCBuZXh0IH0sIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBuZXh0KGVycm9yKTtcbiAgICB9XG4gIH1cbiAgLy9jaGFuZ2UgcGFzc3dvcmQgXG4gIHN0YXRpYyBhc3luYyBjaGFuZ2VQYXNzd29yZChyZXEsIHJlcywgbmV4dCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgQ2hhbmdlUGFzc3dvcmRIYW5kbGVyLmV4ZWN1dGUoeyAuLi5yZXEuYm9keSwgLi4ucmVxLnF1ZXJ5IH0pO1xuICAgICAgQXBpSGVscGVyLnNlbmRSZXNwb25zZSh7IHJlcSwgcmVzLCBuZXh0IH0sIGRhdGEpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG5leHQoZXJyb3IpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBhZG1pbiB1c2VyLlxuICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcSAtIEV4cHJlc3MgcmVxdWVzdCBvYmplY3QgY29udGFpbmluZyB1c2VyIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlcyAtIEV4cHJlc3MgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0IC0gRXhwcmVzcyBuZXh0IG1pZGRsZXdhcmUgZnVuY3Rpb24uXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgY3JlYXRlQWRtaW5Vc2VyKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBDcmVhdGVBZG1pblVzZXJIYW5kbGVyLmV4ZWN1dGUocmVxLmJvZHksIHJlcS5jb250ZXh0KTtcbiAgICAgIEFwaUhlbHBlci5zZW5kUmVzcG9uc2UoeyByZXEsIHJlcywgbmV4dCB9LCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbmV4dChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgbGlzdCBvZiBhZG1pbiByb2xlcy5cbiAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXEgLSBFeHByZXNzIHJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXMgLSBFeHByZXNzIHJlc3BvbnNlIG9iamVjdC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dCAtIEV4cHJlc3MgbmV4dCBtaWRkbGV3YXJlIGZ1bmN0aW9uLlxuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEFkbWluUm9sZXMocmVxLCByZXMsIG5leHQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEdldEFkbWluUm9sZXNIYW5kbGVyLmV4ZWN1dGUocmVxLmJvZHkpO1xuICAgICAgQXBpSGVscGVyLnNlbmRSZXNwb25zZSh7IHJlcSwgcmVzLCBuZXh0IH0sIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBuZXh0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBhbiBleGlzdGluZyBhZG1pbiB1c2VyJ3MgZGV0YWlscy5cbiAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXEgLSBFeHByZXNzIHJlcXVlc3Qgb2JqZWN0IGNvbnRhaW5pbmcgdXBkYXRlZCB1c2VyIGRhdGEuXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlcyAtIEV4cHJlc3MgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0IC0gRXhwcmVzcyBuZXh0IG1pZGRsZXdhcmUgZnVuY3Rpb24uXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgdXBkYXRlQWRtaW5Vc2VyKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBVcGRhdGVBZG1pblVzZXJIYW5kbGVyLmV4ZWN1dGUocmVxLmJvZHksIHJlcS5jb250ZXh0KTtcbiAgICAgIEFwaUhlbHBlci5zZW5kUmVzcG9uc2UoeyByZXEsIHJlcywgbmV4dCB9LCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbmV4dChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYW4gYWRtaW4gdXNlcidzIHByb2ZpbGUuXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxIC0gRXhwcmVzcyByZXF1ZXN0IG9iamVjdCBjb250YWluaW5nIHByb2ZpbGUgZGF0YS5cbiAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzIC0gRXhwcmVzcyByZXNwb25zZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHQgLSBFeHByZXNzIG5leHQgbWlkZGxld2FyZSBmdW5jdGlvbi5cbiAgICovXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVBZG1pblByb2ZpbGUocmVxLCByZXMsIG5leHQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFVwZGF0ZUFkbWluUHJvZmlsZS5leGVjdXRlKHJlcS5ib2R5LCByZXEuY29udGV4dCk7XG4gICAgICBBcGlIZWxwZXIuc2VuZFJlc3BvbnNlKHsgcmVxLCByZXMsIG5leHQgfSwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG5leHQoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgZGV0YWlscyBvZiBhIHNwZWNpZmljIGFkbWluIHVzZXIuXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxIC0gRXhwcmVzcyByZXF1ZXN0IG9iamVjdCBjb250YWluaW5nIHVzZXIgSUQuXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlcyAtIEV4cHJlc3MgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0IC0gRXhwcmVzcyBuZXh0IG1pZGRsZXdhcmUgZnVuY3Rpb24uXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0QWRtaW5Vc2VyRGV0YWlscyhyZXEsIHJlcywgbmV4dCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgR2V0QWRtaW5Vc2VyRGV0YWlsc0hhbmRsZXIuZXhlY3V0ZSh7IC4uLnJlcS5xdWVyeSwgLi4ucmVxLmJvZHkgfSk7XG4gICAgICBBcGlIZWxwZXIuc2VuZFJlc3BvbnNlKHsgcmVxLCByZXMsIG5leHQgfSwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG5leHQoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSBsaXN0IG9mIGFsbCBhZG1pbiB1c2Vycy5cbiAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXEgLSBFeHByZXNzIHJlcXVlc3Qgb2JqZWN0IHdpdGggcGFnaW5hdGlvbi9maWx0ZXJpbmcgb3B0aW9ucy5cbiAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzIC0gRXhwcmVzcyByZXNwb25zZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHQgLSBFeHByZXNzIG5leHQgbWlkZGxld2FyZSBmdW5jdGlvbi5cbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRBZG1pblVzZXJzKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBHZXRBZG1pblVzZXJzSGFuZGxlci5leGVjdXRlKHsgLi4ucmVxLnF1ZXJ5LCAuLi5yZXEuYm9keSB9KTtcbiAgICAgIEFwaUhlbHBlci5zZW5kUmVzcG9uc2UoeyByZXEsIHJlcywgbmV4dCB9LCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbmV4dChlcnJvcik7XG4gICAgfVxuICB9XG59XG4i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