/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { position, space, grid } from 'styled-system';

import { Col, TStemLayout, Image, Theme, HeadlineBody } from '@tend/ui';
import Space from '../layout/space';

const OverflowImage = styled.div`
  width: 100%;
  position: relative;
  left: -10%;
  z-index: 1;
  margin-top: 2rem;
  & > img {
    max-width: 100%;
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    left: 0rem;
  }
`;

const getImage = (t) => {
  return (
    <Col lg="11" align="flex-end">
      <OverflowImage>
        <Image
          src={t('cash-back-irl.image')}
          resizeMode="cover"
          imgWidth={['100%', '100%', '100%', '90%']}
        />
      </OverflowImage>
    </Col>
  );
};

const getRightChild = (t) => {
  return (
    <Space marginTop={['3.75rem', '3.75rem', '3.75rem', '5rem']}>
      <HeadlineBody
        title={t('cash-back-irl.headline')}
        color="black"
        gridRowGap={['1.2rem', '1.2rem', '2rem', '5rem']}
        bodyVariant="b2"
        titleVariant="h3"
      >
        {t('cash-back-irl.body')}
      </HeadlineBody>
    </Space>
  );
};

export const CashBackIRL = () => {
  const { t } = useTranslation('retail-cash-back');
  return (
    <TStemLayout
      verticalLineColor="defaultRed"
      leftChild={getImage(t)}
      rightChild={getRightChild(t)}
      variant="center"
      whenShrink="right"
      lowerBg="white"
      padding={['2rem', '3rem', '4rem', '5rem']}
    />
  );
};

export default CashBackIRL;
