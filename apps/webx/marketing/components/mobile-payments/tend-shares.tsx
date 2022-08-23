/** @format */

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { space, position } from 'styled-system';

import { TLayout, H3, Image, BodyButton, CTALink, Theme } from '@tend/ui';

const OverflowImage = styled.div`
  margin-top: -5rem;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

interface GridColumnDivProps {
  paddingBottom?: Array<string>;
}

const GridColumnDiv = styled.div<GridColumnDivProps>`
  ${space};
  display: flex;
  flex-direction: column;
  z-index: 2;
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
  }
`;

const getUpperChild = (t) => {
  return (
    <OverflowImage>
      <Image
        src={t('shares.image')}
        resizeMode="cover"
        imgWidth={['100%', '100%', '100%', '100%']}
      />
    </OverflowImage>
  );
};

const getLeftChild = (t) => {
  return (
    <GridColumnDiv paddingBottom={['2.5rem', '2.5rem', '4rem', '12.5rem']}>
      <H3 textTransform="uppercase" fontWeight="normal">
        {t('shares.headline')}
      </H3>
    </GridColumnDiv>
  );
};

const getRightChild = (t) => {
  return (
    <GridColumnDiv paddingBottom={['9rem', '9rem', '12rem', '12.5rem']}>
      <BodyButton fontWeight="bold" variant="medium">
        {t('shares.body')}
      </BodyButton>
      <Link href="/shares">
        <CTALink variant="large">{t('common:cta.refer-a-friend')}</CTALink>
      </Link>
    </GridColumnDiv>
  );
};

const TendShares = () => {
  const { t } = useTranslation('mobile-payments');
  return (
    <TLayout
      upperChild={getUpperChild(t)}
      leftChild={getLeftChild(t)}
      rightChild={getRightChild(t)}
      variant="center"
      lowerBg="defaultYellow"
      upperBg="defaultYellow"
      whenShrink="left"
    />
  );
};

export default TendShares;
