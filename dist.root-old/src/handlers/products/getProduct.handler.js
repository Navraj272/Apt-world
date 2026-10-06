"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetProductHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _app = require("../../errors/app.error");
var _errorCodes = require("../../errors/errorCodes");
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class GetProductHandler extends _baseHandler.BaseHandler {
  async run() {
    const {
      id
    } = this.args;
    const product = await _models.default.Product.findByPk(id, {
      include: [{
        model: _models.default.Category,
        as: 'category'
      }, {
        model: _models.default.Subcategory,
        as: 'subcategory'
      }]
    });
    if (!product) {
      throw new _app.AppError(_errorCodes.Errors.PRODUCT_NOT_FOUND);
    }
    return product;
  }
}
exports.GetProductHandler = GetProductHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXBwIiwiX2Vycm9yQ29kZXMiLCJfYmFzZUhhbmRsZXIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJHZXRQcm9kdWN0SGFuZGxlciIsIkJhc2VIYW5kbGVyIiwicnVuIiwiaWQiLCJhcmdzIiwicHJvZHVjdCIsImRiIiwiUHJvZHVjdCIsImZpbmRCeVBrIiwiaW5jbHVkZSIsIm1vZGVsIiwiQ2F0ZWdvcnkiLCJhcyIsIlN1YmNhdGVnb3J5IiwiQXBwRXJyb3IiLCJFcnJvcnMiLCJQUk9EVUNUX05PVF9GT1VORCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaGFuZGxlcnMvcHJvZHVjdHMvZ2V0UHJvZHVjdC5oYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICdAc3JjL2RiL21vZGVscyc7XG5pbXBvcnQgeyBBcHBFcnJvciB9IGZyb20gJ0BzcmMvZXJyb3JzL2FwcC5lcnJvcic7XG5pbXBvcnQgeyBFcnJvcnMgfSBmcm9tICdAc3JjL2Vycm9ycy9lcnJvckNvZGVzJztcbmltcG9ydCB7IEJhc2VIYW5kbGVyIH0gZnJvbSAnQHNyYy9saWJzL2Jhc2VIYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RIYW5kbGVyIGV4dGVuZHMgQmFzZUhhbmRsZXIge1xuICBhc3luYyBydW4oKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5hcmdzO1xuXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLlByb2R1Y3QuZmluZEJ5UGsoaWQsIHtcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgeyBtb2RlbDogZGIuQ2F0ZWdvcnksIGFzOiAnY2F0ZWdvcnknIH0sXG4gICAgICAgIHsgbW9kZWw6IGRiLlN1YmNhdGVnb3J5LCBhczogJ3N1YmNhdGVnb3J5JyB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGlmICghcHJvZHVjdCkge1xuICAgICAgdGhyb3cgbmV3IEFwcEVycm9yKEVycm9ycy5QUk9EVUNUX05PVF9GT1VORCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2R1Y3Q7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBSCxPQUFBO0FBQW9ELFNBQUFELHVCQUFBSyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBRTdDLE1BQU1HLGlCQUFpQixTQUFTQyx3QkFBVyxDQUFDO0VBQ2pELE1BQU1DLEdBQUdBLENBQUEsRUFBRztJQUNWLE1BQU07TUFBRUM7SUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxJQUFJO0lBRXhCLE1BQU1DLE9BQU8sR0FBRyxNQUFNQyxlQUFFLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDTCxFQUFFLEVBQUU7TUFDNUNNLE9BQU8sRUFBRSxDQUNQO1FBQUVDLEtBQUssRUFBRUosZUFBRSxDQUFDSyxRQUFRO1FBQUVDLEVBQUUsRUFBRTtNQUFXLENBQUMsRUFDdEM7UUFBRUYsS0FBSyxFQUFFSixlQUFFLENBQUNPLFdBQVc7UUFBRUQsRUFBRSxFQUFFO01BQWMsQ0FBQztJQUVoRCxDQUFDLENBQUM7SUFFRixJQUFJLENBQUNQLE9BQU8sRUFBRTtNQUNaLE1BQU0sSUFBSVMsYUFBUSxDQUFDQyxrQkFBTSxDQUFDQyxpQkFBaUIsQ0FBQztJQUM5QztJQUVBLE9BQU9YLE9BQU87RUFDaEI7QUFDRjtBQUFDWSxPQUFBLENBQUFqQixpQkFBQSxHQUFBQSxpQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==