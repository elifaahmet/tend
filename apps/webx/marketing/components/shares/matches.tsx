/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { space, position } from 'styled-system';
import styled from 'styled-components';

import { TStemLayout, Image, Theme, HeadlineBody } from '@tend/ui';

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
      max-width: 300%;
    }
  }
  z-index: 1;
`;

const Div = styled.div`
  display: flex;
  z-index: 2;
  width: 90%;
  position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    padding-bottom: 5rem;
    padding-top: 5rem;
    width: 60%;
  }
`;

const getImage = (t) => {
  return (
    <OverflowImage
      left={['15%', '15%', '15%', '-200%']}
      marginTop={['0rem', '0rem', '1rem', '8rem']}
      marginBottom={['3rem', '3rem', '3rem', '5rem']}
    >
      <Image
        src={t('matches.image')}
        resizeMode="cover"
        imgWidth={['100%', '100%', '100%', '300%']}
      />
    </OverflowImage>
  );
};

const getLeftChild = (t) => {
  return (
    <Div>
      <HeadlineBody
        title={t('matches.headline')}
        color="black"
        gridRowGap={['1.2rem', '1.2rem', '2rem', '3rem']}
        bodyVariant="b2"
        titleVariant="h3"
      >
        {t('matches.body')}
      </HeadlineBody>
    </Div>
  );
};

export const Matches = () => {
  const { t } = useTranslation('shares');
  return (
    <TStemLayout
      leftLineColor="defaultMagenta"
      rightLineColor="defaultYellow"
      verticalLineColor="defaultOrange"
      leftChild={getLeftChild(t)}
      rightChild={getImage(t)}
      variant="left"
      whenShrink="left"
      upperBg="offWhite"
      lowerBg="white"
      padding="2rem"
    />
  );
};

export default Matches;
