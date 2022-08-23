/** @format */

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { space, position } from 'styled-system';

import { TLayout, H3, Image, BodyButton, CTALink, Theme } from '@tend/ui';

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
  } ;
`;

const getUpperChild = (t) => {
  return (
    <OverflowImage
      top={['-5rem', '-5rem', '-5rem', '-5rem']}
      style={{
        marginBottom: '-5rem',
      }}
    >
      <Image
        src={t('earn-extra-cash.image')}
        resizeMode="cover"
        imgWidth={['100%', '100%', '100%', '100%']}
      />
    </OverflowImage>
  );
};

const getLeftChild = (t) => {
  return (
    <GridColumnDiv>
      <Space>
        <H3 textTransform="uppercase" fontWeight="normal" color="offWhite">
          {t('earn-extra-cash.headline')}
        </H3>
      </Space>
      <BodyButton variant="medium" color="offWhite">
        {t('earn-extra-cash.body')}
      </BodyButton>
      <Link href="/shopping-cashback">
        <CTALink color="white" variant="large" textTransform="uppercase">
          {t('common:cta.take-a-look')}
        </CTALink>
      </Link>
    </GridColumnDiv>
  );
};

// T-$ Stacked Right

const EarnExtraCash = () => {
  const { t } = useTranslation('main');

  return (
    <TLayout
      leftLineColor="defaultYellow"
      rightLineColor="defaultRed"
      verticalLineColor="defaultOrange"
      upperChild={getUpperChild(t)}
      leftChild={getLeftChild(t)}
      variant="left"
      upperBg="defaultGreen"
      lowerBg="defaultGreen"
      whenShrink="left"
    />
  );
};

export default EarnExtraCash;
