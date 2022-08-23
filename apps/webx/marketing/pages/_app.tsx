/** @format */

import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyleSheet } from '@tend/ui';
import StickyFooter from '../components/StickyFooter';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme } from '@tend/shared/design/ui-kit';

import useScrollRestoration from '../hooks/useScrollRestoration';
import { appWithTranslation, i18n } from '@tend/webx/utils/next-i18next';
import { commonTranslations } from '../utils/common-translations';
import i18nConfig from '../next-i18next.config';

const TEND_MONEY = ({ Component, pageProps, router }: AppProps) => {
  useScrollRestoration(router);
  const { locale } = router;

  if (pageProps?._nextI18Next?.initialI18nStore && i18n) {
    i18n.services.resourceStore.data[locale].common =
      commonTranslations[locale];
  }

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={Theme}>
        <GlobalStyleSheet />
        <Component {...pageProps} />
        <StickyFooter />
      </ThemeProvider>
    </EmotionThemeProvider>
  );
};

export default appWithTranslation(TEND_MONEY, i18nConfig, commonTranslations);
