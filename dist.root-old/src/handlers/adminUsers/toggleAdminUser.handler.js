"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleAdminUserHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class ToggleAdminUserHandler extends _baseHandler.BaseHandler {
  async run() {
    const {
      adminUserId
    } = this.args;
    try {
      const adminUser = await _models.default.AdminUser.findOne({
        where: {
          adminUserId
        }
      });
      adminUser.isActive = !adminUser.isActive;
      await adminUser.save();
      return {
        success: true
      };
    } catch (error) {
      return this.handleError(error);
    }
  }
}
exports.ToggleAdminUserHandler = ToggleAdminUserHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYmFzZUhhbmRsZXIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJUb2dnbGVBZG1pblVzZXJIYW5kbGVyIiwiQmFzZUhhbmRsZXIiLCJydW4iLCJhZG1pblVzZXJJZCIsImFyZ3MiLCJhZG1pblVzZXIiLCJkYiIsIkFkbWluVXNlciIsImZpbmRPbmUiLCJ3aGVyZSIsImlzQWN0aXZlIiwic2F2ZSIsInN1Y2Nlc3MiLCJlcnJvciIsImhhbmRsZUVycm9yIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9oYW5kbGVycy9hZG1pblVzZXJzL3RvZ2dsZUFkbWluVXNlci5oYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICdAc3JjL2RiL21vZGVscydcbmltcG9ydCB7IEJhc2VIYW5kbGVyIH0gZnJvbSAnQHNyYy9saWJzL2Jhc2VIYW5kbGVyJ1xuXG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVBZG1pblVzZXJIYW5kbGVyIGV4dGVuZHMgQmFzZUhhbmRsZXIge1xuICAgIGFzeW5jIHJ1bigpIHtcbiAgICAgICAgY29uc3QgeyBhZG1pblVzZXJJZCB9ID0gdGhpcy5hcmdzXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFkbWluVXNlciA9IGF3YWl0IGRiLkFkbWluVXNlci5maW5kT25lKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBhZG1pblVzZXJJZCB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGFkbWluVXNlci5pc0FjdGl2ZSA9ICFhZG1pblVzZXIuaXNBY3RpdmVcbiAgICAgICAgICAgIGF3YWl0IGFkbWluVXNlci5zYXZlKClcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFlBQUEsR0FBQUQsT0FBQTtBQUFtRCxTQUFBRCx1QkFBQUcsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUc1QyxNQUFNRyxzQkFBc0IsU0FBU0Msd0JBQVcsQ0FBQztFQUNwRCxNQUFNQyxHQUFHQSxDQUFBLEVBQUc7SUFDUixNQUFNO01BQUVDO0lBQVksQ0FBQyxHQUFHLElBQUksQ0FBQ0MsSUFBSTtJQUVqQyxJQUFJO01BQ0EsTUFBTUMsU0FBUyxHQUFHLE1BQU1DLGVBQUUsQ0FBQ0MsU0FBUyxDQUFDQyxPQUFPLENBQUM7UUFDekNDLEtBQUssRUFBRTtVQUFFTjtRQUFZO01BQ3pCLENBQUMsQ0FBQztNQUNGRSxTQUFTLENBQUNLLFFBQVEsR0FBRyxDQUFDTCxTQUFTLENBQUNLLFFBQVE7TUFDeEMsTUFBTUwsU0FBUyxDQUFDTSxJQUFJLENBQUMsQ0FBQztNQUN0QixPQUFPO1FBQUVDLE9BQU8sRUFBRTtNQUFLLENBQUM7SUFDNUIsQ0FBQyxDQUNELE9BQU9DLEtBQUssRUFBRTtNQUNWLE9BQU8sSUFBSSxDQUFDQyxXQUFXLENBQUNELEtBQUssQ0FBQztJQUNsQztFQUNKO0FBQ0o7QUFBQ0UsT0FBQSxDQUFBZixzQkFBQSxHQUFBQSxzQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==