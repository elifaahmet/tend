// eslint-disable-next-line @typescript-eslint/no-var-requires
const localizationConfig = require('./public/bld-config/config.json');

module.exports = {
  i18n: {
    defaultNS: 'common',
    locales: localizationConfig.LOCALES,
    defaultLocale: localizationConfig.DEFAULT_LOCALE,
    localePath: 'public/static/locales',
    localeStructure: '{{lng}}/{{ns}}',
    app: 'webx/marketing'
  }
};
