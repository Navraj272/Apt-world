"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responseValidationMiddleware = responseValidationMiddleware;
var _ajv = _interopRequireDefault(require("../../libs/ajv"));
var _httpStatusCodes = require("http-status-codes");
var _lodash = require("lodash");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import { checkAndRemoveFiles } from './multer'

/**
 * A Socket Context Data type
 * @typedef {Object} ResponseSchema
 * @property {import('ajv').Schema} default
 */

/**
 * This middleware is to validate the response of a request, accespts and object containing response object
 * @param {{
 *   response: ResponseSchema
 * }}
 * @return {import('express').RequestHandler}
 * @example
 * // you can define response schema
 * // as per the statusCode and for the
 * // rest status code you can define default schema
 * // and you can define global
 * // schema for 2xx or 3xx it will
 * // match all the status code started with 2 or 3
 * responseValidationMiddleware({
 *  response: {
 *    default: {
 *      type: 'string'
 *    },
 *    200: {
 *      type: 'string'
 *    },
 *    '2xx': {
 *      type: 'string'
 *    }
 *  }
 * })
 */
function responseValidationMiddleware({
  response = {}
}) {
  const compiledResponseSchema = (0, _lodash.mapValues)(response, schema => _ajv.default.compile(schema));
  return async (req, res) => {
    // await checkAndRemoveFiles(req)
    res.payload = {
      data: null,
      errors: [],
      ...res.payload
    };
    res.payload = JSON.parse(JSON.stringify(res.payload));
    const statusCode = res.statusCode || req?.context?.statusCode || _httpStatusCodes.StatusCodes.OK;
    const compiledSchema = compiledResponseSchema[statusCode] || compiledResponseSchema[`${statusCode.toString()[0]}xx`] || compiledResponseSchema.default;
    if (compiledSchema) compiledSchema(res.payload);
    res.status(statusCode).json(res.payload);
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYWp2IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaHR0cFN0YXR1c0NvZGVzIiwiX2xvZGFzaCIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInJlc3BvbnNlVmFsaWRhdGlvbk1pZGRsZXdhcmUiLCJyZXNwb25zZSIsImNvbXBpbGVkUmVzcG9uc2VTY2hlbWEiLCJtYXBWYWx1ZXMiLCJzY2hlbWEiLCJhanYiLCJjb21waWxlIiwicmVxIiwicmVzIiwicGF5bG9hZCIsImRhdGEiLCJlcnJvcnMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0dXNDb2RlIiwiY29udGV4dCIsIlN0YXR1c0NvZGVzIiwiT0siLCJjb21waWxlZFNjaGVtYSIsInRvU3RyaW5nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXN0LXJlc291cmNlcy9taWRkbGV3YXJlcy9yZXNwb25zZVZhbGlkYXRpb24ubWlkZGxld2FyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWp2IGZyb20gJ0BzcmMvbGlicy9hanYnXG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gJ2h0dHAtc3RhdHVzLWNvZGVzJ1xuaW1wb3J0IHsgbWFwVmFsdWVzIH0gZnJvbSAnbG9kYXNoJ1xuLy8gaW1wb3J0IHsgY2hlY2tBbmRSZW1vdmVGaWxlcyB9IGZyb20gJy4vbXVsdGVyJ1xuXG4vKipcbiAqIEEgU29ja2V0IENvbnRleHQgRGF0YSB0eXBlXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZXNwb25zZVNjaGVtYVxuICogQHByb3BlcnR5IHtpbXBvcnQoJ2FqdicpLlNjaGVtYX0gZGVmYXVsdFxuICovXG5cbi8qKlxuICogVGhpcyBtaWRkbGV3YXJlIGlzIHRvIHZhbGlkYXRlIHRoZSByZXNwb25zZSBvZiBhIHJlcXVlc3QsIGFjY2VzcHRzIGFuZCBvYmplY3QgY29udGFpbmluZyByZXNwb25zZSBvYmplY3RcbiAqIEBwYXJhbSB7e1xuICogICByZXNwb25zZTogUmVzcG9uc2VTY2hlbWFcbiAqIH19XG4gKiBAcmV0dXJuIHtpbXBvcnQoJ2V4cHJlc3MnKS5SZXF1ZXN0SGFuZGxlcn1cbiAqIEBleGFtcGxlXG4gKiAvLyB5b3UgY2FuIGRlZmluZSByZXNwb25zZSBzY2hlbWFcbiAqIC8vIGFzIHBlciB0aGUgc3RhdHVzQ29kZSBhbmQgZm9yIHRoZVxuICogLy8gcmVzdCBzdGF0dXMgY29kZSB5b3UgY2FuIGRlZmluZSBkZWZhdWx0IHNjaGVtYVxuICogLy8gYW5kIHlvdSBjYW4gZGVmaW5lIGdsb2JhbFxuICogLy8gc2NoZW1hIGZvciAyeHggb3IgM3h4IGl0IHdpbGxcbiAqIC8vIG1hdGNoIGFsbCB0aGUgc3RhdHVzIGNvZGUgc3RhcnRlZCB3aXRoIDIgb3IgM1xuICogcmVzcG9uc2VWYWxpZGF0aW9uTWlkZGxld2FyZSh7XG4gKiAgcmVzcG9uc2U6IHtcbiAqICAgIGRlZmF1bHQ6IHtcbiAqICAgICAgdHlwZTogJ3N0cmluZydcbiAqICAgIH0sXG4gKiAgICAyMDA6IHtcbiAqICAgICAgdHlwZTogJ3N0cmluZydcbiAqICAgIH0sXG4gKiAgICAnMnh4Jzoge1xuICogICAgICB0eXBlOiAnc3RyaW5nJ1xuICogICAgfVxuICogIH1cbiAqIH0pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNwb25zZVZhbGlkYXRpb25NaWRkbGV3YXJlICh7IHJlc3BvbnNlID0ge30gfSkge1xuICBjb25zdCBjb21waWxlZFJlc3BvbnNlU2NoZW1hID0gbWFwVmFsdWVzKHJlc3BvbnNlLCBzY2hlbWEgPT4gYWp2LmNvbXBpbGUoc2NoZW1hKSlcblxuICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgLy8gYXdhaXQgY2hlY2tBbmRSZW1vdmVGaWxlcyhyZXEpXG4gICAgcmVzLnBheWxvYWQgPSB7IGRhdGE6IG51bGwsIGVycm9yczogW10sIC4uLnJlcy5wYXlsb2FkIH1cbiAgICByZXMucGF5bG9hZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzLnBheWxvYWQpKVxuXG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlIHx8IHJlcT8uY29udGV4dD8uc3RhdHVzQ29kZSB8fCBTdGF0dXNDb2Rlcy5PS1xuICAgIGNvbnN0IGNvbXBpbGVkU2NoZW1hID0gY29tcGlsZWRSZXNwb25zZVNjaGVtYVtzdGF0dXNDb2RlXSB8fCBjb21waWxlZFJlc3BvbnNlU2NoZW1hW2Ake3N0YXR1c0NvZGUudG9TdHJpbmcoKVswXX14eGBdIHx8IGNvbXBpbGVkUmVzcG9uc2VTY2hlbWEuZGVmYXVsdFxuXG4gICAgaWYgKGNvbXBpbGVkU2NoZW1hKSBjb21waWxlZFNjaGVtYShyZXMucGF5bG9hZClcbiAgICByZXMuc3RhdHVzKHN0YXR1c0NvZGUpLmpzb24ocmVzLnBheWxvYWQpXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsSUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsZ0JBQUEsR0FBQUQsT0FBQTtBQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtBQUFrQyxTQUFBRCx1QkFBQUksQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNHLDRCQUE0QkEsQ0FBRTtFQUFFQyxRQUFRLEdBQUcsQ0FBQztBQUFFLENBQUMsRUFBRTtFQUMvRCxNQUFNQyxzQkFBc0IsR0FBRyxJQUFBQyxpQkFBUyxFQUFDRixRQUFRLEVBQUVHLE1BQU0sSUFBSUMsWUFBRyxDQUFDQyxPQUFPLENBQUNGLE1BQU0sQ0FBQyxDQUFDO0VBRWpGLE9BQU8sT0FBT0csR0FBRyxFQUFFQyxHQUFHLEtBQUs7SUFDekI7SUFDQUEsR0FBRyxDQUFDQyxPQUFPLEdBQUc7TUFBRUMsSUFBSSxFQUFFLElBQUk7TUFBRUMsTUFBTSxFQUFFLEVBQUU7TUFBRSxHQUFHSCxHQUFHLENBQUNDO0lBQVEsQ0FBQztJQUN4REQsR0FBRyxDQUFDQyxPQUFPLEdBQUdHLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ04sR0FBRyxDQUFDQyxPQUFPLENBQUMsQ0FBQztJQUVyRCxNQUFNTSxVQUFVLEdBQUdQLEdBQUcsQ0FBQ08sVUFBVSxJQUFJUixHQUFHLEVBQUVTLE9BQU8sRUFBRUQsVUFBVSxJQUFJRSw0QkFBVyxDQUFDQyxFQUFFO0lBQy9FLE1BQU1DLGNBQWMsR0FBR2pCLHNCQUFzQixDQUFDYSxVQUFVLENBQUMsSUFBSWIsc0JBQXNCLENBQUMsR0FBR2EsVUFBVSxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSWxCLHNCQUFzQixDQUFDSCxPQUFPO0lBRXRKLElBQUlvQixjQUFjLEVBQUVBLGNBQWMsQ0FBQ1gsR0FBRyxDQUFDQyxPQUFPLENBQUM7SUFDL0NELEdBQUcsQ0FBQ2EsTUFBTSxDQUFDTixVQUFVLENBQUMsQ0FBQ08sSUFBSSxDQUFDZCxHQUFHLENBQUNDLE9BQU8sQ0FBQztFQUMxQyxDQUFDO0FBQ0giLCJpZ25vcmVMaXN0IjpbXX0=