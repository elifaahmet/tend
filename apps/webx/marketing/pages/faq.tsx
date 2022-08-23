/** @format */

import React, { useEffect } from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

import Hero from '../components/faq/hero';
// import Search from '../components/faq/search';
// import Topics from '../components/faq/topics';
import Questions from '../components/faq/questions';
import { useRouter } from 'next/router';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const Faq = () => {
  const { t } = useTranslation('faq');
  const router = useRouter();
  const { locale } = router;
  const isLocaleMX = !!locale.match(/mx/i);

  useEffect(() => {
    if (isLocaleMX) router.push('/');
  });

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />
      {/* <Search />
      <Topics /> */}
      <Questions />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['faq'])),
    },
  };
}

export default Faq;
