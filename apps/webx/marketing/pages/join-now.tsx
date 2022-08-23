/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { color } from 'styled-system';

import Page from '../components/layout/page';
import ReadyToJoin from '../components/modules/ready-to-join';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

interface SpacingStyle {
  bg: string;
}

const Spacing = styled.div<SpacingStyle>`
  display: block;
  height: 10rem;
  ${color};
`;

const JoinNow = () => {
  const { t } = useTranslation('join-now');

  return (
    <Page title={t('title')} description={t('description')}>
      <Spacing bg="offWhite" />
      <ReadyToJoin bg="offWhite" imagesDown />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['join-now'])),
    },
  };
}

export default JoinNow;
