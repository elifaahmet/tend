/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

/* Module Order
 ** Hero   1. T-1 Layered - "about/Hero"
 *  OurPurpose   2. - "about/OurPurpose"
 *  OurStory  3. - "about/OurStory"
 *  WhoWeAre  4. - "about/WhoWeAre"
 */

import Hero from '../components/about/hero';
import OurPurpose from '../components/about/our-purpose';
import OurStory from '../components/about/our-story';
import WhoWeAre from '../components/modules/who-we-are';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <Page title={t('title')} description={t('description')}>
      {/* One */}
      <Hero // Hero
      />
      <OurPurpose // OurPurpose
      />

      <OurStory // OurStory
      />

      <WhoWeAre bg="defaultGreen" color="white" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['about'])),
    },
  };
}

export default About;
