/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';
import Hero from '../components/cover/hero';
import BePrepared from '../components/cover/be-prepared';
import ReadyToJoin from '../components/modules/ready-to-join';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const Cover = () => {
  const { t } = useTranslation('cover');
  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />
      <BePrepared />
      <ReadyToJoin bg="defaultOrange" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['cover'])),
    },
  };
}

export default Cover;
