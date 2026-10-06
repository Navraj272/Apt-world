'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert('languages', [{
      code: 'EN',
      language_name: 'English',
      created_at: new Date(),
      updated_at: new Date()
    }
    // {
    //   code: 'ES',
    //   language_name: 'Spanish',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'PT',
    //   language_name: 'Portuguese',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'ID',
    //   language_name: 'Indonesian',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // }
    // {
    //   code: 'NO',
    //   language_name: 'Norwegian',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'RU',
    //   language_name: 'Russian',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'PS',
    //   language_name: 'Pasto',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'AR',
    //   language_name: 'Arabic',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'DE',
    //   language_name: 'German',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'DU',
    //   language_name: 'Dutch',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'FR',
    //   language_name: 'French',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'SR',
    //   language_name: 'Serbian',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'BS',
    //   language_name: 'Bosnian',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'BG',
    //   language_name: 'Bulgarian',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'CN',
    //   language_name: 'Mandarin Chinese',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'JA',
    //   language_name: 'Japanese',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'MS',
    //   language_name: 'Malay',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'GR',
    //   language_name: 'Greek',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'TR',
    //   language_name: 'Turkish',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'CZ',
    //   language_name: 'Czech',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'SK',
    //   language_name: 'Slovak',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'DA',
    //   language_name: 'Danish',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'HI',
    //   language_name: 'Hindi',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'FI',
    //   language_name: 'Finnish',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'SW',
    //   language_name: 'Swedish',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'HU',
    //   language_name: 'Hungarian',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'FA',
    //   language_name: 'Persian',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'IT',
    //   language_name: 'Italian',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'KO',
    //   language_name: 'Korean',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'MT',
    //   language_name: 'Maltese',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'MU',
    //   language_name: 'Mauritian Creole',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'RO',
    //   language_name: 'Romanian',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'TH',
    //   language_name: 'Thai',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'VI',
    //   language_name: 'Vietnamese',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   code: 'PL',
    //   language_name: 'Polish',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // }
    ]);
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.bulkDelete('languages', null, {});
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXAiLCJxdWVyeUludGVyZmFjZSIsIkRhdGFUeXBlcyIsImJ1bGtJbnNlcnQiLCJjb2RlIiwibGFuZ3VhZ2VfbmFtZSIsImNyZWF0ZWRfYXQiLCJEYXRlIiwidXBkYXRlZF9hdCIsImRvd24iLCJidWxrRGVsZXRlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RiL3NlZWRlcnMvMjAyMjAzMTEwOTg3NjItbGFuZ3VhZ2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXN5bmMgdXAgKHF1ZXJ5SW50ZXJmYWNlLCBEYXRhVHlwZXMpIHtcbiAgICBhd2FpdCBxdWVyeUludGVyZmFjZS5idWxrSW5zZXJ0KCdsYW5ndWFnZXMnLCBbXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdFTicsXG4gICAgICAgIGxhbmd1YWdlX25hbWU6ICdFbmdsaXNoJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfVxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnRVMnLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnU3BhbmlzaCcsXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAvLyAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGNvZGU6ICdQVCcsXG4gICAgICAvLyAgIGxhbmd1YWdlX25hbWU6ICdQb3J0dWd1ZXNlJyxcbiAgICAgIC8vICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgIC8vICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgY29kZTogJ0lEJyxcbiAgICAgIC8vICAgbGFuZ3VhZ2VfbmFtZTogJ0luZG9uZXNpYW4nLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9XG4gICAgICAvLyB7XG4gICAgICAvLyAgIGNvZGU6ICdOTycsXG4gICAgICAvLyAgIGxhbmd1YWdlX25hbWU6ICdOb3J3ZWdpYW4nLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnUlUnLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnUnVzc2lhbicsXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAvLyAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGNvZGU6ICdQUycsXG4gICAgICAvLyAgIGxhbmd1YWdlX25hbWU6ICdQYXN0bycsXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAvLyAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGNvZGU6ICdBUicsXG4gICAgICAvLyAgIGxhbmd1YWdlX25hbWU6ICdBcmFiaWMnLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnREUnLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnR2VybWFuJyxcbiAgICAgIC8vICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgIC8vICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgY29kZTogJ0RVJyxcbiAgICAgIC8vICAgbGFuZ3VhZ2VfbmFtZTogJ0R1dGNoJyxcbiAgICAgIC8vICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgIC8vICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgY29kZTogJ0ZSJyxcbiAgICAgIC8vICAgbGFuZ3VhZ2VfbmFtZTogJ0ZyZW5jaCcsXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAvLyAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGNvZGU6ICdTUicsXG4gICAgICAvLyAgIGxhbmd1YWdlX25hbWU6ICdTZXJiaWFuJyxcbiAgICAgIC8vICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgIC8vICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgY29kZTogJ0JTJyxcbiAgICAgIC8vICAgbGFuZ3VhZ2VfbmFtZTogJ0Jvc25pYW4nLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnQkcnLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnQnVsZ2FyaWFuJyxcbiAgICAgIC8vICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgIC8vICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgY29kZTogJ0NOJyxcbiAgICAgIC8vICAgbGFuZ3VhZ2VfbmFtZTogJ01hbmRhcmluIENoaW5lc2UnLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnSkEnLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnSmFwYW5lc2UnLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnTVMnLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnTWFsYXknLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnR1InLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnR3JlZWsnLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnVFInLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnVHVya2lzaCcsXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAvLyAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGNvZGU6ICdDWicsXG4gICAgICAvLyAgIGxhbmd1YWdlX25hbWU6ICdDemVjaCcsXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAvLyAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGNvZGU6ICdTSycsXG4gICAgICAvLyAgIGxhbmd1YWdlX25hbWU6ICdTbG92YWsnLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnREEnLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnRGFuaXNoJyxcbiAgICAgIC8vICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgIC8vICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgY29kZTogJ0hJJyxcbiAgICAgIC8vICAgbGFuZ3VhZ2VfbmFtZTogJ0hpbmRpJyxcbiAgICAgIC8vICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgIC8vICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgY29kZTogJ0ZJJyxcbiAgICAgIC8vICAgbGFuZ3VhZ2VfbmFtZTogJ0Zpbm5pc2gnLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnU1cnLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnU3dlZGlzaCcsXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAvLyAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGNvZGU6ICdIVScsXG4gICAgICAvLyAgIGxhbmd1YWdlX25hbWU6ICdIdW5nYXJpYW4nLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnRkEnLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnUGVyc2lhbicsXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAvLyAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGNvZGU6ICdJVCcsXG4gICAgICAvLyAgIGxhbmd1YWdlX25hbWU6ICdJdGFsaWFuJyxcbiAgICAgIC8vICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgIC8vICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgY29kZTogJ0tPJyxcbiAgICAgIC8vICAgbGFuZ3VhZ2VfbmFtZTogJ0tvcmVhbicsXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAvLyAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGNvZGU6ICdNVCcsXG4gICAgICAvLyAgIGxhbmd1YWdlX25hbWU6ICdNYWx0ZXNlJyxcbiAgICAgIC8vICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgIC8vICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgY29kZTogJ01VJyxcbiAgICAgIC8vICAgbGFuZ3VhZ2VfbmFtZTogJ01hdXJpdGlhbiBDcmVvbGUnLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnUk8nLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnUm9tYW5pYW4nLFxuICAgICAgLy8gICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgLy8gICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBjb2RlOiAnVEgnLFxuICAgICAgLy8gICBsYW5ndWFnZV9uYW1lOiAnVGhhaScsXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAvLyAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGNvZGU6ICdWSScsXG4gICAgICAvLyAgIGxhbmd1YWdlX25hbWU6ICdWaWV0bmFtZXNlJyxcbiAgICAgIC8vICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgIC8vICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgY29kZTogJ1BMJyxcbiAgICAgIC8vICAgbGFuZ3VhZ2VfbmFtZTogJ1BvbGlzaCcsXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAvLyAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIC8vIH1cblxuICAgIF0pXG4gIH0sXG5cbiAgYXN5bmMgZG93biAocXVlcnlJbnRlcmZhY2UsIERhdGFUeXBlcykge1xuICAgIGF3YWl0IHF1ZXJ5SW50ZXJmYWNlLmJ1bGtEZWxldGUoJ2xhbmd1YWdlcycsIG51bGwsIHt9KVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBRVpBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2YsTUFBTUMsRUFBRUEsQ0FBRUMsY0FBYyxFQUFFQyxTQUFTLEVBQUU7SUFDbkMsTUFBTUQsY0FBYyxDQUFDRSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQzNDO01BQ0VDLElBQUksRUFBRSxJQUFJO01BQ1ZDLGFBQWEsRUFBRSxTQUFTO01BQ3hCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFBQSxDQUVELENBQUM7RUFDSixDQUFDO0VBRUQsTUFBTUUsSUFBSUEsQ0FBRVIsY0FBYyxFQUFFQyxTQUFTLEVBQUU7SUFDckMsTUFBTUQsY0FBYyxDQUFDUyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN4RDtBQUNGLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=