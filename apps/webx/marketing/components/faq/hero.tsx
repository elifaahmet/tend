/** @format */

import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { TLayout, H1, Paragraph, Theme } from '@tend/ui';
import Space from '../layout/space';

const GridColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  > * {
    margin-bottom: 0.6rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    > * {
      margin-bottom: 1rem;
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    > * {
      margin-bottom: 1.2rem;
    }
  }
`;

const StyledHeadline = styled(H1)`
  white-space: pre-wrap;
`;

const getLeftChild = (t) => {
  return (
    <Space
      marginTop={['1.875rem', '1.875rem', '3.25rem', '3.75rem']}
      marginBottom={['3.75rem', '3.75rem', '3.125rem', '3.125rem']}
    >
      <GridColumnDiv>
        <Space>
          <Paragraph variant="b2" color="white" bold textTransform="uppercase">
            {t('hero.eyebrow')}
          </Paragraph>
        </Space>
        <Space>
          <StyledHeadline color="white" variant="small">
            {t('hero.headline')}
          </StyledHeadline>
        </Space>
        <Space marginTop={['1.4rem', '1.4rem', '2rem', '2.6rem']}>
          <Paragraph variant="b2" color="white">
            {t('hero.sub-copy')}
          </Paragraph>
        </Space>
      </GridColumnDiv>
    </Space>
  );
};

export const Hero = () => {
  const { t } = useTranslation('faq');

  return (
    <TLayout
      leftLineColor="defaultMagenta"
      rightLineColor="defaultOrange"
      verticalLineColor="defaultYellow"
      leftChild={getLeftChild(t)}
      variant="left"
      whenShrink="left"
      upperBg="white"
      lowerBg="defaultGreen"
    />
  );
};

export default Hero;
