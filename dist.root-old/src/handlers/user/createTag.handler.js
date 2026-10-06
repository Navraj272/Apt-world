"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTagHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const constraints = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    colorCode: {
      type: 'string'
    }
  },
  required: ['name', 'colorCode']
};
class CreateTagHandler extends _baseHandler.BaseHandler {
  get constraints() {
    return constraints;
  }
  async run() {
    const {
      name,
      colorCode
    } = this.args;

    // Check if tag already exists
    const existingTag = await _models.default.Tag.findOne({
      where: {
        name
      }
    });
    if (existingTag) {
      throw new Error('Tag already exists');
    }

    // Create the tag
    const tag = await _models.default.Tag.create({
      name,
      colorCode
    });
    return {
      success: true,
      message: 'Tag created successfully',
      data: tag
    };
  }
}
exports.CreateTagHandler = CreateTagHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYmFzZUhhbmRsZXIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJjb25zdHJhaW50cyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImNvbG9yQ29kZSIsInJlcXVpcmVkIiwiQ3JlYXRlVGFnSGFuZGxlciIsIkJhc2VIYW5kbGVyIiwicnVuIiwiYXJncyIsImV4aXN0aW5nVGFnIiwiZGIiLCJUYWciLCJmaW5kT25lIiwid2hlcmUiLCJFcnJvciIsInRhZyIsImNyZWF0ZSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZGF0YSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaGFuZGxlcnMvdXNlci9jcmVhdGVUYWcuaGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnQHNyYy9kYi9tb2RlbHMnXG5pbXBvcnQgeyBCYXNlSGFuZGxlciB9IGZyb20gJ0BzcmMvbGlicy9iYXNlSGFuZGxlcidcblxuY29uc3QgY29uc3RyYWludHMgPSB7XG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIGNvbG9yQ29kZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gIH0sXG4gIHJlcXVpcmVkOiBbJ25hbWUnLCAnY29sb3JDb2RlJ11cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVRhZ0hhbmRsZXIgZXh0ZW5kcyBCYXNlSGFuZGxlciB7XG4gIGdldCBjb25zdHJhaW50cygpIHtcbiAgICByZXR1cm4gY29uc3RyYWludHNcbiAgfVxuXG4gIGFzeW5jIHJ1bigpIHtcbiAgICBjb25zdCB7IG5hbWUsIGNvbG9yQ29kZSB9ID0gdGhpcy5hcmdzXG5cbiAgICAvLyBDaGVjayBpZiB0YWcgYWxyZWFkeSBleGlzdHNcbiAgICBjb25zdCBleGlzdGluZ1RhZyA9IGF3YWl0IGRiLlRhZy5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7IG5hbWUgfVxuICAgIH0pXG5cbiAgICBpZiAoZXhpc3RpbmdUYWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGFnIGFscmVhZHkgZXhpc3RzJylcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRhZ1xuICAgIGNvbnN0IHRhZyA9IGF3YWl0IGRiLlRhZy5jcmVhdGUoe1xuICAgICAgbmFtZSxcbiAgICAgIGNvbG9yQ29kZVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6ICdUYWcgY3JlYXRlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgZGF0YTogdGFnXG4gICAgfVxuICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxZQUFBLEdBQUFELE9BQUE7QUFBbUQsU0FBQUQsdUJBQUFHLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxLQUFBRSxPQUFBLEVBQUFGLENBQUE7QUFFbkQsTUFBTUcsV0FBVyxHQUFHO0VBQ2xCQyxJQUFJLEVBQUUsUUFBUTtFQUNkQyxVQUFVLEVBQUU7SUFDVkMsSUFBSSxFQUFFO01BQUVGLElBQUksRUFBRTtJQUFTLENBQUM7SUFDeEJHLFNBQVMsRUFBRTtNQUFFSCxJQUFJLEVBQUU7SUFBUztFQUM5QixDQUFDO0VBQ0RJLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFXO0FBQ2hDLENBQUM7QUFFTSxNQUFNQyxnQkFBZ0IsU0FBU0Msd0JBQVcsQ0FBQztFQUNoRCxJQUFJUCxXQUFXQSxDQUFBLEVBQUc7SUFDaEIsT0FBT0EsV0FBVztFQUNwQjtFQUVBLE1BQU1RLEdBQUdBLENBQUEsRUFBRztJQUNWLE1BQU07TUFBRUwsSUFBSTtNQUFFQztJQUFVLENBQUMsR0FBRyxJQUFJLENBQUNLLElBQUk7O0lBRXJDO0lBQ0EsTUFBTUMsV0FBVyxHQUFHLE1BQU1DLGVBQUUsQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLENBQUM7TUFDdkNDLEtBQUssRUFBRTtRQUFFWDtNQUFLO0lBQ2hCLENBQUMsQ0FBQztJQUVGLElBQUlPLFdBQVcsRUFBRTtNQUNmLE1BQU0sSUFBSUssS0FBSyxDQUFDLG9CQUFvQixDQUFDO0lBQ3ZDOztJQUVBO0lBQ0EsTUFBTUMsR0FBRyxHQUFHLE1BQU1MLGVBQUUsQ0FBQ0MsR0FBRyxDQUFDSyxNQUFNLENBQUM7TUFDOUJkLElBQUk7TUFDSkM7SUFDRixDQUFDLENBQUM7SUFFRixPQUFPO01BQ0xjLE9BQU8sRUFBRSxJQUFJO01BQ2JDLE9BQU8sRUFBRSwwQkFBMEI7TUFDbkNDLElBQUksRUFBRUo7SUFDUixDQUFDO0VBQ0g7QUFDRjtBQUFDSyxPQUFBLENBQUFmLGdCQUFBLEdBQUFBLGdCQUFBIiwiaWdub3JlTGlzdCI6W119