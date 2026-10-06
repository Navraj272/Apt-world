"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleUserOtpVerifyHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const schema = {
  type: 'object',
  properties: {
    userId: {
      type: 'string'
    }
  },
  required: ['userId', 'user']
};
class ToggleUserOtpVerifyHandler extends _baseHandler.BaseHandler {
  get constraints() {
    return constraints;
  }
  async run() {
    const userId = this.args.userId;
    try {
      const user = await _models.default.User.findOne({
        where: {
          userId
        }
      });
      user.isPhoneVerified = !user.isPhoneVerified;
      await user.save();
      return {
        success: true
      };
    } catch (error) {
      return this.handleError(error);
    }
  }
}
exports.ToggleUserOtpVerifyHandler = ToggleUserOtpVerifyHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYmFzZUhhbmRsZXIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJzY2hlbWEiLCJ0eXBlIiwicHJvcGVydGllcyIsInVzZXJJZCIsInJlcXVpcmVkIiwiVG9nZ2xlVXNlck90cFZlcmlmeUhhbmRsZXIiLCJCYXNlSGFuZGxlciIsImNvbnN0cmFpbnRzIiwicnVuIiwiYXJncyIsInVzZXIiLCJkYiIsIlVzZXIiLCJmaW5kT25lIiwid2hlcmUiLCJpc1Bob25lVmVyaWZpZWQiLCJzYXZlIiwic3VjY2VzcyIsImVycm9yIiwiaGFuZGxlRXJyb3IiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2hhbmRsZXJzL3VzZXIvVG9nZ2xlVXNlck90cFZlcmlmeUhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJ0BzcmMvZGIvbW9kZWxzJ1xuaW1wb3J0IHsgQmFzZUhhbmRsZXIgfSBmcm9tICdAc3JjL2xpYnMvYmFzZUhhbmRsZXInXG5cbmNvbnN0IHNjaGVtYSA9IHtcbiAgdHlwZTogJ29iamVjdCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICB1c2VySWQ6IHsgdHlwZTogJ3N0cmluZycgfVxuICB9LFxuICByZXF1aXJlZDogWyd1c2VySWQnLCAndXNlciddXG59XG5cblxuZXhwb3J0IGNsYXNzIFRvZ2dsZVVzZXJPdHBWZXJpZnlIYW5kbGVyIGV4dGVuZHMgQmFzZUhhbmRsZXIge1xuICBnZXQgY29uc3RyYWludHMoKSB7XG4gICAgcmV0dXJuIGNvbnN0cmFpbnRzXG4gIH1cblxuICBhc3luYyBydW4oKSB7XG4gICAgY29uc3QgdXNlcklkID0gdGhpcy5hcmdzLnVzZXJJZFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIuVXNlci5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXG4gICAgICB9KVxuICAgICAgdXNlci5pc1Bob25lVmVyaWZpZWQgPSAhdXNlci5pc1Bob25lVmVyaWZpZWRcbiAgICAgIGF3YWl0IHVzZXIuc2F2ZSgpXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcilcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsWUFBQSxHQUFBRCxPQUFBO0FBQW1ELFNBQUFELHVCQUFBRyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBRW5ELE1BQU1HLE1BQU0sR0FBRztFQUNiQyxJQUFJLEVBQUUsUUFBUTtFQUNkQyxVQUFVLEVBQUU7SUFDVkMsTUFBTSxFQUFFO01BQUVGLElBQUksRUFBRTtJQUFTO0VBQzNCLENBQUM7RUFDREcsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU07QUFDN0IsQ0FBQztBQUdNLE1BQU1DLDBCQUEwQixTQUFTQyx3QkFBVyxDQUFDO0VBQzFELElBQUlDLFdBQVdBLENBQUEsRUFBRztJQUNoQixPQUFPQSxXQUFXO0VBQ3BCO0VBRUEsTUFBTUMsR0FBR0EsQ0FBQSxFQUFHO0lBQ1YsTUFBTUwsTUFBTSxHQUFHLElBQUksQ0FBQ00sSUFBSSxDQUFDTixNQUFNO0lBQy9CLElBQUk7TUFDRixNQUFNTyxJQUFJLEdBQUcsTUFBTUMsZUFBRSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztRQUNqQ0MsS0FBSyxFQUFFO1VBQUVYO1FBQU87TUFDbEIsQ0FBQyxDQUFDO01BQ0ZPLElBQUksQ0FBQ0ssZUFBZSxHQUFHLENBQUNMLElBQUksQ0FBQ0ssZUFBZTtNQUM1QyxNQUFNTCxJQUFJLENBQUNNLElBQUksQ0FBQyxDQUFDO01BQ2pCLE9BQU87UUFBRUMsT0FBTyxFQUFFO01BQUssQ0FBQztJQUMxQixDQUFDLENBQ0QsT0FBT0MsS0FBSyxFQUFFO01BQ1osT0FBTyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0QsS0FBSyxDQUFDO0lBQ2hDO0VBQ0Y7QUFDRjtBQUFDRSxPQUFBLENBQUFmLDBCQUFBLEdBQUFBLDBCQUFBIiwiaWdub3JlTGlzdCI6W119