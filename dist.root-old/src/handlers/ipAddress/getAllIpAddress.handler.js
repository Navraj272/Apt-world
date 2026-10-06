"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllIpAddressHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class GetAllIpAddressHandler extends _baseHandler.BaseHandler {
  async run() {
    const {
      page = 1,
      limit = 10
    } = this.args;
    const offset = (page - 1) * limit;
    const {
      count,
      rows: ipAddresses
    } = await _models.default.WhitelistedIpAddress.findAndCountAll({
      include: [{
        model: _models.default.AdminUser,
        as: 'admin',
        attributes: ['firstName', 'lastName']
      }],
      offset,
      limit,
      order: [['created_at', 'DESC']]
    });
    return {
      ipAddresses,
      pagination: {
        total: count,
        page,
        limit,
        totalPages: Math.ceil(count / limit)
      }
    };
  }
}
exports.GetAllIpAddressHandler = GetAllIpAddressHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYmFzZUhhbmRsZXIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJHZXRBbGxJcEFkZHJlc3NIYW5kbGVyIiwiQmFzZUhhbmRsZXIiLCJydW4iLCJwYWdlIiwibGltaXQiLCJhcmdzIiwib2Zmc2V0IiwiY291bnQiLCJyb3dzIiwiaXBBZGRyZXNzZXMiLCJkYiIsIldoaXRlbGlzdGVkSXBBZGRyZXNzIiwiZmluZEFuZENvdW50QWxsIiwiaW5jbHVkZSIsIm1vZGVsIiwiQWRtaW5Vc2VyIiwiYXMiLCJhdHRyaWJ1dGVzIiwib3JkZXIiLCJwYWdpbmF0aW9uIiwidG90YWwiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2hhbmRsZXJzL2lwQWRkcmVzcy9nZXRBbGxJcEFkZHJlc3MuaGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnQHNyYy9kYi9tb2RlbHMnXG5pbXBvcnQgeyBCYXNlSGFuZGxlciB9IGZyb20gJ0BzcmMvbGlicy9iYXNlSGFuZGxlcidcblxuZXhwb3J0IGNsYXNzIEdldEFsbElwQWRkcmVzc0hhbmRsZXIgZXh0ZW5kcyBCYXNlSGFuZGxlciB7XG4gIGFzeW5jIHJ1bigpIHtcbiAgICBjb25zdCB7IHBhZ2UgPSAxLCBsaW1pdCA9IDEwIH0gPSB0aGlzLmFyZ3NcbiAgICBjb25zdCBvZmZzZXQgPSAocGFnZSAtIDEpICogbGltaXRcblxuICAgIGNvbnN0IHsgY291bnQsIHJvd3M6IGlwQWRkcmVzc2VzIH0gPSBhd2FpdCBkYi5XaGl0ZWxpc3RlZElwQWRkcmVzcy5maW5kQW5kQ291bnRBbGwoe1xuICAgICAgaW5jbHVkZSA6IFt7XG4gICAgICAgIG1vZGVsOiBkYi5BZG1pblVzZXIsXG4gICAgICAgIGFzIDogJ2FkbWluJyxcbiAgICAgICAgYXR0cmlidXRlczogWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnXVxuICAgICAgfV0sXG4gICAgICBvZmZzZXQsXG4gICAgICBsaW1pdCxcbiAgICAgIG9yZGVyOiBbWydjcmVhdGVkX2F0JywgJ0RFU0MnXV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlwQWRkcmVzc2VzLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICB0b3RhbDogY291bnQsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGxpbWl0LFxuICAgICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwoY291bnQgLyBsaW1pdClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsWUFBQSxHQUFBRCxPQUFBO0FBQW1ELFNBQUFELHVCQUFBRyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBRTVDLE1BQU1HLHNCQUFzQixTQUFTQyx3QkFBVyxDQUFDO0VBQ3RELE1BQU1DLEdBQUdBLENBQUEsRUFBRztJQUNWLE1BQU07TUFBRUMsSUFBSSxHQUFHLENBQUM7TUFBRUMsS0FBSyxHQUFHO0lBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0MsSUFBSTtJQUMxQyxNQUFNQyxNQUFNLEdBQUcsQ0FBQ0gsSUFBSSxHQUFHLENBQUMsSUFBSUMsS0FBSztJQUVqQyxNQUFNO01BQUVHLEtBQUs7TUFBRUMsSUFBSSxFQUFFQztJQUFZLENBQUMsR0FBRyxNQUFNQyxlQUFFLENBQUNDLG9CQUFvQixDQUFDQyxlQUFlLENBQUM7TUFDakZDLE9BQU8sRUFBRyxDQUFDO1FBQ1RDLEtBQUssRUFBRUosZUFBRSxDQUFDSyxTQUFTO1FBQ25CQyxFQUFFLEVBQUcsT0FBTztRQUNaQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVTtNQUN0QyxDQUFDLENBQUM7TUFDRlgsTUFBTTtNQUNORixLQUFLO01BQ0xjLEtBQUssRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFFRixPQUFPO01BQ0xULFdBQVc7TUFDWFUsVUFBVSxFQUFFO1FBQ1ZDLEtBQUssRUFBRWIsS0FBSztRQUNaSixJQUFJO1FBQ0pDLEtBQUs7UUFDTGlCLFVBQVUsRUFBRUMsSUFBSSxDQUFDQyxJQUFJLENBQUNoQixLQUFLLEdBQUdILEtBQUs7TUFDckM7SUFDRixDQUFDO0VBQ0g7QUFDRjtBQUFDb0IsT0FBQSxDQUFBeEIsc0JBQUEsR0FBQUEsc0JBQUEiLCJpZ25vcmVMaXN0IjpbXX0=