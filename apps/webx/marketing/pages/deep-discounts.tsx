/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import Page from '../components/layout/page';

import Hero from '../components/deep-discounts/hero';
import ScoreOff from '../components/deep-discounts/score-off';
import ReadyToJoin from '../components/modules/ready-to-join';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const DeepDiscounts = () => {
  const { t } = useTranslation('deep-discounts');

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />
      <ScoreOff />
      <ReadyToJoin bg="defaultMagenta" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['deep-discounts'])),
    },
  };
}

export default DeepDiscounts;
