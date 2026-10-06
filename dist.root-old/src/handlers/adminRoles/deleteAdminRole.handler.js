"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteAdminRoleHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _app = require("../../errors/app.error");
var _errorCodes = require("../../errors/errorCodes");
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class DeleteAdminRoleHandler extends _baseHandler.BaseHandler {
  async run() {
    const {
      roleId
    } = this.args;
    const transaction = this.context.sequelizeTransaction;

    //const adminUsers = await db.AdminRole.findAll({ where: { adminRoleId: roleId }, transaction })
    // if (adminUsers.length > 0) throw new AppError(Errors.ADMIN_ALREADY_EXISTS)
    const adminRole = await _models.default.AdminRole.findOne({
      where: {
        roleId
      },
      transaction
    });
    if (!adminRole) {
      throw new _app.AppError(_errorCodes.Errors.ADMIN_ROLE_NOT_FOUND);
    }
    try {
      await adminRole.destroy({
        transaction
      });
      return {
        success: true
      };
    } catch (error) {
      throw error;
    }
  }
}
exports.DeleteAdminRoleHandler = DeleteAdminRoleHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXBwIiwiX2Vycm9yQ29kZXMiLCJfYmFzZUhhbmRsZXIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJEZWxldGVBZG1pblJvbGVIYW5kbGVyIiwiQmFzZUhhbmRsZXIiLCJydW4iLCJyb2xlSWQiLCJhcmdzIiwidHJhbnNhY3Rpb24iLCJjb250ZXh0Iiwic2VxdWVsaXplVHJhbnNhY3Rpb24iLCJhZG1pblJvbGUiLCJkYiIsIkFkbWluUm9sZSIsImZpbmRPbmUiLCJ3aGVyZSIsIkFwcEVycm9yIiwiRXJyb3JzIiwiQURNSU5fUk9MRV9OT1RfRk9VTkQiLCJkZXN0cm95Iiwic3VjY2VzcyIsImVycm9yIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9oYW5kbGVycy9hZG1pblJvbGVzL2RlbGV0ZUFkbWluUm9sZS5oYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICdAc3JjL2RiL21vZGVscyc7XG5pbXBvcnQgeyBBcHBFcnJvciB9IGZyb20gJ0BzcmMvZXJyb3JzL2FwcC5lcnJvcic7XG5pbXBvcnQgeyBFcnJvcnMgfSBmcm9tICdAc3JjL2Vycm9ycy9lcnJvckNvZGVzJztcbmltcG9ydCB7IEJhc2VIYW5kbGVyIH0gZnJvbSAnQHNyYy9saWJzL2Jhc2VIYW5kbGVyJztcblxuXG5leHBvcnQgY2xhc3MgRGVsZXRlQWRtaW5Sb2xlSGFuZGxlciBleHRlbmRzIEJhc2VIYW5kbGVyIHtcbiAgYXN5bmMgcnVuKCkge1xuICAgIGNvbnN0IHsgcm9sZUlkIH0gPSB0aGlzLmFyZ3M7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmNvbnRleHQuc2VxdWVsaXplVHJhbnNhY3Rpb247XG5cbiAgICAvL2NvbnN0IGFkbWluVXNlcnMgPSBhd2FpdCBkYi5BZG1pblJvbGUuZmluZEFsbCh7IHdoZXJlOiB7IGFkbWluUm9sZUlkOiByb2xlSWQgfSwgdHJhbnNhY3Rpb24gfSlcbiAgICAvLyBpZiAoYWRtaW5Vc2Vycy5sZW5ndGggPiAwKSB0aHJvdyBuZXcgQXBwRXJyb3IoRXJyb3JzLkFETUlOX0FMUkVBRFlfRVhJU1RTKVxuICAgIGNvbnN0IGFkbWluUm9sZSA9IGF3YWl0IGRiLkFkbWluUm9sZS5maW5kT25lKHsgd2hlcmU6IHsgcm9sZUlkIH0sIHRyYW5zYWN0aW9uIH0pO1xuXG4gICAgaWYgKCFhZG1pblJvbGUpIHtcbiAgICAgIHRocm93IG5ldyBBcHBFcnJvcihFcnJvcnMuQURNSU5fUk9MRV9OT1RfRk9VTkQpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhZG1pblJvbGUuZGVzdHJveSh7IHRyYW5zYWN0aW9uIH0pO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7QUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7QUFDQSxJQUFBRyxZQUFBLEdBQUFILE9BQUE7QUFBb0QsU0FBQUQsdUJBQUFLLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxLQUFBRSxPQUFBLEVBQUFGLENBQUE7QUFHN0MsTUFBTUcsc0JBQXNCLFNBQVNDLHdCQUFXLENBQUM7RUFDdEQsTUFBTUMsR0FBR0EsQ0FBQSxFQUFHO0lBQ1YsTUFBTTtNQUFFQztJQUFPLENBQUMsR0FBRyxJQUFJLENBQUNDLElBQUk7SUFDNUIsTUFBTUMsV0FBVyxHQUFHLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxvQkFBb0I7O0lBRXJEO0lBQ0E7SUFDQSxNQUFNQyxTQUFTLEdBQUcsTUFBTUMsZUFBRSxDQUFDQyxTQUFTLENBQUNDLE9BQU8sQ0FBQztNQUFFQyxLQUFLLEVBQUU7UUFBRVQ7TUFBTyxDQUFDO01BQUVFO0lBQVksQ0FBQyxDQUFDO0lBRWhGLElBQUksQ0FBQ0csU0FBUyxFQUFFO01BQ2QsTUFBTSxJQUFJSyxhQUFRLENBQUNDLGtCQUFNLENBQUNDLG9CQUFvQixDQUFDO0lBQ2pEO0lBRUEsSUFBSTtNQUNGLE1BQU1QLFNBQVMsQ0FBQ1EsT0FBTyxDQUFDO1FBQUVYO01BQVksQ0FBQyxDQUFDO01BQ3hDLE9BQU87UUFBRVksT0FBTyxFQUFFO01BQUssQ0FBQztJQUMxQixDQUFDLENBQUMsT0FBT0MsS0FBSyxFQUFFO01BQ2QsTUFBTUEsS0FBSztJQUNiO0VBQ0Y7QUFDRjtBQUFDQyxPQUFBLENBQUFuQixzQkFBQSxHQUFBQSxzQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==