/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

import Hero from '../components/international-transfer/hero';
import SendMoneyAbroad from '../components/international-transfer/send-money-abroad';
import MexicoTransfers from '../components/international-transfer/mexico-transfers';
import ReadyToJoin from '../components/modules/ready-to-join';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const International = () => {
  const { t } = useTranslation('international-transfers');

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />
      <SendMoneyAbroad />
      <MexicoTransfers />
      <ReadyToJoin bg="defaultMagenta" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['international-transfers'])),
    },
  };
}

export default International;
