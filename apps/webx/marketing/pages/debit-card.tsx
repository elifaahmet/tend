/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';

import Page from '../components/layout/page';

import ReadyToJoin from '../components/modules/ready-to-join';
import Hero from '../components/debit-card/hero';
import GoSomewhere from '../components/debit-card/go-somewhere';
import Splurge from '../components/debit-card/splurge';
import Equation from '../components/debit-card/equation';
import DiveBar from '../components/debit-card/dive-bar';
import CardFreePayments from '../components/debit-card/card-free-payments';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const DebitCard = () => {
  const { t } = useTranslation('debit-card');
  const { locale } = useRouter();
  const isLocaleMX = locale.slice(-2) === 'MX';

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />

      <GoSomewhere />

      <Splurge />

      <Equation />

      {!isLocaleMX && <DiveBar />}

      <CardFreePayments />

      <ReadyToJoin bg="defaultOrange" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['debit-card'])),
    },
  };
}

export default DebitCard;
