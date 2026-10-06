"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseHandler = void 0;
var _dayjs = _interopRequireDefault(require("dayjs"));
var _errorHandler = require("./errorHandler");
var _logger = require("./logger");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @class BaseHandler
 * @description
 * A generic base class for handling execution workflows with centralized logging and error management.
 * It provides a structured way to execute tasks while ensuring consistent logging,
 * error handling, and optional database transaction support.
 *
 * @property {Object} args - Input parameters for the handler.
 * @property {Object} context - Contextual data (e.g., user session, database transaction).
 * @property {Object} dbTransaction - Database transaction instance, if available.
 */
class BaseHandler {
  /**
   * @constructor
   * @param {Object} [args={}] - Input parameters for the handler.
   * @param {Object} [context={}] - Context data including database transactions, user session, etc.
   */
  constructor(args = {}, context = {}) {
    this.args = args;
    this.context = context;
    this.dbTransaction = context.sequelizeTransaction; // Attach DB transaction if provided
  }

  /**
   * @static
   * @async
   * @method execute
   * @description
   * Instantiates the handler and runs the `run()` method, ensuring structured logging and error handling.
   * @param {Object} [args={}] - Input parameters.
   * @param {Object} [context={}] - Contextual data such as database transactions.
   * @returns {Promise<*>} - Returns the result of the `run()` method.
   * @throws {Error} - Catches and processes errors using `handleError`.
   */
  static async execute(args = {}, context = {}) {
    const startTime = (0, _dayjs.default)();
    const handlerName = this.name.toUpperCase();
    const instance = new this(args, context);
    try {
      _logger.Logger.info({
        args
      }, `------------------------ ${handlerName} - Execution started -----------------------------`);
      const result = await instance.run();
      const duration = (0, _dayjs.default)().diff(startTime);
      _logger.Logger.info(`------------------------ ${handlerName} - Execution completed in ${duration} ms -----------------------------`);
      return result;
    } catch (error) {
      await instance.handleError(error);
    }
  }

  /**
   * @async
   * @method run
   * @description
   * This method must be implemented by subclasses to define the core logic of the handler.
   * @throws {Error} - Throws an error if not implemented in the subclass.
   */
  async run() {
    throw new Error('The run() method must be implemented in subclass');
  }

  /**
   * @async
   * @method handleError
   * @description
   * Handles errors using the centralized `ErrorHandler` class.
   * @param {Error} error - The error instance thrown during execution.
   */
  async handleError(error) {
    await _errorHandler.ErrorHandler.handle(error, this);
  }
}
exports.BaseHandler = BaseHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGF5anMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9lcnJvckhhbmRsZXIiLCJfbG9nZ2VyIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiQmFzZUhhbmRsZXIiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJjb250ZXh0IiwiZGJUcmFuc2FjdGlvbiIsInNlcXVlbGl6ZVRyYW5zYWN0aW9uIiwiZXhlY3V0ZSIsInN0YXJ0VGltZSIsImRheWpzIiwiaGFuZGxlck5hbWUiLCJuYW1lIiwidG9VcHBlckNhc2UiLCJpbnN0YW5jZSIsIkxvZ2dlciIsImluZm8iLCJyZXN1bHQiLCJydW4iLCJkdXJhdGlvbiIsImRpZmYiLCJlcnJvciIsImhhbmRsZUVycm9yIiwiRXJyb3IiLCJFcnJvckhhbmRsZXIiLCJoYW5kbGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYnMvYmFzZUhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9lcnJvckhhbmRsZXInXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcidcblxuLyoqXG4gKiBAY2xhc3MgQmFzZUhhbmRsZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQSBnZW5lcmljIGJhc2UgY2xhc3MgZm9yIGhhbmRsaW5nIGV4ZWN1dGlvbiB3b3JrZmxvd3Mgd2l0aCBjZW50cmFsaXplZCBsb2dnaW5nIGFuZCBlcnJvciBtYW5hZ2VtZW50LlxuICogSXQgcHJvdmlkZXMgYSBzdHJ1Y3R1cmVkIHdheSB0byBleGVjdXRlIHRhc2tzIHdoaWxlIGVuc3VyaW5nIGNvbnNpc3RlbnQgbG9nZ2luZyxcbiAqIGVycm9yIGhhbmRsaW5nLCBhbmQgb3B0aW9uYWwgZGF0YWJhc2UgdHJhbnNhY3Rpb24gc3VwcG9ydC5cbiAqXG4gKiBAcHJvcGVydHkge09iamVjdH0gYXJncyAtIElucHV0IHBhcmFtZXRlcnMgZm9yIHRoZSBoYW5kbGVyLlxuICogQHByb3BlcnR5IHtPYmplY3R9IGNvbnRleHQgLSBDb250ZXh0dWFsIGRhdGEgKGUuZy4sIHVzZXIgc2Vzc2lvbiwgZGF0YWJhc2UgdHJhbnNhY3Rpb24pLlxuICogQHByb3BlcnR5IHtPYmplY3R9IGRiVHJhbnNhY3Rpb24gLSBEYXRhYmFzZSB0cmFuc2FjdGlvbiBpbnN0YW5jZSwgaWYgYXZhaWxhYmxlLlxuICovXG5leHBvcnQgY2xhc3MgQmFzZUhhbmRsZXIge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbYXJncz17fV0gLSBJbnB1dCBwYXJhbWV0ZXJzIGZvciB0aGUgaGFuZGxlci5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0PXt9XSAtIENvbnRleHQgZGF0YSBpbmNsdWRpbmcgZGF0YWJhc2UgdHJhbnNhY3Rpb25zLCB1c2VyIHNlc3Npb24sIGV0Yy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGFyZ3MgPSB7fSwgY29udGV4dCA9IHt9KSB7XG4gICAgdGhpcy5hcmdzID0gYXJnc1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICB0aGlzLmRiVHJhbnNhY3Rpb24gPSBjb250ZXh0LnNlcXVlbGl6ZVRyYW5zYWN0aW9uIC8vIEF0dGFjaCBEQiB0cmFuc2FjdGlvbiBpZiBwcm92aWRlZFxuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQGFzeW5jXG4gICAqIEBtZXRob2QgZXhlY3V0ZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogSW5zdGFudGlhdGVzIHRoZSBoYW5kbGVyIGFuZCBydW5zIHRoZSBgcnVuKClgIG1ldGhvZCwgZW5zdXJpbmcgc3RydWN0dXJlZCBsb2dnaW5nIGFuZCBlcnJvciBoYW5kbGluZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFthcmdzPXt9XSAtIElucHV0IHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dD17fV0gLSBDb250ZXh0dWFsIGRhdGEgc3VjaCBhcyBkYXRhYmFzZSB0cmFuc2FjdGlvbnMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPCo+fSAtIFJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgYHJ1bigpYCBtZXRob2QuXG4gICAqIEB0aHJvd3Mge0Vycm9yfSAtIENhdGNoZXMgYW5kIHByb2Nlc3NlcyBlcnJvcnMgdXNpbmcgYGhhbmRsZUVycm9yYC5cbiAgICovXG4gIHN0YXRpYyBhc3luYyBleGVjdXRlKGFyZ3MgPSB7fSwgY29udGV4dCA9IHt9KSB7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gZGF5anMoKVxuICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gdGhpcy5uYW1lLnRvVXBwZXJDYXNlKClcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKGFyZ3MsIGNvbnRleHQpXG5cbiAgICB0cnkge1xuICAgICAgTG9nZ2VyLmluZm8oeyBhcmdzIH0sIGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gJHtoYW5kbGVyTmFtZX0gLSBFeGVjdXRpb24gc3RhcnRlZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWApXG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGluc3RhbmNlLnJ1bigpXG5cbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gZGF5anMoKS5kaWZmKHN0YXJ0VGltZSlcbiAgICAgIExvZ2dlci5pbmZvKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gJHtoYW5kbGVyTmFtZX0gLSBFeGVjdXRpb24gY29tcGxldGVkIGluICR7ZHVyYXRpb259IG1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYClcblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhd2FpdCBpbnN0YW5jZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGFzeW5jXG4gICAqIEBtZXRob2QgcnVuXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IHN1YmNsYXNzZXMgdG8gZGVmaW5lIHRoZSBjb3JlIGxvZ2ljIG9mIHRoZSBoYW5kbGVyLlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gLSBUaHJvd3MgYW4gZXJyb3IgaWYgbm90IGltcGxlbWVudGVkIGluIHRoZSBzdWJjbGFzcy5cbiAgICovXG4gIGFzeW5jIHJ1bigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBydW4oKSBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzcycpXG4gIH1cblxuICAvKipcbiAgICogQGFzeW5jXG4gICAqIEBtZXRob2QgaGFuZGxlRXJyb3JcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEhhbmRsZXMgZXJyb3JzIHVzaW5nIHRoZSBjZW50cmFsaXplZCBgRXJyb3JIYW5kbGVyYCBjbGFzcy5cbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgLSBUaGUgZXJyb3IgaW5zdGFuY2UgdGhyb3duIGR1cmluZyBleGVjdXRpb24uXG4gICAqL1xuICBhc3luYyBoYW5kbGVFcnJvcihlcnJvcikge1xuICAgIGF3YWl0IEVycm9ySGFuZGxlci5oYW5kbGUoZXJyb3IsIHRoaXMpXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsTUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO0FBQWlDLFNBQUFELHVCQUFBSSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxNQUFNRyxXQUFXLENBQUM7RUFDdkI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUNFQyxXQUFXQSxDQUFDQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNuQyxJQUFJLENBQUNELElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxvQkFBb0IsRUFBQztFQUNwRDs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsYUFBYUMsT0FBT0EsQ0FBQ0osSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDNUMsTUFBTUksU0FBUyxHQUFHLElBQUFDLGNBQUssRUFBQyxDQUFDO0lBQ3pCLE1BQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDM0MsTUFBTUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDVixJQUFJLEVBQUVDLE9BQU8sQ0FBQztJQUV4QyxJQUFJO01BQ0ZVLGNBQU0sQ0FBQ0MsSUFBSSxDQUFDO1FBQUVaO01BQUssQ0FBQyxFQUFFLDRCQUE0Qk8sV0FBVyxvREFBb0QsQ0FBQztNQUVsSCxNQUFNTSxNQUFNLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxHQUFHLENBQUMsQ0FBQztNQUVuQyxNQUFNQyxRQUFRLEdBQUcsSUFBQVQsY0FBSyxFQUFDLENBQUMsQ0FBQ1UsSUFBSSxDQUFDWCxTQUFTLENBQUM7TUFDeENNLGNBQU0sQ0FBQ0MsSUFBSSxDQUFDLDRCQUE0QkwsV0FBVyw2QkFBNkJRLFFBQVEsbUNBQW1DLENBQUM7TUFFNUgsT0FBT0YsTUFBTTtJQUNmLENBQUMsQ0FBQyxPQUFPSSxLQUFLLEVBQUU7TUFDZCxNQUFNUCxRQUFRLENBQUNRLFdBQVcsQ0FBQ0QsS0FBSyxDQUFDO0lBQ25DO0VBQ0Y7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRSxNQUFNSCxHQUFHQSxDQUFBLEVBQUc7SUFDVixNQUFNLElBQUlLLEtBQUssQ0FBQyxrREFBa0QsQ0FBQztFQUNyRTs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFLE1BQU1ELFdBQVdBLENBQUNELEtBQUssRUFBRTtJQUN2QixNQUFNRywwQkFBWSxDQUFDQyxNQUFNLENBQUNKLEtBQUssRUFBRSxJQUFJLENBQUM7RUFDeEM7QUFDRjtBQUFDSyxPQUFBLENBQUF4QixXQUFBLEdBQUFBLFdBQUEiLCJpZ25vcmVMaXN0IjpbXX0=