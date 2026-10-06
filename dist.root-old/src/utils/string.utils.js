"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringUtils = void 0;
class StringUtils {
  static slugify(text) {
    return text.toString().toLowerCase().trim().replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-'); // Replace multiple - with single -
  }
}
exports.StringUtils = StringUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdHJpbmdVdGlscyIsInNsdWdpZnkiLCJ0ZXh0IiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJyZXBsYWNlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9zdHJpbmcudXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWxzIHtcbiAgc3RhdGljIHNsdWdpZnkodGV4dCkge1xuICAgIHJldHVybiB0ZXh0XG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC50cmltKClcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJykgLy8gUmVwbGFjZSBzcGFjZXMgd2l0aCAtXG4gICAgICAucmVwbGFjZSgvW15cXHctXSsvZywgJycpIC8vIFJlbW92ZSBhbGwgbm9uLXdvcmQgY2hhcnNcbiAgICAgIC5yZXBsYWNlKC8tLSsvZywgJy0nKTsgLy8gUmVwbGFjZSBtdWx0aXBsZSAtIHdpdGggc2luZ2xlIC1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxXQUFXLENBQUM7RUFDdkIsT0FBT0MsT0FBT0EsQ0FBQ0MsSUFBSSxFQUFFO0lBQ25CLE9BQU9BLElBQUksQ0FDUkMsUUFBUSxDQUFDLENBQUMsQ0FDVkMsV0FBVyxDQUFDLENBQUMsQ0FDYkMsSUFBSSxDQUFDLENBQUMsQ0FDTkMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUFBLENBQ3JCQSxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQUEsQ0FDeEJBLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUMzQjtBQUNGO0FBQUNDLE9BQUEsQ0FBQVAsV0FBQSxHQUFBQSxXQUFBIiwiaWdub3JlTGlzdCI6W119