/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Row, Col, TLayout, HeadlineBody, Image } from '@tend/ui';
import Space from '../layout/space';
import JoinNowCTA from '../buttons/join-now-cta';
import ComingSoon from '../modules/coming-soon';
const StyledSpace = styled(Space)`
  position: relative;
  z-index: 3;
`;

const StyledSpaceImg = styled(Space)`
  position: relative;
  text-align: right;
  z-index: 2;
  width: 100%;
  height: 100%;
  & > img {
    max-width: 100%;
  }
`;

const getUpperChild = (t, comingSoon: boolean, locale: string) => {
  return (
    <Row>
      <Col xs={4} sm={8} md={8} lg={6}>
        <StyledSpace
          marginTop={['3rem', '3rem', '5rem', '8rem']}
          marginBottom={['1.8rem', '1.8rem', '2.8rem', '3.8rem']}
        >
          <HeadlineBody
            titleWidth={['100%', '100%', '100%', '120%']}
            bodyWidth={['100%', '100%', '100%', '100%']}
            titleVariant="h2"
            title={t('hero.headline')}
            bodyVariant="b2"
            gridRowGap={['0.7rem', '0.7rem', '1.8rem', '2.25rem']}
          >
            {comingSoon && locale !== 'es-MX' ? <ComingSoon /> : null}
            {t('hero.sub-copy')}
          </HeadlineBody>
        </StyledSpace>
        <StyledSpace>
          <JoinNowCTA />
        </StyledSpace>
      </Col>
      <Col
        xs={4}
        sm={8}
        md={8}
        lg={6}
        align="flex-end"
        paddingTop={['-0.9375rem', '-0.9375rem', '-2.8rem', '-5rem']}
      >
        <StyledSpaceImg
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
        </StyledSpaceImg>
      </Col>
    </Row>
  );
};

export const Hero = () => {
  const { t } = useTranslation('line-of-credit');
  const { locale } = useRouter();
  return (
    <Space marginTop={['0', '0', '5rem', '5rem']}>
      <TLayout
        leftLineColor="defaultOrange"
        rightLineColor="defaultTransparent"
        verticalLineColor="defaultRed"
        upperChild={getUpperChild(t, true, locale)}
        variant="center"
        whenShrink="right"
        upperBg="white"
        lowerBg="white"
      />
    </Space>
  );
};

export default Hero;
