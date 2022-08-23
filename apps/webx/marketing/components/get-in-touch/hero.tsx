/** @format */

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { layout } from 'styled-system';

import { TLayout, H1, Paragraph, CTALink, Theme } from '@tend/ui';

import { Space } from '../layout/space';
import { useRouter } from 'next/router';
interface DivProps {
  width?: Array<string>;
}

const GridColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  > * {
    margin-bottom: 2.2rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    > * {
      margin-bottom: 3.2rem;
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    > * {
      margin-bottom: 4.2rem;
    }
  }
`;

const Div = styled.div<DivProps>`
  ${layout};
  display: flex;
`;

const getLeftChild = (t, isLocaleMX) => {
  return (
    <Space
      marginTop={['1.875rem', '1.875rem', '3.25rem', '3.75rem']}
      marginBottom={['2.75rem', '2.75rem', '3.125rem', '3.125rem']}
    >
      <GridColumnDiv>
        <Space>
          <H1 variant="small" color="white">
            {t('hero.headline')}
          </H1>
        </Space>
        <Div width={['90%', '90%', '50%', '50%']}>
          <Paragraph variant="b2" color="white">
            {t('hero.sub-copy')}
          </Paragraph>
        </Div>
        {!isLocaleMX && (
          <Link href="/faq">
            <CTALink color="white" variant="normal" textTransform="uppercase">
              {t('common:cta.search-our-help')}
            </CTALink>
          </Link>
        )}
      </GridColumnDiv>
    </Space>
  );
};

export const Hero = () => {
  const { t } = useTranslation('get-in-touch');
  const { locale } = useRouter();
  const isLocaleMX = !!locale.match(/mx/i);

  return (
    <TLayout
      leftLineColor="defaultMagenta"
      rightLineColor="defaultOrange"
      verticalLineColor="defaultYellow"
      leftChild={getLeftChild(t, isLocaleMX)}
      variant="left"
      whenShrink="left"
      upperBg="white"
      lowerBg="defaultGreen"
    />
  );
};

export default Hero;
