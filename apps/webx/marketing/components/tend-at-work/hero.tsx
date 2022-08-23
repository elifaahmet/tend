/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { space, position } from 'styled-system';

import { TLayout, H1, Button, Image, Theme, Paragraph } from '@tend/ui';
import Space from '../layout/space';
import { Overlay } from '../overlay';

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
  display: flex;
  z-index: 2;
  width: 70%;
  position: relative;
  flex-direction: column;
  > * {
    margin-bottom: 1.2rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    width: 100%;

    > * {
      margin-bottom: 2.2rem;
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    width: 70%;
    > * {
      margin-bottom: 3.2rem;
    }
  }
`;

const Div = styled.div`
  padding-top: 2rem;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  width: 100%;
`;

const getLeftImage = (t) => {
  return (
    <OverflowImage
      left={['12%', '12%', '12%', '-50%']}
      marginTop={['-2rem', '-2.5rem', '-3.5rem', '18rem']}
      marginBottom={['3rem', '3rem', '5rem', '5rem']}
    >
      <Overlay color="dark" width={['100%', '100%', '100%', '150%']}>
        <Image src={t('hero.image')} resizeMode="cover" imgWidth="100%" />
      </Overlay>
    </OverflowImage>
  );
};

const getLeftChild = (t, scrollToForm) => {
  return (
    <Div>
      <Paragraph textTransform="uppercase" variant="b2" bold color="offWhite">
        {t('hero.label')}
      </Paragraph>
      <Space marginBottom={['0rem', '0rem', '0rem', '5rem']}>
        <GridColumnDiv>
          <Space>
            <H1 color="offWhite" variant="small">
              {t('hero.headline')}
            </H1>
          </Space>
          <Space>
            <Paragraph color="offWhite" variant="b1">
              {t('hero.sub-copy')}
            </Paragraph>
          </Space>
          <Space marginTop="1rem">
            <Button
              textTransform="uppercase"
              variant="medium"
              hoverBg="black"
              hoverColor="white"
              onClick={scrollToForm}
            >
              {t('hero.cta.label')}
            </Button>
          </Space>
        </GridColumnDiv>
      </Space>
    </Div>
  );
};

export const Hero = ({ scrollToForm }) => {
  const { t } = useTranslation('tend-at-work');
  return (
    <TLayout
      leftLineColor="defaultMagenta"
      rightLineColor="defaultOrange"
      verticalLineColor="defaultYellow"
      leftChild={getLeftChild(t, scrollToForm)}
      rightChild={getLeftImage(t)}
      variant="center"
      whenShrink="left"
      upperBg="white"
      lowerBg="defaultGreen"
    />
  );
};

export default Hero;
