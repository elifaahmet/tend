/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { H3, Image, TStemLayout, Theme, Paragraph } from '@tend/ui';
import Space from '../layout/space';

const OverflowTopImage = styled.div`
  position: relative;
  & > img {
    max-width: 100%;
  }
  margin-bottom: 2rem;
  z-index: 1;
  left: -15%;
  width: 100%;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    left: auto;
  }
`;

const GridColumnDiv = styled.div`
  display: flex;
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
    flex-direction: column;
    > * {
      margin-bottom: 3.2rem;
    }
  }
`;

const getLeftChild = (t) => {
  return (
    <OverflowTopImage>
      <Image src={t('go-somewhere.image')} resizeMode="cover" imgWidth="100%" />
    </OverflowTopImage>
  );
};

const getRightChild = (t) => {
  return (
    <GridColumnDiv>
      <Space>
        <H3 textTransform="uppercase" fontWeight="normal" color="black">
          {t('go-somewhere.headline')}
        </H3>
      </Space>
      <Space>
        <Paragraph variant="b2">{t('go-somewhere.body')}</Paragraph>
      </Space>
    </GridColumnDiv>
  );
};

export const GoSomewhere = () => {
  const { t } = useTranslation('debit-card');
  return (
    <TStemLayout
      verticalLineColor="defaultRed"
      leftChild={getLeftChild(t)}
      rightChild={getRightChild(t)}
      variant="center"
      whenShrink="right"
      lowerBg="white"
      padding="3rem"
    />
  );
};

export default GoSomewhere;
