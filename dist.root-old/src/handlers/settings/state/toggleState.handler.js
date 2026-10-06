"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleStateHandler = void 0;
var _models = _interopRequireDefault(require("../../../db/models"));
var _app = require("../../../errors/app.error");
var _errorCodes = require("../../../errors/errorCodes");
var _baseHandler = require("../../../libs/baseHandler");
var _redis = require("../../../libs/redis");
var _public = require("../../../utils/constants/public.constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// export class toggleStateHandler extends BaseHandler {
//   async run() {
//     const { stateCode } = this.args
//     const transaction = this.context.sequelizeTransaction

//     const checkState = await db.State.findOne({
//       where: { stateCode },
//       transaction,
//     })

//     if (!checkState) throw new AppError(Errors.STATE_NOT_FOUND)

//     checkState.isActive = !checkState.isActive
//     await checkState.save({ transaction })

//     const stateRecords = await db.State.findAll({ where: { isActive: false },transaction})
//     const inactiveStateCode = stateRecords.map((state) => state.stateCode)
//     await setCache(CACHE_KEYS.STATE_CODES, JSON.stringify(inactiveStateCode))

//     return { success: true, isActive: checkState.isActive }
//   }
// }
class toggleStateHandler extends _baseHandler.BaseHandler {
  async run() {
    const {
      stateCode
    } = this.args;
    const transaction = this.context.sequelizeTransaction;
    const checkState = await _models.default.State.findOne({
      where: {
        stateCode
      },
      transaction
    });
    if (!checkState) throw new _app.AppError(_errorCodes.Errors.STATE_NOT_FOUND);
    const stateRecords = await _models.default.State.findAll({
      where: {
        isActive: false
      },
      transaction
    });
    let inactiveStateCodes = stateRecords.map(state => state.stateCode);

    // 2. Perform the Toggle
    const newIsActiveStatus = !checkState.isActive;
    checkState.isActive = newIsActiveStatus;
    await checkState.save({
      transaction
    });
    if (newIsActiveStatus === false) {
      if (!inactiveStateCodes.includes(stateCode)) {
        inactiveStateCodes.push(stateCode);
      }
    } else {
      inactiveStateCodes = inactiveStateCodes.filter(code => code !== stateCode);
    }
    await (0, _redis.setCache)(_public.CACHE_KEYS.STATE_CODES, JSON.stringify(inactiveStateCodes));
    return {
      success: true,
      isActive: checkState.isActive
    };
  }
}
exports.toggleStateHandler = toggleStateHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXBwIiwiX2Vycm9yQ29kZXMiLCJfYmFzZUhhbmRsZXIiLCJfcmVkaXMiLCJfcHVibGljIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidG9nZ2xlU3RhdGVIYW5kbGVyIiwiQmFzZUhhbmRsZXIiLCJydW4iLCJzdGF0ZUNvZGUiLCJhcmdzIiwidHJhbnNhY3Rpb24iLCJjb250ZXh0Iiwic2VxdWVsaXplVHJhbnNhY3Rpb24iLCJjaGVja1N0YXRlIiwiZGIiLCJTdGF0ZSIsImZpbmRPbmUiLCJ3aGVyZSIsIkFwcEVycm9yIiwiRXJyb3JzIiwiU1RBVEVfTk9UX0ZPVU5EIiwic3RhdGVSZWNvcmRzIiwiZmluZEFsbCIsImlzQWN0aXZlIiwiaW5hY3RpdmVTdGF0ZUNvZGVzIiwibWFwIiwic3RhdGUiLCJuZXdJc0FjdGl2ZVN0YXR1cyIsInNhdmUiLCJpbmNsdWRlcyIsInB1c2giLCJmaWx0ZXIiLCJjb2RlIiwic2V0Q2FjaGUiLCJDQUNIRV9LRVlTIiwiU1RBVEVfQ09ERVMiLCJKU09OIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaGFuZGxlcnMvc2V0dGluZ3Mvc3RhdGUvdG9nZ2xlU3RhdGUuaGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSBcIkBzcmMvZGIvbW9kZWxzXCJcbmltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSBcIkBzcmMvZXJyb3JzL2FwcC5lcnJvclwiXG5pbXBvcnQgeyBFcnJvcnMgfSBmcm9tIFwiQHNyYy9lcnJvcnMvZXJyb3JDb2Rlc1wiXG5pbXBvcnQgeyBCYXNlSGFuZGxlciB9IGZyb20gXCJAc3JjL2xpYnMvYmFzZUhhbmRsZXJcIlxuaW1wb3J0IHsgc2V0Q2FjaGUgfSBmcm9tIFwiQHNyYy9saWJzL3JlZGlzXCJcbmltcG9ydCB7IENBQ0hFX0tFWVMgfSBmcm9tIFwiQHNyYy91dGlscy9jb25zdGFudHMvcHVibGljLmNvbnN0YW50c1wiXG5cbi8vIGV4cG9ydCBjbGFzcyB0b2dnbGVTdGF0ZUhhbmRsZXIgZXh0ZW5kcyBCYXNlSGFuZGxlciB7XG4vLyAgIGFzeW5jIHJ1bigpIHtcbi8vICAgICBjb25zdCB7IHN0YXRlQ29kZSB9ID0gdGhpcy5hcmdzXG4vLyAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmNvbnRleHQuc2VxdWVsaXplVHJhbnNhY3Rpb25cblxuLy8gICAgIGNvbnN0IGNoZWNrU3RhdGUgPSBhd2FpdCBkYi5TdGF0ZS5maW5kT25lKHtcbi8vICAgICAgIHdoZXJlOiB7IHN0YXRlQ29kZSB9LFxuLy8gICAgICAgdHJhbnNhY3Rpb24sXG4vLyAgICAgfSlcblxuLy8gICAgIGlmICghY2hlY2tTdGF0ZSkgdGhyb3cgbmV3IEFwcEVycm9yKEVycm9ycy5TVEFURV9OT1RfRk9VTkQpXG5cbi8vICAgICBjaGVja1N0YXRlLmlzQWN0aXZlID0gIWNoZWNrU3RhdGUuaXNBY3RpdmVcbi8vICAgICBhd2FpdCBjaGVja1N0YXRlLnNhdmUoeyB0cmFuc2FjdGlvbiB9KVxuXG4vLyAgICAgY29uc3Qgc3RhdGVSZWNvcmRzID0gYXdhaXQgZGIuU3RhdGUuZmluZEFsbCh7IHdoZXJlOiB7IGlzQWN0aXZlOiBmYWxzZSB9LHRyYW5zYWN0aW9ufSlcbi8vICAgICBjb25zdCBpbmFjdGl2ZVN0YXRlQ29kZSA9IHN0YXRlUmVjb3Jkcy5tYXAoKHN0YXRlKSA9PiBzdGF0ZS5zdGF0ZUNvZGUpXG4vLyAgICAgYXdhaXQgc2V0Q2FjaGUoQ0FDSEVfS0VZUy5TVEFURV9DT0RFUywgSlNPTi5zdHJpbmdpZnkoaW5hY3RpdmVTdGF0ZUNvZGUpKVxuXG4vLyAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaXNBY3RpdmU6IGNoZWNrU3RhdGUuaXNBY3RpdmUgfVxuLy8gICB9XG4vLyB9XG5leHBvcnQgY2xhc3MgdG9nZ2xlU3RhdGVIYW5kbGVyIGV4dGVuZHMgQmFzZUhhbmRsZXIge1xuICBhc3luYyBydW4oKSB7XG4gICAgY29uc3QgeyBzdGF0ZUNvZGUgfSA9IHRoaXMuYXJnc1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5jb250ZXh0LnNlcXVlbGl6ZVRyYW5zYWN0aW9uXG5cbiAgICBjb25zdCBjaGVja1N0YXRlID0gYXdhaXQgZGIuU3RhdGUuZmluZE9uZSh7XG4gICAgICB3aGVyZTogeyBzdGF0ZUNvZGUgfSxcbiAgICAgIHRyYW5zYWN0aW9uLFxuICAgIH0pXG5cbiAgICBpZiAoIWNoZWNrU3RhdGUpIHRocm93IG5ldyBBcHBFcnJvcihFcnJvcnMuU1RBVEVfTk9UX0ZPVU5EKVxuXG5cbiAgICBjb25zdCBzdGF0ZVJlY29yZHMgPSBhd2FpdCBkYi5TdGF0ZS5maW5kQWxsKHtcbiAgICAgICAgd2hlcmU6IHsgaXNBY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgIHRyYW5zYWN0aW9uXG4gICAgfSlcblxuICAgIGxldCBpbmFjdGl2ZVN0YXRlQ29kZXMgPSBzdGF0ZVJlY29yZHMubWFwKChzdGF0ZSkgPT4gc3RhdGUuc3RhdGVDb2RlKVxuXG4gICAgLy8gMi4gUGVyZm9ybSB0aGUgVG9nZ2xlXG4gICAgY29uc3QgbmV3SXNBY3RpdmVTdGF0dXMgPSAhY2hlY2tTdGF0ZS5pc0FjdGl2ZVxuICAgIGNoZWNrU3RhdGUuaXNBY3RpdmUgPSBuZXdJc0FjdGl2ZVN0YXR1c1xuICAgIGF3YWl0IGNoZWNrU3RhdGUuc2F2ZSh7IHRyYW5zYWN0aW9uIH0pXG5cblxuICAgIGlmIChuZXdJc0FjdGl2ZVN0YXR1cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFpbmFjdGl2ZVN0YXRlQ29kZXMuaW5jbHVkZXMoc3RhdGVDb2RlKSkge1xuICAgICAgICAgICAgaW5hY3RpdmVTdGF0ZUNvZGVzLnB1c2goc3RhdGVDb2RlKVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBpbmFjdGl2ZVN0YXRlQ29kZXMgPSBpbmFjdGl2ZVN0YXRlQ29kZXMuZmlsdGVyKGNvZGUgPT4gY29kZSAhPT0gc3RhdGVDb2RlKVxuICAgIH1cblxuICAgIGF3YWl0IHNldENhY2hlKENBQ0hFX0tFWVMuU1RBVEVfQ09ERVMsIEpTT04uc3RyaW5naWZ5KGluYWN0aXZlU3RhdGVDb2RlcykpXG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBpc0FjdGl2ZTogY2hlY2tTdGF0ZS5pc0FjdGl2ZSB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBSCxPQUFBO0FBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO0FBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO0FBQWtFLFNBQUFELHVCQUFBTyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBRWxFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPLE1BQU1HLGtCQUFrQixTQUFTQyx3QkFBVyxDQUFDO0VBQ2xELE1BQU1DLEdBQUdBLENBQUEsRUFBRztJQUNWLE1BQU07TUFBRUM7SUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDQyxJQUFJO0lBQy9CLE1BQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0Msb0JBQW9CO0lBRXJELE1BQU1DLFVBQVUsR0FBRyxNQUFNQyxlQUFFLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDO01BQ3hDQyxLQUFLLEVBQUU7UUFBRVQ7TUFBVSxDQUFDO01BQ3BCRTtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0csVUFBVSxFQUFFLE1BQU0sSUFBSUssYUFBUSxDQUFDQyxrQkFBTSxDQUFDQyxlQUFlLENBQUM7SUFHM0QsTUFBTUMsWUFBWSxHQUFHLE1BQU1QLGVBQUUsQ0FBQ0MsS0FBSyxDQUFDTyxPQUFPLENBQUM7TUFDeENMLEtBQUssRUFBRTtRQUFFTSxRQUFRLEVBQUU7TUFBTSxDQUFDO01BQzFCYjtJQUNKLENBQUMsQ0FBQztJQUVGLElBQUljLGtCQUFrQixHQUFHSCxZQUFZLENBQUNJLEdBQUcsQ0FBRUMsS0FBSyxJQUFLQSxLQUFLLENBQUNsQixTQUFTLENBQUM7O0lBRXJFO0lBQ0EsTUFBTW1CLGlCQUFpQixHQUFHLENBQUNkLFVBQVUsQ0FBQ1UsUUFBUTtJQUM5Q1YsVUFBVSxDQUFDVSxRQUFRLEdBQUdJLGlCQUFpQjtJQUN2QyxNQUFNZCxVQUFVLENBQUNlLElBQUksQ0FBQztNQUFFbEI7SUFBWSxDQUFDLENBQUM7SUFHdEMsSUFBSWlCLGlCQUFpQixLQUFLLEtBQUssRUFBRTtNQUM3QixJQUFJLENBQUNILGtCQUFrQixDQUFDSyxRQUFRLENBQUNyQixTQUFTLENBQUMsRUFBRTtRQUN6Q2dCLGtCQUFrQixDQUFDTSxJQUFJLENBQUN0QixTQUFTLENBQUM7TUFDdEM7SUFDSixDQUFDLE1BQU07TUFFSGdCLGtCQUFrQixHQUFHQSxrQkFBa0IsQ0FBQ08sTUFBTSxDQUFDQyxJQUFJLElBQUlBLElBQUksS0FBS3hCLFNBQVMsQ0FBQztJQUM5RTtJQUVBLE1BQU0sSUFBQXlCLGVBQVEsRUFBQ0Msa0JBQVUsQ0FBQ0MsV0FBVyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2Isa0JBQWtCLENBQUMsQ0FBQztJQUUxRSxPQUFPO01BQUVjLE9BQU8sRUFBRSxJQUFJO01BQUVmLFFBQVEsRUFBRVYsVUFBVSxDQUFDVTtJQUFTLENBQUM7RUFDekQ7QUFDRjtBQUFDZ0IsT0FBQSxDQUFBbEMsa0JBQUEsR0FBQUEsa0JBQUEiLCJpZ25vcmVMaXN0IjpbXX0=