"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteCategoryHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _app = require("../../errors/app.error");
var _errorCodes = require("../../errors/errorCodes");
var _baseHandler = require("../../libs/baseHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class DeleteCategoryHandler extends _baseHandler.BaseHandler {
  async run() {
    const {
      id
    } = this.args;
    const category = await _models.default.Category.findByPk(id);
    if (!category) {
      throw new _app.AppError(_errorCodes.Errors.CATEGORY_NOT_FOUND);
    }

    // Check if there are associated subcategories or products?
    // Usually we might want to prevent deletion if children exist.
    const subCount = await _models.default.Subcategory.count({
      where: {
        categoryId: id
      }
    });
    const prodCount = await _models.default.Product.count({
      where: {
        categoryId: id
      }
    });
    if (subCount > 0 || prodCount > 0) {
      // In a real app we might throw an error or soft delete.
      // For "simple CRUD", let's assume we want to protect references.
      throw new _app.AppError({
        ..._errorCodes.Errors.ACTION_NOT_ALLOWED,
        message: 'Cannot delete category with associated subcategories or products.'
      });
    }
    await category.destroy();
    return {
      message: 'Category deleted successfully'
    };
  }
}
exports.DeleteCategoryHandler = DeleteCategoryHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXBwIiwiX2Vycm9yQ29kZXMiLCJfYmFzZUhhbmRsZXIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJEZWxldGVDYXRlZ29yeUhhbmRsZXIiLCJCYXNlSGFuZGxlciIsInJ1biIsImlkIiwiYXJncyIsImNhdGVnb3J5IiwiZGIiLCJDYXRlZ29yeSIsImZpbmRCeVBrIiwiQXBwRXJyb3IiLCJFcnJvcnMiLCJDQVRFR09SWV9OT1RfRk9VTkQiLCJzdWJDb3VudCIsIlN1YmNhdGVnb3J5IiwiY291bnQiLCJ3aGVyZSIsImNhdGVnb3J5SWQiLCJwcm9kQ291bnQiLCJQcm9kdWN0IiwiQUNUSU9OX05PVF9BTExPV0VEIiwibWVzc2FnZSIsImRlc3Ryb3kiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2hhbmRsZXJzL2NhdGVnb3JpZXMvZGVsZXRlQ2F0ZWdvcnkuaGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnQHNyYy9kYi9tb2RlbHMnO1xuaW1wb3J0IHsgQXBwRXJyb3IgfSBmcm9tICdAc3JjL2Vycm9ycy9hcHAuZXJyb3InO1xuaW1wb3J0IHsgRXJyb3JzIH0gZnJvbSAnQHNyYy9lcnJvcnMvZXJyb3JDb2Rlcyc7XG5pbXBvcnQgeyBCYXNlSGFuZGxlciB9IGZyb20gJ0BzcmMvbGlicy9iYXNlSGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVDYXRlZ29yeUhhbmRsZXIgZXh0ZW5kcyBCYXNlSGFuZGxlciB7XG4gIGFzeW5jIHJ1bigpIHtcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLmFyZ3M7XG5cbiAgICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGRiLkNhdGVnb3J5LmZpbmRCeVBrKGlkKTtcbiAgICBpZiAoIWNhdGVnb3J5KSB7XG4gICAgICB0aHJvdyBuZXcgQXBwRXJyb3IoRXJyb3JzLkNBVEVHT1JZX05PVF9GT1VORCk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFzc29jaWF0ZWQgc3ViY2F0ZWdvcmllcyBvciBwcm9kdWN0cz9cbiAgICAvLyBVc3VhbGx5IHdlIG1pZ2h0IHdhbnQgdG8gcHJldmVudCBkZWxldGlvbiBpZiBjaGlsZHJlbiBleGlzdC5cbiAgICBjb25zdCBzdWJDb3VudCA9IGF3YWl0IGRiLlN1YmNhdGVnb3J5LmNvdW50KHsgd2hlcmU6IHsgY2F0ZWdvcnlJZDogaWQgfSB9KTtcbiAgICBjb25zdCBwcm9kQ291bnQgPSBhd2FpdCBkYi5Qcm9kdWN0LmNvdW50KHsgd2hlcmU6IHsgY2F0ZWdvcnlJZDogaWQgfSB9KTtcblxuICAgIGlmIChzdWJDb3VudCA+IDAgfHwgcHJvZENvdW50ID4gMCkge1xuICAgICAgLy8gSW4gYSByZWFsIGFwcCB3ZSBtaWdodCB0aHJvdyBhbiBlcnJvciBvciBzb2Z0IGRlbGV0ZS5cbiAgICAgIC8vIEZvciBcInNpbXBsZSBDUlVEXCIsIGxldCdzIGFzc3VtZSB3ZSB3YW50IHRvIHByb3RlY3QgcmVmZXJlbmNlcy5cbiAgICAgIHRocm93IG5ldyBBcHBFcnJvcih7XG4gICAgICAgIC4uLkVycm9ycy5BQ1RJT05fTk9UX0FMTE9XRUQsXG4gICAgICAgIG1lc3NhZ2U6ICdDYW5ub3QgZGVsZXRlIGNhdGVnb3J5IHdpdGggYXNzb2NpYXRlZCBzdWJjYXRlZ29yaWVzIG9yIHByb2R1Y3RzLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhd2FpdCBjYXRlZ29yeS5kZXN0cm95KCk7XG5cbiAgICByZXR1cm4geyBtZXNzYWdlOiAnQ2F0ZWdvcnkgZGVsZXRlZCBzdWNjZXNzZnVsbHknIH07XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBSCxPQUFBO0FBQW9ELFNBQUFELHVCQUFBSyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBRTdDLE1BQU1HLHFCQUFxQixTQUFTQyx3QkFBVyxDQUFDO0VBQ3JELE1BQU1DLEdBQUdBLENBQUEsRUFBRztJQUNWLE1BQU07TUFBRUM7SUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxJQUFJO0lBRXhCLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxlQUFFLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDTCxFQUFFLENBQUM7SUFDL0MsSUFBSSxDQUFDRSxRQUFRLEVBQUU7TUFDYixNQUFNLElBQUlJLGFBQVEsQ0FBQ0Msa0JBQU0sQ0FBQ0Msa0JBQWtCLENBQUM7SUFDL0M7O0lBRUE7SUFDQTtJQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNTixlQUFFLENBQUNPLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDO01BQUVDLEtBQUssRUFBRTtRQUFFQyxVQUFVLEVBQUViO01BQUc7SUFBRSxDQUFDLENBQUM7SUFDMUUsTUFBTWMsU0FBUyxHQUFHLE1BQU1YLGVBQUUsQ0FBQ1ksT0FBTyxDQUFDSixLQUFLLENBQUM7TUFBRUMsS0FBSyxFQUFFO1FBQUVDLFVBQVUsRUFBRWI7TUFBRztJQUFFLENBQUMsQ0FBQztJQUV2RSxJQUFJUyxRQUFRLEdBQUcsQ0FBQyxJQUFJSyxTQUFTLEdBQUcsQ0FBQyxFQUFFO01BQ2pDO01BQ0E7TUFDQSxNQUFNLElBQUlSLGFBQVEsQ0FBQztRQUNqQixHQUFHQyxrQkFBTSxDQUFDUyxrQkFBa0I7UUFDNUJDLE9BQU8sRUFBRTtNQUNYLENBQUMsQ0FBQztJQUNKO0lBRUEsTUFBTWYsUUFBUSxDQUFDZ0IsT0FBTyxDQUFDLENBQUM7SUFFeEIsT0FBTztNQUFFRCxPQUFPLEVBQUU7SUFBZ0MsQ0FBQztFQUNyRDtBQUNGO0FBQUNFLE9BQUEsQ0FBQXRCLHFCQUFBLEdBQUFBLHFCQUFBIiwiaWdub3JlTGlzdCI6W119