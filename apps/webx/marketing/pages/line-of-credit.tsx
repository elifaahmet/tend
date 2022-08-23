/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';

import Page from '../components/layout/page';

import Hero from '../components/line-of-credit/hero';
import DogJustAte from '../components/line-of-credit/dog-just-ate';
import BuildCredit from '../components/line-of-credit/build-credit';
import EveroneWins from '../components/modules/everyone-wins';
import TrackCredit from '../components/line-of-credit/track-credit';
import ReadyToJoin from '../components/modules/ready-to-join';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const LineOfCredit = () => {
  const { t } = useTranslation('line-of-credit');
  const { locale } = useRouter();
  const isLocaleMX = locale.slice(-2) === 'MX';

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />

      <DogJustAte />

      <BuildCredit />

      {!isLocaleMX && (
        <>
          <EveroneWins bg="defaultGreen" />{' '}
          {/* Cannot be placed before Ready To Join CTA */}
          <TrackCredit />
        </>
      )}

      <ReadyToJoin bg="defaultMagenta" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, [
        'line-of-credit',
        'everyone-wins',
      ])),
    },
  };
}

export default LineOfCredit;
