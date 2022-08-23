/** @format */

import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import { useRouter } from 'next/router';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import styled from 'styled-components';
import { space } from 'styled-system';
import tendAppAnimationUS from '../../public/animations/tend_app_en_us.json';
import tendAppAnimationMexico from '../../public/animations/tend_app_es_mx.json';

import { Grid, Row, H2, Image, Col, Paragraph, Theme, Layout } from '@tend/ui';
import useScrollPosition from '../../hooks/useScrollPosition';

const RightChild = styled.div`
  ${space};
  width: 100%;
  & > img {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  & > div {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  margin-top: 0rem;
  margin-bottom: -80%;
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    margin-bottom: -70%;
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    position: relative;
    margin-top: -10rem;
    & > img {
      width: 90%;
      margin-left: 10%;
      margin-right: 0;
    }
    & > div {
      width: 90%;
      margin-left: 10%;
      margin-right: 0;
    }
  }
`;

/** @tech-debt */
const ImageContainer = styled.div`
  position: relative;
  text-align: right;
  width: 100%;

  & > img {
    max-width: 70%;
  }

  & img:nth-child(2) {
    position: absolute;
    max-width: 80%;
    left: 0;
    bottom: -15%;
  }
`;

/** @tech-debt
 *
 * Styles for mobile and smaller desktop need some fine tuning.
 * */
const GridColumnDiv = styled.div`
  width: 95%;
  //margin-bottom: 2.5%;
  padding-bottom: 15%;
  margin-left: -2.5%;

  @media only screen and (min-width: 500px) {
    width: 100%;
    padding-bottom: 15%;
  }

  @media only screen and (min-width: 600px) {
    width: 100%;
    padding-bottom: 18%;
  }

  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    width: 100%;
    padding-bottom: 16%;
  }

  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    width: 100%;
    margin-bottom: 5rem;
    margin-top: -7rem;
  }
`;

/** @tech-debt
 *
 * Copy paste from ReadyToJoin
 * */
const CardAndPhoneImages: React.FC = () => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const [appImg, setAppImg] = useState<string>('');
  const [cardImg, setCardImg] = useState<string>('');

  useEffect(() => {
    setAppImg(t('images.tend-app'));
    setCardImg(t('images.tend-debit-card'));
  }, [locale]);

  return (
    <GridColumnDiv>
      <ImageContainer>
        <Image src={appImg} imgWidth={['100%', '100%', '100%', '100%']} />

        <Image src={cardImg} imgWidth={['100%', '100%', '100%', '100%']} />
      </ImageContainer>
    </GridColumnDiv>
  );
};

/** @tech-debt
 *
 * Rename this component to SayHiTend or something else. Still Needs new app buttons to replce current CTA button.
 * */
export const MeetYourMoney = () => {
  const { t } = useTranslation('main');
  const { locale } = useRouter();
  const [appImg, setAppImg] = useState<string>('');
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
    setAppImg(t('moduleTwo.img'));
  }, [locale]);

  useScrollPosition(() => {
    if (isElementInViewport() && isStopped) {
      setIsStopped(false);
    } else if (!isStopped) setIsStopped(true);
  }, []);

  const lottieOptions = {
    loop: false,
    animationData:
      locale === 'en-US' ? tendAppAnimationUS : tendAppAnimationMexico,
    direction: 1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  /** @tech-debt
   *
   * Once we have lottie animations with the image equivalent of CardAndPhoneImages refactor this.
   * */
  const getRightChild = () => {
    return (
      <RightChild>
        {isEnglish ? (
          <div>
            <Lottie
              options={lottieOptions}
              width="100%"
              isPaused={isStopped}
              speed={0.5}
            />
          </div>
        ) : (
          <Image
            src={appImg}
            resizeMode="cover"
            imgWidth={['100%', '100%', '100%', '100%']}
            imgHeight={['100%', '100%', '100%', '100%']}
          />
        )}
      </RightChild>
    );
  };

  return (
    <Layout bg="defaultRed">
      <Grid>
        <Row paddingTop="5rem" paddingBottom="5rem">
          <Col
            paddingBottom={['0rem', '2rem', '2rem', '0rem']}
            xs={4}
            sm={8}
            md={8}
            lg={6}
          >
            <Row justify="flex-start" paddingBottom="3rem">
              <div ref={ref}>
                <H2>{t('moduleTwo.headline')}</H2>
              </div>
            </Row>

            <Row justify="flex-start" paddingBottom="2rem">
              <Paragraph variant="b2">{t('moduleTwo.body')}</Paragraph>
            </Row>
            <Row paddingBottom="0" justify="flex-start">
              {Array.from(
                t('moduleTwo.list', {
                  returnObjects: true,
                })
              ).map((bullet) => (
                <div key={bullet['sub-heading']}>
                  <Row justify="flex-start">
                    <Paragraph
                      variant="b2"
                      bold
                      fontSize="24px"
                      marginBottom="1rem"
                    >
                      {bullet['sub-heading']}
                    </Paragraph>
                  </Row>
                  <Row justify="flex-start">
                    <Paragraph
                      variant="b2"
                      fontSize="16px"
                      marginBottom="2.4rem"
                    >
                      {bullet['text']}
                    </Paragraph>
                  </Row>
                </div>
              ))}
            </Row>
          </Col>
          <Col xs={6} sm={8} md={7} lg={5.5}>
            <Row
              justify="center"
              paddingLeft={['0rem', '0rem', '0rem', '5rem']}
              paddingTop={['0rem', '0rem', '0rem', '16rem']}
              paddingBottom={['0rem', '0rem', '0rem', '0rem']}
            >
              <CardAndPhoneImages />
            </Row>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default MeetYourMoney;
