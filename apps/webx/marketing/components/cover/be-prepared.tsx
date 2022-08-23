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
  & > img {
    max-width: 100%;
  }
  z-index: 1;
`;

const getImage = (t) => {
  return (
    <Col lg="11" align="flex-end">
      <OverflowImage>
        <Image
          src={t('be-prepared.image')}
          resizeMode="cover"
          imgWidth={['100%', '100%', '100%', '90%']}
        />
      </OverflowImage>
    </Col>
  );
};

const getRightChild = (t) => {
  return (
    <Space
      marginTop={['3.75rem', '3.75rem', '3.75rem', '0']}
      marginBottom={['3.2rem', '3.2rem', '4rem', '5rem']}
    >
      <HeadlineBody
        title={t('be-prepared.headline')}
        color="black"
        gridRowGap={['1.2rem', '1.2rem', '2rem', '5rem']}
        bodyVariant="b2"
        titleVariant="h3"
      >
        {t('be-prepared.body')}
      </HeadlineBody>
    </Space>
  );
};

export const BePrepared = () => {
  const { t } = useTranslation('cover');
  return (
    <TStemLayout
      verticalLineColor="defaultRed"
      leftChild={getImage(t)}
      rightChild={getRightChild(t)}
      variant="center"
      whenShrink="right"
      lowerBg="white"
    />
  );
};

export default BePrepared;
