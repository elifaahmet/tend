/** @format */

import React from 'react';
import styled from 'styled-components';

import { H2, Layout, H3 } from '@tend/ui';

import Space from '../layout/space';
import { useTranslation } from '@tend/webx/utils/next-i18next';

const GridRowDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const OurPurpose = () => {
  const { t } = useTranslation('about');
  return (
    <Layout bg="defaultYellow">
      <Space marginTop="3rem" marginBottom="3rem">
        <GridRowDiv>
          <Space marginBottom="3rem">
            <H3 color="black">{t('ourPurpose.headline')}</H3>
          </Space>
          <H2 color="black">{t('ourPurpose.body')}</H2>
        </GridRowDiv>
      </Space>
    </Layout>
  );
};

export default OurPurpose;
