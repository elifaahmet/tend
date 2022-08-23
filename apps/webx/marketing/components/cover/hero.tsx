/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { Row, Col, TLayout, H1, Image, Paragraph } from '@tend/ui';
import Space from '../layout/space';
import JoinNowCTA from '../buttons/join-now-cta';

const TextOverlayContainer = styled.div`
  position: relative;
  z-index: 4;
`;

const StyledCol = styled(Col)`
  text-align: right;
`;

/* T-2 Layout */

const getUpperChild = (t) => {
  return (
    <Row>
      <Col xs={4} sm={8} md={8} lg={6}>
        <Space marginTop={['2.8rem', '5rem']}>
          <TextOverlayContainer>
            <H1 variant="small">{t('hero.headline')}</H1>
            <Space
              marginTop={['1.2rem', '1.2rem', '2.2rem', '3.2rem']}
              marginBottom={['1.2rem', '1.2rem', '2.2rem', '3.2rem']}
            >
              <div style={{ width: '80%' }}>
                <Paragraph variant="b1">{t('hero.sub-copy')}</Paragraph>
              </div>
            </Space>

            <JoinNowCTA />
          </TextOverlayContainer>
        </Space>
      </Col>

      <StyledCol
        xs={4}
        sm={8}
        md={8}
        lg={6}
        align="flex-end"
        justify="flex-end"
        marginTop={['-0.9375rem', '-0.9375rem', '-2.8rem', '-4rem']}
      >
        <Image
          src={t('hero.image')}
          resizeMode="cover"
          imgWidth={['90%', '90%', '90%', '120%']}
          imgHeight={['100%', '100%', '100%', '100%']}
        />
      </StyledCol>
    </Row>
  );
};

export const Hero = () => {
  const { t } = useTranslation('cover');
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
