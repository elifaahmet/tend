/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { typography } from 'styled-system';

import { Row, Col, TLayout, H1, Image, Paragraph } from '@tend/ui';
import Space from '../layout/space';
import JoinNowCTA from '../buttons/join-now-cta';
import Overlay from '../overlay';

const TextOverlayContainer = styled.div`
  position: relative;
  z-index: 4;
`;

const StyledSpace = styled(Space)`
  text-align: right;
  position: relative;
  z-index: 2;
  width: 100%;
`;

interface StyledH1Props {
  fontSize: Array<string>;
}

const StyledH1 = styled(H1)<StyledH1Props>`
  ${typography}
`;

/* T-2 Layout */

const getUpperChild = (t) => {
  return (
    <Row>
      <Col xs={4} sm={8} md={8} lg={6}>
        <Space marginTop={['2.8rem', '5rem']}>
          <TextOverlayContainer>
            <StyledH1 fontSize={['3rem', '4.5rem', '7.5rem', '7.5rem']}>
              {t('hero.headline')}
            </StyledH1>
            <Space
              marginTop={['1.2rem', '1.2rem', '2.2rem', '3.2rem']}
              marginBottom={['1.2rem', '1.2rem', '2.2rem', '3.2rem']}
            >
              <Paragraph variant="b1">{t('hero.subCopy')}</Paragraph>
            </Space>

            <JoinNowCTA />
          </TextOverlayContainer>
        </Space>
      </Col>

      <Col xs={4} sm={8} md={8} lg={6} align="flex-end">
        <StyledSpace
          marginTop={['-1rem', '-1rem', '-2rem', '-3rem']}
          marginBottom={['-2rem', '-2rem', '-3rem', '-4rem']}
        >
          <Overlay width={['90%', '90%', '90%', '120%']} height="100%">
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
  const { t } = useTranslation('deep-discounts');

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
