/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';

import Page from '../components/layout/page';

import ReadyToJoin from '../components/modules/ready-to-join';
import Hero from '../components/get-paid-sooner/hero';
import FasterAccess from '../components/get-paid-sooner/faster-access';
import ValueProps from '../components/get-paid-sooner/value-props';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const GetPaidSooner = () => {
  const { t } = useTranslation('get-paid-sooner');
  const { locale } = useRouter();
  const isLocaleMX = locale.slice(-2) === 'MX';

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />

      {!isLocaleMX && <FasterAccess />}

      <ValueProps />

      <ReadyToJoin bg="defaultOrange" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['get-paid-sooner'])),
    },
  };
}

export default GetPaidSooner;
