/** @format */

const withFonts = require('next-fonts');
const { THE_GREEN_URL, DEFAULT_LOCALE } = process.env;

module.exports = withFonts({
  target: 'experimental-serverless-trace',
  i18n: {
    locales: ['es-MX', 'es-US', 'en-US'],
    defaultLocale: 'es-MX',
    localeDetection: false,
  },
  rewrites() {
    return [
      {
        source: '/the-green',
        destination: `${THE_GREEN_URL}`,
      },
      {
        source: '/the-green/:path*',
        destination: `${THE_GREEN_URL}/:path*`,
      },
    ];
  },
});
