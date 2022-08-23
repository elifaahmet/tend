/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { Row, Col, TLayout, H1, Image, Paragraph } from '@tend/ui';
import Space from '../layout/space';
import JoinNowCTA from '../buttons/join-now-cta';

const StyledSpace = styled(Space)`
  position: relative;
  text-align: right;
  z-index: 2;
  width: 100%;
  height: 100%;
  & > img {
    max-width: 100%;
  }
`;

const TextOverlayContainer = styled.div`
  position: relative;
  z-index: 4;
`;

/* T-2 Layout */

const getUpperChild = (t) => {
  return (
    <Row>
      <Col
        xs={4}
        sm={8}
        md={8}
        lg={6}
        paddingTop={['3rem', '3rem', '5rem', '8rem']}
      >
        <Space marginBottom={['1.8rem', '1.8rem', '2.8rem', '3.8rem']}>
          <TextOverlayContainer>
            <H1 variant="small">{t('hero.headline')}</H1>
            <Space
              marginTop={['1.8rem', '1.8rem', '2.8rem', '3.8rem']}
              marginBottom={['1.8rem', '1.8rem', '2.8rem', '3.8rem']}
            >
              <Paragraph variant="b1">{t('hero.sub-copy')}</Paragraph>
            </Space>

            <JoinNowCTA />
          </TextOverlayContainer>
        </Space>
      </Col>

      <Col xs={4} sm={8} md={8} lg={6} align="flex-end">
        <StyledSpace
          marginTop={['-2rem', '-2rem', '-3rem', '-3rem']}
          marginBottom={['-2rem', '-2rem', '-3rem', '-4rem']}
        >
          <Image
            src={t('hero.image')}
            resizeMode="cover"
            imgWidth={['90%', '90%', '90%', '100%']}
            imgHeight={[
              'calc(100% + 4rem)',
              'calc(100% + 4rem)',
              'calc(100% + 6rem)',
              'calc(100% + 7rem)',
            ]}
          />
        </StyledSpace>
      </Col>
    </Row>
  );
};

export const Hero = () => {
  const { t } = useTranslation('retail-cash-back');
  return (
    <Space marginTop={['0', '0', '5rem', '5rem']}>
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
