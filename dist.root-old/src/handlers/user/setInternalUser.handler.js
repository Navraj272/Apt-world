"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetInternalUserHandler = void 0;
var _models = _interopRequireDefault(require("../../db/models"));
var _app = require("../../errors/app.error");
var _errorCodes = require("../../errors/errorCodes");
var _baseHandler = require("../../libs/baseHandler");
var _redis = require("../../libs/redis");
var _public = require("../../utils/constants/public.constants");
var _customerio = require("../../libs/customerio");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// export class SetInternalUserHandler extends BaseHandler {
//   get constraints() {
//     return constraints
//   }

//   async run() {
//     const { userId, userInternalStatus } = this.args

//     const transaction = this.dbTransaction

// const user = await db.User.findOne({
//   where: { userId },
//   attributes: ['userId', 'isInternalUser'],
//   transaction
// })

// if (!user) throw new AppError(Errors.USER_NOT_EXISTS)

// await user.set({ isInternalUser: userInternalStatus }).save({ transaction })

// const getInternal = await db.User.findAll({
//   where: { isInternalUser: true },
//   attributes: ['userId'],
//   transaction
// })

// identifyUser(user.userId.toString(), {
//   is_internal_user: userInternalStatus
// }).catch(err => {
//   this.context.logger?.error({
//     message: 'Failed to sync isInternalUser to Customer.io',
//     error: err.message,
//     userId: user.userId
//   })
// })

// const array = getInternal.map(item => item.userId);

// const getInternalCache = await getCache(CACHE_KEYS.INTERNAL_USERS);

// if(getInternalCache) await deleteCache(CACHE_KEYS.INTERNAL_USERS);

// await setInternalCache(CACHE_KEYS.INTERNAL_USERS, JSON.stringify(array));

//     return { success: true }
//   }
// }

class SetInternalUserHandler extends _baseHandler.BaseHandler {
  get constraints() {
    return constraints;
  }
  async run() {
    const {
      userId,
      userInternalStatus
    } = this.args;
    const transaction = this.dbTransaction;
    const user = await _models.default.User.findOne({
      where: {
        userId
      },
      attributes: ['userId', 'isInternalUser'],
      transaction
    });
    if (!user) throw new _app.AppError(_errorCodes.Errors.USER_NOT_EXISTS);

    // 1. Get current internal users BEFORE update
    const internalUsers = await _models.default.User.findAll({
      where: {
        isInternalUser: true
      },
      attributes: ['userId'],
      transaction
    });
    let internalUserIds = internalUsers.map(u => u.userId);

    // 2. Update DB
    user.isInternalUser = userInternalStatus;
    await user.save({
      transaction
    });

    // 3. Update cache array manually
    if (userInternalStatus === true) {
      if (!internalUserIds.includes(userId)) {
        internalUserIds.push(userId);
        console.log(internalUserIds, "internalUserIds1");
      }
    } else {
      internalUserIds = internalUserIds.filter(id => id !== userId);
      console.log(internalUserIds, "internalUserIds2");
    }

    // 4. Sync cache
    await (0, _redis.setInternalCache)(_public.CACHE_KEYS.INTERNAL_USERS, JSON.stringify(internalUserIds));
    console.log(internalUserIds, "internalUserIds3");

    // 5. Async Customer.io sync (non-blocking)
    (0, _customerio.identifyUser)(user.userId.toString(), {
      is_internal_user: userInternalStatus
    }).catch(err => {
      this.context.logger?.error({
        message: 'Failed to sync isInternalUser to Customer.io',
        error: err.message,
        userId: user.userId
      });
    });
    return {
      success: true
    };
  }
}
exports.SetInternalUserHandler = SetInternalUserHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXBwIiwiX2Vycm9yQ29kZXMiLCJfYmFzZUhhbmRsZXIiLCJfcmVkaXMiLCJfcHVibGljIiwiX2N1c3RvbWVyaW8iLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJTZXRJbnRlcm5hbFVzZXJIYW5kbGVyIiwiQmFzZUhhbmRsZXIiLCJjb25zdHJhaW50cyIsInJ1biIsInVzZXJJZCIsInVzZXJJbnRlcm5hbFN0YXR1cyIsImFyZ3MiLCJ0cmFuc2FjdGlvbiIsImRiVHJhbnNhY3Rpb24iLCJ1c2VyIiwiZGIiLCJVc2VyIiwiZmluZE9uZSIsIndoZXJlIiwiYXR0cmlidXRlcyIsIkFwcEVycm9yIiwiRXJyb3JzIiwiVVNFUl9OT1RfRVhJU1RTIiwiaW50ZXJuYWxVc2VycyIsImZpbmRBbGwiLCJpc0ludGVybmFsVXNlciIsImludGVybmFsVXNlcklkcyIsIm1hcCIsInUiLCJzYXZlIiwiaW5jbHVkZXMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsImlkIiwic2V0SW50ZXJuYWxDYWNoZSIsIkNBQ0hFX0tFWVMiLCJJTlRFUk5BTF9VU0VSUyIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZGVudGlmeVVzZXIiLCJ0b1N0cmluZyIsImlzX2ludGVybmFsX3VzZXIiLCJjYXRjaCIsImVyciIsImNvbnRleHQiLCJsb2dnZXIiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9oYW5kbGVycy91c2VyL3NldEludGVybmFsVXNlci5oYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICdAc3JjL2RiL21vZGVscydcbmltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSAnQHNyYy9lcnJvcnMvYXBwLmVycm9yJ1xuaW1wb3J0IHsgRXJyb3JzIH0gZnJvbSAnQHNyYy9lcnJvcnMvZXJyb3JDb2RlcydcbmltcG9ydCB7IEJhc2VIYW5kbGVyIH0gZnJvbSAnQHNyYy9saWJzL2Jhc2VIYW5kbGVyJ1xuaW1wb3J0IHsgc2V0SW50ZXJuYWxDYWNoZSB9IGZyb20gJ0BzcmMvbGlicy9yZWRpcydcbmltcG9ydCB7IENBQ0hFX0tFWVMgfSBmcm9tICdAc3JjL3V0aWxzL2NvbnN0YW50cy9wdWJsaWMuY29uc3RhbnRzJ1xuaW1wb3J0IHsgaWRlbnRpZnlVc2VyIH0gZnJvbSAnQHNyYy9saWJzL2N1c3RvbWVyaW8nXG5cblxuXG4vLyBleHBvcnQgY2xhc3MgU2V0SW50ZXJuYWxVc2VySGFuZGxlciBleHRlbmRzIEJhc2VIYW5kbGVyIHtcbi8vICAgZ2V0IGNvbnN0cmFpbnRzKCkge1xuLy8gICAgIHJldHVybiBjb25zdHJhaW50c1xuLy8gICB9XG5cbi8vICAgYXN5bmMgcnVuKCkge1xuLy8gICAgIGNvbnN0IHsgdXNlcklkLCB1c2VySW50ZXJuYWxTdGF0dXMgfSA9IHRoaXMuYXJnc1xuXG4vLyAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmRiVHJhbnNhY3Rpb25cblxuLy8gY29uc3QgdXNlciA9IGF3YWl0IGRiLlVzZXIuZmluZE9uZSh7XG4vLyAgIHdoZXJlOiB7IHVzZXJJZCB9LFxuLy8gICBhdHRyaWJ1dGVzOiBbJ3VzZXJJZCcsICdpc0ludGVybmFsVXNlciddLFxuLy8gICB0cmFuc2FjdGlvblxuLy8gfSlcblxuLy8gaWYgKCF1c2VyKSB0aHJvdyBuZXcgQXBwRXJyb3IoRXJyb3JzLlVTRVJfTk9UX0VYSVNUUylcblxuLy8gYXdhaXQgdXNlci5zZXQoeyBpc0ludGVybmFsVXNlcjogdXNlckludGVybmFsU3RhdHVzIH0pLnNhdmUoeyB0cmFuc2FjdGlvbiB9KVxuXG4vLyBjb25zdCBnZXRJbnRlcm5hbCA9IGF3YWl0IGRiLlVzZXIuZmluZEFsbCh7XG4vLyAgIHdoZXJlOiB7IGlzSW50ZXJuYWxVc2VyOiB0cnVlIH0sXG4vLyAgIGF0dHJpYnV0ZXM6IFsndXNlcklkJ10sXG4vLyAgIHRyYW5zYWN0aW9uXG4vLyB9KVxuXG4vLyBpZGVudGlmeVVzZXIodXNlci51c2VySWQudG9TdHJpbmcoKSwge1xuLy8gICBpc19pbnRlcm5hbF91c2VyOiB1c2VySW50ZXJuYWxTdGF0dXNcbi8vIH0pLmNhdGNoKGVyciA9PiB7XG4vLyAgIHRoaXMuY29udGV4dC5sb2dnZXI/LmVycm9yKHtcbi8vICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIHN5bmMgaXNJbnRlcm5hbFVzZXIgdG8gQ3VzdG9tZXIuaW8nLFxuLy8gICAgIGVycm9yOiBlcnIubWVzc2FnZSxcbi8vICAgICB1c2VySWQ6IHVzZXIudXNlcklkXG4vLyAgIH0pXG4vLyB9KVxuXG4vLyBjb25zdCBhcnJheSA9IGdldEludGVybmFsLm1hcChpdGVtID0+IGl0ZW0udXNlcklkKTtcblxuLy8gY29uc3QgZ2V0SW50ZXJuYWxDYWNoZSA9IGF3YWl0IGdldENhY2hlKENBQ0hFX0tFWVMuSU5URVJOQUxfVVNFUlMpO1xuXG5cbi8vIGlmKGdldEludGVybmFsQ2FjaGUpIGF3YWl0IGRlbGV0ZUNhY2hlKENBQ0hFX0tFWVMuSU5URVJOQUxfVVNFUlMpO1xuXG4vLyBhd2FpdCBzZXRJbnRlcm5hbENhY2hlKENBQ0hFX0tFWVMuSU5URVJOQUxfVVNFUlMsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG5cbi8vICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbi8vICAgfVxuLy8gfVxuXG5cbmV4cG9ydCBjbGFzcyBTZXRJbnRlcm5hbFVzZXJIYW5kbGVyIGV4dGVuZHMgQmFzZUhhbmRsZXIge1xuICBnZXQgY29uc3RyYWludHMoKSB7XG4gICAgcmV0dXJuIGNvbnN0cmFpbnRzXG4gIH1cblxuICBhc3luYyBydW4oKSB7XG4gICAgY29uc3QgeyB1c2VySWQsIHVzZXJJbnRlcm5hbFN0YXR1cyB9ID0gdGhpcy5hcmdzXG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmRiVHJhbnNhY3Rpb25cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5Vc2VyLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXG4gICAgICBhdHRyaWJ1dGVzOiBbJ3VzZXJJZCcsICdpc0ludGVybmFsVXNlciddLFxuICAgICAgdHJhbnNhY3Rpb25cbiAgICB9KVxuXG4gICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQXBwRXJyb3IoRXJyb3JzLlVTRVJfTk9UX0VYSVNUUylcblxuICAgIC8vIDEuIEdldCBjdXJyZW50IGludGVybmFsIHVzZXJzIEJFRk9SRSB1cGRhdGVcbiAgICBjb25zdCBpbnRlcm5hbFVzZXJzID0gYXdhaXQgZGIuVXNlci5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiB7IGlzSW50ZXJuYWxVc2VyOiB0cnVlIH0sXG4gICAgICBhdHRyaWJ1dGVzOiBbJ3VzZXJJZCddLFxuICAgICAgdHJhbnNhY3Rpb25cbiAgICB9KVxuXG4gICAgbGV0IGludGVybmFsVXNlcklkcyA9IGludGVybmFsVXNlcnMubWFwKHUgPT4gdS51c2VySWQpXG5cbiAgICAvLyAyLiBVcGRhdGUgREJcbiAgICB1c2VyLmlzSW50ZXJuYWxVc2VyID0gdXNlckludGVybmFsU3RhdHVzXG4gICAgYXdhaXQgdXNlci5zYXZlKHsgdHJhbnNhY3Rpb24gfSlcblxuICAgIC8vIDMuIFVwZGF0ZSBjYWNoZSBhcnJheSBtYW51YWxseVxuICAgIGlmICh1c2VySW50ZXJuYWxTdGF0dXMgPT09IHRydWUpIHtcbiAgICAgIGlmICghaW50ZXJuYWxVc2VySWRzLmluY2x1ZGVzKHVzZXJJZCkpIHtcbiAgICAgICAgaW50ZXJuYWxVc2VySWRzLnB1c2godXNlcklkKVxuICAgICAgICBjb25zb2xlLmxvZyhpbnRlcm5hbFVzZXJJZHMsXCJpbnRlcm5hbFVzZXJJZHMxXCIpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVybmFsVXNlcklkcyA9IGludGVybmFsVXNlcklkcy5maWx0ZXIoaWQgPT4gaWQgIT09IHVzZXJJZClcbiAgICAgIGNvbnNvbGUubG9nKGludGVybmFsVXNlcklkcyxcImludGVybmFsVXNlcklkczJcIilcbiAgICB9XG5cbiAgICAvLyA0LiBTeW5jIGNhY2hlXG4gICAgYXdhaXQgc2V0SW50ZXJuYWxDYWNoZShcbiAgICAgIENBQ0hFX0tFWVMuSU5URVJOQUxfVVNFUlMsXG4gICAgICBKU09OLnN0cmluZ2lmeShpbnRlcm5hbFVzZXJJZHMpXG4gICAgKVxuXG4gICAgY29uc29sZS5sb2coaW50ZXJuYWxVc2VySWRzLFwiaW50ZXJuYWxVc2VySWRzM1wiKVxuXG4gICAgLy8gNS4gQXN5bmMgQ3VzdG9tZXIuaW8gc3luYyAobm9uLWJsb2NraW5nKVxuICAgIGlkZW50aWZ5VXNlcih1c2VyLnVzZXJJZC50b1N0cmluZygpLCB7XG4gICAgICBpc19pbnRlcm5hbF91c2VyOiB1c2VySW50ZXJuYWxTdGF0dXNcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgdGhpcy5jb250ZXh0LmxvZ2dlcj8uZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIHN5bmMgaXNJbnRlcm5hbFVzZXIgdG8gQ3VzdG9tZXIuaW8nLFxuICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgICAgIHVzZXJJZDogdXNlci51c2VySWRcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9XG59XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBSCxPQUFBO0FBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO0FBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO0FBQ0EsSUFBQU0sV0FBQSxHQUFBTixPQUFBO0FBQW1ELFNBQUFELHVCQUFBUSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUs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