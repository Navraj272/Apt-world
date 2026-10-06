"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAdminRoleHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _app = require("../../errors/app.error");
var _errorCodes = require("../../errors/errorCodes");
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class GetAdminRoleHandler extends _baseHandler.BaseHandler {
  async run() {
    const {
      roleId
    } = this.args;
    const data = await _models.default.AdminRole.findOne({
      where: {
        roleId
      }
    });
    if (!data) {
      throw new _app.AppError(_errorCodes.Errors.ADMIN_ROLE_NOT_FOUND);
    }
    return {
      data
    };
  }
}
exports.GetAdminRoleHandler = GetAdminRoleHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXBwIiwiX2Vycm9yQ29kZXMiLCJfYmFzZUhhbmRsZXIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJHZXRBZG1pblJvbGVIYW5kbGVyIiwiQmFzZUhhbmRsZXIiLCJydW4iLCJyb2xlSWQiLCJhcmdzIiwiZGF0YSIsImRiIiwiQWRtaW5Sb2xlIiwiZmluZE9uZSIsIndoZXJlIiwiQXBwRXJyb3IiLCJFcnJvcnMiLCJBRE1JTl9ST0xFX05PVF9GT1VORCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaGFuZGxlcnMvYWRtaW5Sb2xlcy9nZXRBZG1pblJvbGUuaGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnQHNyYy9kYi9tb2RlbHMnXG5pbXBvcnQgeyBBcHBFcnJvciB9IGZyb20gJ0BzcmMvZXJyb3JzL2FwcC5lcnJvcidcbmltcG9ydCB7IEVycm9ycyB9IGZyb20gJ0BzcmMvZXJyb3JzL2Vycm9yQ29kZXMnXG5cbmltcG9ydCB7IEJhc2VIYW5kbGVyIH0gZnJvbSAnQHNyYy9saWJzL2Jhc2VIYW5kbGVyJ1xuXG5leHBvcnQgY2xhc3MgR2V0QWRtaW5Sb2xlSGFuZGxlciBleHRlbmRzIEJhc2VIYW5kbGVyIHtcbiAgYXN5bmMgcnVuKCkge1xuICAgIGNvbnN0IHsgcm9sZUlkIH0gPSB0aGlzLmFyZ3NcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5BZG1pblJvbGUuZmluZE9uZSh7XG4gICAgICB3aGVyZTogeyByb2xlSWQgfVxuICAgIH0pXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBBcHBFcnJvcihFcnJvcnMuQURNSU5fUk9MRV9OT1RfRk9VTkQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGF0YSB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO0FBRUEsSUFBQUcsWUFBQSxHQUFBSCxPQUFBO0FBQW1ELFNBQUFELHVCQUFBSyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBRTVDLE1BQU1HLG1CQUFtQixTQUFTQyx3QkFBVyxDQUFDO0VBQ25ELE1BQU1DLEdBQUdBLENBQUEsRUFBRztJQUNWLE1BQU07TUFBRUM7SUFBTyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxJQUFJO0lBRTVCLE1BQU1DLElBQUksR0FBRyxNQUFNQyxlQUFFLENBQUNDLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDO01BQ3RDQyxLQUFLLEVBQUU7UUFBRU47TUFBTztJQUNsQixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNFLElBQUksRUFBRTtNQUNULE1BQU0sSUFBSUssYUFBUSxDQUFDQyxrQkFBTSxDQUFDQyxvQkFBb0IsQ0FBQztJQUNqRDtJQUVBLE9BQU87TUFBRVA7SUFBSyxDQUFDO0VBQ2pCO0FBQ0Y7QUFBQ1EsT0FBQSxDQUFBYixtQkFBQSxHQUFBQSxtQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==