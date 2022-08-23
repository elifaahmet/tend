/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { space, position } from 'styled-system';
import styled from 'styled-components';

import { TLayout, H2, Image, Theme, Paragraph } from '@tend/ui';
import Space from '../layout/space';
import JoinNowCTA from '../buttons/join-now-cta';

interface OverflowImageProps {
  left?: Array<string>;
  marginTop?: Array<string>;
  marginBottom?: Array<string>;
}

const OverflowImage = styled.div<OverflowImageProps>`
  ${position};
  ${space};
  width: 100%;
  position: relative;
  & > img {
    max-width: 100%;
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    & > img {
      max-width: 400%;
    }
  }
  z-index: 1;
`;

const Div = styled.div`
  display: flex;
  z-index: 2;
  width: 90%;
  margin-bottom: 1.2rem;
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    width: 70%;
    margin-bottom: 2.2rem;
  }
`;

const GridColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  > * {
    margin-bottom: 1.2rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  width: 100%;
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    > * {
      margin-bottom: 2rem;
    }
    & :last-child {
      margin-bottom: 0rem;
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    > * {
      margin-bottom: 2.2rem;
    }
    & :last-child {
      margin-bottom: 0rem;
    }
    p {
      width: 60%;
    }
    width: 90%;
  }
`;

const getImage = (t) => {
  return (
    <OverflowImage
      left={['10%', '10%', '10%', '-300%']}
      marginTop={['-3rem', '-3rem', '-4rem', '18rem']}
      marginBottom={['3rem', '3rem', '5rem', '5rem']}
    >
      <Image
        src={t('hero.image')}
        resizeMode="cover"
        imgWidth={['100%', '100%', '100%', '400%']}
      />
    </OverflowImage>
  );
};

const getLeftChild = (t) => {
  return (
    <Space
      marginBottom={['1.2rem', '1.2rem', '2rem', '5rem']}
      marginTop={['1.2rem', '1.2rem', '2rem', '5rem']}
    >
      <GridColumnDiv>
        <H2>{t('hero.headline')}</H2>
        <Div>
          <Paragraph variant="b2">{t('hero.body')}</Paragraph>
        </Div>
        <JoinNowCTA />
      </GridColumnDiv>
    </Space>
  );
};

export const Hero = () => {
  const { t } = useTranslation('shares');
  return (
    <TLayout
      leftLineColor="defaultMagenta"
      rightLineColor="defaultYellow"
      verticalLineColor="defaultOrange"
      leftChild={getLeftChild(t)}
      rightChild={getImage(t)}
      variant="left"
      whenShrink="left"
      upperBg="white"
      lowerBg="offWhite"
    />
  );
};

export default Hero;
