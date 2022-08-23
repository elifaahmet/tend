/** @format */

import React, { useEffect, useState } from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { space, position } from 'styled-system';

import { TLayout, H1, Image, Theme } from '@tend/ui';

import Space from '../layout/space';

const OverflowImage = styled.div<{
  left?: Array<string>;
  bottom?: Array<string>;
  top?: Array<string>;
  paddingBottom?: Array<string>;
}>`
  ${position};
  ${space};
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const GridColumnDiv = styled.div<{
  paddingBottom?: Array<string>;
  marginBottom?: Array<string>;
}>`
  ${space};
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding-bottom: 2.5rem;
  margin-top: -2rem;
  > * {
    margin-bottom: 1.2rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }

  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    > * {
      margin-bottom: 2rem;
    }
    padding-bottom: 4rem;
  }

  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    > * {
      margin-bottom: 3.2rem;
    }
    padding-bottom: 5rem;
    margin-top: -3rem;
  } ;
`;

const getUpperChild = (t) => {
  return (
    <OverflowImage>
      <Image
        src={t('hero.image')}
        resizeMode="cover"
        imgWidth={['100%', '100%', '100%', '100%']}
      />
    </OverflowImage>
  );
};

const getRightChild = (t) => {
  return (
    <GridColumnDiv>
      <Space>
        <H1 color="black">{t('hero.headline-2')}</H1>
      </Space>
    </GridColumnDiv>
  );
};

const Hero = () => {
  const { t } = useTranslation('invitacion');

  const [isMobile, setIsMobile] = useState(true);

  const handleWindowResize = () => {
    if (window.innerWidth >= parseInt(Theme.breakpoints[1].replace('px', ''))) {
      setIsMobile(false);
    } else if (
      window.innerWidth < parseInt(Theme.breakpoints[1].replace('px', ''))
    ) {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  if (isMobile) {
    return (
      <TLayout
        leftLineColor="defaultYellow"
        rightLineColor="defaultMagenta"
        verticalLineColor="defaultRed"
        rightChild={getRightChild(t)}
        variant="paddedRight"
        upperBg="offwhite"
        lowerBg="offwhite"
        whenShrink="right"
      />
    );
  } else {
    return (
      <TLayout
        leftLineColor="defaultYellow"
        rightLineColor="defaultMagenta"
        verticalLineColor="defaultRed"
        upperChild={getUpperChild(t)}
        rightChild={getRightChild(t)}
        variant="paddedRight"
        upperBg="offwhite"
        lowerBg="offwhite"
        whenShrink="right"
      />
    );
  }
};

export default Hero;
