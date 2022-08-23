/** @format **/
import i18next from 'i18next';
import * as React from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

export const withTranslation = (translationsConfig) => (
  Component: React.FC
) => (props) => {
  const { country } = props;
  const [language, setLanguage] = React.useState('en-US');

  React.useEffect(() => {
    if (country === 'MX') {
      setLanguage('es-MX');
    } else {
      setLanguage('en-US');
    }
  }, [country]);

  const i18n = React.useMemo(() => {
    i18next.use(initReactI18next).init({
      interpolation: { escapeValue: false },
      lng: language,
      resources: { ...translationsConfig },
    });

    i18next.changeLanguage(language);

    return i18next;
  }, [language]);

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...props} />
    </I18nextProvider>
  );
};
