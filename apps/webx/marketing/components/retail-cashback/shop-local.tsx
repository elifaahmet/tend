/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { Col, TStemLayout, Image, Theme, HeadlineBody } from '@tend/ui';
import Space from '../layout/space';

const OverflowImage = styled.div`
  width: 100%;
  position: relative;
  left: -10%;
  & > img {
    max-width: 100%;
  }
  z-index: 1;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    left: 0rem;
  }
`;

const getImage = (t) => {
  return (
    <Col lg="11" align="flex-end">
      <OverflowImage>
        <Image
          src={t('shop-local.image')}
          resizeMode="cover"
          imgWidth={['100%', '100%', '100%', '90%']}
        />
      </OverflowImage>
    </Col>
  );
};

const getCopy = (t) => {
  return (
    <Space
      marginTop={['3.75rem', '3.75rem', '3.75rem', '0']}
      marginBottom="2rem"
    >
      <HeadlineBody
        title={t('shop-local.headline')}
        color="black"
        gridRowGap={['1.2rem', '1.2rem', '2rem', '5rem']}
        bodyVariant="b2"
        titleVariant="h3"
      >
        {t('shop-local.body')}
      </HeadlineBody>
    </Space>
  );
};

export const ShopLocal = () => {
  const { t } = useTranslation('retail-cash-back');
  return (
    <TStemLayout
      verticalLineColor="defaultRed"
      leftChild={getCopy(t)}
      rightChild={getImage(t)}
      variant="center"
      whenShrink="right"
      lowerBg="white"
      padding={['2rem', '3rem', '4rem', '5rem']}
      reverse
    />
  );
};

export default ShopLocal;
