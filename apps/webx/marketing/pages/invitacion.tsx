/** @format */

import React, { useEffect } from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

import Hero from '../components/invitacion/hero';
import Opinion from '../components/invitacion/opinion';
import MobileBankingValue from '../components/invitacion/mobile-banking-value';
import Desc from '../components/invitacion/desc';
import Invex from '../components/invitacion/hero-desc';
import { useRouter } from 'next/router';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const Invitacion = () => {
  const { t } = useTranslation('invitacion');
  const router = useRouter();
  const { locale } = router;
  const isLocaleMX = !locale.match(/mx/i);

  useEffect(() => {
    if (isLocaleMX) router.push('/');
  });
  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />

      <Invex />

      <MobileBankingValue />

      <Desc />

      <Opinion />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['invitacion'])),
    },
  };
}

export default Invitacion;
