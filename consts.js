IUCN_TOKEN = '9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee';
MAPBOX_TOKEN = 'pk.eyJ1IjoiYWltZW5hd2FuIiwiYSI6ImNqbnBiNmphejFjZ2kza254aDYzcjd2N2wifQ.Di-urwdKt_uQJEAXxy3qvw';

THREAT_LEVELS = {
    EX: 'Extinct',
    PE: 'Probably extinct(informal)',
    EW: 'Extinct in the wild',
    PEW: 'Probably extinct in the wild(informal)',
    CR: 'Critically Endangered',
    EN: 'Endangered',
    VU: 'Vulnerable',
    NT: 'Near Threatened',
    LC: 'Least Concern',
    DD: 'Data deficient',
    NE: 'Not evaluated',
    NR: 'Not recognized'
}

THREATS = [
    'EX',
    'PE',
    'EW',
    'PE',
    'CR',
    'EN',
    'VU',
    'NT',
    'LC',
    'DD',
    'NE',
    'NR',
]

COUNTRIES = {
    "United States": "US", 
    "Uzbekistan": "UZ", 
    "Qatar": "QA", 
    "Saudi Arabia": "SA", 
    "Afghanistan": "AF", 
    "Lebanon": "LB", 
    "Bahrain": "BH", 
    "Cyprus": "CY", 
    "Syrian Arab Republic": "SY", 
    "Tajikistan": "TJ", 
    "Turkmenistan": "TM", 
    "United Arab Emirates": "AE", 
    "Iran, Islamic Republic of": "IR", 
    "Iraq": "IQ", 
    "Oman": "OM", 
    "Pakistan": "PK", 
    "Israel": "IL", 
    "Jordan": "JO", 
    "Kazakhstan": "KZ", 
    "Kuwait": "KW", 
    "Kyrgyzstan": "KG", 
    "Viet Nam": "VN", 
    "Maldives": "MV", 
    "Philippines": "PH", 
    "Bangladesh": "BD", 
    "Bhutan": "BT", 
    "Brunei Darussalam": "BN", 
    "Cambodia": "KH", 
    "Timor-Leste": "TL", 
    "Singapore": "SG", 
    "Sri Lanka": "LK", 
    "Thailand": "TH", 
    "Nepal": "NP", 
    "Lao People's Democratic Republic": "LA", 
    "Yemen": "YE", 
    "Georgia": "GE", 
    "Turkey": "TR", 
    "Armenia": "AM", 
    "Azerbaijan": "AZ", 
    "Disputed Territory": "DT", 
    "Malaysia": "MY", 
    "British Indian Ocean Territory": "IO", 
    "India": "IN", 
    "Indonesia": "ID", 
    "Myanmar": "MM", 
    "Vanuatu": "VU", 
    "Wallis and Futuna": "WF", 
    "Guam": "GU", 
    "Marshall Islands": "MH", 
    "Pitcairn": "PN", 
    "Samoa": "WS", 
    "Christmas Island": "CX", 
    "Cocos (Keeling) Islands": "CC", 
    "Fiji": "FJ", 
    "Tokelau": "TK", 
    "Tonga": "TO", 
    "Tuvalu": "TV", 
    "Nauru": "NR", 
    "New Caledonia": "NC", 
    "Niue": "NU", 
    "Norfolk Island": "NF", 
    "Northern Mariana Islands": "MP", 
    "Palau": "PW", 
    "Holy See (Vatican City State)": "VA", 
    "Macedonia, the former Yugoslav Republic of": "MK", 
    "Malta": "MT", 
    "Monaco": "MC", 
    "Poland": "PL", 
    "Romania": "RO", 
    "San Marino": "SM", 
    "Albania": "AL", 
    "Latvia": "LV", 
    "Liechtenstein": "LI", 
    "Lithuania": "LT", 
    "Luxembourg": "LU", 
    "Belgium": "BE", 
    "Bosnia and Herzegovina": "BA", 
    "Bulgaria": "BG", 
    "Croatia": "HR", 
    "Denmark": "DK", 
    "Estonia": "EE", 
    "Faroe Islands": "FO", 
    "Finland": "FI", 
    "Guernsey": "GG", 
    "Isle of Man": "IM", 
    "Jersey": "JE", 
    "Germany": "DE", 
    "Gibraltar": "GI", 
    "Greenland": "GL", 
    "Slovakia": "SK", 
    "Slovenia": "SI", 
    "Svalbard and Jan Mayen": "SJ", 
    "Sweden": "SE", 
    "Switzerland": "CH", 
    "Andorra": "AD", 
    "Austria": "AT", 
    "Hungary": "HU", 
    "Iceland": "IS", 
    "Netherlands": "NL", 
    "Norway": "NO", 
    "Ireland": "IE", 
    "Åland Islands": "AX", 
    "Montenegro": "ME", 
    "Guyana": "GY", 
    "Falkland Islands (Malvinas)": "FK", 
    "French Guiana": "GF", 
    "Suriname": "SR", 
    "Uruguay": "UY", 
    "Paraguay": "PY", 
    "Peru": "PE", 
    "Virgin Islands, British": "VG", 
    "Virgin Islands, U.S.": "VI", 
    "Guadeloupe": "GP", 
    "Haiti": "HT", 
    "Martinique": "MQ", 
    "Montserrat": "MS", 
    "Saint Kitts and Nevis": "KN", 
    "Saint Lucia": "LC", 
    "Saint Vincent and the Grenadines": "VC", 
    "Barbados": "BB", 
    "Bermuda": "BM", 
    "Cayman Islands": "KY", 
    "Cuba": "CU", 
    "Dominica": "DM", 
    "Dominican Republic": "DO", 
    "Grenada": "GD", 
    "Trinidad and Tobago": "TT", 
    "Turks and Caicos Islands": "TC", 
    "Anguilla": "AI", 
    "Antigua and Barbuda": "AG", 
    "Aruba": "AW", 
    "Bahamas": "BS", 
    "Jamaica": "JM", 
    "Western Sahara": "EH", 
    "Algeria": "DZ", 
    "Tunisia": "TN", 
    "Morocco": "MA", 
    "Zambia": "ZM", 
    "Zimbabwe": "ZW", 
    "Guinea": "GN", 
    "Libya": "LY", 
    "Guinea-Bissau": "GW", 
    "Mali": "ML", 
    "Mauritania": "MR", 
    "Mayotte": "YT", 
    "Rwanda": "RW", 
    "Réunion": "RE", 
    "Senegal": "SN", 
    "Sierra Leone": "SL", 
    "Lesotho": "LS", 
    "Liberia": "LR", 
    "Madagascar": "MG", 
    "Malawi": "MW", 
    "Benin": "BJ", 
    "Botswana": "BW", 
    "Burkina Faso": "BF", 
    "Burundi": "BI", 
    "Cameroon": "CM", 
    "Central African Republic": "CF", 
    "Chad": "TD", 
    "Comoros": "KM", 
    "Congo": "CG", 
    "Congo, The Democratic Republic of the": "CD", 
    "Côte d'Ivoire": "CI", 
    "Djibouti": "DJ", 
    "Eritrea": "ER", 
    "Ethiopia": "ET", 
    "Gabon": "GA", 
    "Gambia": "GM", 
    "Ghana": "GH", 
    "Somalia": "SO", 
    "Sudan": "SD", 
    "Tanzania, United Republic of": "TZ", 
    "Togo": "TG", 
    "Uganda": "UG", 
    "Mozambique": "MZ", 
    "Niger": "NE", 
    "Nigeria": "NG", 
    "Kenya": "KE", 
    "Guatemala": "GT", 
    "Belize": "BZ", 
    "El Salvador": "SV", 
    "Panama": "PA", 
    "Heard Island and McDonald Islands": "HM", 
    "Bouvet Island": "BV", 
    "Antarctica": "AQ", 
    "Moldova": "MD", 
    "Belarus": "BY", 
    "Mongolia": "MN", 
    "Macao": "MO", 
    "Hong Kong": "HK", 
    "Korea, Democratic People's Republic of": "KP", 
    "Korea, Republic of": "KR", 
    "Saint Pierre and Miquelon": "PM", 
    "Saint Martin (French part)": "MF", 
    "Saint Barthélemy": "BL", 
    "American Samoa": "AS", 
    "Cook Islands": "CK", 
    "French Polynesia": "PF", 
    "Solomon Islands": "SB", 
    "United States Minor Outlying Islands": "UM", 
    "Australia": "AU", 
    "New Zealand": "NZ", 
    "Papua New Guinea": "PG", 
    "Kiribati": "KI", 
    "Portugal": "PT", 
    "France": "FR", 
    "Greece": "GR", 
    "Spain": "ES", 
    "United Kingdom": "GB", 
    "Italy": "IT", 
    "Serbia": "RS", 
    "Brazil": "BR", 
    "Chile": "CL", 
    "Colombia": "CO", 
    "Ecuador": "EC", 
    "Argentina": "AR", 
    "Puerto Rico": "PR", 
    "Netherlands Antilles": "AN", 
    "Egypt": "EG", 
    "Mauritius": "MU", 
    "Seychelles": "SC", 
    "Equatorial Guinea": "GQ", 
    "South Africa": "ZA", 
    "Angola": "AO", 
    "Namibia": "NA", 
    "Mexico": "MX", 
    "Costa Rica": "CR", 
    "Honduras": "HN", 
    "Nicaragua": "NI", 
    "South Georgia and the South Sandwich Islands": "GS", 
    "Russian Federation": "RU", 
    "Ukraine": "UA", 
    "China": "CN", 
    "Taiwan, Province of China": "TW", 
    "Japan": "JP", 
    "Canada": "CA", 
    "Bolivia, Plurinational States of": "BO", 
    "Saint Helena, Ascension and Tristan da Cunha": "SH", 
    "Curaçao": "CW", 
    "Sint Maarten (Dutch part)": "SX", 
    "Bonaire, Sint Eustatius and Saba": "BQ", 
    "South Sudan": "SS", 
    "French Southern Territories": "TF", 
    "Micronesia, Federated States of ": "FM", 
    "Venezuela, Bolivarian Republic of": "VE", 
    "Palestine, State of": "PS", 
    "Czechia": "CZ", 
    "Cabo Verde": "CV", 
    "Eswatini": "SZ", 
    "Sao Tome and Principe": "ST", 
}