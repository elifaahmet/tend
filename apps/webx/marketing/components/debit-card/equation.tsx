/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

/*
 ** Same as the everyone wins components
 */

import { Grid, Icon, H4, Layout, Theme } from '@tend/ui';

interface GridRowDivProps {
  direction?: string;
  padding?: string;
  justify?: string;
}

const GridRowDiv = styled.div<GridRowDivProps>`
  display: flex;
  padding-left: 1rem;
  flex-direction: ${(props: GridRowDivProps) => props.direction || `column`};
  align-items: center;
  padding-top: ${(props: GridRowDivProps) => props.padding || '0rem'};
  padding-bottom: ${(props: GridRowDivProps) => props.padding || '0rem'};
  justify-content: center;
  align-self: ${(props: GridRowDivProps) => props.justify || 'center'};
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
    align-self: center;
    flex-direction: row;
    > * {
      margin-right: 2rem;
      margin-bottom: 0rem;
    }
  } ;
`;

export const Equation = () => {
  const { t } = useTranslation('debit-card');

  return (
    <Layout bg="defaultGreen">
      <Grid paddingBottom="1rem" paddingTop="1rem">
        <GridRowDiv padding="2rem">
          <GridRowDiv direction="row" justify="flex-start">
            <H4 color="offWhite">{t('equation.shopping')}</H4>
            <Icon
              svgWidth={['1.5rem', '1.5rem', '2.5rem', '2.5rem']}
              svgHeight="2.8rem"
              iconName="TendPlus"
              fontWeight={1}
            />
          </GridRowDiv>
          <GridRowDiv direction="row" justify="flex-start">
            <H4 color="offWhite">{t('equation.cash-back')}</H4>
            <Icon
              svgWidth={['1.5rem', '1.5rem', '2.5rem', '2.5rem']}
              iconName="TendEquals"
              fontWeight={1}
            />
            <H4 color="offWhite">{t('equation.get-paid')}</H4>
          </GridRowDiv>
        </GridRowDiv>
      </Grid>
    </Layout>
  );
};

export default Equation;
