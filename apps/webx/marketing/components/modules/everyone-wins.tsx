/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { Grid, Icon, H4, Layout, Theme } from '@tend/ui';

interface EveryOneWinsProps {
  bg: string;
}

interface GridRowDivProps {
  direction?: string;
  padding?: string;
  noMarginRight?: boolean;
}

const GridRowDiv = styled.div<GridRowDivProps>`
  display: flex;
  flex-direction: ${(props: GridRowDivProps) => props.direction || `column`};
  align-items: center;
  padding-top: ${(props: GridRowDivProps) => props.padding || '0rem'};
  padding-bottom: ${(props: GridRowDivProps) => props.padding || '0rem'};
  justify-content: center;
  > * {
    margin-bottom: ${(props: GridRowDivProps) =>
      props.direction === 'row' ? '0rem' : '2rem'};
    margin-right: ${(props: GridRowDivProps) =>
      props.direction === 'row' ? '0.5rem' : '0rem'};
  }
  & :last-child {
    margin-right: 0rem;
    margin-bottom: 0rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[0]}) {
    > * {
      margin-right: ${(props: GridRowDivProps) =>
        props.direction === 'row' ? '1rem' : '0rem'};
      margin-bottom: ${(props: GridRowDivProps) =>
        props.direction === 'row' ? '0rem' : '2rem'};
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    > * {
      margin-right: ${(props: GridRowDivProps) =>
        props.direction === 'row' ? '1.5rem' : '0rem'};
      margin-bottom: ${(props: GridRowDivProps) =>
        props.direction === 'row' ? '0rem' : '2rem'};
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    flex-direction: row;
    > * {
      margin-right: ${(props: GridRowDivProps) =>
        props.noMarginRight ? '0rem' : '2rem'};
      margin-bottom: 0rem;
    }
  } ;
`;

export const EveryOneWins = (props: EveryOneWinsProps) => {
  const { t } = useTranslation('everyone-wins');
  return (
    <Layout bg={props.bg}>
      <Grid bg={props.bg}>
        <GridRowDiv padding="2rem" noMarginRight>
          <GridRowDiv direction="row">
            <H4 color="offWhite">{t('you')}</H4>
            <Icon
              svgWidth={['1.5rem', '1.5rem', '2.5rem', '2.5rem']}
              svgHeight="2.8rem"
              iconName="TendPlus"
              fontWeight={1}
            />
            <H4 color="offWhite">{t('friends')}</H4>
            <Icon
              svgWidth={['1.5rem', '1.5rem', '2.5rem', '2.5rem']}
              svgHeight="2.8rem"
              iconName="TendPlus"
              fontWeight={1}
            />
            <H4 color="offWhite">{t('tend')}</H4>
          </GridRowDiv>
          <GridRowDiv direction="row">
            <Icon
              svgWidth={['1.5rem', '1.5rem', '2.5rem', '2.5rem']}
              iconName="TendEquals"
              fontWeight={1}
            />
            <H4 color="offWhite">{t('everyone-wins')}</H4>
          </GridRowDiv>
        </GridRowDiv>
      </Grid>
    </Layout>
  );
};

export default EveryOneWins;
