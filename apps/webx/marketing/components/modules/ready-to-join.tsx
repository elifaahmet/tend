/** @format */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import {
  Grid,
  Row,
  Col,
  H1,
  H5,
  DownloadAppButton,
  Image,
  Layout,
  Theme,
} from '@tend/ui';
import Space from '../layout/space';

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

const GridColumnDiv = styled.div`
  width: 70%;
  margin-bottom: 20%;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    width: 100%;
    margin-bottom: 5rem;
    margin-top: -7rem;
  }
`;

const StyledCol = styled(Col)`
  z-index: 1;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-between;
`;

interface ReadyToJoinProps {
  bg: string;
  imagesDown?: boolean;
}

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

export const ReadyToJoin = (props: ReadyToJoinProps) => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const [appImg, setAppImg] = useState<string>('');
  const [cardImg, setCardImg] = useState<string>('');

  useEffect(() => {
    setAppImg(t('images.tend-app'));
    setCardImg(t('images.tend-debit-card'));
  }, [locale]);

  const getImage = (t: (a: string) => string) => {
    return (
      <GridColumnDiv>
        <ImageContainer>
          <Image src={appImg} imgWidth={['100%', '100%', '100%', '100%']} />

          <Image src={cardImg} imgWidth={['100%', '100%', '100%', '100%']} />
        </ImageContainer>
      </GridColumnDiv>
    );
  };

  return (
    <Layout bg={props.bg}>
      <Grid>
        <Row
          justify="center"
          align="flex-end"
          paddingBottom={['4rem', '4rem', '5rem', '7rem']}
          marginTop={['-4rem', '-4rem', '-5rem', '2rem']}
          reverse={props.imagesDown ? [] : ['xs', 'sm', 'md']}
        >
          <StyledCol
            align="flex-start"
            xs={4}
            sm={8}
            md={6}
            lg={6.5}
            paddingBottom={props.imagesDown ? '5rem' : '0'}
          >
            <Space marginBottom="2rem">
              <H1>{t('ready_to_join.headline')}</H1>
            </Space>
            <Space marginBottom="2rem">
              <H5 textTransform="none">{t('ready_to_join.body')}</H5>
            </Space>
            <Div>
              <DownloadAppButton
                imgWidth={['10rem']}
                src={t('common:images.app-store')}
                href={t('common:app-urls.app-store')}
                fontSize="0.8rem"
                resizeMode={'fill'}
                imgHeight={['3.38rem']}
                store="app store"
              />
              <DownloadAppButton
                imgWidth={['11.3rem']}
                src={t('common:images.google-play')}
                href={t('common:app-urls.google-play')}
                fontSize="0.8rem"
                resizeMode={'fill'}
                imgHeight={['3.38rem']}
                store="google play"
              />
            </Div>
          </StyledCol>

          <Col xs={3} sm={8} md={6} lg={5.5}>
            <Row
              justify="center"
              paddingLeft={['0rem', '0rem', '0rem', '5rem']}
            >
              <CardAndPhoneImages />
              {/*{getImage(t)}*/}
            </Row>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default ReadyToJoin;
