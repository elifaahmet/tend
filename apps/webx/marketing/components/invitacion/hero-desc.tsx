/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import {
  Layout,
  Image,
  H4,
  Rule,
  Theme,
  DownloadAppButton,
  Paragraph,
} from '@tend/ui';

const DownloadApps = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin-block-end: -4rem;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    grid-template-rows: repeat(1, auto);
    grid-template-columns: repeat(2, 1fr);
    gird-column-gap: 2rem;
    margin-block-end: 0rem;
  } ;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 1rem;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    grid-template-rows: repeat(1, auto);
    grid-template-columns: repeat(2, 10.3fr);
    grid-row-gap: 1rem;
  } ;
`;

const TextSpacer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 1rem;
`;

const DescContainer = styled.div`
  padding-top: 2rem;
  text-align: left;
  width: 100%;
  @media (min-width: 836px) {
    margin-left: 25%;
    width: 50%;
  }
`;

const ImageContainer = styled.div`
  padding-top: 2rem;
  width: 50%;
  margin-left: 10%;
  padding-bottom: 3rem;
  @media (min-width: ${Theme.breakpoints[1]}) {
    margin: auto;
    width: 53%;
  }
  @media (min-width: ${Theme.breakpoints[2]}) {
    margin: auto;
    width: 53%;
  }
`;

const ImageSpacer = styled.div`
  margin-top: 0.6rem;
  @media (min-width: ${Theme.breakpoints[0]}) {
    margin-top: 1.25rem;
  }
  @media (min-width: ${Theme.breakpoints[1]}) {
    margin-top: 1.5rem;
  }
  @media (min-width: ${Theme.breakpoints[2]}) {
    margin-top: 2.5rem;
  }
`;

const Container = styled.div`
  margin-block-start: -5rem;
  margin-block-end: -8rem;
  @media (min-width: 836px) {
    margin-block-start: 0rem;
    margin-block-end: 0rem;
  }
`;

export const Invex = () => {
  const { t } = useTranslation('invitacion');

  return (
    <Layout rowOverlay={true} bg="white">
      <ImageContainer>
        <Paragraph marginTop="-2rem" marginBottom="-1rem" variant="b3">
          <ImageGrid>
            <ImageSpacer>
              <Image
                src={t('logo-image')}
                resizeMode="cover"
                imgWidth={['95%', '10rem', '12rem', '20rem']}
              />
            </ImageSpacer>
            <Image
              src={t('invex-image')}
              resizeMode="cover"
              imgWidth={['95%', '10rem', '12rem', '20rem']}
            />
          </ImageGrid>
        </Paragraph>
      </ImageContainer>
      <Container>
        <H4 variant="lower" color="black">
          {t('hero.headline')}
        </H4>
        <TextSpacer>
          <Paragraph variant="b2" marginTop="1rem">
            {t('hero.sub-copy')}
          </Paragraph>
          <Paragraph marginTop="-1.75rem" variant="b2">
            <div
              dangerouslySetInnerHTML={{ __html: t('value-props.desc') }}
            ></div>
            <br></br>
            {t('hero.sub-copy-2')}
          </Paragraph>
        </TextSpacer>
      </Container>
      <DescContainer>
        <Paragraph marginTop="0rem" marginBottom="2rem" variant="b3">
          <DownloadApps>
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
          </DownloadApps>
        </Paragraph>
      </DescContainer>
    </Layout>
  );
};

export default Invex;
