/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { Grid, Row, Image, Col, HeadlineBody, Layout } from '@tend/ui';

import Space from '../layout/space';

// TODO: Move to UI Library
const ImageAspectRatioContainer = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: calc(400 / 339 * 100%); // Mobile
  top: -10rem;
  margin-bottom: -10rem;
  position: relative;

  @media (min-width: 836px) {
    padding-top: calc(864 / 498 * 100%); // Desktop
  }
`;

const ImageAspectRatioInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CashBack = () => {
  const { t } = useTranslation('travel-rewards');
  return (
    <Layout rowOverlay={true} bg="offWhite">
      <Grid paddingTop={['5.5625rem']}>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <ImageAspectRatioContainer>
              <ImageAspectRatioInner>
                <Image
                  src={t('cash-back.image')}
                  resizeMode="cover"
                  imgWidth="100%"
                />
              </ImageAspectRatioInner>
            </ImageAspectRatioContainer>
          </Col>

          <Col xs={6} sm={6} md={6} lg={6}>
            <Space marginTop={['3rem', '5rem', '0', '0']}>
              <HeadlineBody
                titleVariant="h3"
                bodyVariant="b2"
                gridRowGap={['1.2rem', '1.2rem', '2.2rem', '3.2rem']}
                title={t('cash-back.headline')}
              >
                {t('cash-back.body')}
              </HeadlineBody>
            </Space>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default CashBack;
