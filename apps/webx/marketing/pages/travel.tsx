/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

import Hero from '../components/travel-rewards/hero';
import SweetTravelDeals from '../components/travel-rewards/sweet-travel-deals';
import CashBack from '../components/travel-rewards/cash-back';
import Equation from '../components/travel-rewards/equation';
import ReadyToJoin from '../components/modules/ready-to-join';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const Travel = () => {
  const { t } = useTranslation('travel-rewards');

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />

      <SweetTravelDeals />

      <CashBack />

      <Equation />

      <ReadyToJoin bg="offWhite" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['travel-rewards'])),
    },
  };
}

export default Travel;
