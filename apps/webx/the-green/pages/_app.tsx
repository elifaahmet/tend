import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyleSheet, Layout } from '@tend/ui';
import { useRouter } from 'next/router';
import { appWithTranslation, useTranslation, i18n } from '@tend/webx/utils/next-i18next';
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { theme } from '@tend/shared/design/ui-kit';

import useScrollRestoration from "../hooks/useScrollRestoration";

import Header from '../components/app/header';
import ThemeLayout from '../components/app/theme-layout';
import Footer from '../components/app/footer';
import StickyFooter from '../components/app/sticky-footer';
import {commonTranslations} from "../utils/common-translations";
import i18nConfig from '../next-i18next.config';


const CustomApp = ({ Component, pageProps }: AppProps) => {
  const {t} = useTranslation();
  const router = useRouter();
  const { locale } = router;
  if (pageProps?._nextI18Next?.initialI18nStore && i18n) {
    i18n.services.resourceStore.data[locale].common = commonTranslations[locale];
  }

  useScrollRestoration(router);

  return (
    <>
      <GlobalStyleSheet />
      <Head>
        <title>{t('Tend - The Green')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta charSet="utf-8" />
        <meta name="HandheldFriendly" content="true" />
      </Head>
      <ThemeProviderEmotion theme={theme}>
        <ThemeLayout>
          <Header />
          <Component {...pageProps} />
          <Layout bg="darkGreen">
            <Footer />
          </Layout>
          <StickyFooter/>
        </ThemeLayout>
      </ThemeProviderEmotion>
    </>
  );
};

export default appWithTranslation(CustomApp, i18nConfig, commonTranslations);
