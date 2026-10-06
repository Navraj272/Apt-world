"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAdminRoleHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _app = require("../../errors/app.error");
var _errorCodes = require("../../errors/errorCodes");
var _baseHandler = require("../../libs/baseHandler");
var _sequelize = _interopRequireDefault(require("sequelize"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class CreateAdminRoleHandler extends _baseHandler.BaseHandler {
  async run() {
    const {
      name,
      permission,
      level
    } = this.args;

    // Ensure transaction exists
    const transaction = this.dbTransaction;
    // Check if a role with the same name or level already exists
    const existingRole = await _models.default.AdminRole.findOne({
      where: {
        [_sequelize.default.or]: [{
          name
        }, {
          level
        }]
      },
      transaction
    });
    if (existingRole) {
      throw new _app.AppError(_errorCodes.Errors.ADMIN_ROLE_EXISTS);
    }

    // Create the new admin role
    const adminRoleData = {
      name,
      permission,
      level
    };
    const adminRoleInstance = await _models.default.AdminRole.create(adminRoleData, {
      transaction
    });

    // Commit the transaction if it was created in this method
    if (!this.dbTransaction) {
      await transaction.commit();
    }
    return {
      adminRole: adminRoleInstance
    };
  }
}
exports.CreateAdminRoleHandler = CreateAdminRoleHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXBwIiwiX2Vycm9yQ29kZXMiLCJfYmFzZUhhbmRsZXIiLCJfc2VxdWVsaXplIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiQ3JlYXRlQWRtaW5Sb2xlSGFuZGxlciIsIkJhc2VIYW5kbGVyIiwicnVuIiwibmFtZSIsInBlcm1pc3Npb24iLCJsZXZlbCIsImFyZ3MiLCJ0cmFuc2FjdGlvbiIsImRiVHJhbnNhY3Rpb24iLCJleGlzdGluZ1JvbGUiLCJkYiIsIkFkbWluUm9sZSIsImZpbmRPbmUiLCJ3aGVyZSIsIk9wIiwib3IiLCJBcHBFcnJvciIsIkVycm9ycyIsIkFETUlOX1JPTEVfRVhJU1RTIiwiYWRtaW5Sb2xlRGF0YSIsImFkbWluUm9sZUluc3RhbmNlIiwiY3JlYXRlIiwiY29tbWl0IiwiYWRtaW5Sb2xlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9oYW5kbGVycy9hZG1pblJvbGVzL2NyZWF0ZUFkbWluUm9sZS5oYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICdAc3JjL2RiL21vZGVscyc7XG5pbXBvcnQgeyBBcHBFcnJvciB9IGZyb20gJ0BzcmMvZXJyb3JzL2FwcC5lcnJvcic7XG5pbXBvcnQgeyBFcnJvcnMgfSBmcm9tICdAc3JjL2Vycm9ycy9lcnJvckNvZGVzJztcbmltcG9ydCB7IEJhc2VIYW5kbGVyIH0gZnJvbSAnQHNyYy9saWJzL2Jhc2VIYW5kbGVyJztcbmltcG9ydCBPcCBmcm9tICdzZXF1ZWxpemUnO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQWRtaW5Sb2xlSGFuZGxlciBleHRlbmRzIEJhc2VIYW5kbGVyIHtcbiAgYXN5bmMgcnVuKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcGVybWlzc2lvbiwgbGV2ZWwgfSA9IHRoaXMuYXJnc1xuXG4gICAgLy8gRW5zdXJlIHRyYW5zYWN0aW9uIGV4aXN0c1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5kYlRyYW5zYWN0aW9uXG4gICAgLy8gQ2hlY2sgaWYgYSByb2xlIHdpdGggdGhlIHNhbWUgbmFtZSBvciBsZXZlbCBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IGV4aXN0aW5nUm9sZSA9IGF3YWl0IGRiLkFkbWluUm9sZS5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIFtPcC5vcl06IFt7IG5hbWUgfSwgeyBsZXZlbCB9XSxcbiAgICAgIH0sXG4gICAgICB0cmFuc2FjdGlvbixcbiAgICB9KVxuXG4gICAgaWYgKGV4aXN0aW5nUm9sZSkge1xuICAgICAgdGhyb3cgbmV3IEFwcEVycm9yKEVycm9ycy5BRE1JTl9ST0xFX0VYSVNUUylcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGhlIG5ldyBhZG1pbiByb2xlXG4gICAgY29uc3QgYWRtaW5Sb2xlRGF0YSA9IHsgbmFtZSwgcGVybWlzc2lvbiwgbGV2ZWwgfVxuICAgIGNvbnN0IGFkbWluUm9sZUluc3RhbmNlID0gYXdhaXQgZGIuQWRtaW5Sb2xlLmNyZWF0ZShhZG1pblJvbGVEYXRhLCB7IHRyYW5zYWN0aW9uIH0pXG5cbiAgICAvLyBDb21taXQgdGhlIHRyYW5zYWN0aW9uIGlmIGl0IHdhcyBjcmVhdGVkIGluIHRoaXMgbWV0aG9kXG4gICAgaWYgKCF0aGlzLmRiVHJhbnNhY3Rpb24pIHtcbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLmNvbW1pdCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRtaW5Sb2xlOiBhZG1pblJvbGVJbnN0YW5jZSB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBSCxPQUFBO0FBQ0EsSUFBQUksVUFBQSxHQUFBTCxzQkFBQSxDQUFBQyxPQUFBO0FBQTJCLFNBQUFELHVCQUFBTSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBRXBCLE1BQU1HLHNCQUFzQixTQUFTQyx3QkFBVyxDQUFDO0VBQ3RELE1BQU1DLEdBQUdBLENBQUEsRUFBRztJQUNWLE1BQU07TUFBRUMsSUFBSTtNQUFFQyxVQUFVO01BQUVDO0lBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQ0MsSUFBSTs7SUFFN0M7SUFDQSxNQUFNQyxXQUFXLEdBQUcsSUFBSSxDQUFDQyxhQUFhO0lBQ3RDO0lBQ0EsTUFBTUMsWUFBWSxHQUFHLE1BQU1DLGVBQUUsQ0FBQ0MsU0FBUyxDQUFDQyxPQUFPLENBQUM7TUFDOUNDLEtBQUssRUFBRTtRQUNMLENBQUNDLGtCQUFFLENBQUNDLEVBQUUsR0FBRyxDQUFDO1VBQUVaO1FBQUssQ0FBQyxFQUFFO1VBQUVFO1FBQU0sQ0FBQztNQUMvQixDQUFDO01BQ0RFO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSUUsWUFBWSxFQUFFO01BQ2hCLE1BQU0sSUFBSU8sYUFBUSxDQUFDQyxrQkFBTSxDQUFDQyxpQkFBaUIsQ0FBQztJQUM5Qzs7SUFFQTtJQUNBLE1BQU1DLGFBQWEsR0FBRztNQUFFaEIsSUFBSTtNQUFFQyxVQUFVO01BQUVDO0lBQU0sQ0FBQztJQUNqRCxNQUFNZSxpQkFBaUIsR0FBRyxNQUFNVixlQUFFLENBQUNDLFNBQVMsQ0FBQ1UsTUFBTSxDQUFDRixhQUFhLEVBQUU7TUFBRVo7SUFBWSxDQUFDLENBQUM7O0lBRW5GO0lBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ0MsYUFBYSxFQUFFO01BQ3ZCLE1BQU1ELFdBQVcsQ0FBQ2UsTUFBTSxDQUFDLENBQUM7SUFDNUI7SUFFQSxPQUFPO01BQUVDLFNBQVMsRUFBRUg7SUFBa0IsQ0FBQztFQUN6QztBQUNGO0FBQUNJLE9BQUEsQ0FBQXhCLHNCQUFBLEdBQUFBLHNCQUFBIiwiaWdub3JlTGlzdCI6W119