"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateAdminUserHandler = void 0;
var _errorCodes = require("../../errors/errorCodes");
var _app = require("../../errors/app.error");
var _sequelize = require("sequelize");
var _models = _interopRequireDefault(require("../../db/models"));
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class UpdateAdminUserHandler extends _baseHandler.BaseHandler {
  async run() {
    let {
      adminUserId,
      firstName,
      lastName,
      email,
      adminUsername,
      permission,
      group,
      isActive
    } = this.args;
    const transaction = this.context.sequelizeTransaction;
    const checkAdminExists = await _models.default.AdminUser.findOne({
      where: {
        adminUserId
      },
      attributes: ['adminUserId', 'email', 'adminUsername'],
      transaction
    });
    if (!checkAdminExists) throw new _app.AppError(_errorCodes.Errors.ADMIN_NOT_FOUND);
    email = email.toLowerCase();
    if (checkAdminExists.email !== email || checkAdminExists.adminUsername !== adminUsername) {
      const emailOradminUsernameExist = await _models.default.AdminUser.findOne({
        where: {
          [_sequelize.Op.or]: {
            email,
            adminUsername
          },
          [_sequelize.Op.not]: {
            adminUserId
          }
        },
        attributes: ['email', 'adminUsername'],
        transaction
      });
      if (emailOradminUsernameExist) {
        if (emailOradminUsernameExist.email === email) {
          throw new _app.AppError(_errorCodes.Errors.EMAIL_ALREADY_EXISTS);
        }
        throw new _app.AppError(_errorCodes.Errors.USER_NAME_EXISTS);
      }
    }
    const updateAdminUser = await _models.default.AdminUser.update({
      firstName,
      lastName,
      email,
      adminUsername,
      group,
      permission,
      isActive,
      group
    }, {
      where: {
        adminUserId: checkAdminExists.adminUserId
      },
      transaction
    });
    return {
      success: true
    };
  }
}
exports.UpdateAdminUserHandler = UpdateAdminUserHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXJyb3JDb2RlcyIsInJlcXVpcmUiLCJfYXBwIiwiX3NlcXVlbGl6ZSIsIl9tb2RlbHMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2Jhc2VIYW5kbGVyIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiVXBkYXRlQWRtaW5Vc2VySGFuZGxlciIsIkJhc2VIYW5kbGVyIiwicnVuIiwiYWRtaW5Vc2VySWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiYWRtaW5Vc2VybmFtZSIsInBlcm1pc3Npb24iLCJncm91cCIsImlzQWN0aXZlIiwiYXJncyIsInRyYW5zYWN0aW9uIiwiY29udGV4dCIsInNlcXVlbGl6ZVRyYW5zYWN0aW9uIiwiY2hlY2tBZG1pbkV4aXN0cyIsImRiIiwiQWRtaW5Vc2VyIiwiZmluZE9uZSIsIndoZXJlIiwiYXR0cmlidXRlcyIsIkFwcEVycm9yIiwiRXJyb3JzIiwiQURNSU5fTk9UX0ZPVU5EIiwidG9Mb3dlckNhc2UiLCJlbWFpbE9yYWRtaW5Vc2VybmFtZUV4aXN0IiwiT3AiLCJvciIsIm5vdCIsIkVNQUlMX0FMUkVBRFlfRVhJU1RTIiwiVVNFUl9OQU1FX0VYSVNUUyIsInVwZGF0ZUFkbWluVXNlciIsInVwZGF0ZSIsInN1Y2Nlc3MiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2hhbmRsZXJzL2FkbWluVXNlcnMvdXBkYXRlQWRtaW5Vc2VyLmhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JzIH0gZnJvbSAnQHNyYy9lcnJvcnMvZXJyb3JDb2RlcydcbmltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSAnQHNyYy9lcnJvcnMvYXBwLmVycm9yJ1xuaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnXG5pbXBvcnQgZGIgZnJvbSAnQHNyYy9kYi9tb2RlbHMnXG5pbXBvcnQgeyBCYXNlSGFuZGxlciB9IGZyb20gJ0BzcmMvbGlicy9iYXNlSGFuZGxlcidcblxuXG5leHBvcnQgY2xhc3MgVXBkYXRlQWRtaW5Vc2VySGFuZGxlciBleHRlbmRzIEJhc2VIYW5kbGVyIHtcbiAgYXN5bmMgcnVuKCkge1xuICAgIGxldCB7IGFkbWluVXNlcklkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgYWRtaW5Vc2VybmFtZSwgcGVybWlzc2lvbiwgZ3JvdXAsIGlzQWN0aXZlIH0gPSB0aGlzLmFyZ3NcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuY29udGV4dC5zZXF1ZWxpemVUcmFuc2FjdGlvblxuXG5cbiAgICBjb25zdCBjaGVja0FkbWluRXhpc3RzID0gYXdhaXQgZGIuQWRtaW5Vc2VyLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHsgYWRtaW5Vc2VySWQgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IFsnYWRtaW5Vc2VySWQnLCAnZW1haWwnLCAnYWRtaW5Vc2VybmFtZSddLFxuICAgICAgdHJhbnNhY3Rpb24sXG4gICAgfSlcblxuICAgIGlmICghY2hlY2tBZG1pbkV4aXN0cykgdGhyb3cgbmV3IEFwcEVycm9yKEVycm9ycy5BRE1JTl9OT1RfRk9VTkQpXG5cbiAgICBlbWFpbCA9IGVtYWlsLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoKGNoZWNrQWRtaW5FeGlzdHMuZW1haWwgIT09IGVtYWlsKSB8fCAoY2hlY2tBZG1pbkV4aXN0cy5hZG1pblVzZXJuYW1lICE9PSBhZG1pblVzZXJuYW1lKSkge1xuICAgICAgY29uc3QgZW1haWxPcmFkbWluVXNlcm5hbWVFeGlzdCA9IGF3YWl0IGRiLkFkbWluVXNlci5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgW09wLm9yXTogeyBlbWFpbCwgYWRtaW5Vc2VybmFtZSB9LCBbT3Aubm90XTogeyBhZG1pblVzZXJJZCB9IH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IFsnZW1haWwnLCAnYWRtaW5Vc2VybmFtZSddLFxuICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlbWFpbE9yYWRtaW5Vc2VybmFtZUV4aXN0KSB7XG4gICAgICAgIGlmIChlbWFpbE9yYWRtaW5Vc2VybmFtZUV4aXN0LmVtYWlsID09PSBlbWFpbCkge1xuICAgICAgICAgIHRocm93IG5ldyBBcHBFcnJvcihFcnJvcnMuRU1BSUxfQUxSRUFEWV9FWElTVFMpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEFwcEVycm9yKEVycm9ycy5VU0VSX05BTUVfRVhJU1RTKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZUFkbWluVXNlciA9IGF3YWl0IGRiLkFkbWluVXNlci51cGRhdGUoXG4gICAgICB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBhZG1pblVzZXJuYW1lLCBncm91cCwgcGVybWlzc2lvbiwgaXNBY3RpdmUsIGdyb3VwIH0sXG4gICAgICB7IHdoZXJlOiB7IGFkbWluVXNlcklkOiBjaGVja0FkbWluRXhpc3RzLmFkbWluVXNlcklkIH0sIHRyYW5zYWN0aW9uIH1cbiAgICApXG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7QUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7QUFDQSxJQUFBRSxVQUFBLEdBQUFGLE9BQUE7QUFDQSxJQUFBRyxPQUFBLEdBQUFDLHNCQUFBLENBQUFKLE9BQUE7QUFDQSxJQUFBSyxZQUFBLEdBQUFMLE9BQUE7QUFBbUQsU0FBQUksdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxLQUFBRSxPQUFBLEVBQUFGLENBQUE7QUFHNUMsTUFBTUcsc0JBQXNCLFNBQVNDLHdCQUFXLENBQUM7RUFDdEQsTUFBTUMsR0FBR0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSTtNQUFFQyxXQUFXO01BQUVDLFNBQVM7TUFBRUMsUUFBUTtNQUFFQyxLQUFLO01BQUVDLGFBQWE7TUFBRUMsVUFBVTtNQUFFQyxLQUFLO01BQUVDO0lBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQ0MsSUFBSTtJQUN2RyxNQUFNQyxXQUFXLEdBQUcsSUFBSSxDQUFDQyxPQUFPLENBQUNDLG9CQUFvQjtJQUdyRCxNQUFNQyxnQkFBZ0IsR0FBRyxNQUFNQyxlQUFFLENBQUNDLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDO01BQ2xEQyxLQUFLLEVBQUU7UUFBRWhCO01BQVksQ0FBQztNQUN0QmlCLFVBQVUsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDO01BQ3JEUjtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0csZ0JBQWdCLEVBQUUsTUFBTSxJQUFJTSxhQUFRLENBQUNDLGtCQUFNLENBQUNDLGVBQWUsQ0FBQztJQUVqRWpCLEtBQUssR0FBR0EsS0FBSyxDQUFDa0IsV0FBVyxDQUFDLENBQUM7SUFDM0IsSUFBS1QsZ0JBQWdCLENBQUNULEtBQUssS0FBS0EsS0FBSyxJQUFNUyxnQkFBZ0IsQ0FBQ1IsYUFBYSxLQUFLQSxhQUFjLEVBQUU7TUFDNUYsTUFBTWtCLHlCQUF5QixHQUFHLE1BQU1ULGVBQUUsQ0FBQ0MsU0FBUyxDQUFDQyxPQUFPLENBQUM7UUFDM0RDLEtBQUssRUFBRTtVQUFFLENBQUNPLGFBQUUsQ0FBQ0MsRUFBRSxHQUFHO1lBQUVyQixLQUFLO1lBQUVDO1VBQWMsQ0FBQztVQUFFLENBQUNtQixhQUFFLENBQUNFLEdBQUcsR0FBRztZQUFFekI7VUFBWTtRQUFFLENBQUM7UUFDdkVpQixVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO1FBQ3RDUjtNQUNGLENBQUMsQ0FBQztNQUVGLElBQUlhLHlCQUF5QixFQUFFO1FBQzdCLElBQUlBLHlCQUF5QixDQUFDbkIsS0FBSyxLQUFLQSxLQUFLLEVBQUU7VUFDN0MsTUFBTSxJQUFJZSxhQUFRLENBQUNDLGtCQUFNLENBQUNPLG9CQUFvQixDQUFDO1FBQ2pEO1FBQ0EsTUFBTSxJQUFJUixhQUFRLENBQUNDLGtCQUFNLENBQUNRLGdCQUFnQixDQUFDO01BQzdDO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlLEdBQUcsTUFBTWYsZUFBRSxDQUFDQyxTQUFTLENBQUNlLE1BQU0sQ0FDL0M7TUFBRTVCLFNBQVM7TUFBRUMsUUFBUTtNQUFFQyxLQUFLO01BQUVDLGFBQWE7TUFBRUUsS0FBSztNQUFFRCxVQUFVO01BQUVFLFFBQVE7TUFBRUQ7SUFBTSxDQUFDLEVBQ2pGO01BQUVVLEtBQUssRUFBRTtRQUFFaEIsV0FBVyxFQUFFWSxnQkFBZ0IsQ0FBQ1o7TUFBWSxDQUFDO01BQUVTO0lBQVksQ0FDdEUsQ0FBQztJQUVELE9BQU87TUFBRXFCLE9BQU8sRUFBRTtJQUFLLENBQUM7RUFDMUI7QUFDRjtBQUFDQyxPQUFBLENBQUFsQyxzQkFBQSxHQUFBQSxzQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==