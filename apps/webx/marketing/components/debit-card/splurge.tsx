/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { H3, Image, TStemLayout, Theme, Paragraph } from '@tend/ui';
import Space from '../layout/space';

const OverflowLeftImage = styled.div`
  position: relative;
  z-index: 1;
  left: -15%;
  width: 100%;
  margin-bottom: 2rem;
  & > img {
    max-width: 100%;
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    left: auto;
  }
`;

interface GridColumnDivProps {
  reverse?: boolean;
}

const GridColumnDiv = styled.div<GridColumnDivProps>`
  display: flex;
  padding-bottom: 1rem;
  flex-direction: column;
  > * {
    margin-bottom: 1.2rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    > * {
      margin-bottom: 2.5rem;
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    > * {
      margin-bottom: 3.2rem;
    }
  }
`;

const getLeftChild = (t) => {
  return (
    <GridColumnDiv>
      <Space>
        <H3 textTransform="uppercase" fontWeight="normal" color="black">
          {t('splurge.headline')}
        </H3>
      </Space>
      <Space>
        <Paragraph variant="b2">{t('splurge.body')}</Paragraph>
      </Space>
    </GridColumnDiv>
  );
};

const getRightChild = (t) => {
  return (
    <OverflowLeftImage>
      <Image src={t('splurge.image')} resizeMode="cover" imgWidth="100%" />
    </OverflowLeftImage>
  );
};

export const Splurge = () => {
  const { t } = useTranslation('debit-card');
  return (
    <TStemLayout
      verticalLineColor="defaultRed"
      leftChild={getLeftChild(t)}
      rightChild={getRightChild(t)}
      variant="center"
      whenShrink="right"
      lowerBg="white"
      padding="2rem"
      reverse
    />
  );
};

export default Splurge;
