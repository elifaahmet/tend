/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

import Hero from '../components/get-in-touch/hero';
import ContactInfo from '../components/get-in-touch/contact-info';
import ContactForm from '../components/get-in-touch/contact-form';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const GetInTouch = () => {
  const { t } = useTranslation('get-in-touch');

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />
      <ContactInfo />
      <ContactForm />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['get-in-touch'])),
    },
  };
}

export default GetInTouch;
