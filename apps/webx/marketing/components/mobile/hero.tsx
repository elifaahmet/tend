/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { position } from 'styled-system';

import { Grid, Row, Col, TLayout, HeadlineBody, Image } from '@tend/ui';

import JoinNowCTA from '../buttons/join-now-cta';
import Space from '../layout/space';

const StyledSpace = styled(Space)`
  position: relative;
  text-align: right;
  z-index: 1;
  width: 100%;
  height: 100%;
  & > img {
    max-width: 100%;
  }
`;

const GridColumnDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 100%;
`;

const getUpperChild = (t) => {
  return (
    <Grid>
      <Row>
        <Col
          xs={4}
          sm={8}
          md={8}
          lg={6}
          paddingTop={['3rem', '3rem', '5rem', '8rem']}
        >
          <GridColumnDiv>
            <Space marginBottom={['1.8rem', '1.8rem', '2.8rem', '3.8rem']}>
              <HeadlineBody
                titleWidth={['100%', '100%', '100%', '100%']}
                bodyWidth={['100%', '100%', '100%', '90%']}
                titleVariant="h2"
                title={t('hero.headline')}
                bodyVariant="b2"
                gridRowGap={['1.2rem', '1.2rem', '2.2rem', '3.2rem']}
              >
                {t('hero.sub-copy')}
              </HeadlineBody>
            </Space>

            <JoinNowCTA />
          </GridColumnDiv>
        </Col>
        <Col xs={4} sm={8} md={8} lg={6}>
          <StyledSpace
            marginTop={['-1rem', '-1rem', '-2rem', '-3rem']}
            marginBottom={['-2rem', '-2rem', '-3rem', '-4rem']}
          >
            <Image
              src={t('hero.image')}
              resizeMode="cover"
              imgWidth={['90%', '90%', '90%', '100%']}
              imgHeight={[
                'calc(100% + 3rem)',
                'calc(100% + 3rem)',
                'calc(100% + 5rem)',
                'calc(100% + 7rem)',
              ]}
            />
          </StyledSpace>
        </Col>
      </Row>
    </Grid>
  );
};

const Hero = () => {
  const { t } = useTranslation('mobile');

  return (
    <Space marginTop={['0rem', '0rem', '0rem', '5rem']}>
      <TLayout
        leftLineColor="defaultYellow"
        rightLineColor="defaultTransparent"
        verticalLineColor="defaultRed"
        upperChild={getUpperChild(t)}
        variant="center"
        upperBg="white"
        whenShrink="right"
      />
    </Space>
  );
};

export default Hero;
