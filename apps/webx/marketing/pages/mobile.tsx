/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

import Hero from '../components/mobile/hero';
import DebitCard from '../components/mobile/debit-card';
import MobileBankingValue from '../components/mobile/mobile-banking-value';
import ReadyToJoin from '../components/modules/ready-to-join';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const MobileBanking = () => {
  const { t } = useTranslation('mobile');

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />

      <DebitCard />

      <MobileBankingValue />

      <ReadyToJoin bg="defaultRed" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['mobile'])),
    },
  };
}

export default MobileBanking;
