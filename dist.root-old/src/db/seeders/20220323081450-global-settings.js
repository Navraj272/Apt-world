'use strict';

const {
  GLOBAL_SETTINGS
} = require("../../utils/constants/public.constants");
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert({ tableName: 'global_settings', schema: 'public' }, [
    //   {
    //     key: GLOBAL_SETTINGS.FAUCET,
    //     value: JSON.stringify({
    //       SC: 1,
    //       GC: 100,
    //       interval: 24
    //     }),
    //     created_at: new Date(),
    //     updated_at: new Date()
    //   },
    //   {
    //     key: GLOBAL_SETTINGS.WITHDRAWAL_LIMITS,
    //     value: JSON.stringify({
    //       minAmount: 30,
    //       maxAmountWithoutRequest: 100
    //     }),
    //     created_at: new Date(),
    //     updated_at: new Date()
    //   },
    //   {
    //     key: GLOBAL_SETTINGS.GLOBAL_DAILY_WITHDRAWAL_ALLOWED,
    //     value: '50000',
    //     created_at: new Date(),
    //     updated_at: new Date()
    //   },
    //   {
    //     key: GLOBAL_SETTINGS.SOCIAL_MEDIA_LINKS,
    //     value: JSON.stringify({
    //       facebook: '',
    //       twitter: '',
    //       instagram: '',
    //       telegram: '',
    //       discord: ''
    //     }),
    //     created_at: new Date(),
    //     updated_at: new Date()
    //   },
    //   {
    //     key: GLOBAL_SETTINGS.KILL_SWITCH,
    //     value: JSON.stringify({
    //       enabled: false,
    //       message: 'Site is under maintenance'
    //     }),
    //     created_at: new Date(),
    //     updated_at: new Date()
    //   },
    //   {
    //     key: GLOBAL_SETTINGS.SITE_INFORMATION,
    //     value: JSON.stringify({
    //       siteName: 'Epic Sweeps',
    //       web: 'https://example.com/logo-desktop.png',
    //       mobile: 'https://example.com/logo-mobile.png',
    //       supportEmail: 'support@example.com',
    //       contactNumber: '+1234567890',
    //       termsUrl: 'https://example.com/terms',
    //       privacyPolicyUrl: 'https://example.com/privacy-policy'
    //     }),
    //     created_at: new Date(),
    //     updated_at: new Date()
    //   }
    // ])
  },
  async down(queryInterface, Sequelize) {
    //   await queryInterface.bulkDelete({ tableName: 'global_settings', schema: 'public' }, {
    //     key: [
    //       GLOBAL_SETTINGS.SITE_INFORMATION,
    //       GLOBAL_SETTINGS.FAUCET,
    //       GLOBAL_SETTINGS.WITHDRAWAL_LIMITS,
    //       GLOBAL_SETTINGS.SOCIAL_MEDIA_LINKS,
    //       GLOBAL_SETTINGS.KILL_SWITCH,
    //       GLOBAL_SETTINGS.DEPOSIT_LIMITS,
    //     ]
    //   })
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHTE9CQUxfU0VUVElOR1MiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVwIiwicXVlcnlJbnRlcmZhY2UiLCJTZXF1ZWxpemUiLCJkb3duIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RiL3NlZWRlcnMvMjAyMjAzMjMwODE0NTAtZ2xvYmFsLXNldHRpbmdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IEdMT0JBTF9TRVRUSU5HUyB9ID0gcmVxdWlyZShcIkBzcmMvdXRpbHMvY29uc3RhbnRzL3B1YmxpYy5jb25zdGFudHNcIilcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFzeW5jIHVwIChxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKSB7XG4gICAgLy8gYXdhaXQgcXVlcnlJbnRlcmZhY2UuYnVsa0luc2VydCh7IHRhYmxlTmFtZTogJ2dsb2JhbF9zZXR0aW5ncycsIHNjaGVtYTogJ3B1YmxpYycgfSwgW1xuICAgIC8vICAge1xuICAgIC8vICAgICBrZXk6IEdMT0JBTF9TRVRUSU5HUy5GQVVDRVQsXG4gICAgLy8gICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgLy8gICAgICAgU0M6IDEsXG4gICAgLy8gICAgICAgR0M6IDEwMCxcbiAgICAvLyAgICAgICBpbnRlcnZhbDogMjRcbiAgICAvLyAgICAgfSksXG4gICAgLy8gICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgLy8gICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGtleTogR0xPQkFMX1NFVFRJTkdTLldJVEhEUkFXQUxfTElNSVRTLFxuICAgIC8vICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgIC8vICAgICAgIG1pbkFtb3VudDogMzAsXG4gICAgLy8gICAgICAgbWF4QW1vdW50V2l0aG91dFJlcXVlc3Q6IDEwMFxuICAgIC8vICAgICB9KSxcbiAgICAvLyAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAvLyAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAga2V5OiBHTE9CQUxfU0VUVElOR1MuR0xPQkFMX0RBSUxZX1dJVEhEUkFXQUxfQUxMT1dFRCxcbiAgICAvLyAgICAgdmFsdWU6ICc1MDAwMCcsXG4gICAgLy8gICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgLy8gICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGtleTogR0xPQkFMX1NFVFRJTkdTLlNPQ0lBTF9NRURJQV9MSU5LUyxcbiAgICAvLyAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAvLyAgICAgICBmYWNlYm9vazogJycsXG4gICAgLy8gICAgICAgdHdpdHRlcjogJycsXG4gICAgLy8gICAgICAgaW5zdGFncmFtOiAnJyxcbiAgICAvLyAgICAgICB0ZWxlZ3JhbTogJycsXG4gICAgLy8gICAgICAgZGlzY29yZDogJydcbiAgICAvLyAgICAgfSksXG4gICAgLy8gICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgLy8gICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGtleTogR0xPQkFMX1NFVFRJTkdTLktJTExfU1dJVENILFxuICAgIC8vICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgIC8vICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIC8vICAgICAgIG1lc3NhZ2U6ICdTaXRlIGlzIHVuZGVyIG1haW50ZW5hbmNlJ1xuICAgIC8vICAgICB9KSxcbiAgICAvLyAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAvLyAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAga2V5OiBHTE9CQUxfU0VUVElOR1MuU0lURV9JTkZPUk1BVElPTixcbiAgICAvLyAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAvLyAgICAgICBzaXRlTmFtZTogJ0VwaWMgU3dlZXBzJyxcbiAgICAvLyAgICAgICB3ZWI6ICdodHRwczovL2V4YW1wbGUuY29tL2xvZ28tZGVza3RvcC5wbmcnLFxuICAgIC8vICAgICAgIG1vYmlsZTogJ2h0dHBzOi8vZXhhbXBsZS5jb20vbG9nby1tb2JpbGUucG5nJyxcbiAgICAvLyAgICAgICBzdXBwb3J0RW1haWw6ICdzdXBwb3J0QGV4YW1wbGUuY29tJyxcbiAgICAvLyAgICAgICBjb250YWN0TnVtYmVyOiAnKzEyMzQ1Njc4OTAnLFxuICAgIC8vICAgICAgIHRlcm1zVXJsOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS90ZXJtcycsXG4gICAgLy8gICAgICAgcHJpdmFjeVBvbGljeVVybDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vcHJpdmFjeS1wb2xpY3knXG4gICAgLy8gICAgIH0pLFxuICAgIC8vICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgIC8vICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgLy8gICB9XG4gICAgLy8gXSlcbiAgfSxcblxuICBhc3luYyBkb3duIChxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKSB7XG4gIC8vICAgYXdhaXQgcXVlcnlJbnRlcmZhY2UuYnVsa0RlbGV0ZSh7IHRhYmxlTmFtZTogJ2dsb2JhbF9zZXR0aW5ncycsIHNjaGVtYTogJ3B1YmxpYycgfSwge1xuICAvLyAgICAga2V5OiBbXG4gIC8vICAgICAgIEdMT0JBTF9TRVRUSU5HUy5TSVRFX0lORk9STUFUSU9OLFxuICAvLyAgICAgICBHTE9CQUxfU0VUVElOR1MuRkFVQ0VULFxuICAvLyAgICAgICBHTE9CQUxfU0VUVElOR1MuV0lUSERSQVdBTF9MSU1JVFMsXG4gIC8vICAgICAgIEdMT0JBTF9TRVRUSU5HUy5TT0NJQUxfTUVESUFfTElOS1MsXG4gIC8vICAgICAgIEdMT0JBTF9TRVRUSU5HUy5LSUxMX1NXSVRDSCxcbiAgLy8gICAgICAgR0xPQkFMX1NFVFRJTkdTLkRFUE9TSVRfTElNSVRTLFxuICAvLyAgICAgXVxuICAvLyAgIH0pXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFFWixNQUFNO0VBQUVBO0FBQWdCLENBQUMsR0FBR0MsT0FBTyx5Q0FBd0MsQ0FBQztBQUU1RUMsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDZixNQUFNQyxFQUFFQSxDQUFFQyxjQUFjLEVBQUVDLFNBQVMsRUFBRTtJQUNuQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQUEsQ0FDRDtFQUVELE1BQU1DLElBQUlBLENBQUVGLGNBQWMsRUFBRUMsU0FBUyxFQUFFO0lBQ3ZDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQUE7QUFFRixDQUFDIiwiaWdub3JlTGlzdCI6W119