/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

import { Layout, H1, Paragraph } from '@tend/ui';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const Cover = () => {
  const { t } = useTranslation('accessibility');

  return (
    <Page title={t('title')} description={t('description')}>
      <Layout bg="offWhite">
        <H1>{t('headline')}</H1>
        <Paragraph>{t('body')}</Paragraph>
      </Layout>
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['accessibility'])),
    },
  };
}

export default Cover;
