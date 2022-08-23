/** @format */

import React from 'react';
import styled from 'styled-components';
import { space, position } from 'styled-system';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { TLayout, H1, Image, Theme, Paragraph } from '@tend/ui';
import JoinNowCTA from '../buttons/join-now-cta';
import Space from '../layout/space';
import Overlay from '../overlay';
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
      max-width: 150%;
    }
  }
  z-index: 1;
`;

const GridColumnDiv = styled.div`
  > * {
    margin-bottom: 1.2rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 2;
  position: relative;
  margin-bottom: -2rem;
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    > * {
      margin-bottom: 2.2rem;
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    margin-top: 5rem;
    > * {
      margin-bottom: 3.2rem;
    }
    & :last-child {
      margin-bottom: 5rem;
    }
    p {
      width: 60%;
    }
  }
`;

const getLeftChild = (t) => {
  return (
    <GridColumnDiv>
      <Space style={{ width: '110%' }}>
        <H1 variant="small">{t('hero.headline')}</H1>
      </Space>
      <Space marginBottom={['1.2rem', '1.2rem', '2.2rem', '3.2rem']}>
        <div style={{ width: '90%' }}>
          <Paragraph variant="b1">{t('hero.sub-copy')}</Paragraph>
        </div>
      </Space>
      <JoinNowCTA />
    </GridColumnDiv>
  );
};

const getRightChild = (t) => {
  return (
    <OverflowImage
      left={['10%', '10%', '10%', '-50%']}
      marginTop={['-2rem', '-2rem', '-3rem', '18rem']}
      marginBottom={['3rem', '3rem', '5rem', '5rem']}
    >
      <Overlay width={['100%', '100%', '100%', '150%']}>
        <Image src={t('hero.image')} resizeMode="cover" imgWidth="100%" />
      </Overlay>
    </OverflowImage>
  );
};

export const Hero = () => {
  const { t } = useTranslation('mobile-payments');

  return (
    <TLayout
      leftLineColor="defaultRed"
      rightLineColor="defaultOrange"
      verticalLineColor="defaultYellow"
      leftChild={getLeftChild(t)}
      rightChild={getRightChild(t)}
      variant="center"
      whenShrink="left"
      upperBg="white"
      lowerBg="offWhite"
    />
  );
};

export default Hero;
