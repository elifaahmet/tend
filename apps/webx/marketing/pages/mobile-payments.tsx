/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

import Hero from '../components/mobile-payments/hero';
import TheFriend from '../components/mobile-payments/the-friend';
import Transfers from '../components/mobile-payments/transfers';
import TendShares from '../components/mobile-payments/tend-shares';
import ReadyToJoin from '../components/modules/ready-to-join';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const MobilePayments = () => {
  const { t } = useTranslation('mobile-payments');

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />

      <TheFriend />

      <Transfers />

      <TendShares />

      <ReadyToJoin bg="offWhite" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['mobile-payments'])),
    },
  };
}

export default MobilePayments;
