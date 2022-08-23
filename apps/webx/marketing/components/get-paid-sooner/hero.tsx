/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { space, position } from 'styled-system';
import JoinNowCTA from '../buttons/join-now-cta';

import { TLayout, H1, Image, Theme, Paragraph } from '@tend/ui';
import Space from '../layout/space';
import Overlay from '../overlay';
interface OverflowImageProps {
  left?: Array<string>;
  marginTop?: Array<string>;
  paddingBottom?: Array<string>;
}

const OverflowImage = styled.div<OverflowImageProps>`
  ${position};
  ${space};
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  & > img {
    max-width: 100%;
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    & > img {
      max-width: 150%;
    }
  }
`;

interface GridColumnDivProps {
  marginTop?: Array<string>;
}

const GridColumnDiv = styled.div<GridColumnDivProps>`
  ${space};
  display: flex;
  z-index: 2;
  width: 100%;
  flex-direction: column;
  > * {
    margin-bottom: 1.2rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    > * {
      margin-bottom: 2.2rem;
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
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

const getLeftImage = (t) => {
  return (
    <OverflowImage
      left={['10%', '10%', '10%', '-50%']}
      marginTop={['-2rem', '-2rem', '-3rem', '10rem']}
      paddingBottom={['3rem', '3rem', '5rem', '2rem']}
    >
      <Overlay width={['100%', '100%', '100%', '150%']}>
        <Image src={t('hero.image')} resizeMode="cover" imgWidth="100%" />
      </Overlay>
    </OverflowImage>
  );
};

const getLeftChild = (t) => {
  return (
    <GridColumnDiv marginTop={['2rem', '2rem', '3rem', '4rem']}>
      <Space>
        <H1 color="black" variant="small">
          {t('hero.headline')}
        </H1>
      </Space>
      <Space>
        <Paragraph variant="b1">{t('hero.sub-copy')}</Paragraph>
      </Space>
      <JoinNowCTA />
    </GridColumnDiv>
  );
};

export const Hero = () => {
  const { t } = useTranslation('get-paid-sooner');

  return (
    <TLayout
      leftLineColor="defaultMagenta"
      rightLineColor="defaultRed"
      verticalLineColor="defaultYellow"
      leftChild={getLeftChild(t)}
      rightChild={getLeftImage(t)}
      variant="center"
      whenShrink="left"
      upperBg="white"
      lowerBg="offWhite"
    />
  );
};

export default Hero;
