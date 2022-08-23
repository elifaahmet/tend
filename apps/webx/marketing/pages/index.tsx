/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import Page from '../components/layout/page';

/* Module Order
 ** Hero   1. T-1 Layered - "main/Hero
 ** Module 2. list + image - "main/moduleTwo"
 ** Module 3. Bold Message Headline Body Button - "main/moduleFive"
 ** Module 4. Perks - "modules/perks"
 ** Module 5. T-4 Stacked Right - "main/EarnExtraCash"
 ** Custom ~. Calculator Module - "common/calculator"
 ** Module 6. Ready to Join - "
 */

import Hero from '../components/main/hero';
import MeetYourMoney from '../components/main/meet-your-money'; // Rename
import BoldMessage from '../components/main/bold-message';
import Perks from '../components/modules/perks';
import PerksGrid from '../components/modules/perks-grid';
import EarnExtraCash from '../components/main/earn-extra-cash';
import RewardsCalculator from '../components/modules/rewards-calculator';
import ReadyToJoin from '../components/modules/ready-to-join';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const Main = () => {
  const { t } = useTranslation('main');

  return (
    <Page title={t('title')} description={t('description')}>
      {/* One */}
      <Hero // Hero
      />

      {/* Two */}
      {/*<PerksGrid*/}
      {/*  paddingTop="2rem"*/}
      {/*  paddingBottom="3rem"*/}
      {/*  bg="yellow.1"*/}
      {/*  namespace="main"*/}
      {/*/>*/}
      <MeetYourMoney />

      {/* Three */}
      <BoldMessage />

      {/* Four */}
      <Perks // 4th Module
        bg="offWhite"
        namesapce="main"
      />

      {/* Five */}
      <EarnExtraCash // T-4
      />

      <RewardsCalculator bg="defaultMagenta" />

      {/* Six */}
      <ReadyToJoin bg="offWhite" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, [
        'main',
        'rewards-calculator',
      ])),
    },
  };
}

export default Main;
