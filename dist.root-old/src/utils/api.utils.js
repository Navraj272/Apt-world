"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiHelper = void 0;
var _errorCodes = require("../errors/errorCodes");
var _dayjs = require("../libs/dayjs");
var _ajv = _interopRequireDefault(require("ajv"));
var _isoWeek = _interopRequireDefault(require("dayjs/plugin/isoWeek"));
var _httpStatusCodes = require("http-status-codes");
var _lodash = _interopRequireDefault(require("lodash"));
var _public = require("./constants/public.constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ajv = new _ajv.default({
  coerceTypes: true,
  removeAdditional: true
}); // Auto-coerce types & remove unknown fields
_dayjs.dayjs.extend(_isoWeek.default);

/**
 * Utility class for API-related helper functions.
 */
class ApiHelper {
  /**
   * Calculates pagination details based on page number and limit.
   * Ensures pageNo is at least 1 and limit is positive.
   *
   * @param {number} [pageNo=1] - Page number (default: 1).
   * @param {number} [limit=10] - Items per page (default: 10).
   * @returns {{ offset: number, limit: number, pageNo: number }} Pagination object.
   *
   * @example
   * const pagination = ApiHelper.getPagination(2, 20);
   * console.log(pagination); // { offset: 20, limit: 20, pageNo: 2 }
   */
  static getPagination(pageNo = 1, limit = 10, pagination = true) {
    if (!pagination) return {
      offset: null,
      limit: null,
      pageNo: 1,
      pagination
    };
    pageNo = Math.max(1, Number(pageNo) || 1); // Ensure pageNo is at least 1
    limit = Math.max(1, Number(limit) || 10); // Ensure limit is positive

    return {
      offset: (pageNo - 1) * limit,
      limit,
      pageNo,
      pagination
    };
  }

  /**
   * Generates a sanitized date range based on input or defaults.
   * If no start date is provided, it defaults to the start of the current week.
   * If no end date is provided, it defaults to tomorrow's end.
   *
   * @param {string} [startDate] - Optional start date.
   * @param {string} [endDate] - Optional end date.
   * @returns {{ startDate: string, endDate: string }} Sanitized date range object.
   *
   * @example
   * const dateRange = ApiHelper.getDateRange('2024-03-01', '2024-03-05');
   * console.log(dateRange); // { startDate: '2024-03-01T00:00:00.000Z', endDate: '2024-03-05T23:59:59.999Z' }
   */
  static getDateRange(startDate, endDate) {
    const start = startDate ? _dayjs.dayjs.tz(startDate, _public.PST_TIMEZONE).startOf('day') : (0, _dayjs.dayjs)().tz(_public.PST_TIMEZONE).startOf('day'); // changed from startOf('isoWeek')

    const end = endDate ? _dayjs.dayjs.tz(endDate, _public.PST_TIMEZONE).endOf('day') : (0, _dayjs.dayjs)().tz(_public.PST_TIMEZONE).endOf('day');
    return {
      startDate: start.toISOString(),
      // Use these in DB query
      endDate: end.toISOString()
    };
  }

  /**
   * Validates and sanitizes query parameters using an Ajv schema.
   * This ensures the incoming query parameters adhere to the expected format.
   *
   * @param {Object} queryParams - The query parameters object.
   * @param {Object} schema - The JSON schema for validation.
   * @returns {Object} - Validated and sanitized query parameters.
   * @throws {Error} - Throws an error if validation fails.
   *
   * @example
   * const schema = {
   *   type: 'object',
   *   properties: {
   *     page: { type: 'integer', minimum: 1 },
   *     limit: { type: 'integer', minimum: 1, maximum: 100 }
   *   },
   *   required: ['page'],
   *   additionalProperties: false
   * };
   *
   * try {
   *   const sanitizedQuery = ApiHelper.sanitizeQuery({ page: "2", limit: "20" }, schema);
   *   console.log(sanitizedQuery); // { page: 2, limit: 20 }
   * } catch (error) {
   *   console.error(error.message);
   * }
   */
  static sanitizeQuery(queryParams, schema) {
    const validate = ajv.compile(schema); // Compile schema on the fly
    const sanitizedParams = {
      ...queryParams
    };
    if (!validate(sanitizedParams)) {
      throw new Error(`Invalid query parameters: ${ajv.errorsText(validate.errors)}`);
    }
    return sanitizedParams;
  }

  /**
   * Sends a structured API response.
   * Ensures all successful responses follow a consistent format.
   *
   * @param {Object} context - The Express request, response, and next function.
   * @param {Object} context.req - The request object.
   * @param {Object} context.res - The response object.
   * @param {Function} context.next - The Express next function.
   * @param {Object} data - The response payload.
   *
   * @example
   * ApiHelper.sendResponse({ req, res, next }, { user: 'John Doe' });
   * // Response: { data: { user: 'John Doe' }, errors: [] }
   */
  static sendResponse({
    req,
    res,
    next
  }, data) {
    if (data && !_lodash.default.isEmpty(data)) {
      res.payload = {
        data,
        errors: []
      };
      const statusCode = res.statusCode || req?.context?.statusCode || _httpStatusCodes.StatusCodes.OK;
      res.status(statusCode).json({
        ...res.payload
      });
    } else {
      next(_errorCodes.Errors.INTERNAL_ERROR);
    }
  }
}
exports.ApiHelper = ApiHelper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXJyb3JDb2RlcyIsInJlcXVpcmUiLCJfZGF5anMiLCJfYWp2IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9pc29XZWVrIiwiX2h0dHBTdGF0dXNDb2RlcyIsIl9sb2Rhc2giLCJfcHVibGljIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiYWp2IiwiQWp2IiwiY29lcmNlVHlwZXMiLCJyZW1vdmVBZGRpdGlvbmFsIiwiZGF5anMiLCJleHRlbmQiLCJpc29XZWVrIiwiQXBpSGVscGVyIiwiZ2V0UGFnaW5hdGlvbiIsInBhZ2VObyIsImxpbWl0IiwicGFnaW5hdGlvbiIsIm9mZnNldCIsIk1hdGgiLCJtYXgiLCJOdW1iZXIiLCJnZXREYXRlUmFuZ2UiLCJzdGFydERhdGUiLCJlbmREYXRlIiwic3RhcnQiLCJ0eiIsIlBTVF9USU1FWk9ORSIsInN0YXJ0T2YiLCJlbmQiLCJlbmRPZiIsInRvSVNPU3RyaW5nIiwic2FuaXRpemVRdWVyeSIsInF1ZXJ5UGFyYW1zIiwic2NoZW1hIiwidmFsaWRhdGUiLCJjb21waWxlIiwic2FuaXRpemVkUGFyYW1zIiwiRXJyb3IiLCJlcnJvcnNUZXh0IiwiZXJyb3JzIiwic2VuZFJlc3BvbnNlIiwicmVxIiwicmVzIiwibmV4dCIsImRhdGEiLCJfIiwiaXNFbXB0eSIsInBheWxvYWQiLCJzdGF0dXNDb2RlIiwiY29udGV4dCIsIlN0YXR1c0NvZGVzIiwiT0siLCJzdGF0dXMiLCJqc29uIiwiRXJyb3JzIiwiSU5URVJOQUxfRVJST1IiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2FwaS51dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvcnMgfSBmcm9tICdAc3JjL2Vycm9ycy9lcnJvckNvZGVzJ1xuaW1wb3J0IHsgZGF5anMsIHNlcnZlckRheWpzIH0gZnJvbSAnQHNyYy9saWJzL2RheWpzJ1xuaW1wb3J0IEFqdiBmcm9tICdhanYnXG5pbXBvcnQgaXNvV2VlayBmcm9tICdkYXlqcy9wbHVnaW4vaXNvV2VlaydcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSAnaHR0cC1zdGF0dXMtY29kZXMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBQU1RfVElNRVpPTkUgfSBmcm9tICcuL2NvbnN0YW50cy9wdWJsaWMuY29uc3RhbnRzJ1xuXG5jb25zdCBhanYgPSBuZXcgQWp2KHsgY29lcmNlVHlwZXM6IHRydWUsIHJlbW92ZUFkZGl0aW9uYWw6IHRydWUgfSkgLy8gQXV0by1jb2VyY2UgdHlwZXMgJiByZW1vdmUgdW5rbm93biBmaWVsZHNcbmRheWpzLmV4dGVuZChpc29XZWVrKVxuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIEFQSS1yZWxhdGVkIGhlbHBlciBmdW5jdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcGlIZWxwZXIge1xuICAvKipcbiAgICogQ2FsY3VsYXRlcyBwYWdpbmF0aW9uIGRldGFpbHMgYmFzZWQgb24gcGFnZSBudW1iZXIgYW5kIGxpbWl0LlxuICAgKiBFbnN1cmVzIHBhZ2VObyBpcyBhdCBsZWFzdCAxIGFuZCBsaW1pdCBpcyBwb3NpdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwYWdlTm89MV0gLSBQYWdlIG51bWJlciAoZGVmYXVsdDogMSkuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbGltaXQ9MTBdIC0gSXRlbXMgcGVyIHBhZ2UgKGRlZmF1bHQ6IDEwKS5cbiAgICogQHJldHVybnMge3sgb2Zmc2V0OiBudW1iZXIsIGxpbWl0OiBudW1iZXIsIHBhZ2VObzogbnVtYmVyIH19IFBhZ2luYXRpb24gb2JqZWN0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBwYWdpbmF0aW9uID0gQXBpSGVscGVyLmdldFBhZ2luYXRpb24oMiwgMjApO1xuICAgKiBjb25zb2xlLmxvZyhwYWdpbmF0aW9uKTsgLy8geyBvZmZzZXQ6IDIwLCBsaW1pdDogMjAsIHBhZ2VObzogMiB9XG4gICAqL1xuICBzdGF0aWMgZ2V0UGFnaW5hdGlvbihwYWdlTm8gPSAxLCBsaW1pdCA9IDEwLCBwYWdpbmF0aW9uID0gdHJ1ZSkge1xuXG4gICAgaWYgKCFwYWdpbmF0aW9uKSByZXR1cm4geyBvZmZzZXQ6IG51bGwsIGxpbWl0OiBudWxsLCBwYWdlTm86IDEsIHBhZ2luYXRpb24gfVxuXG4gICAgcGFnZU5vID0gTWF0aC5tYXgoMSwgTnVtYmVyKHBhZ2VObykgfHwgMSkgLy8gRW5zdXJlIHBhZ2VObyBpcyBhdCBsZWFzdCAxXG4gICAgbGltaXQgPSBNYXRoLm1heCgxLCBOdW1iZXIobGltaXQpIHx8IDEwKSAvLyBFbnN1cmUgbGltaXQgaXMgcG9zaXRpdmVcblxuICAgIHJldHVybiB7IG9mZnNldDogKHBhZ2VObyAtIDEpICogbGltaXQsIGxpbWl0LCBwYWdlTm8sIHBhZ2luYXRpb24gfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIHNhbml0aXplZCBkYXRlIHJhbmdlIGJhc2VkIG9uIGlucHV0IG9yIGRlZmF1bHRzLlxuICAgKiBJZiBubyBzdGFydCBkYXRlIGlzIHByb3ZpZGVkLCBpdCBkZWZhdWx0cyB0byB0aGUgc3RhcnQgb2YgdGhlIGN1cnJlbnQgd2Vlay5cbiAgICogSWYgbm8gZW5kIGRhdGUgaXMgcHJvdmlkZWQsIGl0IGRlZmF1bHRzIHRvIHRvbW9ycm93J3MgZW5kLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXJ0RGF0ZV0gLSBPcHRpb25hbCBzdGFydCBkYXRlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2VuZERhdGVdIC0gT3B0aW9uYWwgZW5kIGRhdGUuXG4gICAqIEByZXR1cm5zIHt7IHN0YXJ0RGF0ZTogc3RyaW5nLCBlbmREYXRlOiBzdHJpbmcgfX0gU2FuaXRpemVkIGRhdGUgcmFuZ2Ugb2JqZWN0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBkYXRlUmFuZ2UgPSBBcGlIZWxwZXIuZ2V0RGF0ZVJhbmdlKCcyMDI0LTAzLTAxJywgJzIwMjQtMDMtMDUnKTtcbiAgICogY29uc29sZS5sb2coZGF0ZVJhbmdlKTsgLy8geyBzdGFydERhdGU6ICcyMDI0LTAzLTAxVDAwOjAwOjAwLjAwMFonLCBlbmREYXRlOiAnMjAyNC0wMy0wNVQyMzo1OTo1OS45OTlaJyB9XG4gICAqL1xuICBzdGF0aWMgZ2V0RGF0ZVJhbmdlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnREYXRlXG4gICAgICA/IGRheWpzLnR6KHN0YXJ0RGF0ZSwgUFNUX1RJTUVaT05FKS5zdGFydE9mKCdkYXknKVxuICAgICAgOiBkYXlqcygpLnR6KFBTVF9USU1FWk9ORSkuc3RhcnRPZignZGF5Jyk7IC8vIGNoYW5nZWQgZnJvbSBzdGFydE9mKCdpc29XZWVrJylcblxuICAgIGNvbnN0IGVuZCA9IGVuZERhdGVcbiAgICAgID8gZGF5anMudHooZW5kRGF0ZSwgUFNUX1RJTUVaT05FKS5lbmRPZignZGF5JylcbiAgICAgIDogZGF5anMoKS50eihQU1RfVElNRVpPTkUpLmVuZE9mKCdkYXknKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydERhdGU6IHN0YXJ0LnRvSVNPU3RyaW5nKCksIC8vIFVzZSB0aGVzZSBpbiBEQiBxdWVyeVxuICAgICAgZW5kRGF0ZTogZW5kLnRvSVNPU3RyaW5nKCksXG4gICAgfTtcbiAgfVxuXG5cblxuXG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhbmQgc2FuaXRpemVzIHF1ZXJ5IHBhcmFtZXRlcnMgdXNpbmcgYW4gQWp2IHNjaGVtYS5cbiAgICogVGhpcyBlbnN1cmVzIHRoZSBpbmNvbWluZyBxdWVyeSBwYXJhbWV0ZXJzIGFkaGVyZSB0byB0aGUgZXhwZWN0ZWQgZm9ybWF0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcXVlcnlQYXJhbXMgLSBUaGUgcXVlcnkgcGFyYW1ldGVycyBvYmplY3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgLSBUaGUgSlNPTiBzY2hlbWEgZm9yIHZhbGlkYXRpb24uXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IC0gVmFsaWRhdGVkIGFuZCBzYW5pdGl6ZWQgcXVlcnkgcGFyYW1ldGVycy5cbiAgICogQHRocm93cyB7RXJyb3J9IC0gVGhyb3dzIGFuIGVycm9yIGlmIHZhbGlkYXRpb24gZmFpbHMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IHNjaGVtYSA9IHtcbiAgICogICB0eXBlOiAnb2JqZWN0JyxcbiAgICogICBwcm9wZXJ0aWVzOiB7XG4gICAqICAgICBwYWdlOiB7IHR5cGU6ICdpbnRlZ2VyJywgbWluaW11bTogMSB9LFxuICAgKiAgICAgbGltaXQ6IHsgdHlwZTogJ2ludGVnZXInLCBtaW5pbXVtOiAxLCBtYXhpbXVtOiAxMDAgfVxuICAgKiAgIH0sXG4gICAqICAgcmVxdWlyZWQ6IFsncGFnZSddLFxuICAgKiAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZVxuICAgKiB9O1xuICAgKlxuICAgKiB0cnkge1xuICAgKiAgIGNvbnN0IHNhbml0aXplZFF1ZXJ5ID0gQXBpSGVscGVyLnNhbml0aXplUXVlcnkoeyBwYWdlOiBcIjJcIiwgbGltaXQ6IFwiMjBcIiB9LCBzY2hlbWEpO1xuICAgKiAgIGNvbnNvbGUubG9nKHNhbml0aXplZFF1ZXJ5KTsgLy8geyBwYWdlOiAyLCBsaW1pdDogMjAgfVxuICAgKiB9IGNhdGNoIChlcnJvcikge1xuICAgKiAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAqIH1cbiAgICovXG4gIHN0YXRpYyBzYW5pdGl6ZVF1ZXJ5KHF1ZXJ5UGFyYW1zLCBzY2hlbWEpIHtcbiAgICBjb25zdCB2YWxpZGF0ZSA9IGFqdi5jb21waWxlKHNjaGVtYSkgLy8gQ29tcGlsZSBzY2hlbWEgb24gdGhlIGZseVxuICAgIGNvbnN0IHNhbml0aXplZFBhcmFtcyA9IHsgLi4ucXVlcnlQYXJhbXMgfVxuXG4gICAgaWYgKCF2YWxpZGF0ZShzYW5pdGl6ZWRQYXJhbXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcXVlcnkgcGFyYW1ldGVyczogJHthanYuZXJyb3JzVGV4dCh2YWxpZGF0ZS5lcnJvcnMpfWApXG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbml0aXplZFBhcmFtc1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgc3RydWN0dXJlZCBBUEkgcmVzcG9uc2UuXG4gICAqIEVuc3VyZXMgYWxsIHN1Y2Nlc3NmdWwgcmVzcG9uc2VzIGZvbGxvdyBhIGNvbnNpc3RlbnQgZm9ybWF0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCAtIFRoZSBFeHByZXNzIHJlcXVlc3QsIHJlc3BvbnNlLCBhbmQgbmV4dCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQucmVxIC0gVGhlIHJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dC5yZXMgLSBUaGUgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250ZXh0Lm5leHQgLSBUaGUgRXhwcmVzcyBuZXh0IGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSByZXNwb25zZSBwYXlsb2FkLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBBcGlIZWxwZXIuc2VuZFJlc3BvbnNlKHsgcmVxLCByZXMsIG5leHQgfSwgeyB1c2VyOiAnSm9obiBEb2UnIH0pO1xuICAgKiAvLyBSZXNwb25zZTogeyBkYXRhOiB7IHVzZXI6ICdKb2huIERvZScgfSwgZXJyb3JzOiBbXSB9XG4gICAqL1xuICBzdGF0aWMgc2VuZFJlc3BvbnNlKHsgcmVxLCByZXMsIG5leHQgfSwgZGF0YSkge1xuICAgIGlmIChkYXRhICYmICFfLmlzRW1wdHkoZGF0YSkpIHtcbiAgICAgIHJlcy5wYXlsb2FkID0geyBkYXRhLCBlcnJvcnM6IFtdIH1cbiAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZSB8fCByZXE/LmNvbnRleHQ/LnN0YXR1c0NvZGUgfHwgU3RhdHVzQ29kZXMuT0tcbiAgICAgIHJlcy5zdGF0dXMoc3RhdHVzQ29kZSkuanNvbih7IC4uLnJlcy5wYXlsb2FkIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHQoRXJyb3JzLklOVEVSTkFMX0VSUk9SKVxuICAgIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7QUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7QUFDQSxJQUFBRSxJQUFBLEdBQUFDLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSSxRQUFBLEdBQUFELHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSyxnQkFBQSxHQUFBTCxPQUFBO0FBQ0EsSUFBQU0sT0FBQSxHQUFBSCxzQkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQU8sT0FBQSxHQUFBUCxPQUFBO0FBQTJELFNBQUFHLHVCQUFBSyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBRTNELE1BQU1HLEdBQUcsR0FBRyxJQUFJQyxZQUFHLENBQUM7RUFBRUMsV0FBVyxFQUFFLElBQUk7RUFBRUMsZ0JBQWdCLEVBQUU7QUFBSyxDQUFDLENBQUMsRUFBQztBQUNuRUMsWUFBSyxDQUFDQyxNQUFNLENBQUNDLGdCQUFPLENBQUM7O0FBRXJCO0FBQ0E7QUFDQTtBQUNPLE1BQU1DLFNBQVMsQ0FBQztFQUNyQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRSxPQUFPQyxhQUFhQSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFQyxLQUFLLEdBQUcsRUFBRSxFQUFFQyxVQUFVLEdBQUcsSUFBSSxFQUFFO0lBRTlELElBQUksQ0FBQ0EsVUFBVSxFQUFFLE9BQU87TUFBRUMsTUFBTSxFQUFFLElBQUk7TUFBRUYsS0FBSyxFQUFFLElBQUk7TUFBRUQsTUFBTSxFQUFFLENBQUM7TUFBRUU7SUFBVyxD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