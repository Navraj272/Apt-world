"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateAdminProfile = void 0;
var _errorCodes = require("../../errors/errorCodes");
var _app = require("../../errors/app.error");
var _sequelize = require("sequelize");
var _models = _interopRequireDefault(require("../../db/models"));
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class UpdateAdminProfile extends _baseHandler.BaseHandler {
  async run() {
    let {
      firstName,
      lastName,
      phone,
      email,
      adminUsername,
      id
    } = this.args;
    const updateAdmin = {
      firstName,
      lastName,
      phone,
      email,
      adminUsername
    };
    const transaction = this.context.sequelizeTransaction;
    const checkAdminExists = await _models.default.AdminUser.findOne({
      where: {
        adminUserId: id
      },
      attributes: ['adminUserId', 'email', 'adminUsername', 'password'],
      transaction
    });
    if (!checkAdminExists) throw new _app.AppError(_errorCodes.Errors.ADMIN_NOT_FOUND);
    if (checkAdminExists.email !== email || checkAdminExists.adminUsername !== adminUsername) {
      email = email.toLowerCase();
      const emailOradminUsernameExist = await _models.default.AdminUser.findOne({
        where: {
          [_sequelize.Op.or]: {
            email,
            adminUsername
          },
          [_sequelize.Op.not]: {
            adminUserId: id
          }
        },
        attributes: ['email', 'adminUsername'],
        transaction
      });
      if (emailOradminUsernameExist) {
        if (emailOradminUsernameExist.email === email) throw new _app.AppError(_errorCodes.Errors.EMAIL_ALREADY_EXISTS);
        throw new _app.AppError(_errorCodes.Errors.USER_NAME_EXISTS);
      }
    }
    await _models.default.AdminUser.update(updateAdmin, {
      where: {
        adminUserId: checkAdminExists.adminUserId
      },
      transaction
    });
    const adminDetail = await _models.default.AdminUser.findOne({
      where: {
        adminUserId: id
      },
      attributes: {
        exclude: ['password']
      },
      transaction
    });
    return {
      adminDetail
    };
  }
}
exports.UpdateAdminProfile = UpdateAdminProfile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXJyb3JDb2RlcyIsInJlcXVpcmUiLCJfYXBwIiwiX3NlcXVlbGl6ZSIsIl9tb2RlbHMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2Jhc2VIYW5kbGVyIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiVXBkYXRlQWRtaW5Qcm9maWxlIiwiQmFzZUhhbmRsZXIiLCJydW4iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBob25lIiwiZW1haWwiLCJhZG1pblVzZXJuYW1lIiwiaWQiLCJhcmdzIiwidXBkYXRlQWRtaW4iLCJ0cmFuc2FjdGlvbiIsImNvbnRleHQiLCJzZXF1ZWxpemVUcmFuc2FjdGlvbiIsImNoZWNrQWRtaW5FeGlzdHMiLCJkYiIsIkFkbWluVXNlciIsImZpbmRPbmUiLCJ3aGVyZSIsImFkbWluVXNlcklkIiwiYXR0cmlidXRlcyIsIkFwcEVycm9yIiwiRXJyb3JzIiwiQURNSU5fTk9UX0ZPVU5EIiwidG9Mb3dlckNhc2UiLCJlbWFpbE9yYWRtaW5Vc2VybmFtZUV4aXN0IiwiT3AiLCJvciIsIm5vdCIsIkVNQUlMX0FMUkVBRFlfRVhJU1RTIiwiVVNFUl9OQU1FX0VYSVNUUyIsInVwZGF0ZSIsImFkbWluRGV0YWlsIiwiZXhjbHVkZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaGFuZGxlcnMvYWRtaW5Vc2Vycy91cGRhdGVBZG1pblByb2ZpbGUuaGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvcnMgfSBmcm9tICdAc3JjL2Vycm9ycy9lcnJvckNvZGVzJ1xuaW1wb3J0IHsgQXBwRXJyb3IgfSBmcm9tICdAc3JjL2Vycm9ycy9hcHAuZXJyb3InXG5pbXBvcnQgeyBPcCB9IGZyb20gJ3NlcXVlbGl6ZSdcbmltcG9ydCBkYiBmcm9tICdAc3JjL2RiL21vZGVscydcbmltcG9ydCB7IEJhc2VIYW5kbGVyIH0gZnJvbSAnQHNyYy9saWJzL2Jhc2VIYW5kbGVyJ1xuXG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVBZG1pblByb2ZpbGUgZXh0ZW5kcyBCYXNlSGFuZGxlciB7XG4gIGFzeW5jIHJ1bigpIHtcbiAgICBsZXQgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBwaG9uZSwgZW1haWwsIGFkbWluVXNlcm5hbWUsIGlkIH0gPSB0aGlzLmFyZ3NcbiAgICBjb25zdCB1cGRhdGVBZG1pbiA9IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmUsIGVtYWlsLCBhZG1pblVzZXJuYW1lIH1cbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuY29udGV4dC5zZXF1ZWxpemVUcmFuc2FjdGlvblxuXG4gICAgY29uc3QgY2hlY2tBZG1pbkV4aXN0cyA9IGF3YWl0IGRiLkFkbWluVXNlci5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7IGFkbWluVXNlcklkOiBpZCB9LFxuICAgICAgYXR0cmlidXRlczogWydhZG1pblVzZXJJZCcsICdlbWFpbCcsICdhZG1pblVzZXJuYW1lJywgJ3Bhc3N3b3JkJ10sXG4gICAgICB0cmFuc2FjdGlvblxuICAgIH0pXG4gICAgaWYgKCFjaGVja0FkbWluRXhpc3RzKSB0aHJvdyBuZXcgQXBwRXJyb3IoRXJyb3JzLkFETUlOX05PVF9GT1VORClcblxuICAgIGlmICgoY2hlY2tBZG1pbkV4aXN0cy5lbWFpbCAhPT0gZW1haWwpIHx8IChjaGVja0FkbWluRXhpc3RzLmFkbWluVXNlcm5hbWUgIT09IGFkbWluVXNlcm5hbWUpKSB7XG4gICAgICBlbWFpbCA9IGVtYWlsLnRvTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IGVtYWlsT3JhZG1pblVzZXJuYW1lRXhpc3QgPSBhd2FpdCBkYi5BZG1pblVzZXIuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IFtPcC5vcl06IHsgZW1haWwsIGFkbWluVXNlcm5hbWUgfSwgW09wLm5vdF06IHsgYWRtaW5Vc2VySWQ6IGlkIH0gfSxcbiAgICAgICAgYXR0cmlidXRlczogWydlbWFpbCcsICdhZG1pblVzZXJuYW1lJ10sXG4gICAgICAgIHRyYW5zYWN0aW9uXG4gICAgICB9KVxuXG4gICAgICBpZiAoZW1haWxPcmFkbWluVXNlcm5hbWVFeGlzdCkge1xuICAgICAgICBpZiAoZW1haWxPcmFkbWluVXNlcm5hbWVFeGlzdC5lbWFpbCA9PT0gZW1haWwpIHRocm93IG5ldyBBcHBFcnJvcihFcnJvcnMuRU1BSUxfQUxSRUFEWV9FWElTVFMpXG5cbiAgICAgICAgdGhyb3cgbmV3IEFwcEVycm9yKEVycm9ycy5VU0VSX05BTUVfRVhJU1RTKVxuICAgICAgfVxuICAgIH1cblxuICAgIGF3YWl0IGRiLkFkbWluVXNlci51cGRhdGUoXG4gICAgICB1cGRhdGVBZG1pbixcbiAgICAgIHtcbiAgICAgICAgd2hlcmU6IHsgYWRtaW5Vc2VySWQ6IGNoZWNrQWRtaW5FeGlzdHMuYWRtaW5Vc2VySWQgfSxcbiAgICAgICAgdHJhbnNhY3Rpb25cbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgYWRtaW5EZXRhaWwgPSBhd2FpdCBkYi5BZG1pblVzZXIuZmluZE9uZSh7XG4gICAgICB3aGVyZTogeyBhZG1pblVzZXJJZDogaWQgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHsgZXhjbHVkZTogWydwYXNzd29yZCddIH0sXG4gICAgICB0cmFuc2FjdGlvblxuICAgIH0pXG5cbiAgICByZXR1cm4geyBhZG1pbkRldGFpbCB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsVUFBQSxHQUFBRixPQUFBO0FBQ0EsSUFBQUcsT0FBQSxHQUFBQyxzQkFBQSxDQUFBSixPQUFBO0FBQ0EsSUFBQUssWUFBQSxHQUFBTCxPQUFBO0FBQW1ELFNBQUFJLHVCQUFBRSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBRzVDLE1BQU1HLGtCQUFrQixTQUFTQyx3QkFBVyxDQUFD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