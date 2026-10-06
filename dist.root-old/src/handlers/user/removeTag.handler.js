"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveTagHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _baseHandler = require("../../libs/baseHandler");
var _app = require("../../errors/app.error");
var _errorCodes = require("../../errors/errorCodes");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const constraints = {
  type: 'object',
  properties: {
    tagId: {
      type: 'number'
    }
  },
  required: ['tagId']
};
class RemoveTagHandler extends _baseHandler.BaseHandler {
  get constraints() {
    return constraints;
  }
  async run() {
    const {
      tagId
    } = this.args;
    const transaction = this.dbTransaction;

    // Check if tag exists
    const tag = await _models.default.Tag.findByPk(tagId, {
      transaction
    });
    if (!tag) {
      throw new _app.AppError(_errorCodes.Errors.TAG_NOT_FOUND);
    }

    // ✅ CASCADE will handle deletion from user_tags automatically
    await tag.destroy({
      transaction
    });
    return {
      success: true,
      message: 'Tag deleted successfully'
    };
  }
}
exports.RemoveTagHandler = RemoveTagHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYmFzZUhhbmRsZXIiLCJfYXBwIiwiX2Vycm9yQ29kZXMiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJjb25zdHJhaW50cyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwidGFnSWQiLCJyZXF1aXJlZCIsIlJlbW92ZVRhZ0hhbmRsZXIiLCJCYXNlSGFuZGxlciIsInJ1biIsImFyZ3MiLCJ0cmFuc2FjdGlvbiIsImRiVHJhbnNhY3Rpb24iLCJ0YWciLCJkYiIsIlRhZyIsImZpbmRCeVBrIiwiQXBwRXJyb3IiLCJFcnJvcnMiLCJUQUdfTk9UX0ZPVU5EIiwiZGVzdHJveSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9oYW5kbGVycy91c2VyL3JlbW92ZVRhZy5oYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICdAc3JjL2RiL21vZGVscydcbmltcG9ydCB7IEJhc2VIYW5kbGVyIH0gZnJvbSAnQHNyYy9saWJzL2Jhc2VIYW5kbGVyJ1xuaW1wb3J0IHsgQXBwRXJyb3IgfSBmcm9tICdAc3JjL2Vycm9ycy9hcHAuZXJyb3InXG5pbXBvcnQgeyBFcnJvcnMgfSBmcm9tICdAc3JjL2Vycm9ycy9lcnJvckNvZGVzJ1xuXG5jb25zdCBjb25zdHJhaW50cyA9IHtcbiAgdHlwZTogJ29iamVjdCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0YWdJZDogeyB0eXBlOiAnbnVtYmVyJyB9XG4gIH0sXG4gIHJlcXVpcmVkOiBbJ3RhZ0lkJ11cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVRhZ0hhbmRsZXIgZXh0ZW5kcyBCYXNlSGFuZGxlciB7XG4gIGdldCBjb25zdHJhaW50cygpIHtcbiAgICByZXR1cm4gY29uc3RyYWludHNcbiAgfVxuXG4gIGFzeW5jIHJ1bigpIHtcbiAgICBjb25zdCB7IHRhZ0lkIH0gPSB0aGlzLmFyZ3NcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuZGJUcmFuc2FjdGlvblxuXG4gICAgLy8gQ2hlY2sgaWYgdGFnIGV4aXN0c1xuICAgIGNvbnN0IHRhZyA9IGF3YWl0IGRiLlRhZy5maW5kQnlQayh0YWdJZCwgeyB0cmFuc2FjdGlvbiB9KVxuICAgIGlmICghdGFnKSB7XG4gICAgICB0aHJvdyBuZXcgQXBwRXJyb3IoRXJyb3JzLlRBR19OT1RfRk9VTkQpXG4gICAgfVxuXG4gICAgLy8g4pyFIENBU0NBREUgd2lsbCBoYW5kbGUgZGVsZXRpb24gZnJvbSB1c2VyX3RhZ3MgYXV0b21hdGljYWxseVxuICAgIGF3YWl0IHRhZy5kZXN0cm95KHsgdHJhbnNhY3Rpb24gfSlcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ1RhZyBkZWxldGVkIHN1Y2Nlc3NmdWxseSdcbiAgICB9XG4gIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFlBQUEsR0FBQUQsT0FBQTtBQUNBLElBQUFFLElBQUEsR0FBQUYsT0FBQTtBQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtBQUErQyxTQUFBRCx1QkFBQUssQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUUvQyxNQUFNRyxXQUFXLEdBQUc7RUFDbEJDLElBQUksRUFBRSxRQUFRO0VBQ2RDLFVBQVUsRUFBRTtJQUNWQyxLQUFLLEVBQUU7TUFBRUYsSUFBSSxFQUFFO0lBQVM7RUFDMUIsQ0FBQztFQUNERyxRQUFRLEVBQUUsQ0FBQyxPQUFPO0FBQ3BCLENBQUM7QUFFTSxNQUFNQyxnQkFBZ0IsU0FBU0Msd0JBQVcsQ0FBQztFQUNoRCxJQUFJTixXQUFXQSxDQUFBLEVBQUc7SUFDaEIsT0FBT0EsV0FBVztFQUNwQjtFQUVBLE1BQU1PLEdBQUdBLENBQUEsRUFBRztJQUNWLE1BQU07TUFBRUo7SUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDSyxJQUFJO0lBQzNCLE1BQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNDLGFBQWE7O0lBRXRDO0lBQ0EsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLGVBQUUsQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQUNYLEtBQUssRUFBRTtNQUFFTTtJQUFZLENBQUMsQ0FBQztJQUN6RCxJQUFJLENBQUNFLEdBQUcsRUFBRTtNQUNSLE1BQU0sSUFBSUksYUFBUSxDQUFDQyxrQkFBTSxDQUFDQyxhQUFhLENBQUM7SUFDMUM7O0lBRUE7SUFDQSxNQUFNTixHQUFHLENBQUNPLE9BQU8sQ0FBQztNQUFFVDtJQUFZLENBQUMsQ0FBQztJQUVsQyxPQUFPO01BQ0xVLE9BQU8sRUFBRSxJQUFJO01BQ2JDLE9BQU8sRUFBRTtJQUNYLENBQUM7RUFDSDtBQUNGO0FBQUNDLE9BQUEsQ0FBQWhCLGdCQUFBLEdBQUFBLGdCQUFBIiwiaWdub3JlTGlzdCI6W119