/** @format */

import React, { useRef } from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';

import Page from '../components/layout/page';

import Hero from '../components/tend-at-work/hero';
import CarouselT from '../components/tend-at-work/carousel-t';
import AccessIsEverything from '../components/tend-at-work/access-is-everything';
import GoFurther from '../components/tend-at-work/go-further';
import BuildCredit from '../components/tend-at-work/build-credit';

import PaySooner from '../components/tend-at-work/pay-sooner';

import Perks from '../components/modules/perks';

import Form from '../components/tend-at-work/form';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const TendAtWork = () => {
  const { t } = useTranslation('tend-at-work');
  const { locale } = useRouter();
  const isLocaleMX = locale.slice(-2) === 'MX';

  const formRef = useRef(null);

  const scrollToForm = () => formRef.current.scrollIntoView();

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero scrollToForm={scrollToForm} />

      <AccessIsEverything />
      <GoFurther />
      <BuildCredit />

      {!isLocaleMX && <PaySooner />}
      <Perks
        bg="offWhite"
        namesapce="tend-at-work"
        paddingBottom={['5rem', '5rem', '5rem', '10rem']}
      />
      <CarouselT />

      <Form ref={formRef} />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['tend-at-work'])),
    },
  };
}

export default TendAtWork;
