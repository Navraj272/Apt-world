"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdminAuthenticated = isAdminAuthenticated;
var _app = _interopRequireDefault(require("../../configs/app.config"));
var _app2 = require("../../errors/app.error");
var _errorCodes = require("../../errors/errorCodes");
var _public = require("../../utils/constants/public.constants");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Middleware to authenticate admin users based on JWT token and required access level.
 *
 * @param {string} accessLevel - Access level string in the format "module:permissionLevel".
 * @returns {Function} Express middleware function.
 */
function isAdminAuthenticated(accessLevel) {
  return function (req, res, next) {
    try {
      // Extract the Bearer token from the authorization header
      const accessToken = req.headers.authorization?.split('Bearer ')[1];
      if (!accessToken) {
        return next(new _app2.AppError(_errorCodes.Errors.UN_AUTHORIZE));
      }

      // Verify the token
      const decodedToken = _jsonwebtoken.default.verify(accessToken, _app.default.get('jwt.loginTokenSecret'));

      // Ensure the token is for login authentication
      if (decodedToken.type !== _public.JWT_TOKEN_TYPES.LOGIN) {
        return next(new _app2.AppError(_errorCodes.Errors.UN_AUTHORIZE));
      }

      // Extract module and permission level from the accessLevel parameter
      // const [module, permissionLevel] = accessLevel.split(':')

      // Validate permissions if module and permission level are specified
      // if (
      //   module &&
      //   permissionLevel &&
      //   (!decodedToken.permission || !decodedToken.permission[module]?.includes(permissionLevel))
      // ) {
      //   return next(new AppError(Errors.PERMISSION_DENIED))
      // }

      // Attach user details to the request object for downstream processing
      req.body.id = decodedToken.userId;
      req.body.authenticatedAdminId = decodedToken.userId;
      next();
    } catch (error) {
      console.error('Authentication error:', error);
      // return next(new AppError(Errors.UN_AUTHORIZE))
      next();
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBwIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXBwMiIsIl9lcnJvckNvZGVzIiwiX3B1YmxpYyIsIl9qc29ud2VidG9rZW4iLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJpc0FkbWluQXV0aGVudGljYXRlZCIsImFjY2Vzc0xldmVsIiwicmVxIiwicmVzIiwibmV4dCIsImFjY2Vzc1Rva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzcGxpdCIsIkFwcEVycm9yIiwiRXJyb3JzIiwiVU5fQVVUSE9SSVpFIiwiZGVjb2RlZFRva2VuIiwiand0IiwidmVyaWZ5IiwiY29uZmlnIiwiZ2V0IiwidHlwZSIsIkpXVF9UT0tFTl9UWVBFUyIsIkxPR0lOIiwiYm9keSIsImlkIiwidXNlcklkIiwiYXV0aGVudGljYXRlZEFkbWluSWQiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcmVzdC1yZXNvdXJjZXMvbWlkZGxld2FyZXMvaXNBZG1pbkF1dGhlbnRpY2F0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICdAc3JjL2NvbmZpZ3MvYXBwLmNvbmZpZydcbmltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSAnQHNyYy9lcnJvcnMvYXBwLmVycm9yJ1xuaW1wb3J0IHsgRXJyb3JzIH0gZnJvbSAnQHNyYy9lcnJvcnMvZXJyb3JDb2RlcydcbmltcG9ydCB7IEpXVF9UT0tFTl9UWVBFUyB9IGZyb20gJ0BzcmMvdXRpbHMvY29uc3RhbnRzL3B1YmxpYy5jb25zdGFudHMnXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcblxuLyoqXG4gKiBNaWRkbGV3YXJlIHRvIGF1dGhlbnRpY2F0ZSBhZG1pbiB1c2VycyBiYXNlZCBvbiBKV1QgdG9rZW4gYW5kIHJlcXVpcmVkIGFjY2VzcyBsZXZlbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYWNjZXNzTGV2ZWwgLSBBY2Nlc3MgbGV2ZWwgc3RyaW5nIGluIHRoZSBmb3JtYXQgXCJtb2R1bGU6cGVybWlzc2lvbkxldmVsXCIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEV4cHJlc3MgbWlkZGxld2FyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQWRtaW5BdXRoZW50aWNhdGVkKGFjY2Vzc0xldmVsKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICB0cnkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgQmVhcmVyIHRva2VuIGZyb20gdGhlIGF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24/LnNwbGl0KCdCZWFyZXIgJylbMV1cbiAgICAgIGlmICghYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIG5leHQobmV3IEFwcEVycm9yKEVycm9ycy5VTl9BVVRIT1JJWkUpKVxuICAgICAgfVxuXG4gICAgICAvLyBWZXJpZnkgdGhlIHRva2VuXG4gICAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3QudmVyaWZ5KGFjY2Vzc1Rva2VuLCBjb25maWcuZ2V0KCdqd3QubG9naW5Ub2tlblNlY3JldCcpKVxuXG4gICAgICAvLyBFbnN1cmUgdGhlIHRva2VuIGlzIGZvciBsb2dpbiBhdXRoZW50aWNhdGlvblxuICAgICAgaWYgKGRlY29kZWRUb2tlbi50eXBlICE9PSBKV1RfVE9LRU5fVFlQRVMuTE9HSU4pIHtcbiAgICAgICAgcmV0dXJuIG5leHQobmV3IEFwcEVycm9yKEVycm9ycy5VTl9BVVRIT1JJWkUpKVxuICAgICAgfVxuXG4gICAgICAvLyBFeHRyYWN0IG1vZHVsZSBhbmQgcGVybWlzc2lvbiBsZXZlbCBmcm9tIHRoZSBhY2Nlc3NMZXZlbCBwYXJhbWV0ZXJcbiAgICAgIC8vIGNvbnN0IFttb2R1bGUsIHBlcm1pc3Npb25MZXZlbF0gPSBhY2Nlc3NMZXZlbC5zcGxpdCgnOicpXG5cbiAgICAgIC8vIFZhbGlkYXRlIHBlcm1pc3Npb25zIGlmIG1vZHVsZSBhbmQgcGVybWlzc2lvbiBsZXZlbCBhcmUgc3BlY2lmaWVkXG4gICAgICAvLyBpZiAoXG4gICAgICAvLyAgIG1vZHVsZSAmJlxuICAgICAgLy8gICBwZXJtaXNzaW9uTGV2ZWwgJiZcbiAgICAgIC8vICAgKCFkZWNvZGVkVG9rZW4ucGVybWlzc2lvbiB8fCAhZGVjb2RlZFRva2VuLnBlcm1pc3Npb25bbW9kdWxlXT8uaW5jbHVkZXMocGVybWlzc2lvbkxldmVsKSlcbiAgICAgIC8vICkge1xuICAgICAgLy8gICByZXR1cm4gbmV4dChuZXcgQXBwRXJyb3IoRXJyb3JzLlBFUk1JU1NJT05fREVOSUVEKSlcbiAgICAgIC8vIH1cblxuICAgICAgLy8gQXR0YWNoIHVzZXIgZGV0YWlscyB0byB0aGUgcmVxdWVzdCBvYmplY3QgZm9yIGRvd25zdHJlYW0gcHJvY2Vzc2luZ1xuICAgICAgcmVxLmJvZHkuaWQgPSBkZWNvZGVkVG9rZW4udXNlcklkXG4gICAgICByZXEuYm9keS5hdXRoZW50aWNhdGVkQWRtaW5JZCA9IGRlY29kZWRUb2tlbi51c2VySWRcblxuICAgICAgbmV4dCgpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGVycm9yOicsIGVycm9yKVxuICAgICAgLy8gcmV0dXJuIG5leHQobmV3IEFwcEVycm9yKEVycm9ycy5VTl9BVVRIT1JJWkUpKVxuICAgICAgbmV4dCgpXG4gICAgfVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLElBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtBQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtBQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtBQUNBLElBQUFJLGFBQUEsR0FBQUwsc0JBQUEsQ0FBQUMsT0FBQTtBQUE4QixTQUFBRCx1QkFBQU0sQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTRyxvQkFBb0JBLENBQUNDLFdBQVcsRUFBRTtFQUNoRCxPQUFPLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7SUFDL0IsSUFBSTtNQUNGO01BQ0EsTUFBTUMsV0FBVyxHQUFHSCxHQUFHLENBQUNJLE9BQU8sQ0FBQ0MsYUFBYSxFQUFFQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xFLElBQUksQ0FBQ0gsV0FBVyxFQUFFO1FBQ2hCLE9BQU9ELElBQUksQ0FBQyxJQUFJSyxjQUFRLENBQUNDLGtCQUFNLENBQUNDLFlBQVksQ0FBQyxDQUFDO01BQ2hEOztNQUVBO01BQ0EsTUFBTUMsWUFBWSxHQUFHQyxxQkFBRyxDQUFDQyxNQUFNLENBQUNULFdBQVcsRUFBRVUsWUFBTSxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7TUFFaEY7TUFDQSxJQUFJSixZQUFZLENBQUNLLElBQUksS0FBS0MsdUJBQWUsQ0FBQ0MsS0FBSyxFQUFFO1FBQy9DLE9BQU9mLElBQUksQ0FBQyxJQUFJSyxjQUFRLENBQUNDLGtCQUFNLENBQUNDLFlBQVksQ0FBQyxDQUFDO01BQ2hEOztNQUVBO01BQ0E7O01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7TUFFQTtNQUNBVCxHQUFHLENBQUNrQixJQUFJLENBQUNDLEVBQUUsR0FBR1QsWUFBWSxDQUFDVSxNQUFNO01BQ2pDcEIsR0FBRyxDQUFDa0IsSUFBSSxDQUFDRyxvQkFBb0IsR0FBR1gsWUFBWSxDQUFDVSxNQUFNO01BRW5EbEIsSUFBSSxDQUFDLENBQUM7SUFDUixDQUFDLENBQUMsT0FBT29CLEtBQUssRUFBRTtNQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyx1QkFBdUIsRUFBRUEsS0FBSyxDQUFDO01BQzdDO01BQ0FwQixJQUFJLENBQUMsQ0FBQztJQUNSO0VBQ0YsQ0FBQztBQUNIIiwiaWdub3JlTGlzdCI6W119