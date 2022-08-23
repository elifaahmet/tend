/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

import Hero from '../components/shares/hero';
import Matches from '../components/shares/matches';
import ModuleTwo from '../components/shares/module-two';
import MonthlyPayouts from '../components/shares/monthly-payouts';
import MoreIsMore from '../components/shares/more-is-more';

import EveryOneWins from '../components/modules/everyone-wins';
import ReadyToJoin from '../components/modules/ready-to-join';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const Shares = () => {
  const { t } = useTranslation('shares');

  return (
    <Page title={t('title')} description={t('description')}>
      <Hero />
      <Matches />

      <ModuleTwo />

      <EveryOneWins bg="defaultGreen" />

      <MonthlyPayouts />

      <MoreIsMore />

      <ReadyToJoin bg="offWhite" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['shares', 'everyone-wins'])),
    },
  };
}

export default Shares;
