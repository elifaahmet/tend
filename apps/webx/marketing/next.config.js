/** @format */

const withPlugins = require('next-compose-plugins');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
const withFonts = require('next-fonts');
const localizationConfig = require('./public/bld-config/config.json');

module.exports = withPlugins([withFonts], {
  target: 'experimental-serverless-trace',
  i18n: {
    locales: localizationConfig.LOCALES,
    defaultLocale: localizationConfig.DEFAULT_LOCALE,
    localeDetection: false,
  },
  env: {
    GOOGLE_ANALYTICS_ID: 2195127126,
    ITERABLE_WAITLIST_ID: 783539,
    IP2LOCATION_BASE_URL: 'https://api.ip2location.com/v2',
    ITERABLE_API_BASE_URL: 'https://api.iterable.com/api/',
    NEXT_PUBLIC_US_GTM_CONTAINER_ID: 'GTM-TNJ5QHF',
    NEXT_PUBLIC_MX_GTM_CONTAINER_ID: 'GTM-K5J559N',
    THE_GREEN_URL: () => {
      if (phase === PHASE_DEVELOPMENT_SERVER)
        return 'http://localhost:4100/the-green';
      if (phase === PHASE_PRODUCTION_BUILD) {
        return 'https://tend.money/the-green';
      }
    },
    ZENDESK_BASE_URL: () => {
      if (phase === PHASE_DEVELOPMENT_SERVER)
        return 'https://tendmoney1606244320.zendesk.com/api/v2';
      if (phase === PHASE_PRODUCTION_BUILD) {
        return 'https://tendmoney.zendesk.com/api/v2';
      }
    },
    ZENDESK_TEND_AT_WORK_RECIPIENT: () => {
      if (phase === PHASE_DEVELOPMENT_SERVER)
        return 'corporate@tendmoney1606244320.zendesk.com';
      if (phase === PHASE_PRODUCTION_BUILD) {
        return 'corporate@tend.money';
      }
    },
  },
  rewrites() {
    return [
      {
        source: '/the-green',
        destination: `https://${localizationConfig.DESTINATION}/the-green`,
      },
      {
        source: '/the-green/:path*',
        destination: `https://${localizationConfig.DESTINATION}/the-green/:path*`,
      },
    ];
  },
});
