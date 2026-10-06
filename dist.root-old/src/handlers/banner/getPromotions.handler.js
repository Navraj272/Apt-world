"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetPromotionsHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _baseHandler = require("../../libs/baseHandler");
var _sequelize = require("sequelize");
var _api = require("../../utils/api.utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class GetPromotionsHandler extends _baseHandler.BaseHandler {
  async run() {
    const {
      offset,
      limit,
      pageNo
    } = _api.ApiHelper.getPagination(this.args.pageNo, this.args.limit);
    let {
      search,
      allData = 'false'
    } = this.args;
    const query = {};
    if (search) {
      query[`title.EN`] = {
        [_sequelize.Op.like]: `%${search}%`
      };
    }
    let condition = {
      where: {
        ...query
      },
      order: [['order', 'ASC']]
    };
    if (allData === 'false') {
      condition.limit = limit, condition.offset = offset;
    }
    const promotions = await _models.default.Promotions.findAndCountAll(condition);
    return {
      data: promotions.rows,
      pageNo,
      totalPages: Math.ceil(promotions.count / limit)
    };
  }
}
exports.GetPromotionsHandler = GetPromotionsHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYmFzZUhhbmRsZXIiLCJfc2VxdWVsaXplIiwiX2FwaSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIkdldFByb21vdGlvbnNIYW5kbGVyIiwiQmFzZUhhbmRsZXIiLCJydW4iLCJvZmZzZXQiLCJsaW1pdCIsInBhZ2VObyIsIkFwaUhlbHBlciIsImdldFBhZ2luYXRpb24iLCJhcmdzIiwic2VhcmNoIiwiYWxsRGF0YSIsInF1ZXJ5IiwiT3AiLCJsaWtlIiwiY29uZGl0aW9uIiwid2hlcmUiLCJvcmRlciIsInByb21vdGlvbnMiLCJkYiIsIlByb21vdGlvbnMiLCJmaW5kQW5kQ291bnRBbGwiLCJkYXRhIiwicm93cyIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImNvdW50IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9oYW5kbGVycy9iYW5uZXIvZ2V0UHJvbW90aW9ucy5oYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICdAc3JjL2RiL21vZGVscydcbmltcG9ydCB7IEJhc2VIYW5kbGVyIH0gZnJvbSAnQHNyYy9saWJzL2Jhc2VIYW5kbGVyJ1xuaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnXG5pbXBvcnQgeyBBcGlIZWxwZXIgfSBmcm9tICdAc3JjL3V0aWxzL2FwaS51dGlscydcblxuZXhwb3J0IGNsYXNzIEdldFByb21vdGlvbnNIYW5kbGVyIGV4dGVuZHMgQmFzZUhhbmRsZXIge1xuXG4gIGFzeW5jIHJ1biAoKSB7XG5cbiAgICBjb25zdCB7IG9mZnNldCwgbGltaXQscGFnZU5vIH0gPSBBcGlIZWxwZXIuZ2V0UGFnaW5hdGlvbih0aGlzLmFyZ3MucGFnZU5vLCB0aGlzLmFyZ3MubGltaXQpXG4gICAgbGV0IHsgc2VhcmNoLGFsbERhdGE9J2ZhbHNlJyB9ID0gdGhpcy5hcmdzXG4gICAgY29uc3QgcXVlcnkgPSB7fVxuXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgcXVlcnlbYHRpdGxlLkVOYF0gPSB7IFtPcC5saWtlXTogYCUke3NlYXJjaH0lYCB9XG4gICAgfVxuXG4gICAgbGV0IGNvbmRpdGlvbiA9IHtcbiAgICAgIHdoZXJlIDogeyAuLi5xdWVyeSB9LFxuICAgICAgb3JkZXIgOiBbWydvcmRlcicsICdBU0MnXV1cbiAgICB9XG5cbiAgICBpZihhbGxEYXRhID09PSAnZmFsc2UnKXtcbiAgICAgIGNvbmRpdGlvbi5saW1pdCA9ICBsaW1pdCxcbiAgICAgIGNvbmRpdGlvbi5vZmZzZXQgPSBvZmZzZXRcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tb3Rpb25zID0gYXdhaXQgZGIuUHJvbW90aW9ucy5maW5kQW5kQ291bnRBbGwoY29uZGl0aW9uKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEgOiBwcm9tb3Rpb25zLnJvd3MsXG4gICAgICBwYWdlTm8sXG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwocHJvbW90aW9ucy5jb3VudCAvIGxpbWl0KVxuICAgIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxZQUFBLEdBQUFELE9BQUE7QUFDQSxJQUFBRSxVQUFBLEdBQUFGLE9BQUE7QUFDQSxJQUFBRyxJQUFBLEdBQUFILE9BQUE7QUFBZ0QsU0FBQUQsdUJBQUFLLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxLQUFBRSxPQUFBLEVBQUFGLENBQUE7QUFFekMsTUFBTUcsb0JBQW9CLFNBQVNDLHdCQUFXLENBQUM7RUFFcEQsTUFBTUMsR0FBR0EsQ0FBQSxFQUFJO0lBRVgsTUFBTTtNQUFFQyxNQUFNO01BQUVDLEtBQUs7TUFBQ0M7SUFBTyxDQUFDLEdBQUdDLGNBQVMsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDSCxNQUFNLEVBQUUsSUFBSSxDQUFDRyxJQUFJLENBQUNKLEtBQUssQ0FBQztJQUMzRixJQUFJO01BQUVLLE1BQU07TUFBQ0MsT0FBTyxHQUFDO0lBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQ0YsSUFBSTtJQUMxQyxNQUFNRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWhCLElBQUlGLE1BQU0sRUFBRTtNQUNWRSxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUc7UUFBRSxDQUFDQyxhQUFFLENBQUNDLElBQUksR0FBRyxJQUFJSixNQUFNO01BQUksQ0FBQztJQUNsRDtJQUVBLElBQUlLLFNBQVMsR0FBRztNQUNkQyxLQUFLLEVBQUc7UUFBRSxHQUFHSjtNQUFNLENBQUM7TUFDcEJLLEtBQUssRUFBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBR04sT0FBTyxLQUFLLE9BQU8sRUFBQztNQUNyQkksU0FBUyxDQUFDVixLQUFLLEdBQUlBLEtBQUssRUFDeEJVLFNBQVMsQ0FBQ1gsTUFBTSxHQUFHQSxNQUFNO0lBQzNCO0lBRUEsTUFBTWMsVUFBVSxHQUFHLE1BQU1DLGVBQUUsQ0FBQ0MsVUFBVSxDQUFDQyxlQUFlLENBQUNOLFNBQVMsQ0FBQztJQUVqRSxPQUFPO01BQ0xPLElBQUksRUFBR0osVUFBVSxDQUFDSyxJQUFJO01BQ3RCakIsTUFBTTtNQUNOa0IsVUFBVSxFQUFFQyxJQUFJLENBQUNDLElBQUksQ0FBQ1IsVUFBVSxDQUFDUyxLQUFLLEdBQUd0QixLQUFLO0lBQ2hELENBQUM7RUFDSDtBQUNGO0FBQUN1QixPQUFBLENBQUEzQixvQkFBQSxHQUFBQSxvQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==