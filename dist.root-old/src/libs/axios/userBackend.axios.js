"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserBackendAxios = void 0;
var _axios = require("axios");
var _app = _interopRequireDefault(require("../../configs/app.config"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class UserBackendAxios extends _axios.Axios {
  constructor() {
    super({
      baseURL: `${_app.default.get('app.userBackendUrl')}/api/v1`,
      auth: {
        username: _app.default.get('basic.username'),
        password: _app.default.get('basic.password')
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  /**
   * Sends a promotion message.
   * @param {string} imageUrl - URL of the image to send.
   * @param {string} content - The content of the promotion message.
   * @returns {boolean} Success status.
   */
  static async sendPromotionMessage(imageUrl, content) {
    try {
      const userBackendAxios = new UserBackendAxios();
      console.log('---------------', content);
      const response = await userBackendAxios.post('/send-promotion', JSON.stringify({
        image: imageUrl,
        content
      }));
      // const response = await userBackendAxios.post('/send-promotion', { image: imageUrl, content })
      console.log('---------------', response);
      const data = JSON.parse(response.data);
      if (response.status !== 200) throw data.errors;
      return data?.data?.success || true;
    } catch (error) {
      console.log(error);
      throw Error('ServiceUnavailableErrorType');
    }
  }
}
exports.UserBackendAxios = UserBackendAxios;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXhpb3MiLCJyZXF1aXJlIiwiX2FwcCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJVc2VyQmFja2VuZEF4aW9zIiwiQXhpb3MiLCJjb25zdHJ1Y3RvciIsImJhc2VVUkwiLCJjb25maWciLCJnZXQiLCJhdXRoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImhlYWRlcnMiLCJzZW5kUHJvbW90aW9uTWVzc2FnZSIsImltYWdlVXJsIiwiY29udGVudCIsInVzZXJCYWNrZW5kQXhpb3MiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJwb3N0IiwiSlNPTiIsInN0cmluZ2lmeSIsImltYWdlIiwiZGF0YSIsInBhcnNlIiwic3RhdHVzIiwiZXJyb3JzIiwic3VjY2VzcyIsImVycm9yIiwiRXJyb3IiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYnMvYXhpb3MvdXNlckJhY2tlbmQuYXhpb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3MgfSBmcm9tICdheGlvcydcbmltcG9ydCBjb25maWcgZnJvbSAnQHNyYy9jb25maWdzL2FwcC5jb25maWcnXG5cbmV4cG9ydCBjbGFzcyBVc2VyQmFja2VuZEF4aW9zIGV4dGVuZHMgQXhpb3Mge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgYmFzZVVSTDogYCR7Y29uZmlnLmdldCgnYXBwLnVzZXJCYWNrZW5kVXJsJyl9L2FwaS92MWAsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXJuYW1lOiBjb25maWcuZ2V0KCdiYXNpYy51c2VybmFtZScpLFxuICAgICAgICBwYXNzd29yZDogY29uZmlnLmdldCgnYmFzaWMucGFzc3dvcmQnKVxuICAgICAgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwcm9tb3Rpb24gbWVzc2FnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlVXJsIC0gVVJMIG9mIHRoZSBpbWFnZSB0byBzZW5kLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAtIFRoZSBjb250ZW50IG9mIHRoZSBwcm9tb3Rpb24gbWVzc2FnZS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFN1Y2Nlc3Mgc3RhdHVzLlxuICAgKi9cbiAgc3RhdGljIGFzeW5jIHNlbmRQcm9tb3Rpb25NZXNzYWdlIChpbWFnZVVybCwgY29udGVudCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyQmFja2VuZEF4aW9zID0gbmV3IFVzZXJCYWNrZW5kQXhpb3MoKVxuICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLScsY29udGVudClcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdXNlckJhY2tlbmRBeGlvcy5wb3N0KCcvc2VuZC1wcm9tb3Rpb24nLCBKU09OLnN0cmluZ2lmeSh7IGltYWdlOiBpbWFnZVVybCwgY29udGVudCB9KSlcbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdXNlckJhY2tlbmRBeGlvcy5wb3N0KCcvc2VuZC1wcm9tb3Rpb24nLCB7IGltYWdlOiBpbWFnZVVybCwgY29udGVudCB9KVxuICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLScscmVzcG9uc2UpXG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhKVxuXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHRocm93IGRhdGEuZXJyb3JzXG5cbiAgICAgIHJldHVybiBkYXRhPy5kYXRhPy5zdWNjZXNzIHx8IHRydWVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB0aHJvdyBFcnJvcignU2VydmljZVVuYXZhaWxhYmxlRXJyb3JUeXBlJylcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQTRDLFNBQUFFLHVCQUFBQyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBRXJDLE1BQU1HLGdCQUFnQixTQUFTQyxZQUFLLENBQUM7RUFDMUNDLFdBQVdBLENBQUEsRUFBSTtJQUNiLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUUsR0FBR0MsWUFBTSxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsU0FBUztNQUNyREMsSUFBSSxFQUFFO1FBQ0pDLFFBQVEsRUFBRUgsWUFBTSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFDdENHLFFBQVEsRUFBRUosWUFBTSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCO01BQ3ZDLENBQUM7TUFDREksT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFO01BQ2xCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsYUFBYUMsb0JBQW9CQSxDQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUNwRCxJQUFJO01BQ0YsTUFBTUMsZ0JBQWdCLEdBQUcsSUFBSWIsZ0JBQWdCLENBQUMsQ0FBQztNQUMvQ2MsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUNILE9BQU8sQ0FBQztNQUN0QyxNQUFNSSxRQUFRLEdBQUcsTUFBTUgsZ0JBQWdCLENBQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7UUFBRUMsS0FBSyxFQUFFVCxRQUFRO1FBQUVDO01BQVEsQ0FBQyxDQUFDLENBQUM7TUFDN0c7TUFDQUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUNDLFFBQVEsQ0FBQztNQUN2QyxNQUFNSyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksS0FBSyxDQUFDTixRQUFRLENBQUNLLElBQUksQ0FBQztNQUV0QyxJQUFJTCxRQUFRLENBQUNPLE1BQU0sS0FBSyxHQUFHLEVBQUUsTUFBTUYsSUFBSSxDQUFDRyxNQUFNO01BRTlDLE9BQU9ILElBQUksRUFBRUEsSUFBSSxFQUFFSSxPQUFPLElBQUksSUFBSTtJQUNwQyxDQUFDLENBQUMsT0FBT0MsS0FBSyxFQUFFO01BQ2RaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxLQUFLLENBQUM7TUFDbEIsTUFBTUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDO0lBQzVDO0VBQ0Y7QUFDRjtBQUFDQyxPQUFBLENBQUE1QixnQkFBQSxHQUFBQSxnQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==