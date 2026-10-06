"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminResetKycHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _app = require("../../errors/app.error");
var _errorCodes = require("../../errors/errorCodes");
var _baseHandler = require("../../libs/baseHandler");
var _customerio = require("../../libs/customerio");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class AdminResetKycHandler extends _baseHandler.BaseHandler {
  async run() {
    try {
      const {
        userId
      } = this.args;
      const transaction = this.dbTransaction;

      //   // 1. Validate Input
      //   if (!userId) {
      //  throw new AppError(Errors.USER_NOT_EXISTS);
      //   }

      // 2. Fetch User to ensure existence
      const user = await _models.default.User.findOne({
        where: {
          userId
        },
        include: [{
          model: _models.default.UserDetails,
          as: "userDetails"
        }],
        transaction
      });
      if (!user) {
        throw new _app.AppError(_errorCodes.Errors.USER_NOT_EXISTS);
      }
      const userUpdatePayload = {
        isKycVerified: false
      };
      const userDetailsUpdatePayload = {
        diditStatus: null,
        diditApplicantId: null,
        otherDiditDetails: null
      };

      // 4. Execute Database Updates
      await Promise.all([
      // Update User Table
      _models.default.User.update(userUpdatePayload, {
        where: {
          userId
        },
        transaction
      }),
      // Update UserDetails Table
      _models.default.UserDetails.update(userDetailsUpdatePayload, {
        where: {
          userId
        },
        transaction
      })]);
      try {
        this.context.logger.info(`Executing Customer.io KYC Reset for user ${userId}`);
        const userAttributes = {
          verification_status: null,
          // Reset to null so they aren't 'verified' or 'declined'
          ssn_verified: false
        };
        (0, _customerio.identifyUser)(userId.toString(), userAttributes);
      } catch (error) {
        console.log(error);
      }
      return {
        success: true,
        message: "User KYC status has been successfully reset. The user can now retry verification."
      };
    } catch (error) {
      // this.context.logger.error({ message: 'Error in AdminResetKycHandler', error });

      throw error;
    }
  }
}
exports.AdminResetKycHandler = AdminResetKycHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXBwIiwiX2Vycm9yQ29kZXMiLCJfYmFzZUhhbmRsZXIiLCJfY3VzdG9tZXJpbyIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIkFkbWluUmVzZXRLeWNIYW5kbGVyIiwiQmFzZUhhbmRsZXIiLCJydW4iLCJ1c2VySWQiLCJhcmdzIiwidHJhbnNhY3Rpb24iLCJkYlRyYW5zYWN0aW9uIiwidXNlciIsImRiIiwiVXNlciIsImZpbmRPbmUiLCJ3aGVyZSIsImluY2x1ZGUiLCJtb2RlbCIsIlVzZXJEZXRhaWxzIiwiYXMiLCJBcHBFcnJvciIsIkVycm9ycyIsIlVTRVJfTk9UX0VYSVNUUyIsInVzZXJVcGRhdGVQYXlsb2FkIiwiaXNLeWNWZXJpZmllZCIsInVzZXJEZXRhaWxzVXBkYXRlUGF5bG9hZCIsImRpZGl0U3RhdHVzIiwiZGlkaXRBcHBsaWNhbnRJZCIsIm90aGVyRGlkaXREZXRhaWxzIiwiUHJvbWlzZSIsImFsbCIsInVwZGF0ZSIsImNvbnRleHQiLCJsb2dnZXIiLCJpbmZvIiwidXNlckF0dHJpYnV0ZXMiLCJ2ZXJpZmljYXRpb25fc3RhdHVzIiwic3NuX3ZlcmlmaWVkIiwiaWRlbnRpZnlVc2VyIiwidG9TdHJpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwibWVzc2FnZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaGFuZGxlcnMvdXNlci9yZXNldEt5Y1N0YXR1cy5oYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tIFwiQHNyYy9kYi9tb2RlbHNcIjtcbmltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSBcIkBzcmMvZXJyb3JzL2FwcC5lcnJvclwiO1xuaW1wb3J0IHsgRXJyb3JzIH0gZnJvbSBcIkBzcmMvZXJyb3JzL2Vycm9yQ29kZXNcIjtcbmltcG9ydCB7IEJhc2VIYW5kbGVyIH0gZnJvbSBcIkBzcmMvbGlicy9iYXNlSGFuZGxlclwiO1xuaW1wb3J0IHsgaWRlbnRpZnlVc2VyIH0gZnJvbSBcIkBzcmMvbGlicy9jdXN0b21lcmlvXCI7XG5cbmV4cG9ydCBjbGFzcyBBZG1pblJlc2V0S3ljSGFuZGxlciBleHRlbmRzIEJhc2VIYW5kbGVyIHtcbiAgYXN5bmMgcnVuKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHVzZXJJZCB9ID0gdGhpcy5hcmdzO1xuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmRiVHJhbnNhY3Rpb247XG5cbiAgICAvLyAgIC8vIDEuIFZhbGlkYXRlIElucHV0XG4gICAgLy8gICBpZiAoIXVzZXJJZCkge1xuICAgIC8vICB0aHJvdyBuZXcgQXBwRXJyb3IoRXJyb3JzLlVTRVJfTk9UX0VYSVNUUyk7XG4gICAgLy8gICB9XG5cbiAgICAgIC8vIDIuIEZldGNoIFVzZXIgdG8gZW5zdXJlIGV4aXN0ZW5jZVxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLlVzZXIuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZCB9LFxuICAgICAgICBpbmNsdWRlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbW9kZWw6IGRiLlVzZXJEZXRhaWxzLFxuICAgICAgICAgICAgYXM6IFwidXNlckRldGFpbHNcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgdGhyb3cgbmV3IEFwcEVycm9yKEVycm9ycy5VU0VSX05PVF9FWElTVFMpO1xuICAgICAgfVxuXG5cbiAgICAgIGNvbnN0IHVzZXJVcGRhdGVQYXlsb2FkID0ge1xuICAgICAgICBpc0t5Y1ZlcmlmaWVkOiBmYWxzZSxcblxuICAgICAgfTtcbiAgICAgIGNvbnN0IHVzZXJEZXRhaWxzVXBkYXRlUGF5bG9hZCA9IHtcbiAgICAgICAgZGlkaXRTdGF0dXM6IG51bGwsXG4gICAgICAgIGRpZGl0QXBwbGljYW50SWQ6IG51bGwsXG4gICAgICAgIG90aGVyRGlkaXREZXRhaWxzOiBudWxsLFxuICAgICAgfTtcblxuICAgICAgLy8gNC4gRXhlY3V0ZSBEYXRhYmFzZSBVcGRhdGVzXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIC8vIFVwZGF0ZSBVc2VyIFRhYmxlXG4gICAgICAgIGRiLlVzZXIudXBkYXRlKHVzZXJVcGRhdGVQYXlsb2FkLCB7XG4gICAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXG4gICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8vIFVwZGF0ZSBVc2VyRGV0YWlscyBUYWJsZVxuICAgICAgICBkYi5Vc2VyRGV0YWlscy51cGRhdGUodXNlckRldGFpbHNVcGRhdGVQYXlsb2FkLCB7XG4gICAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXG4gICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgIH0pLFxuICAgICAgXSk7XG5cbiAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmxvZ2dlci5pbmZvKGBFeGVjdXRpbmcgQ3VzdG9tZXIuaW8gS1lDIFJlc2V0IGZvciB1c2VyICR7dXNlcklkfWApO1xuXG4gICAgICAgIGNvbnN0IHVzZXJBdHRyaWJ1dGVzID0ge1xuICAgICAgICAgIHZlcmlmaWNhdGlvbl9zdGF0dXM6IG51bGwsIC8vIFJlc2V0IHRvIG51bGwgc28gdGhleSBhcmVuJ3QgJ3ZlcmlmaWVkJyBvciAnZGVjbGluZWQnXG4gICAgICAgICAgc3NuX3ZlcmlmaWVkOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZGVudGlmeVVzZXIodXNlcklkLnRvU3RyaW5nKCksIHVzZXJBdHRyaWJ1dGVzKTtcblxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG5cblxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgS1lDIHN0YXR1cyBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcmVzZXQuIFRoZSB1c2VyIGNhbiBub3cgcmV0cnkgdmVyaWZpY2F0aW9uLlwiLFxuICAgICAgfTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyB0aGlzLmNvbnRleHQubG9nZ2VyLmVycm9yKHsgbWVzc2FnZTogJ0Vycm9yIGluIEFkbWluUmVzZXRLeWNIYW5kbGVyJywgZXJyb3IgfSk7XG5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7QUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7QUFDQSxJQUFBRyxZQUFBLEdBQUFILE9BQUE7QUFDQSxJQUFBSSxXQUFBLEdBQUFKLE9BQUE7QUFBb0QsU0FBQUQsdUJBQUFNLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxLQUFBRSxPQUFBLEVBQUFGLENBQUE7QUFFN0MsTUFBTUcsb0JBQW9CLFNBQVNDLHdCQUFXLENBQUM7RUFDcEQsTUFBTUMsR0FBR0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSTtNQUNGLE1BQU07UUFBRUM7TUFBTyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxJQUFJO01BQzVCLE1BQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNDLGFBQWE7O01BRXhDO01BQ0E7TUFDQTtNQUNBOztNQUVFO01BQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLGVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7UUFDakNDLEtBQUssRUFBRTtVQUFFUjtRQUFPLENBQUM7UUFDakJTLE9BQU8sRUFBRSxDQUNQO1VBQ0VDLEtBQUssRUFBRUwsZUFBRSxDQUFDTSxXQUFXO1VBQ3JCQyxFQUFFLEVBQUU7UUFDTixDQUFDLENBQ0Y7UUFDRFY7TUFDRixDQUFDLENBQUM7TUFFRixJQUFJLENBQUNFLElBQUksRUFBRTtRQUNaLE1BQU0sSUFBSVMsYUFBUSxDQUFDQyxrQkFBTSxDQUFDQyxlQUFlLENBQUM7TUFDekM7TUFHQSxNQUFNQyxpQkFBaUIsR0FBRztRQUN4QkMsYUFBYSxFQUFFO01BRWpCLENBQUM7TUFDRCxNQUFNQyx3QkFBd0IsR0FBRztRQUMvQkMsV0FBVyxFQUFFLElBQUk7UUFDakJDLGdCQUFnQixFQUFFLElBQUk7UUFDdEJDLGlCQUFpQixFQUFFO01BQ3JCLENBQUM7O01BRUQ7TUFDQSxNQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQztNQUNoQjtNQUNBbEIsZUFBRSxDQUFDQyxJQUFJLENBQUNrQixNQUFNLENBQUNSLGlCQUFpQixFQUFFO1FBQ2hDUixLQUFLLEVBQUU7VUFBRVI7UUFBTyxDQUFDO1FBQ2pCRTtNQUNGLENBQUMsQ0FBQztNQUVGO01BQ0FHLGVBQUUsQ0FBQ00sV0FBVyxDQUFDYSxNQUFNLENBQUNOLHdCQUF3QixFQUFFO1FBQzlDVixLQUFLLEVBQUU7VUFBRVI7UUFBTyxDQUFDO1FBQ2pCRTtNQUNGLENBQUMsQ0FBQyxDQUNILENBQUM7TUFFRyxJQUFJO1FBQ1AsSUFBSSxDQUFDdUIsT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyw0Q0FBNEMzQixNQUFNLEVBQUUsQ0FBQztRQUU5RSxNQUFNNEIsY0FBYyxHQUFHO1VBQ3JCQyxtQkFBbUIsRUFBRSxJQUFJO1VBQUU7VUFDM0JDLFlBQVksRUFBRTtRQUNoQixDQUFDO1FBRUQsSUFBQUMsd0JBQVksRUFBQy9CLE1BQU0sQ0FBQ2dDLFFBQVEsQ0FBQyxDQUFDLEVBQUVKLGNBQWMsQ0FBQztNQUVqRCxDQUFDLENBQUMsT0FBT0ssS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7TUFDcEI7TUFJQSxPQUFPO1FBQ0xHLE9BQU8sRUFBRSxJQUFJO1FBQ2JDLE9BQU8sRUFBRTtNQUNYLENBQUM7SUFFSCxDQUFDLENBQUMsT0FBT0osS0FBSyxFQUFFO01BQ2Q7O01BRUEsTUFBTUEsS0FBSztJQUNiO0VBQ0Y7QUFDRjtBQUFDSyxPQUFBLENBQUF6QyxvQkFBQSxHQUFBQSxvQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==