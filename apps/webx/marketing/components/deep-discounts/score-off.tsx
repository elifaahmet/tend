/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { Col, TStemLayout, Image, HeadlineBody } from '@tend/ui';
import Space from '../layout/space';

const OverflowImage = styled.div`
  width: 100%;
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
          src={t('moduleTwo.image')}
          resizeMode="cover"
          imgWidth={['95%', '90%', '85%', '90%']}
        />
      </OverflowImage>
    </Col>
  );
};

const getRightChild = (t) => {
  return (
    <Space
      marginTop={['3.75rem', '3.75rem', '3.75rem', '0']}
      marginBottom={['4.2rem', '4.2rem', '6rem', '5rem']}
    >
      <HeadlineBody
        title={t('moduleTwo.headline')}
        color="black"
        gridRowGap={['1.7rem', '2rem', '3.2rem', '5rem']}
        titleWidth={['95%', '90%', '85%', '90%']}
        bodyWidth={['95%', '90%', '85%', '90%']}
        bodyVariant="b2"
        titleVariant="h3"
      >
        {t('moduleTwo.body')}
      </HeadlineBody>
    </Space>
  );
};

export const ScoreOff = () => {
  const { t } = useTranslation('deep-discounts');
  return (
    <TStemLayout
      verticalLineColor="defaultRed"
      leftChild={getImage(t)}
      rightChild={getRightChild(t)}
      variant="center"
      whenShrink="right"
      lowerBg="white"
      partOfTLayout
    />
  );
};

export default ScoreOff;
