/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import JoinNowCTA from '../buttons/join-now-cta';

import { Row, Col, TLayout, H1, Image, Paragraph } from '@tend/ui';
import Space from '../layout/space';

const TextOverlayContainer = styled.div`
  position: relative;
  z-index: 4;
`;

const StyledSpace = styled(Space)`
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: right;
  & > img {
    max-width: 100%;
  }
`;

const getUpperChild = (t) => {
  return (
    <Row>
      <Col xs={4} sm={8} md={8} lg={6}>
        <Space marginTop={['2.8rem', '5rem']}>
          <TextOverlayContainer>
            <H1 variant="small">{t('hero.headline')}</H1>
            <Space
              marginTop={['1.2rem', '1.2rem', '2.2rem', '3.2rem']}
              marginBottom={['1.8rem', '1.8rem', '2.8rem', '3.8rem']}
            >
              <Paragraph variant="b1">{t('hero.sub-copy')}</Paragraph>
            </Space>

            <JoinNowCTA />
          </TextOverlayContainer>
        </Space>
      </Col>

      <Col xs={4} sm={8} md={8} lg={6} align="flex-end" justify="center">
        <StyledSpace
          marginTop={['-1rem', '-1rem', '-2rem', '-3rem']}
          marginBottom={['-2rem', '-2rem', '-3rem', '-4rem']}
        >
          <Image
            src={t('hero.image')}
            resizeMode="cover"
            imgWidth={['90%', '90%', '90%', '100%']}
            imgHeight={[
              'calc(100%+3rem)',
              'calc(100%+3rem)',
              'calc(100%+5rem)',
              'calc(100%+7rem)',
            ]}
          />
        </StyledSpace>
      </Col>
    </Row>
  );
};

export const Hero = () => {
  const { t } = useTranslation('international-transfers');
  return (
    <Space marginTop={['0rem', '0rem', '0rem', '5rem']}>
      <TLayout
        leftLineColor="defaultOrange"
        rightLineColor="defaultTransparent"
        verticalLineColor="defaultRed"
        upperChild={getUpperChild(t)}
        variant="center"
        whenShrink="right"
        upperBg="offWhite"
        lowerBg="white"
      />
    </Space>
  );
};

export default Hero;
