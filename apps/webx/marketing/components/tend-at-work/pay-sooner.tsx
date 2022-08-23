/** @format */

import React from 'react';
import Link from 'next/link';
import Lottie from 'react-lottie';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { layout } from 'styled-system';

import smileAnimationData from '../../public/animations/smile_animation.json';

import { Grid, Row, Col, HeadlineBody, Layout, CTAButtonLink } from '@tend/ui';
import Space from '../layout/space';

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: smileAnimationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet',
  },
};

interface LottieDivProps {
  width: Array<string>;
}

const LottieDiv = styled.div<LottieDivProps>`
  ${layout};
  display: flex;
  justify-content: center;
`;

const PaySooner = () => {
  const { t } = useTranslation('tend-at-work');
  return (
    <Layout bg="defaultGreen">
      <Grid>
        <Row paddingBottom="4rem" paddingTop="4rem">
          <Col justify="flex-start" xs={4} sm={8} md={8} lg={8}>
            <HeadlineBody
              titleVariant="h1"
              bodyVariant="b1"
              title={t('pay-them-sooner.headline')}
              color="white"
              gridRowGap={['2.25rem', '2.25rem', '3.5rem', '5rem']}
            >
              {t('pay-them-sooner.body')}
            </HeadlineBody>
            <Space marginTop={['3rem']}>
              <Link href="/get-paid-sooner">
                <CTAButtonLink
                  textTransform="uppercase"
                  size="medium"
                  overColor="false"
                  hoverBg="black"
                  hoverColor="white"
                >
                  {t('common:cta.learn-more')}
                </CTAButtonLink>
              </Link>
            </Space>
          </Col>
          <Col
            paddingTop={['4.5rem', '5rem', '5.5rem', '2rem']}
            justify="center"
            align="center"
            xs={4}
            sm={8}
            md={8}
            lg={4}
          >
            <LottieDiv width={['52%', '52%', '52%', '70%']}>
              <Lottie options={lottieOptions} width="100%" speed={2} />
            </LottieDiv>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default PaySooner;
