/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

import Hero from '../components/retail-cashback/hero';
import CashBackIRL from '../components/retail-cashback/cash-back-irl';
import ShopLocal from '../components/retail-cashback/shop-local';
import HowItWorks from '../components/retail-cashback/how-it-works';
import ReadyToJoin from '../components/modules/ready-to-join';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const CashBack = () => {
  const { t } = useTranslation('retail-cash-back');

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />
      <CashBackIRL />
      <ShopLocal />

      <HowItWorks />
      <ReadyToJoin bg="offWhite" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['retail-cash-back'])),
    },
  };
}

export default CashBack;
