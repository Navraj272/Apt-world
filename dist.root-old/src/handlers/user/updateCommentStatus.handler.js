"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateCommentStatusHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _app = require("../../errors/app.error");
var _errorCodes = require("../../errors/errorCodes");
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class UpdateCommentStatusHandler extends _baseHandler.BaseHandler {
  get constraints() {
    return constraints;
  }
  async run() {
    const {
      userId,
      commentId,
      status
    } = this.args;
    const userExist = await _models.default.User.findOne({
      where: {
        userId
      },
      attributes: ['userId']
    });
    if (!userExist) throw new _app.AppError(_errorCodes.Errors.USER_NOT_EXISTS);
    const updateComment = await await _models.default.Comment.update({
      status
    }, {
      where: {
        commentId
      }
    });
    return {
      updateComment,
      success: true
    };
  }
}
exports.UpdateCommentStatusHandler = UpdateCommentStatusHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXBwIiwiX2Vycm9yQ29kZXMiLCJfYmFzZUhhbmRsZXIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJVcGRhdGVDb21tZW50U3RhdHVzSGFuZGxlciIsIkJhc2VIYW5kbGVyIiwiY29uc3RyYWludHMiLCJydW4iLCJ1c2VySWQiLCJjb21tZW50SWQiLCJzdGF0dXMiLCJhcmdzIiwidXNlckV4aXN0IiwiZGIiLCJVc2VyIiwiZmluZE9uZSIsIndoZXJlIiwiYXR0cmlidXRlcyIsIkFwcEVycm9yIiwiRXJyb3JzIiwiVVNFUl9OT1RfRVhJU1RTIiwidXBkYXRlQ29tbWVudCIsIkNvbW1lbnQiLCJ1cGRhdGUiLCJzdWNjZXNzIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9oYW5kbGVycy91c2VyL3VwZGF0ZUNvbW1lbnRTdGF0dXMuaGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnQHNyYy9kYi9tb2RlbHMnXG5pbXBvcnQgeyBBcHBFcnJvciB9IGZyb20gJ0BzcmMvZXJyb3JzL2FwcC5lcnJvcidcbmltcG9ydCB7IEVycm9ycyB9IGZyb20gJ0BzcmMvZXJyb3JzL2Vycm9yQ29kZXMnXG5pbXBvcnQgeyBCYXNlSGFuZGxlciB9IGZyb20gJ0BzcmMvbGlicy9iYXNlSGFuZGxlcidcblxuXG5cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbW1lbnRTdGF0dXNIYW5kbGVyIGV4dGVuZHMgQmFzZUhhbmRsZXIge1xuICBnZXQgY29uc3RyYWludHMoKSB7XG4gICAgcmV0dXJuIGNvbnN0cmFpbnRzXG4gIH1cblxuICBhc3luYyBydW4oKSB7XG4gICAgY29uc3QgeyB1c2VySWQsIGNvbW1lbnRJZCwgc3RhdHVzIH0gPSB0aGlzLmFyZ3NcblxuICAgIGNvbnN0IHVzZXJFeGlzdCA9IGF3YWl0IGRiLlVzZXIuZmluZE9uZSh7XG4gICAgICB3aGVyZTogeyB1c2VySWQgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IFsndXNlcklkJ11cbiAgICB9KVxuXG4gICAgaWYgKCF1c2VyRXhpc3QpIHRocm93IG5ldyBBcHBFcnJvcihFcnJvcnMuVVNFUl9OT1RfRVhJU1RTKVxuXG4gICAgY29uc3QgdXBkYXRlQ29tbWVudCA9IGF3YWl0IGF3YWl0IGRiLkNvbW1lbnQudXBkYXRlKFxuICAgICAgeyBzdGF0dXMgfSxcbiAgICAgIHtcbiAgICAgICAgd2hlcmU6IHsgY29tbWVudElkIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHsgdXBkYXRlQ29tbWVudCwgc3VjY2VzczogdHJ1ZSB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBSCxPQUFBO0FBQW1ELFNBQUFELHVCQUFBSyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBSzVDLE1BQU1HLDBCQUEwQixTQUFTQyx3QkFBVyxDQUFDO0VBQzFELElBQUlDLFdBQVdBLENBQUEsRUFBRztJQUNoQixPQUFPQSxXQUFXO0VBQ3BCO0VBRUEsTUFBTUMsR0FBR0EsQ0FBQSxFQUFHO0lBQ1YsTUFBTTtNQUFFQyxNQUFNO01BQUVDLFNBQVM7TUFBRUM7SUFBTyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxJQUFJO0lBRS9DLE1BQU1DLFNBQVMsR0FBRyxNQUFNQyxlQUFFLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO01BQ3RDQyxLQUFLLEVBQUU7UUFBRVI7TUFBTyxDQUFDO01BQ2pCUyxVQUFVLEVBQUUsQ0FBQyxRQUFRO0lBQ3ZCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0wsU0FBUyxFQUFFLE1BQU0sSUFBSU0sYUFBUSxDQUFDQyxrQkFBTSxDQUFDQyxlQUFlLENBQUM7SUFFMUQsTUFBTUMsYUFBYSxHQUFHLE1BQU0sTUFBTVIsZUFBRSxDQUFDUyxPQUFPLENBQUNDLE1BQU0sQ0FDakQ7TUFBRWI7SUFBTyxDQUFDLEVBQ1Y7TUFDRU0sS0FBSyxFQUFFO1FBQUVQO01BQVU7SUFDckIsQ0FDRixDQUFDO0lBRUQsT0FBTztNQUFFWSxhQUFhO01BQUVHLE9BQU8sRUFBRTtJQUFLLENBQUM7RUFDekM7QUFDRjtBQUFDQyxPQUFBLENBQUFyQiwwQkFBQSxHQUFBQSwwQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==