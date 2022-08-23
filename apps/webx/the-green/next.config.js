// eslint-disable-next-line @typescript-eslint/no-var-requires
const withFonts = require('next-fonts');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const localizationConfig = require('./public/bld-config/config.json');

const BASE_PATH = '/the-green';

module.exports = withFonts({
  env: {
    API_URL: 'http://localhost:3333',
  },
  target: 'experimental-serverless-trace',
  i18n: {
    locales: localizationConfig.LOCALES,
    defaultLocale: localizationConfig.DEFAULT_LOCALE,
    localeDetection: false,
  },
  publicRuntimeConfig: {
    basePath: BASE_PATH,
  },
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
});
