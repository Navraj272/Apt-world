"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = argumentsDecoratorSocketMiddleware;
var _invalidSocketArgument = _interopRequireDefault(require("../../errors/invalidSocketArgument.error"));
var _error = require("../../utils/error.utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 *
 * @export
 * @param {Array} args
 * @param {function} next
 * It will make sure that whenever we receive data it will be in proper format
 * like eventName, [payload] and [callback]
 * If the args is not in proper order then it will raise error, it will always expect the event to be on first place
 * and no more than 3 arguments
 */

function argumentsDecoratorSocketMiddleware(socket) {
  const req = socket?.request;
  return (args, next) => {
    if (args.length > 3 || args[2] && typeof args[2] !== 'function') {
      const invalidPayloadError = new _invalidSocketArgument.default({
        payload: args
      });
      if (typeof args[args.length - 1] === 'function') {
        const localizedError = (0, _error.getLocalizedError)(invalidPayloadError, req.__);
        args[args.length - 1]({
          data: {},
          errors: [localizedError]
        });
      }
      next(invalidPayloadError);
      return;
    }
    if (typeof args[1] === 'function') {
      args[2] = args[1];
      args[1] = {};
    }
    next();
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaW52YWxpZFNvY2tldEFyZ3VtZW50IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfZXJyb3IiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJhcmd1bWVudHNEZWNvcmF0b3JTb2NrZXRNaWRkbGV3YXJlIiwic29ja2V0IiwicmVxIiwicmVxdWVzdCIsImFyZ3MiLCJuZXh0IiwibGVuZ3RoIiwiaW52YWxpZFBheWxvYWRFcnJvciIsIkludmFsaWRTb2NrZXRBcmd1bWVudEVycm9yIiwicGF5bG9hZCIsImxvY2FsaXplZEVycm9yIiwiZ2V0TG9jYWxpemVkRXJyb3IiLCJfXyIsImRhdGEiLCJlcnJvcnMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc29ja2V0LXJlc291cmNlcy9taWRkbGV3YXJlcy9hcmd1bWVudHNEZWNvcmF0b3JTb2NrZXQubWlkZGxld2FyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW52YWxpZFNvY2tldEFyZ3VtZW50RXJyb3IgZnJvbSAnQHNyYy9lcnJvcnMvaW52YWxpZFNvY2tldEFyZ3VtZW50LmVycm9yJyBcbmltcG9ydCB7IGdldExvY2FsaXplZEVycm9yIH0gZnJvbSAnQHNyYy91dGlscy9lcnJvci51dGlscydcblxuLyoqXG4gKlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG5leHRcbiAqIEl0IHdpbGwgbWFrZSBzdXJlIHRoYXQgd2hlbmV2ZXIgd2UgcmVjZWl2ZSBkYXRhIGl0IHdpbGwgYmUgaW4gcHJvcGVyIGZvcm1hdFxuICogbGlrZSBldmVudE5hbWUsIFtwYXlsb2FkXSBhbmQgW2NhbGxiYWNrXVxuICogSWYgdGhlIGFyZ3MgaXMgbm90IGluIHByb3BlciBvcmRlciB0aGVuIGl0IHdpbGwgcmFpc2UgZXJyb3IsIGl0IHdpbGwgYWx3YXlzIGV4cGVjdCB0aGUgZXZlbnQgdG8gYmUgb24gZmlyc3QgcGxhY2VcbiAqIGFuZCBubyBtb3JlIHRoYW4gMyBhcmd1bWVudHNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcmd1bWVudHNEZWNvcmF0b3JTb2NrZXRNaWRkbGV3YXJlKHNvY2tldCkge1xuICAgIGNvbnN0IHJlcSA9IHNvY2tldD8ucmVxdWVzdFxuXG4gICAgcmV0dXJuIChhcmdzLCBuZXh0KSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMgfHwgKGFyZ3NbMl0gJiYgdHlwZW9mIGFyZ3NbMl0gIT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICBjb25zdCBpbnZhbGlkUGF5bG9hZEVycm9yID0gbmV3IEludmFsaWRTb2NrZXRBcmd1bWVudEVycm9yKHtcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhcmdzXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsaXplZEVycm9yID0gZ2V0TG9jYWxpemVkRXJyb3IoaW52YWxpZFBheWxvYWRFcnJvciwgcmVxLl9fKVxuICAgICAgICAgICAgICAgIGFyZ3NbYXJncy5sZW5ndGggLSAxXSh7IGRhdGE6IHt9LCBlcnJvcnM6IFtsb2NhbGl6ZWRFcnJvcl0gfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dChpbnZhbGlkUGF5bG9hZEVycm9yKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyZ3NbMl0gPSBhcmdzWzFdXG4gICAgICAgICAgICBhcmdzWzFdID0ge31cbiAgICAgICAgfVxuXG4gICAgICAgIG5leHQoKVxuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsc0JBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUEwRCxTQUFBRCx1QkFBQUcsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNHLGtDQUFrQ0EsQ0FBQ0MsTUFBTSxFQUFFO0VBQy9ELE1BQU1DLEdBQUcsR0FBR0QsTUFBTSxFQUFFRSxPQUFPO0VBRTNCLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJLEtBQUs7SUFDbkIsSUFBSUQsSUFBSSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxJQUFLRixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBT0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVcsRUFBRTtNQUMvRCxNQUFNRyxtQkFBbUIsR0FBRyxJQUFJQyw4QkFBMEIsQ0FBQztRQUN2REMsT0FBTyxFQUFFTDtNQUNiLENBQUMsQ0FBQztNQUVGLElBQUksT0FBT0EsSUFBSSxDQUFDQSxJQUFJLENBQUNFLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7UUFDN0MsTUFBTUksY0FBYyxHQUFHLElBQUFDLHdCQUFpQixFQUFDSixtQkFBbUIsRUFBRUwsR0FBRyxDQUFDVSxFQUFFLENBQUM7UUFDckVSLElBQUksQ0FBQ0EsSUFBSSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7VUFBRU8sSUFBSSxFQUFFLENBQUMsQ0FBQztVQUFFQyxNQUFNLEVBQUUsQ0FBQ0osY0FBYztRQUFFLENBQUMsQ0FBQztNQUNqRTtNQUVBTCxJQUFJLENBQUNFLG1CQUFtQixDQUFDO01BQ3pCO0lBQ0o7SUFFQSxJQUFJLE9BQU9ILElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7TUFDL0JBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0EsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUNqQkEsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQjtJQUVBQyxJQUFJLENBQUMsQ0FBQztFQUNWLENBQUM7QUFDTCIsImlnbm9yZUxpc3QiOltdfQ==