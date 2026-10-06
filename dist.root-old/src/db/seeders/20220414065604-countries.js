'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert('countries', [{
      code: 'BD',
      name: 'Bangladesh',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BE',
      name: 'Belgium',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BF',
      name: 'Burkina Faso',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BG',
      name: 'Bulgaria',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BA',
      name: 'Bosnia and Herzegovina',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BB',
      name: 'Barbados',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'WF',
      name: 'Wallis and Futuna',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BL',
      name: 'Saint Barthelemy',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BM',
      name: 'Bermuda',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BN',
      name: 'Brunei',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BO',
      name: 'Bolivia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BH',
      name: 'Bahrain',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BI',
      name: 'Burundi',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BJ',
      name: 'Benin',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BT',
      name: 'Bhutan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'JM',
      name: 'Jamaica',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BV',
      name: 'Bouvet Island',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BW',
      name: 'Botswana',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'WS',
      name: 'Samoa',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BQ',
      name: 'Bonaire, Saint Eustatius and Saba',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BR',
      name: 'Brazil',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BS',
      name: 'Bahamas',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'JE',
      name: 'Jersey',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BY',
      name: 'Belarus',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'BZ',
      name: 'Belize',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'RU',
      name: 'Russia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'RW',
      name: 'Rwanda',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'RS',
      name: 'Serbia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TL',
      name: 'East Timor',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'RE',
      name: 'Reunion',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TM',
      name: 'Turkmenistan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TJ',
      name: 'Tajikistan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'RO',
      name: 'Romania',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TK',
      name: 'Tokelau',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GW',
      name: 'Guinea-Bissau',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GU',
      name: 'Guam',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GT',
      name: 'Guatemala',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GS',
      name: 'South Georgia and the South Sandwich Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GR',
      name: 'Greece',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GQ',
      name: 'Equatorial Guinea',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GP',
      name: 'Guadeloupe',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'JP',
      name: 'Japan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GY',
      name: 'Guyana',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GG',
      name: 'Guernsey',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GF',
      name: 'French Guiana',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GE',
      name: 'Georgia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GD',
      name: 'Grenada',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GB',
      name: 'United Kingdom',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GA',
      name: 'Gabon',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SV',
      name: 'El Salvador',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GN',
      name: 'Guinea',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GM',
      name: 'Gambia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GL',
      name: 'Greenland',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GI',
      name: 'Gibraltar',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'GH',
      name: 'Ghana',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'OM',
      name: 'Oman',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TN',
      name: 'Tunisia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'JO',
      name: 'Jordan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'HR',
      name: 'Croatia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'HT',
      name: 'Haiti',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'HU',
      name: 'Hungary',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'HK',
      name: 'Hong Kong',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'HN',
      name: 'Honduras',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'HM',
      name: 'Heard Island and McDonald Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'VE',
      name: 'Venezuela',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PR',
      name: 'Puerto Rico',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PS',
      name: 'Palestinian Territory',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PW',
      name: 'Palau',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PT',
      name: 'Portugal',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SJ',
      name: 'Svalbard and Jan Mayen',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PY',
      name: 'Paraguay',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'IQ',
      name: 'Iraq',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PA',
      name: 'Panama',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PF',
      name: 'French Polynesia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PG',
      name: 'Papua New Guinea',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PE',
      name: 'Peru',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PK',
      name: 'Pakistan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PH',
      name: 'Philippines',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PN',
      name: 'Pitcairn',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PL',
      name: 'Poland',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'PM',
      name: 'Saint Pierre and Miquelon',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'ZM',
      name: 'Zambia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'EH',
      name: 'Western Sahara',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'EE',
      name: 'Estonia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'EG',
      name: 'Egypt',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'ZA',
      name: 'South Africa',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'EC',
      name: 'Ecuador',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'IT',
      name: 'Italy',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'VN',
      name: 'Vietnam',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SB',
      name: 'Solomon Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'ET',
      name: 'Ethiopia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SO',
      name: 'Somalia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'ZW',
      name: 'Zimbabwe',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SA',
      name: 'Saudi Arabia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'ES',
      name: 'Spain',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'ER',
      name: 'Eritrea',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'ME',
      name: 'Montenegro',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MD',
      name: 'Moldova',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MG',
      name: 'Madagascar',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MF',
      name: 'Saint Martin',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MA',
      name: 'Morocco',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MC',
      name: 'Monaco',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'UZ',
      name: 'Uzbekistan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MM',
      name: 'Myanmar',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'ML',
      name: 'Mali',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MO',
      name: 'Macao',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MN',
      name: 'Mongolia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MH',
      name: 'Marshall Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MK',
      name: 'Macedonia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MU',
      name: 'Mauritius',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MT',
      name: 'Malta',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MW',
      name: 'Malawi',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MV',
      name: 'Maldives',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MQ',
      name: 'Martinique',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MP',
      name: 'Northern Mariana Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MS',
      name: 'Montserrat',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MR',
      name: 'Mauritania',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'IM',
      name: 'Isle of Man',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'UG',
      name: 'Uganda',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TZ',
      name: 'Tanzania',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MY',
      name: 'Malaysia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MX',
      name: 'Mexico',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'IL',
      name: 'Israel',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'FR',
      name: 'France',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'IO',
      name: 'British Indian Ocean Territory',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SH',
      name: 'Saint Helena',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'FI',
      name: 'Finland',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'FJ',
      name: 'Fiji',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'FK',
      name: 'Falkland Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'FM',
      name: 'Micronesia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'FO',
      name: 'Faroe Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NI',
      name: 'Nicaragua',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NL',
      name: 'Netherlands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NO',
      name: 'Norway',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NA',
      name: 'Namibia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'VU',
      name: 'Vanuatu',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NC',
      name: 'New Caledonia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NE',
      name: 'Niger',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NF',
      name: 'Norfolk Island',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NG',
      name: 'Nigeria',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NZ',
      name: 'New Zealand',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NP',
      name: 'Nepal',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NR',
      name: 'Nauru',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'NU',
      name: 'Niue',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CK',
      name: 'Cook Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'XK',
      name: 'Kosovo',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CI',
      name: 'Ivory Coast',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CH',
      name: 'Switzerland',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CO',
      name: 'Colombia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CN',
      name: 'China',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CM',
      name: 'Cameroon',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CL',
      name: 'Chile',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CC',
      name: 'Cocos Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CA',
      name: 'Canada',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CA-AB',
      name: 'Alberta-Canada',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CA-BC',
      name: 'Colombie-Britannique-Canada',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CA-MB',
      name: 'Manitoba-Canada',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CA-ON',
      name: 'Ontario-Canada',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CA-QC',
      name: 'Québec-+Canada',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CG',
      name: 'Republic of the Congo',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CF',
      name: 'Central African Republic',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CD',
      name: 'Democratic Republic of the Congo',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CZ',
      name: 'Czech Republic',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CY',
      name: 'Cyprus',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CX',
      name: 'Christmas Island',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CR',
      name: 'Costa Rica',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CW',
      name: 'Curacao',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CV',
      name: 'Cape Verde',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'CU',
      name: 'Cuba',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SZ',
      name: 'Swaziland',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SY',
      name: 'Syria',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SX',
      name: 'Sint Maarten',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'KG',
      name: 'Kyrgyzstan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'KE',
      name: 'Kenya',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SS',
      name: 'South Sudan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SR',
      name: 'Suriname',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'KI',
      name: 'Kiribati',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'KH',
      name: 'Cambodia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'KN',
      name: 'Saint Kitts and Nevis',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'KM',
      name: 'Comoros',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'ST',
      name: 'Sao Tome and Principe',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SK',
      name: 'Slovakia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'KR',
      name: 'South Korea',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SI',
      name: 'Slovenia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'KP',
      name: 'North Korea',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'KW',
      name: 'Kuwait',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SN',
      name: 'Senegal',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SM',
      name: 'San Marino',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SL',
      name: 'Sierra Leone',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SC',
      name: 'Seychelles',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'KZ',
      name: 'Kazakhstan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'KY',
      name: 'Cayman Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SG',
      name: 'Singapore',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SE',
      name: 'Sweden',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'SD',
      name: 'Sudan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'DO',
      name: 'Dominican Republic',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'DM',
      name: 'Dominica',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'DJ',
      name: 'Djibouti',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'DK',
      name: 'Denmark',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'VG',
      name: 'British Virgin Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'DE',
      name: 'Germany',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'YE',
      name: 'Yemen',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'DZ',
      name: 'Algeria',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'US',
      name: 'United States',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'UY',
      name: 'Uruguay',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'YT',
      name: 'Mayotte',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'UM',
      name: 'United States Minor Outlying Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'LB',
      name: 'Lebanon',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'LC',
      name: 'Saint Lucia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'LA',
      name: 'Laos',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TV',
      name: 'Tuvalu',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TW',
      name: 'Taiwan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TT',
      name: 'Trinidad and Tobago',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TR',
      name: 'Turkey',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'LK',
      name: 'Sri Lanka',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'LI',
      name: 'Liechtenstein',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'LV',
      name: 'Latvia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TO',
      name: 'Tonga',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'LT',
      name: 'Lithuania',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'LU',
      name: 'Luxembourg',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'LR',
      name: 'Liberia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'LS',
      name: 'Lesotho',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TH',
      name: 'Thailand',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TF',
      name: 'French Southern Territories',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TG',
      name: 'Togo',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TD',
      name: 'Chad',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'TC',
      name: 'Turks and Caicos Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'LY',
      name: 'Libya',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'VA',
      name: 'Vatican',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'VC',
      name: 'Saint Vincent and the Grenadines',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AE',
      name: 'United Arab Emirates',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AD',
      name: 'Andorra',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AG',
      name: 'Antigua and Barbuda',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AF',
      name: 'Afghanistan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AI',
      name: 'Anguilla',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'VI',
      name: 'U.S. Virgin Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'IS',
      name: 'Iceland',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'IR',
      name: 'Iran',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AM',
      name: 'Armenia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AL',
      name: 'Albania',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AO',
      name: 'Angola',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AQ',
      name: 'Antarctica',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AS',
      name: 'American Samoa',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AR',
      name: 'Argentina',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AU',
      name: 'Australia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AT',
      name: 'Austria',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AW',
      name: 'Aruba',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'IN',
      name: 'India',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AX',
      name: 'Aland Islands',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'AZ',
      name: 'Azerbaijan',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'IE',
      name: 'Ireland',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'ID',
      name: 'Indonesia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'UA',
      name: 'Ukraine',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'QA',
      name: 'Qatar',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      code: 'MZ',
      name: 'Mozambique',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.bulkDelete('countries', null, {});
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXAiLCJxdWVyeUludGVyZmFjZSIsIkRhdGFUeXBlcyIsImJ1bGtJbnNlcnQiLCJjb2RlIiwibmFtZSIsImNyZWF0ZWRfYXQiLCJEYXRlIiwidXBkYXRlZF9hdCIsImRvd24iLCJidWxrRGVsZXRlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RiL3NlZWRlcnMvMjAyMjA0MTQwNjU2MDQtY291bnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXN5bmMgdXAgKHF1ZXJ5SW50ZXJmYWNlLCBEYXRhVHlwZXMpIHtcbiAgICBhd2FpdCBxdWVyeUludGVyZmFjZS5idWxrSW5zZXJ0KCdjb3VudHJpZXMnLCBbXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdCRCcsXG4gICAgICAgIG5hbWU6ICdCYW5nbGFkZXNoJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0JFJyxcbiAgICAgICAgbmFtZTogJ0JlbGdpdW0nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQkYnLFxuICAgICAgICBuYW1lOiAnQnVya2luYSBGYXNvJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0JHJyxcbiAgICAgICAgbmFtZTogJ0J1bGdhcmlhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0JBJyxcbiAgICAgICAgbmFtZTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQkInLFxuICAgICAgICBuYW1lOiAnQmFyYmFkb3MnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnV0YnLFxuICAgICAgICBuYW1lOiAnV2FsbGlzIGFuZCBGdXR1bmEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQkwnLFxuICAgICAgICBuYW1lOiAnU2FpbnQgQmFydGhlbGVteScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdCTScsXG4gICAgICAgIG5hbWU6ICdCZXJtdWRhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0JOJyxcbiAgICAgICAgbmFtZTogJ0JydW5laScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdCTycsXG4gICAgICAgIG5hbWU6ICdCb2xpdmlhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0JIJyxcbiAgICAgICAgbmFtZTogJ0JhaHJhaW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQkknLFxuICAgICAgICBuYW1lOiAnQnVydW5kaScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdCSicsXG4gICAgICAgIG5hbWU6ICdCZW5pbicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdCVCcsXG4gICAgICAgIG5hbWU6ICdCaHV0YW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnSk0nLFxuICAgICAgICBuYW1lOiAnSmFtYWljYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdCVicsXG4gICAgICAgIG5hbWU6ICdCb3V2ZXQgSXNsYW5kJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0JXJyxcbiAgICAgICAgbmFtZTogJ0JvdHN3YW5hJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1dTJyxcbiAgICAgICAgbmFtZTogJ1NhbW9hJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0JRJyxcbiAgICAgICAgbmFtZTogJ0JvbmFpcmUsIFNhaW50IEV1c3RhdGl1cyBhbmQgU2FiYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdCUicsXG4gICAgICAgIG5hbWU6ICdCcmF6aWwnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQlMnLFxuICAgICAgICBuYW1lOiAnQmFoYW1hcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdKRScsXG4gICAgICAgIG5hbWU6ICdKZXJzZXknLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQlknLFxuICAgICAgICBuYW1lOiAnQmVsYXJ1cycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdCWicsXG4gICAgICAgIG5hbWU6ICdCZWxpemUnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnUlUnLFxuICAgICAgICBuYW1lOiAnUnVzc2lhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1JXJyxcbiAgICAgICAgbmFtZTogJ1J3YW5kYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdSUycsXG4gICAgICAgIG5hbWU6ICdTZXJiaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVEwnLFxuICAgICAgICBuYW1lOiAnRWFzdCBUaW1vcicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdSRScsXG4gICAgICAgIG5hbWU6ICdSZXVuaW9uJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1RNJyxcbiAgICAgICAgbmFtZTogJ1R1cmttZW5pc3RhbicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdUSicsXG4gICAgICAgIG5hbWU6ICdUYWppa2lzdGFuJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1JPJyxcbiAgICAgICAgbmFtZTogJ1JvbWFuaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVEsnLFxuICAgICAgICBuYW1lOiAnVG9rZWxhdScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdHVycsXG4gICAgICAgIG5hbWU6ICdHdWluZWEtQmlzc2F1JyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0dVJyxcbiAgICAgICAgbmFtZTogJ0d1YW0nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnR1QnLFxuICAgICAgICBuYW1lOiAnR3VhdGVtYWxhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0dTJyxcbiAgICAgICAgbmFtZTogJ1NvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0dSJyxcbiAgICAgICAgbmFtZTogJ0dyZWVjZScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdHUScsXG4gICAgICAgIG5hbWU6ICdFcXVhdG9yaWFsIEd1aW5lYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdHUCcsXG4gICAgICAgIG5hbWU6ICdHdWFkZWxvdXBlJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0pQJyxcbiAgICAgICAgbmFtZTogJ0phcGFuJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0dZJyxcbiAgICAgICAgbmFtZTogJ0d1eWFuYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdHRycsXG4gICAgICAgIG5hbWU6ICdHdWVybnNleScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdHRicsXG4gICAgICAgIG5hbWU6ICdGcmVuY2ggR3VpYW5hJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0dFJyxcbiAgICAgICAgbmFtZTogJ0dlb3JnaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnR0QnLFxuICAgICAgICBuYW1lOiAnR3JlbmFkYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdHQicsXG4gICAgICAgIG5hbWU6ICdVbml0ZWQgS2luZ2RvbScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdHQScsXG4gICAgICAgIG5hbWU6ICdHYWJvbicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdTVicsXG4gICAgICAgIG5hbWU6ICdFbCBTYWx2YWRvcicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdHTicsXG4gICAgICAgIG5hbWU6ICdHdWluZWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnR00nLFxuICAgICAgICBuYW1lOiAnR2FtYmlhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0dMJyxcbiAgICAgICAgbmFtZTogJ0dyZWVubGFuZCcsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdHSScsXG4gICAgICAgIG5hbWU6ICdHaWJyYWx0YXInLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnR0gnLFxuICAgICAgICBuYW1lOiAnR2hhbmEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnT00nLFxuICAgICAgICBuYW1lOiAnT21hbicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdUTicsXG4gICAgICAgIG5hbWU6ICdUdW5pc2lhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0pPJyxcbiAgICAgICAgbmFtZTogJ0pvcmRhbicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdIUicsXG4gICAgICAgIG5hbWU6ICdDcm9hdGlhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0hUJyxcbiAgICAgICAgbmFtZTogJ0hhaXRpJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0hVJyxcbiAgICAgICAgbmFtZTogJ0h1bmdhcnknLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnSEsnLFxuICAgICAgICBuYW1lOiAnSG9uZyBLb25nJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0hOJyxcbiAgICAgICAgbmFtZTogJ0hvbmR1cmFzJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0hNJyxcbiAgICAgICAgbmFtZTogJ0hlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdWRScsXG4gICAgICAgIG5hbWU6ICdWZW5lenVlbGEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnUFInLFxuICAgICAgICBuYW1lOiAnUHVlcnRvIFJpY28nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnUFMnLFxuICAgICAgICBuYW1lOiAnUGFsZXN0aW5pYW4gVGVycml0b3J5JyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1BXJyxcbiAgICAgICAgbmFtZTogJ1BhbGF1JyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1BUJyxcbiAgICAgICAgbmFtZTogJ1BvcnR1Z2FsJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1NKJyxcbiAgICAgICAgbmFtZTogJ1N2YWxiYXJkIGFuZCBKYW4gTWF5ZW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnUFknLFxuICAgICAgICBuYW1lOiAnUGFyYWd1YXknLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnSVEnLFxuICAgICAgICBuYW1lOiAnSXJhcScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdQQScsXG4gICAgICAgIG5hbWU6ICdQYW5hbWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnUEYnLFxuICAgICAgICBuYW1lOiAnRnJlbmNoIFBvbHluZXNpYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdQRycsXG4gICAgICAgIG5hbWU6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1BFJyxcbiAgICAgICAgbmFtZTogJ1BlcnUnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnUEsnLFxuICAgICAgICBuYW1lOiAnUGFraXN0YW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnUEgnLFxuICAgICAgICBuYW1lOiAnUGhpbGlwcGluZXMnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnUE4nLFxuICAgICAgICBuYW1lOiAnUGl0Y2Fpcm4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnUEwnLFxuICAgICAgICBuYW1lOiAnUG9sYW5kJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1BNJyxcbiAgICAgICAgbmFtZTogJ1NhaW50IFBpZXJyZSBhbmQgTWlxdWVsb24nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnWk0nLFxuICAgICAgICBuYW1lOiAnWmFtYmlhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0VIJyxcbiAgICAgICAgbmFtZTogJ1dlc3Rlcm4gU2FoYXJhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0VFJyxcbiAgICAgICAgbmFtZTogJ0VzdG9uaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnRUcnLFxuICAgICAgICBuYW1lOiAnRWd5cHQnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnWkEnLFxuICAgICAgICBuYW1lOiAnU291dGggQWZyaWNhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0VDJyxcbiAgICAgICAgbmFtZTogJ0VjdWFkb3InLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnSVQnLFxuICAgICAgICBuYW1lOiAnSXRhbHknLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVk4nLFxuICAgICAgICBuYW1lOiAnVmlldG5hbScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdTQicsXG4gICAgICAgIG5hbWU6ICdTb2xvbW9uIElzbGFuZHMnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnRVQnLFxuICAgICAgICBuYW1lOiAnRXRoaW9waWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnU08nLFxuICAgICAgICBuYW1lOiAnU29tYWxpYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdaVycsXG4gICAgICAgIG5hbWU6ICdaaW1iYWJ3ZScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdTQScsXG4gICAgICAgIG5hbWU6ICdTYXVkaSBBcmFiaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnRVMnLFxuICAgICAgICBuYW1lOiAnU3BhaW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnRVInLFxuICAgICAgICBuYW1lOiAnRXJpdHJlYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdNRScsXG4gICAgICAgIG5hbWU6ICdNb250ZW5lZ3JvJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ01EJyxcbiAgICAgICAgbmFtZTogJ01vbGRvdmEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTUcnLFxuICAgICAgICBuYW1lOiAnTWFkYWdhc2NhcicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdNRicsXG4gICAgICAgIG5hbWU6ICdTYWludCBNYXJ0aW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTUEnLFxuICAgICAgICBuYW1lOiAnTW9yb2NjbycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdNQycsXG4gICAgICAgIG5hbWU6ICdNb25hY28nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVVonLFxuICAgICAgICBuYW1lOiAnVXpiZWtpc3RhbicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdNTScsXG4gICAgICAgIG5hbWU6ICdNeWFubWFyJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ01MJyxcbiAgICAgICAgbmFtZTogJ01hbGknLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTU8nLFxuICAgICAgICBuYW1lOiAnTWFjYW8nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTU4nLFxuICAgICAgICBuYW1lOiAnTW9uZ29saWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTUgnLFxuICAgICAgICBuYW1lOiAnTWFyc2hhbGwgSXNsYW5kcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdNSycsXG4gICAgICAgIG5hbWU6ICdNYWNlZG9uaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTVUnLFxuICAgICAgICBuYW1lOiAnTWF1cml0aXVzJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ01UJyxcbiAgICAgICAgbmFtZTogJ01hbHRhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ01XJyxcbiAgICAgICAgbmFtZTogJ01hbGF3aScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdNVicsXG4gICAgICAgIG5hbWU6ICdNYWxkaXZlcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdNUScsXG4gICAgICAgIG5hbWU6ICdNYXJ0aW5pcXVlJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ01QJyxcbiAgICAgICAgbmFtZTogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdNUycsXG4gICAgICAgIG5hbWU6ICdNb250c2VycmF0JyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ01SJyxcbiAgICAgICAgbmFtZTogJ01hdXJpdGFuaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnSU0nLFxuICAgICAgICBuYW1lOiAnSXNsZSBvZiBNYW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVUcnLFxuICAgICAgICBuYW1lOiAnVWdhbmRhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1RaJyxcbiAgICAgICAgbmFtZTogJ1RhbnphbmlhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ01ZJyxcbiAgICAgICAgbmFtZTogJ01hbGF5c2lhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ01YJyxcbiAgICAgICAgbmFtZTogJ01leGljbycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdJTCcsXG4gICAgICAgIG5hbWU6ICdJc3JhZWwnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnRlInLFxuICAgICAgICBuYW1lOiAnRnJhbmNlJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0lPJyxcbiAgICAgICAgbmFtZTogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdTSCcsXG4gICAgICAgIG5hbWU6ICdTYWludCBIZWxlbmEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnRkknLFxuICAgICAgICBuYW1lOiAnRmlubGFuZCcsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdGSicsXG4gICAgICAgIG5hbWU6ICdGaWppJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0ZLJyxcbiAgICAgICAgbmFtZTogJ0ZhbGtsYW5kIElzbGFuZHMnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnRk0nLFxuICAgICAgICBuYW1lOiAnTWljcm9uZXNpYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdGTycsXG4gICAgICAgIG5hbWU6ICdGYXJvZSBJc2xhbmRzJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ05JJyxcbiAgICAgICAgbmFtZTogJ05pY2FyYWd1YScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdOTCcsXG4gICAgICAgIG5hbWU6ICdOZXRoZXJsYW5kcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdOTycsXG4gICAgICAgIG5hbWU6ICdOb3J3YXknLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTkEnLFxuICAgICAgICBuYW1lOiAnTmFtaWJpYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdWVScsXG4gICAgICAgIG5hbWU6ICdWYW51YXR1JyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ05DJyxcbiAgICAgICAgbmFtZTogJ05ldyBDYWxlZG9uaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTkUnLFxuICAgICAgICBuYW1lOiAnTmlnZXInLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTkYnLFxuICAgICAgICBuYW1lOiAnTm9yZm9sayBJc2xhbmQnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTkcnLFxuICAgICAgICBuYW1lOiAnTmlnZXJpYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdOWicsXG4gICAgICAgIG5hbWU6ICdOZXcgWmVhbGFuZCcsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdOUCcsXG4gICAgICAgIG5hbWU6ICdOZXBhbCcsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdOUicsXG4gICAgICAgIG5hbWU6ICdOYXVydScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdOVScsXG4gICAgICAgIG5hbWU6ICdOaXVlJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0NLJyxcbiAgICAgICAgbmFtZTogJ0Nvb2sgSXNsYW5kcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdYSycsXG4gICAgICAgIG5hbWU6ICdLb3Nvdm8nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ0knLFxuICAgICAgICBuYW1lOiAnSXZvcnkgQ29hc3QnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ0gnLFxuICAgICAgICBuYW1lOiAnU3dpdHplcmxhbmQnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ08nLFxuICAgICAgICBuYW1lOiAnQ29sb21iaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ04nLFxuICAgICAgICBuYW1lOiAnQ2hpbmEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ00nLFxuICAgICAgICBuYW1lOiAnQ2FtZXJvb24nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ0wnLFxuICAgICAgICBuYW1lOiAnQ2hpbGUnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ0MnLFxuICAgICAgICBuYW1lOiAnQ29jb3MgSXNsYW5kcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdDQScsXG4gICAgICAgIG5hbWU6ICdDYW5hZGEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ0EtQUInLFxuICAgICAgICBuYW1lOiAnQWxiZXJ0YS1DYW5hZGEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ0EtQkMnLFxuICAgICAgICBuYW1lOiAnQ29sb21iaWUtQnJpdGFubmlxdWUtQ2FuYWRhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0NBLU1CJyxcbiAgICAgICAgbmFtZTogJ01hbml0b2JhLUNhbmFkYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdDQS1PTicsXG4gICAgICAgIG5hbWU6ICdPbnRhcmlvLUNhbmFkYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdDQS1RQycsXG4gICAgICAgIG5hbWU6ICdRdcOpYmVjLStDYW5hZGEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ0cnLFxuICAgICAgICBuYW1lOiAnUmVwdWJsaWMgb2YgdGhlIENvbmdvJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0NGJyxcbiAgICAgICAgbmFtZTogJ0NlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdDRCcsXG4gICAgICAgIG5hbWU6ICdEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSBDb25nbycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdDWicsXG4gICAgICAgIG5hbWU6ICdDemVjaCBSZXB1YmxpYycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdDWScsXG4gICAgICAgIG5hbWU6ICdDeXBydXMnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ1gnLFxuICAgICAgICBuYW1lOiAnQ2hyaXN0bWFzIElzbGFuZCcsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdDUicsXG4gICAgICAgIG5hbWU6ICdDb3N0YSBSaWNhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0NXJyxcbiAgICAgICAgbmFtZTogJ0N1cmFjYW8nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQ1YnLFxuICAgICAgICBuYW1lOiAnQ2FwZSBWZXJkZScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdDVScsXG4gICAgICAgIG5hbWU6ICdDdWJhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1NaJyxcbiAgICAgICAgbmFtZTogJ1N3YXppbGFuZCcsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdTWScsXG4gICAgICAgIG5hbWU6ICdTeXJpYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdTWCcsXG4gICAgICAgIG5hbWU6ICdTaW50IE1hYXJ0ZW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnS0cnLFxuICAgICAgICBuYW1lOiAnS3lyZ3l6c3RhbicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdLRScsXG4gICAgICAgIG5hbWU6ICdLZW55YScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdTUycsXG4gICAgICAgIG5hbWU6ICdTb3V0aCBTdWRhbicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdTUicsXG4gICAgICAgIG5hbWU6ICdTdXJpbmFtZScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdLSScsXG4gICAgICAgIG5hbWU6ICdLaXJpYmF0aScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdLSCcsXG4gICAgICAgIG5hbWU6ICdDYW1ib2RpYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdLTicsXG4gICAgICAgIG5hbWU6ICdTYWludCBLaXR0cyBhbmQgTmV2aXMnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnS00nLFxuICAgICAgICBuYW1lOiAnQ29tb3JvcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdTVCcsXG4gICAgICAgIG5hbWU6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnU0snLFxuICAgICAgICBuYW1lOiAnU2xvdmFraWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnS1InLFxuICAgICAgICBuYW1lOiAnU291dGggS29yZWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnU0knLFxuICAgICAgICBuYW1lOiAnU2xvdmVuaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnS1AnLFxuICAgICAgICBuYW1lOiAnTm9ydGggS29yZWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnS1cnLFxuICAgICAgICBuYW1lOiAnS3V3YWl0JyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1NOJyxcbiAgICAgICAgbmFtZTogJ1NlbmVnYWwnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnU00nLFxuICAgICAgICBuYW1lOiAnU2FuIE1hcmlubycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdTTCcsXG4gICAgICAgIG5hbWU6ICdTaWVycmEgTGVvbmUnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnU0MnLFxuICAgICAgICBuYW1lOiAnU2V5Y2hlbGxlcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdLWicsXG4gICAgICAgIG5hbWU6ICdLYXpha2hzdGFuJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0tZJyxcbiAgICAgICAgbmFtZTogJ0NheW1hbiBJc2xhbmRzJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1NHJyxcbiAgICAgICAgbmFtZTogJ1NpbmdhcG9yZScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdTRScsXG4gICAgICAgIG5hbWU6ICdTd2VkZW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnU0QnLFxuICAgICAgICBuYW1lOiAnU3VkYW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnRE8nLFxuICAgICAgICBuYW1lOiAnRG9taW5pY2FuIFJlcHVibGljJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0RNJyxcbiAgICAgICAgbmFtZTogJ0RvbWluaWNhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0RKJyxcbiAgICAgICAgbmFtZTogJ0RqaWJvdXRpJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0RLJyxcbiAgICAgICAgbmFtZTogJ0Rlbm1hcmsnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVkcnLFxuICAgICAgICBuYW1lOiAnQnJpdGlzaCBWaXJnaW4gSXNsYW5kcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdERScsXG4gICAgICAgIG5hbWU6ICdHZXJtYW55JyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1lFJyxcbiAgICAgICAgbmFtZTogJ1llbWVuJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0RaJyxcbiAgICAgICAgbmFtZTogJ0FsZ2VyaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVVMnLFxuICAgICAgICBuYW1lOiAnVW5pdGVkIFN0YXRlcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdVWScsXG4gICAgICAgIG5hbWU6ICdVcnVndWF5JyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1lUJyxcbiAgICAgICAgbmFtZTogJ01heW90dGUnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVU0nLFxuICAgICAgICBuYW1lOiAnVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0xCJyxcbiAgICAgICAgbmFtZTogJ0xlYmFub24nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTEMnLFxuICAgICAgICBuYW1lOiAnU2FpbnQgTHVjaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTEEnLFxuICAgICAgICBuYW1lOiAnTGFvcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdUVicsXG4gICAgICAgIG5hbWU6ICdUdXZhbHUnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVFcnLFxuICAgICAgICBuYW1lOiAnVGFpd2FuJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1RUJyxcbiAgICAgICAgbmFtZTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVFInLFxuICAgICAgICBuYW1lOiAnVHVya2V5JyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0xLJyxcbiAgICAgICAgbmFtZTogJ1NyaSBMYW5rYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdMSScsXG4gICAgICAgIG5hbWU6ICdMaWVjaHRlbnN0ZWluJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0xWJyxcbiAgICAgICAgbmFtZTogJ0xhdHZpYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdUTycsXG4gICAgICAgIG5hbWU6ICdUb25nYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdMVCcsXG4gICAgICAgIG5hbWU6ICdMaXRodWFuaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTFUnLFxuICAgICAgICBuYW1lOiAnTHV4ZW1ib3VyZycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdMUicsXG4gICAgICAgIG5hbWU6ICdMaWJlcmlhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0xTJyxcbiAgICAgICAgbmFtZTogJ0xlc290aG8nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVEgnLFxuICAgICAgICBuYW1lOiAnVGhhaWxhbmQnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVEYnLFxuICAgICAgICBuYW1lOiAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ1RHJyxcbiAgICAgICAgbmFtZTogJ1RvZ28nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVEQnLFxuICAgICAgICBuYW1lOiAnQ2hhZCcsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdUQycsXG4gICAgICAgIG5hbWU6ICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnTFknLFxuICAgICAgICBuYW1lOiAnTGlieWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVkEnLFxuICAgICAgICBuYW1lOiAnVmF0aWNhbicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdWQycsXG4gICAgICAgIG5hbWU6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdBRScsXG4gICAgICAgIG5hbWU6ICdVbml0ZWQgQXJhYiBFbWlyYXRlcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdBRCcsXG4gICAgICAgIG5hbWU6ICdBbmRvcnJhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0FHJyxcbiAgICAgICAgbmFtZTogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQUYnLFxuICAgICAgICBuYW1lOiAnQWZnaGFuaXN0YW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQUknLFxuICAgICAgICBuYW1lOiAnQW5ndWlsbGEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVkknLFxuICAgICAgICBuYW1lOiAnVS5TLiBWaXJnaW4gSXNsYW5kcycsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdJUycsXG4gICAgICAgIG5hbWU6ICdJY2VsYW5kJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0lSJyxcbiAgICAgICAgbmFtZTogJ0lyYW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQU0nLFxuICAgICAgICBuYW1lOiAnQXJtZW5pYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdBTCcsXG4gICAgICAgIG5hbWU6ICdBbGJhbmlhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0FPJyxcbiAgICAgICAgbmFtZTogJ0FuZ29sYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdBUScsXG4gICAgICAgIG5hbWU6ICdBbnRhcmN0aWNhJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0FTJyxcbiAgICAgICAgbmFtZTogJ0FtZXJpY2FuIFNhbW9hJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0FSJyxcbiAgICAgICAgbmFtZTogJ0FyZ2VudGluYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdBVScsXG4gICAgICAgIG5hbWU6ICdBdXN0cmFsaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnQVQnLFxuICAgICAgICBuYW1lOiAnQXVzdHJpYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdBVycsXG4gICAgICAgIG5hbWU6ICdBcnViYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdJTicsXG4gICAgICAgIG5hbWU6ICdJbmRpYScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdBWCcsXG4gICAgICAgIG5hbWU6ICdBbGFuZCBJc2xhbmRzJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29kZTogJ0FaJyxcbiAgICAgICAgbmFtZTogJ0F6ZXJiYWlqYW4nLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnSUUnLFxuICAgICAgICBuYW1lOiAnSXJlbGFuZCcsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdJRCcsXG4gICAgICAgIG5hbWU6ICdJbmRvbmVzaWEnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2RlOiAnVUEnLFxuICAgICAgICBuYW1lOiAnVWtyYWluZScsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdRQScsXG4gICAgICAgIG5hbWU6ICdRYXRhcicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvZGU6ICdNWicsXG4gICAgICAgIG5hbWU6ICdNb3phbWJpcXVlJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuICAgICAgfVxuICAgIF0pXG4gIH0sXG5cbiAgYXN5bmMgZG93biAocXVlcnlJbnRlcmZhY2UsIERhdGFUeXBlcykge1xuICAgIGF3YWl0IHF1ZXJ5SW50ZXJmYWNlLmJ1bGtEZWxldGUoJ2NvdW50cmllcycsIG51bGwsIHt9KVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBRVpBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2YsTUFBTUMsRUFBRUEsQ0FBRUMsY0FBYyxFQUFFQyxTQUFTLEVBQUU7SUFDbkMsTUFBTUQsY0FBYyxDQUFDRSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQzNDO01BQ0VDLElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLGNBQWM7TUFDcEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLHdCQUF3QjtNQUM5QkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsVUFBVTtNQUNoQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsbUJBQW1CO01BQ3pCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxrQkFBa0I7TUFDeEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFNBQVM7TUFDZkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsUUFBUTtNQUNkQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFNBQVM7TUFDZkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxPQUFPO01BQ2JDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFFBQVE7TUFDZEMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxlQUFlO01BQ3JCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxVQUFVO01BQ2hCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxPQUFPO01BQ2JDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLG1DQUFtQztNQUN6Q0MsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsUUFBUTtNQUNkQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFFBQVE7TUFDZEMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxRQUFRO01BQ2RDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFFBQVE7TUFDZEMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsUUFBUTtNQUNkQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxRQUFRO01BQ2RDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFlBQVk7TUFDbEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFNBQVM7TUFDZkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsY0FBYztNQUNwQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsWUFBWTtNQUNsQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLGVBQWU7TUFDckJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsV0FBVztNQUNqQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsOENBQThDO01BQ3BEQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxRQUFRO01BQ2RDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLG1CQUFtQjtNQUN6QkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsWUFBWTtNQUNsQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsT0FBTztNQUNiQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxRQUFRO01BQ2RDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLGVBQWU7TUFDckJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFNBQVM7TUFDZkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxnQkFBZ0I7TUFDdEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE9BQU87TUFDYkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsYUFBYTtNQUNuQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsUUFBUTtNQUNkQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxRQUFRO01BQ2RDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFdBQVc7TUFDakJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFdBQVc7TUFDakJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE9BQU87TUFDYkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsTUFBTTtNQUNaQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFFBQVE7TUFDZEMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJ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RUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsUUFBUTtNQUNkQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSwyQkFBMkI7TUFDakNDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFFBQVE7TUFDZEMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsZ0JBQWdCO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE9BQU87TUFDYkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsY0FBYztNQUNwQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxPQUFPO01BQ2JDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFNBQVM7TUFDZkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsaUJBQWlCO01BQ3ZCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxVQUFVO01BQ2hCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLGNBQWM7TUFDcEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE9BQU87TUFDYkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFlBQVk7TUFDbEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLGNBQWM7TUFDcEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFNBQVM7TUFDZkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsUUFBUTtNQUNkQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsT0FBTztNQUNiQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxVQUFVO01BQ2hCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxrQkFBa0I7TUFDeEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFdBQVc7TUFDakJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFdBQVc7TUFDakJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE9BQU87TUFDYkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsUUFBUTtNQUNkQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxVQUFVO01BQ2hCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSwwQkFBMEI7TUFDaENDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFlBQVk7TUFDbEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFlBQVk7TUFDbEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLGFBQWE7TUFDbkJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFFBQVE7TUFDZEMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsVUFBVTtNQUNoQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsVUFBVTtNQUNoQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsUUFBUTtNQUNkQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxRQUFRO01BQ2RDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFFBQVE7TUFDZEMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsZ0NBQWdDO01BQ3RDQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxjQUFjO01BQ3BCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsa0JBQWtCO01BQ3hCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxlQUFlO01BQ3JCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxXQUFXO01BQ2pCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxhQUFhO01BQ25CQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxRQUFRO01BQ2RDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFNBQVM7TUFDZkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFD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VSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFFBQVE7TUFDZEMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsa0JBQWtCO01BQ3hCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFlBQVk7TUFDbEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsV0FBVztNQUNqQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsT0FBTztNQUNiQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxjQUFjO01BQ3BCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxPQUFPO01BQ2JDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLGFBQWE7TUFDbkJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLHVCQUF1QjtNQUM3QkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSx1QkFBdUI7TUFDN0JDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLGFBQWE7TUFDbkJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLGFBQWE7TUFDbkJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFFBQVE7TUFDZEMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxjQUFjO01BQ3BCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxnQkFBZ0I7TUFDdEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFdBQVc7TUFDakJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFFBQVE7TUFDZEMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsT0FBTztNQUNiQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxvQkFBb0I7TUFDMUJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFNBQVM7TUFDZkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsd0JBQXdCO01BQzlCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE9BQU87TUFDYkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxlQUFlO01BQ3JCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFNBQVM7TUFDZkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsc0NBQXNDO01BQzVDQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLGFBQWE7TUFDbkJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsUUFBUTtNQUNkQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxRQUFRO01BQ2RDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLHFCQUFxQjtNQUMzQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsUUFBUTtNQUNkQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxXQUFXO01BQ2pCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxlQUFlO01BQ3JCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxRQUFRO01BQ2RDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE9BQU87TUFDYkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsV0FBVztNQUNqQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsWUFBWTtNQUNsQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLDZCQUE2QjtNQUNuQ0MsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsTUFBTTtNQUNaQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxNQUFNO01BQ1pDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENB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QyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFFBQVE7TUFDZEMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsWUFBWTtNQUNsQkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsZ0JBQWdCO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxXQUFXO01BQ2pCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxXQUFXO01BQ2pCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLE9BQU87TUFDYkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsT0FBTztNQUNiQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxlQUFlO01BQ3JCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxTQUFTO01BQ2ZDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFdBQVc7TUFDakJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN0QkMsVUFBVSxFQUFFLElBQUlELElBQUksQ0FBQztJQUN2QixDQUFDLEVBQ0Q7TUFDRUgsSUFBSSxFQUFFLElBQUk7TUFDVkMsSUFBSSxFQUFFLFNBQVM7TUFDZkMsVUFBVSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3RCQyxVQUFVLEVBQUUsSUFBSUQsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsRUFDRDtNQUNFSCxJQUFJLEVBQUUsSUFBSTtNQUNWQyxJQUFJLEVBQUUsT0FBTztNQUNiQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxFQUNEO01BQ0VILElBQUksRUFBRSxJQUFJO01BQ1ZDLElBQUksRUFBRSxZQUFZO01BQ2xCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdEJDLFVBQVUsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdkIsQ0FBQyxDQUNGLENBQUM7RUFDSixDQUFDO0VBRUQsTUFBTUUsSUFBSUEsQ0FBRVIsY0FBYyxFQUFFQyxTQUFTLEVBQUU7SUFDckMsTUFBTUQsY0FBYyxDQUFDUyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN4RDtBQUNGLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=