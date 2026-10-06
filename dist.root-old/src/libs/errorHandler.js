"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorHandler = void 0;
var _app = require("../errors/app.error");
var _errorCodes = require("../errors/errorCodes");
var _logger = require("./logger");
/**
 * @class ErrorHandler
 * Handles errors during execution by logging them, rolling back database transactions (if applicable),
 * and ensuring consistent error handling across the application.
 */
class ErrorHandler {
  /**
   * Handles errors encountered during execution.
   * Logs the error, attempts transaction rollback (if applicable), and throws a standardized error.
   *
   * @param {Error} error - The error instance caught during execution.
   * @param {Object} instance - The class instance where the error occurred.
   * @param {Object} [instance.dbTransaction] - The database transaction instance (if applicable).
   * @throws {AppError} - Throws a standardized `AppError` with additional context.
   */
  static async handle(error, instance) {
    const handlerName = instance.constructor.name.toUpperCase();

    // Log the error
    _logger.Logger.error(error, `------------------------ ${handlerName} - Execution failed ------------------------`);

    // Attempt transaction rollback if a database transaction exists
    if (instance.dbTransaction) {
      try {
        await instance.dbTransaction.rollback();
      } catch (rollbackError) {
        _logger.Logger.error({
          rollbackError
        }, `------------------------ ${handlerName} - Transaction rollback failed ------------------------`);
      }
    }

    // Re-throw application errors directly
    if (error instanceof _app.AppError) {
      throw error;
    }

    // Wrap unknown errors in AppError and rethrow
    throw new _app.AppError({
      ..._errorCodes.Errors.INTERNAL_ERROR,
      message: error.message || error.description,
      stack: error.stack,
      handler: handlerName
    });
  }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBwIiwicmVxdWlyZSIsIl9lcnJvckNvZGVzIiwiX2xvZ2dlciIsIkVycm9ySGFuZGxlciIsImhhbmRsZSIsImVycm9yIiwiaW5zdGFuY2UiLCJoYW5kbGVyTmFtZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRvVXBwZXJDYXNlIiwiTG9nZ2VyIiwiZGJUcmFuc2FjdGlvbiIsInJvbGxiYWNrIiwicm9sbGJhY2tFcnJvciIsIkFwcEVycm9yIiwiRXJyb3JzIiwiSU5URVJOQUxfRVJST1IiLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJzdGFjayIsImhhbmRsZXIiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYnMvZXJyb3JIYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSAnQHNyYy9lcnJvcnMvYXBwLmVycm9yJ1xuaW1wb3J0IHsgRXJyb3JzIH0gZnJvbSAnQHNyYy9lcnJvcnMvZXJyb3JDb2RlcydcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJ1xuXG4vKipcbiAqIEBjbGFzcyBFcnJvckhhbmRsZXJcbiAqIEhhbmRsZXMgZXJyb3JzIGR1cmluZyBleGVjdXRpb24gYnkgbG9nZ2luZyB0aGVtLCByb2xsaW5nIGJhY2sgZGF0YWJhc2UgdHJhbnNhY3Rpb25zIChpZiBhcHBsaWNhYmxlKSxcbiAqIGFuZCBlbnN1cmluZyBjb25zaXN0ZW50IGVycm9yIGhhbmRsaW5nIGFjcm9zcyB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXIge1xuICAvKipcbiAgICogSGFuZGxlcyBlcnJvcnMgZW5jb3VudGVyZWQgZHVyaW5nIGV4ZWN1dGlvbi5cbiAgICogTG9ncyB0aGUgZXJyb3IsIGF0dGVtcHRzIHRyYW5zYWN0aW9uIHJvbGxiYWNrIChpZiBhcHBsaWNhYmxlKSwgYW5kIHRocm93cyBhIHN0YW5kYXJkaXplZCBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgLSBUaGUgZXJyb3IgaW5zdGFuY2UgY2F1Z2h0IGR1cmluZyBleGVjdXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZSAtIFRoZSBjbGFzcyBpbnN0YW5jZSB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbaW5zdGFuY2UuZGJUcmFuc2FjdGlvbl0gLSBUaGUgZGF0YWJhc2UgdHJhbnNhY3Rpb24gaW5zdGFuY2UgKGlmIGFwcGxpY2FibGUpLlxuICAgKiBAdGhyb3dzIHtBcHBFcnJvcn0gLSBUaHJvd3MgYSBzdGFuZGFyZGl6ZWQgYEFwcEVycm9yYCB3aXRoIGFkZGl0aW9uYWwgY29udGV4dC5cbiAgICovXG4gIHN0YXRpYyBhc3luYyBoYW5kbGUoZXJyb3IsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgaGFuZGxlck5hbWUgPSBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAvLyBMb2cgdGhlIGVycm9yXG4gICAgTG9nZ2VyLmVycm9yKGVycm9yLCBgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICR7aGFuZGxlck5hbWV9IC0gRXhlY3V0aW9uIGZhaWxlZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gKTtcblxuICAgIC8vIEF0dGVtcHQgdHJhbnNhY3Rpb24gcm9sbGJhY2sgaWYgYSBkYXRhYmFzZSB0cmFuc2FjdGlvbiBleGlzdHNcbiAgICBpZiAoaW5zdGFuY2UuZGJUcmFuc2FjdGlvbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgaW5zdGFuY2UuZGJUcmFuc2FjdGlvbi5yb2xsYmFjaygpO1xuICAgICAgfSBjYXRjaCAocm9sbGJhY2tFcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoeyByb2xsYmFja0Vycm9yIH0sIGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gJHtoYW5kbGVyTmFtZX0gLSBUcmFuc2FjdGlvbiByb2xsYmFjayBmYWlsZWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmUtdGhyb3cgYXBwbGljYXRpb24gZXJyb3JzIGRpcmVjdGx5XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgQXBwRXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cblxuICAgIC8vIFdyYXAgdW5rbm93biBlcnJvcnMgaW4gQXBwRXJyb3IgYW5kIHJldGhyb3dcbiAgICB0aHJvdyBuZXcgQXBwRXJyb3Ioe1xuICAgICAgLi4uRXJyb3JzLklOVEVSTkFMX0VSUk9SLFxuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBlcnJvci5kZXNjcmlwdGlvbixcbiAgICAgIHN0YWNrOiBlcnJvci5zdGFjayxcbiAgICAgIGhhbmRsZXI6IGhhbmRsZXJOYW1lLFxuICAgIH0pO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtBQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtBQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxNQUFNRyxZQUFZLENBQUM7RUFDeEI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsYUFBYUMsTUFBTUEsQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDbkMsTUFBTUMsV0FBVyxHQUFHRCxRQUFRLENBQUNFLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQzs7SUFFM0Q7SUFDQUMsY0FBTSxDQUFDTixLQUFLLENBQUNBLEtBQUssRUFBRSw0QkFBNEJFLFdBQVcsOENBQThDLENBQUM7O0lBRTFHO0lBQ0EsSUFBSUQsUUFBUSxDQUFDTSxhQUFhLEVBQUU7TUFDMUIsSUFBSTtRQUNGLE1BQU1OLFFBQVEsQ0FBQ00sYUFBYSxDQUFDQyxRQUFRLENBQUMsQ0FBQztNQUN6QyxDQUFDLENBQUMsT0FBT0MsYUFBYSxFQUFFO1FBQ3RCSCxjQUFNLENBQUNOLEtBQUssQ0FBQztVQUFFUztRQUFjLENBQUMsRUFBRSw0QkFBNEJQLFdBQVcseURBQXlELENBQUM7TUFDbkk7SUFDRjs7SUFFQTtJQUNBLElBQUlGLEtBQUssWUFBWVUsYUFBUSxFQUFFO01BQzdCLE1BQU1WLEtBQUs7SUFDYjs7SUFFQTtJQUNBLE1BQU0sSUFBSVUsYUFBUSxDQUFDO01BQ2pCLEdBQUdDLGtCQUFNLENBQUNDLGNBQWM7TUFDeEJDLE9BQU8sRUFBRWIsS0FBSyxDQUFDYSxPQUFPLElBQUliLEtBQUssQ0FBQ2MsV0FBVztNQUMzQ0MsS0FBSyxFQUFFZixLQUFLLENBQUNlLEtBQUs7TUFDbEJDLE9BQU8sRUFBRWQ7SUFDWCxDQUFDLENBQUM7RUFDSjtBQUNGO0FBQUNlLE9BQUEsQ0FBQW5CLFlBQUEsR0FBQUEsWUFBQSIsImlnbm9yZUxpc3QiOltdfQ==