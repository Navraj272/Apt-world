"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateDocumentLabelHandler = void 0;
var _errorCodes = require("../../errors/errorCodes");
var _app = require("../../errors/app.error");
var _models = _interopRequireDefault(require("../../db/models"));
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class UpdateDocumentLabelHandler extends _baseHandler.BaseHandler {
  async run() {
    const {
      documentLabelId,
      name,
      isRequired
    } = this.args;
    const checkLabelExists = await _models.default.DocumentLabel.findOne({
      where: {
        documentLabelId
      }
    });
    if (!checkLabelExists) throw new _app.AppError(_errorCodes.Errors.DOCUMENT_LABELS_NOT_FOUND);
    const updatedLabel = await _models.default.DocumentLabel.update({
      name: {
        ...checkLabelExists.name,
        ...name
      },
      isRequired
    }, {
      where: {
        documentLabelId
      }
    });
    return {
      updatedLabel
    };
  }
}
exports.UpdateDocumentLabelHandler = UpdateDocumentLabelHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXJyb3JDb2RlcyIsInJlcXVpcmUiLCJfYXBwIiwiX21vZGVscyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYmFzZUhhbmRsZXIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJVcGRhdGVEb2N1bWVudExhYmVsSGFuZGxlciIsIkJhc2VIYW5kbGVyIiwicnVuIiwiZG9jdW1lbnRMYWJlbElkIiwibmFtZSIsImlzUmVxdWlyZWQiLCJhcmdzIiwiY2hlY2tMYWJlbEV4aXN0cyIsImRiIiwiRG9jdW1lbnRMYWJlbCIsImZpbmRPbmUiLCJ3aGVyZSIsIkFwcEVycm9yIiwiRXJyb3JzIiwiRE9DVU1FTlRfTEFCRUxTX05PVF9GT1VORCIsInVwZGF0ZWRMYWJlbCIsInVwZGF0ZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaGFuZGxlcnMvYWRtaW5Vc2Vycy91cGRhdGVEb2N1bWVudExhYmVsLmhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JzIH0gZnJvbSAnQHNyYy9lcnJvcnMvZXJyb3JDb2RlcydcbmltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSAnQHNyYy9lcnJvcnMvYXBwLmVycm9yJ1xuaW1wb3J0IGRiIGZyb20gJ0BzcmMvZGIvbW9kZWxzJ1xuaW1wb3J0IHsgQmFzZUhhbmRsZXIgfSBmcm9tICdAc3JjL2xpYnMvYmFzZUhhbmRsZXInXG5cblxuXG5leHBvcnQgY2xhc3MgVXBkYXRlRG9jdW1lbnRMYWJlbEhhbmRsZXIgZXh0ZW5kcyBCYXNlSGFuZGxlciB7XG4gIGFzeW5jIHJ1biAoKSB7XG4gICAgY29uc3QgeyBkb2N1bWVudExhYmVsSWQsIG5hbWUsIGlzUmVxdWlyZWQgfSA9IHRoaXMuYXJnc1xuXG4gICAgY29uc3QgY2hlY2tMYWJlbEV4aXN0cyA9IGF3YWl0IGRiLkRvY3VtZW50TGFiZWwuZmluZE9uZSh7XG4gICAgICB3aGVyZTogeyBkb2N1bWVudExhYmVsSWQgfVxuICAgIH0pXG5cbiAgICBpZiAoIWNoZWNrTGFiZWxFeGlzdHMpIHRocm93IG5ldyBBcHBFcnJvcihFcnJvcnMuRE9DVU1FTlRfTEFCRUxTX05PVF9GT1VORClcblxuICAgICAgY29uc3QgdXBkYXRlZExhYmVsID0gYXdhaXQgZGIuRG9jdW1lbnRMYWJlbC51cGRhdGUoXG4gICAgICAgIHsgbmFtZTogeyAuLi5jaGVja0xhYmVsRXhpc3RzLm5hbWUsIC4uLm5hbWUgfSxpc1JlcXVpcmVkfSxcbiAgICAgICAge3doZXJlOiB7IGRvY3VtZW50TGFiZWxJZCB9fVxuICAgICAgKTtcblxuXG4gICAgcmV0dXJuIHsgdXBkYXRlZExhYmVsIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7QUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFDLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSSxZQUFBLEdBQUFKLE9BQUE7QUFBbUQsU0FBQUcsdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxLQUFBRSxPQUFBLEVBQUFGLENBQUE7QUFJNUMsTUFBTUcsMEJBQTBCLFNBQVNDLHdCQUFXLENBQUM7RUFDMUQsTUFBTUMsR0FBR0EsQ0FBQSxFQUFJO0lBQ1gsTUFBTTtNQUFFQyxlQUFlO01BQUVDLElBQUk7TUFBRUM7SUFBVyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxJQUFJO0lBRXZELE1BQU1DLGdCQUFnQixHQUFHLE1BQU1DLGVBQUUsQ0FBQ0MsYUFBYSxDQUFDQyxPQUFPLENBQUM7TUFDdERDLEtBQUssRUFBRTtRQUFFUjtNQUFnQjtJQUMzQixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNJLGdCQUFnQixFQUFFLE1BQU0sSUFBSUssYUFBUSxDQUFDQyxrQkFBTSxDQUFDQyx5QkFBeUIsQ0FBQztJQUV6RSxNQUFNQyxZQUFZLEdBQUcsTUFBTVAsZUFBRSxDQUFDQyxhQUFhLENBQUNPLE1BQU0sQ0FDaEQ7TUFBRVosSUFBSSxFQUFFO1FBQUUsR0FBR0csZ0JBQWdCLENBQUNILElBQUk7UUFBRSxHQUFHQTtNQUFLLENBQUM7TUFBQ0M7SUFBVSxDQUFDLEVBQ3pEO01BQUNNLEtBQUssRUFBRTtRQUFFUjtNQUFnQjtJQUFDLENBQzdCLENBQUM7SUFHSCxPQUFPO01BQUVZO0lBQWEsQ0FBQztFQUN6QjtBQUNGO0FBQUNFLE9BQUEsQ0FBQWpCLDBCQUFBLEdBQUFBLDBCQUFBIiwiaWdub3JlTGlzdCI6W119