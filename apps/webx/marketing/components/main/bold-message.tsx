/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import Link from 'next/link';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import smsBubbleAnimation from '../../public/animations/sms_bubble.json';

import {
  Grid,
  Row,
  Col,
  H1,
  Paragraph,
  Layout,
  CTAButtonLink,
  Image,
  Theme,
} from '@tend/ui';

import Space from '../layout/space';
import useScrollPosition from '../../hooks/useScrollPosition';

const Div = styled.div`
  margin-top: -0.5rem;
  text-align: right;
  width: 100%;
  padding-right: 15%;
  & > img {
    max-width: 50%;
  }
  & > div {
    //max-width: 50%;
    //margin-left: 50%;
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    margin-top: -1rem;
    padding-right: 20%;
    & > img {
      max-width: 40%;
    }
    & > div {
      //max-width: 40%;
      //margin-left: 60%;
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    margin-top: -1.5rem;
    padding-right: 30%;
    & > img {
      max-width: 30%;
    }
    & > div {
      //max-width: 30%;
      margin-left: 70%;
    }
  }
`;

const TransparentImage = styled(Image)`
  opacity: 1;
`;

const LayoutDiv = styled.div`
  position: relative;
`;
const lottieOptions = {
  loop: false,
  animationData: smsBubbleAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet',
  },
};

const BoldMessage = () => {
  const { t } = useTranslation('main');

  const { locale } = useRouter();
  const isLocaleMX = !!locale.match(/mx/i);

  const [overlayImg, setOverlayImg] = useState<string>('');
  const isEnglish = locale.slice(0, 2) === 'en';

  const [isStopped, setIsStopped] = useState<boolean>(true);

  const ref = useRef<HTMLDivElement>();

  const isElementInViewport = () => {
    const rect: DOMRect = ref.current.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      return true;
    } else return false;
  };

  useEffect(() => {
    if (isElementInViewport()) {
      setIsStopped(false);
    }
  }, []);

  useEffect(() => {
    setOverlayImg(t('bold-message.overlay'));
  }, [locale]);

  useScrollPosition(() => {
    if (isElementInViewport() && isStopped) {
      setIsStopped(false);
    } else if (!isStopped) setIsStopped(true);
  }, []);

  return (
    <LayoutDiv>
      <Layout bg="defaultYellow">
        <Grid>
          <Row justify="flex-start" paddingBottom="4rem" paddingTop="4rem">
            <Col xs={12} sm={12} md={12} lg={12}>
              <H1 variant="hero">{t('bold-message.headline')}</H1>
              <Div>
                {isEnglish ? (
                  <div>
                    <Lottie
                      options={lottieOptions}
                      width="100%"
                      isPaused={isStopped}
                      speed={2}
                    />
                  </div>
                ) : (
                  <TransparentImage
                    src={overlayImg}
                    resizeMode="cover"
                    imgWidth={['50%', '50%', '40%', '30%']}
                  />
                )}
              </Div>
              <Space
                marginBottom={['3rem', '5rem']}
                marginTop={
                  isEnglish ? ['-2rem', '-3rem', '-3rem', '-5rem'] : '0rem'
                }
              >
                <div ref={ref}>
                  <Paragraph variant="b1">{t('bold-message.body')}</Paragraph>
                </div>
              </Space>
              {!isLocaleMX && (
                <Link href="/about">
                  <CTAButtonLink
                    textTransform="uppercase"
                    size="medium"
                    bg="black"
                    borderColor="black"
                    color="white"
                    overColor="true"
                    hoverBg="white"
                    hoverColor="black"
                  >
                    {t('common:cta.about')}
                  </CTAButtonLink>
                </Link>
              )}
            </Col>
          </Row>
        </Grid>
      </Layout>
    </LayoutDiv>
  );
};

export default BoldMessage;
