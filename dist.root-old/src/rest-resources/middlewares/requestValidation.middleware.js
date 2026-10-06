"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestValidationMiddleware = requestValidationMiddleware;
var _requestInputValidation = _interopRequireDefault(require("../../errors/requestInputValidation.error"));
var _ajv = _interopRequireDefault(require("../../libs/ajv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * A Socket Context Data type
 * @typedef {Object} RestRequestSchemas
 * @property {import('ajv').Schema} querySchema
 * @property {import('ajv').Schema} paramsSchema
 * @property {import('ajv').Schema} bodySchema
 */

/**
 *
 * @memberof Rest Middleware
 * @export
 * @name requestValidationMiddleware
 * @param {RestRequestSchemas} schema
 * @return {function}
 * It will return a express style middleware function with closure of query, params, and body json schema
 * If there is any error while validating the schemas it will log error and return RequestInputValidationError
 *
 * @example
 * // you can define request schemas
 * // for body, query and params
 * requestValidationMiddleware({
 *   querySchema: {
 *     type: 'string'
 *   },
 *   paramsSchema: {
 *     type: 'string'
 *   },
 *   bodySchema: {
 *     type: 'string'
 *   }
 * })
 */
function requestValidationMiddleware({
  query = {},
  params = {},
  body = {}
}) {
  const compiledQuerySchema = _ajv.default.compile(query);
  const compiledParamsSchema = _ajv.default.compile(params);
  const compiledBodySchema = _ajv.default.compile(body);
  return (req, _, next) => {
    const errorPayload = {};
    if (compiledQuerySchema) {
      if (!compiledQuerySchema(req.query)) errorPayload.query = _ajv.default.errorsText(compiledQuerySchema.errors, {
        separator: ' ||||| '
      }).split(' ||||| ');
    }
    if (compiledParamsSchema) {
      if (!compiledParamsSchema(req.params)) errorPayload.params = _ajv.default.errorsText(compiledParamsSchema.errors, {
        separator: ' ||||| '
      }).split(' ||||| ');
    }
    if (compiledBodySchema) {
      if (!compiledBodySchema(req.body)) errorPayload.body = _ajv.default.errorsText(compiledBodySchema.errors, {
        separator: ' ||||| '
      }).split(' ||||| ');
    }
    errorPayload.query || errorPayload.body || errorPayload.params ? next(new _requestInputValidation.default(errorPayload)) : next();
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVxdWVzdElucHV0VmFsaWRhdGlvbiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2FqdiIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInJlcXVlc3RWYWxpZGF0aW9uTWlkZGxld2FyZSIsInF1ZXJ5IiwicGFyYW1zIiwiYm9keSIsImNvbXBpbGVkUXVlcnlTY2hlbWEiLCJhanYiLCJjb21waWxlIiwiY29tcGlsZWRQYXJhbXNTY2hlbWEiLCJjb21waWxlZEJvZHlTY2hlbWEiLCJyZXEiLCJfIiwibmV4dCIsImVycm9yUGF5bG9hZCIsImVycm9yc1RleHQiLCJlcnJvcnMiLCJzZXBhcmF0b3IiLCJzcGxpdCIsIlJlcXVlc3RJbnB1dFZhbGlkYXRpb25FcnJvciJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXN0LXJlc291cmNlcy9taWRkbGV3YXJlcy9yZXF1ZXN0VmFsaWRhdGlvbi5taWRkbGV3YXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXF1ZXN0SW5wdXRWYWxpZGF0aW9uRXJyb3IgZnJvbSAnQHNyYy9lcnJvcnMvcmVxdWVzdElucHV0VmFsaWRhdGlvbi5lcnJvcidcbmltcG9ydCBhanYgZnJvbSAnQHNyYy9saWJzL2FqdidcblxuLyoqXG4gKiBBIFNvY2tldCBDb250ZXh0IERhdGEgdHlwZVxuICogQHR5cGVkZWYge09iamVjdH0gUmVzdFJlcXVlc3RTY2hlbWFzXG4gKiBAcHJvcGVydHkge2ltcG9ydCgnYWp2JykuU2NoZW1hfSBxdWVyeVNjaGVtYVxuICogQHByb3BlcnR5IHtpbXBvcnQoJ2FqdicpLlNjaGVtYX0gcGFyYW1zU2NoZW1hXG4gKiBAcHJvcGVydHkge2ltcG9ydCgnYWp2JykuU2NoZW1hfSBib2R5U2NoZW1hXG4gKi9cblxuLyoqXG4gKlxuICogQG1lbWJlcm9mIFJlc3QgTWlkZGxld2FyZVxuICogQGV4cG9ydFxuICogQG5hbWUgcmVxdWVzdFZhbGlkYXRpb25NaWRkbGV3YXJlXG4gKiBAcGFyYW0ge1Jlc3RSZXF1ZXN0U2NoZW1hc30gc2NoZW1hXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqIEl0IHdpbGwgcmV0dXJuIGEgZXhwcmVzcyBzdHlsZSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHdpdGggY2xvc3VyZSBvZiBxdWVyeSwgcGFyYW1zLCBhbmQgYm9keSBqc29uIHNjaGVtYVxuICogSWYgdGhlcmUgaXMgYW55IGVycm9yIHdoaWxlIHZhbGlkYXRpbmcgdGhlIHNjaGVtYXMgaXQgd2lsbCBsb2cgZXJyb3IgYW5kIHJldHVybiBSZXF1ZXN0SW5wdXRWYWxpZGF0aW9uRXJyb3JcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8geW91IGNhbiBkZWZpbmUgcmVxdWVzdCBzY2hlbWFzXG4gKiAvLyBmb3IgYm9keSwgcXVlcnkgYW5kIHBhcmFtc1xuICogcmVxdWVzdFZhbGlkYXRpb25NaWRkbGV3YXJlKHtcbiAqICAgcXVlcnlTY2hlbWE6IHtcbiAqICAgICB0eXBlOiAnc3RyaW5nJ1xuICogICB9LFxuICogICBwYXJhbXNTY2hlbWE6IHtcbiAqICAgICB0eXBlOiAnc3RyaW5nJ1xuICogICB9LFxuICogICBib2R5U2NoZW1hOiB7XG4gKiAgICAgdHlwZTogJ3N0cmluZydcbiAqICAgfVxuICogfSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RWYWxpZGF0aW9uTWlkZGxld2FyZSAoeyBxdWVyeSA9IHt9LCBwYXJhbXMgPSB7fSwgYm9keSA9IHt9IH0pIHtcbiAgY29uc3QgY29tcGlsZWRRdWVyeVNjaGVtYSA9IGFqdi5jb21waWxlKHF1ZXJ5KVxuICBjb25zdCBjb21waWxlZFBhcmFtc1NjaGVtYSA9IGFqdi5jb21waWxlKHBhcmFtcylcbiAgY29uc3QgY29tcGlsZWRCb2R5U2NoZW1hID0gYWp2LmNvbXBpbGUoYm9keSlcblxuICByZXR1cm4gKHJlcSwgXywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IGVycm9yUGF5bG9hZCA9IHt9XG5cbiAgICBpZiAoY29tcGlsZWRRdWVyeVNjaGVtYSkge1xuICAgICAgaWYgKCFjb21waWxlZFF1ZXJ5U2NoZW1hKHJlcS5xdWVyeSkpIGVycm9yUGF5bG9hZC5xdWVyeSA9IGFqdi5lcnJvcnNUZXh0KGNvbXBpbGVkUXVlcnlTY2hlbWEuZXJyb3JzLCB7IHNlcGFyYXRvcjogJyB8fHx8fCAnIH0pLnNwbGl0KCcgfHx8fHwgJylcbiAgICB9XG5cbiAgICBpZiAoY29tcGlsZWRQYXJhbXNTY2hlbWEpIHtcbiAgICAgIGlmICghY29tcGlsZWRQYXJhbXNTY2hlbWEocmVxLnBhcmFtcykpIGVycm9yUGF5bG9hZC5wYXJhbXMgPSBhanYuZXJyb3JzVGV4dChjb21waWxlZFBhcmFtc1NjaGVtYS5lcnJvcnMsIHsgc2VwYXJhdG9yOiAnIHx8fHx8ICcgfSkuc3BsaXQoJyB8fHx8fCAnKVxuICAgIH1cblxuICAgIGlmIChjb21waWxlZEJvZHlTY2hlbWEpIHtcbiAgICAgIGlmICghY29tcGlsZWRCb2R5U2NoZW1hKHJlcS5ib2R5KSkgZXJyb3JQYXlsb2FkLmJvZHkgPSBhanYuZXJyb3JzVGV4dChjb21waWxlZEJvZHlTY2hlbWEuZXJyb3JzLCB7IHNlcGFyYXRvcjogJyB8fHx8fCAnIH0pLnNwbGl0KCcgfHx8fHwgJylcbiAgICB9XG5cbiAgICAoZXJyb3JQYXlsb2FkLnF1ZXJ5IHx8IGVycm9yUGF5bG9hZC5ib2R5IHx8IGVycm9yUGF5bG9hZC5wYXJhbXMpID8gbmV4dChuZXcgUmVxdWVzdElucHV0VmFsaWRhdGlvbkVycm9yKGVycm9yUGF5bG9hZCkpIDogbmV4dCgpXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsdUJBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLElBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUErQixTQUFBRCx1QkFBQUcsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNHLDJCQUEyQkEsQ0FBRTtFQUFFQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQUVDLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFBRUMsSUFBSSxHQUFHLENBQUM7QUFBRSxDQUFDLEVBQUU7RUFDbkYsTUFBTUMsbUJBQW1CLEdBQUdDLFlBQUcsQ0FBQ0MsT0FBTyxDQUFDTCxLQUFLLENBQUM7RUFDOUMsTUFBTU0sb0JBQW9CLEdBQUdGLFlBQUcsQ0FBQ0MsT0FBTyxDQUFDSixNQUFNLENBQUM7RUFDaEQsTUFBTU0sa0JBQWtCLEdBQUdILFlBQUcsQ0FBQ0MsT0FBTyxDQUFDSCxJQUFJLENBQUM7RUFFNUMsT0FBTyxDQUFDTSxHQUFHLEVBQUVDLENBQUMsRUFBRUMsSUFBSSxLQUFLO0lBQ3ZCLE1BQU1DLFlBQVksR0FBRyxDQUFDLENBQUM7SUFFdkIsSUFBSVIsbUJBQW1CLEVBQUU7TUFDdkIsSUFBSSxDQUFDQSxtQkFBbUIsQ0FBQ0ssR0FBRyxDQUFDUixLQUFLLENBQUMsRUFBRVcsWUFBWSxDQUFDWCxLQUFLLEdBQUdJLFlBQUcsQ0FBQ1EsVUFBVSxDQUFDVCxtQkFBbUIsQ0FBQ1UsTUFBTSxFQUFFO1FBQUVDLFNBQVMsRUFBRTtNQUFVLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ2pKO0lBRUEsSUFBSVQsb0JBQW9CLEVBQUU7TUFDeEIsSUFBSSxDQUFDQSxvQkFBb0IsQ0FBQ0UsR0FBRyxDQUFDUCxNQUFNLENBQUMsRUFBRVUsWUFBWSxDQUFDVixNQUFNLEdBQUdHLFlBQUcsQ0FBQ1EsVUFBVSxDQUFDTixvQkFBb0IsQ0FBQ08sTUFBTSxFQUFFO1FBQUVDLFNBQVMsRUFBRTtNQUFVLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ3JKO0lBRUEsSUFBSVIsa0JBQWtCLEVBQUU7TUFDdEIsSUFBSSxDQUFDQSxrQkFBa0IsQ0FBQ0MsR0FBRyxDQUFDTixJQUFJLENBQUMsRUFBRVMsWUFBWSxDQUFDVCxJQUFJLEdBQUdFLFlBQUcsQ0FBQ1EsVUFBVSxDQUFDTCxrQkFBa0IsQ0FBQ00sTUFBTSxFQUFFO1FBQUVDLFNBQVMsRUFBRTtNQUFVLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQzdJO0lBRUNKLFlBQVksQ0FBQ1gsS0FBSyxJQUFJVyxZQUFZLENBQUNULElBQUksSUFBSVMsWUFBWSxDQUFDVixNQUFNLEdBQUlTLElBQUksQ0FBQyxJQUFJTSwrQkFBMkIsQ0FBQ0wsWUFBWSxDQUFDLENBQUMsR0FBR0QsSUFBSSxDQUFDLENBQUM7RUFDakksQ0FBQztBQUNIIiwiaWdub3JlTGlzdCI6W119