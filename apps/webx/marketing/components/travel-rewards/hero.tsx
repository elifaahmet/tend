/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { space, position } from 'styled-system';

import { TLayout, H2, Image, Theme, Paragraph } from '@tend/ui';
import JoinNowCTA from '../buttons/join-now-cta';
import Space from '../layout/space';
import { Overlay } from '../overlay';

interface OverflowImageProps {
  left?: Array<string>;
  marginTop?: Array<string>;
}

const OverflowImage = styled.div<OverflowImageProps>`
  ${space};
  ${position};
  position: relative;
  z-index: 1;
  margin-bottom: 2rem;
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    margin-bottom: 3rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    margin-bottom: 4rem;
  }
`;

const GridColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-bottom: 3rem;
  padding-top: 2rem;
  > * {
    margin-bottom: 1.2rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    > * {
      margin-bottom: 2rem;
    }
    & :last-child {
      margin-bottom: 0rem;
    }
    margin-bottom: 3rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    > * {
      margin-bottom: 3.2rem;
    }
    & :last-child {
      margin-bottom: 0rem;
    }
    p {
      width: 60%;
    }
    margin-bottom: 3rem;
  }
`;

const getFirstRowLeftChild = (t) => {
  return (
    <GridColumnDiv>
      <Space>
        <H2>{t('hero.headline')}</H2>
      </Space>
      <Space marginBottom={['1.2rem', '1.2rem', '2rem', '3.2rem']}>
        <Paragraph variant="b2">{t('hero.sub-copy')}</Paragraph>
      </Space>
      <JoinNowCTA />
    </GridColumnDiv>
  );
};

const getFirstRowRightChild = (t) => {
  return (
    <OverflowImage
      left={['10%', '10%', '10%', '-50%']}
      marginTop={['-3rem', '-3rem', '-4rem', '10rem']}
    >
      <Overlay width={['100%', '100%', '100%', '150%']}>
        <Image src={t('hero.image')} resizeMode="cover" imgWidth="100%" />
      </Overlay>
    </OverflowImage>
  );
};

const Main = () => {
  const { t } = useTranslation('travel-rewards');
  return (
    <TLayout
      leftLineColor="defaultMagenta"
      rightLineColor="defaultYellow"
      verticalLineColor="defaultOrange"
      leftChild={getFirstRowLeftChild(t)}
      rightChild={getFirstRowRightChild(t)}
      variant="center"
      whenShrink="left"
      upperBg="white"
      lowerBg="offWhite"
    />
  );
};

export default Main;
