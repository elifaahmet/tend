/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { Row, Col, TLayout, HeadlineBody, Image, Theme } from '@tend/ui';

import Space from '../layout/space';
import JoinNowCTA from '../buttons/join-now-cta';
import Overlay from '../overlay';

interface StyledSpaceProps {
  zIndex?: number;
  left?: Array<string>;
}

const StyledSpace = styled(Space)<StyledSpaceProps>`
  position: relative;
  width: 100%;
  height: 100%;
  & > img {
    max-width: 90%;
  }
  text-align: right;
  z-index: 1;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    & > img {
      max-width: 120%;
    }
  }
`;

const StyledOverflowSpace = styled(Space)<StyledSpaceProps>`
  position: relative;
  width: 100%;
  z-index: 2;
`;

const getUpperChild = (t) => {
  return (
    <Row>
      <Col xs={4} sm={8} md={8} lg={6}>
        <StyledOverflowSpace
          marginTop={['2.8rem', '5rem']}
          marginBottom={['1.3rem', '1.3rem', '2.6rem', '3.2rem']}
        >
          <HeadlineBody
            titleWidth={['100%', '100%', '100%', '110%']}
            bodyWidth="90%"
            titleVariant="h2"
            bodyVariant="b2"
            title={t('hero.headline')}
            gridRowGap={['0.7rem', '0.7rem', '1.8rem', '3.2rem']}
          >
            {t('hero.sub-copy')}
          </HeadlineBody>
        </StyledOverflowSpace>
        <StyledOverflowSpace>
          <JoinNowCTA />
        </StyledOverflowSpace>
      </Col>
      <Col xs={4} sm={8} md={8} lg={6} align="flex-end">
        <StyledSpace
          marginTop={['-1rem', '-1rem', '-2rem', '-3rem']}
          marginBottom={['-2rem', '-2rem', '-3rem', '-4rem']}
        >
          <Overlay
            width={['90%', '90%', '90%', '120%']}
            height={[
              'calc(100% + 3rem)',
              'calc(100% + 3rem)',
              'calc(100% + 5rem)',
              'calc(100% + 7rem)',
            ]}
          >
            <Image
              src={t('hero.image')}
              resizeMode="cover"
              imgWidth="100%"
              imgHeight="100%"
            />
          </Overlay>
        </StyledSpace>
      </Col>
    </Row>
  );
};

export const Hero = () => {
  const { t } = useTranslation('debit-card');
  return (
    <Space marginTop={['0', '0', '5rem', '5rem']}>
      <TLayout
        leftLineColor="defaultOrange"
        rightLineColor="defaultYellow"
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
