import React from 'react'
import styled from 'styled-components';

import { Icon, H4, Rule } from '@tend/ui';
import {useTranslation} from "@tend/webx/utils/next-i18next";

const EquationRule = styled(Rule)`
  margin-top: 2.25rem;
  @media (min-width: 836px) {
    display: none;
  }
`;

const GridLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2.25rem 0;
  justify-content: center;

  & > div {
    margin-right: 0.75rem;
  }

  @media (min-width: 836px) {
    margin: 5rem 0;
    display: grid;
    grid-column-gap: 0;
    grid-template-columns: repeat(7, [start-col] fit-content(0));
  }

  @media (min-width: 1440px) {
    grid-column-gap: 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto;

  @media (min-width: 836px) {
    justify-content: center;
    width: 100%;
  }
`;

const FlexBreak = styled.div`
  flex-basis: 100%;
  height: 0;

  @media (min-width: 836px) {
    display: none;
  }
`;

const NoWrapH4 = styled(H4)`
white-space: nowrap;
`;

export const Equation = () => {
  const { t } = useTranslation();
  return (
    <>
      <EquationRule size={12} ruleColor="yellow.0" />
      <Container>
        <GridLayout>
            <div>
              <H4 color="offWhite">{t('equation.you')}</H4>
            </div>

            <div style={{display: "flex", alignItems: "center"}}>
              <Icon svgWidth={["1.5rem", "1.5rem", "2.5rem", "2.5rem"]}  svgHeight="2.8rem" iconName="TendPlus" fontWeight={1} />
            </div>

            <div>
              <H4 color="offWhite">{t('equation.them')}</H4>
            </div>

            <div style={{display: "flex", alignItems: "center"}}>
              <Icon svgWidth={["1.5rem", "1.5rem", "2.5rem", "2.5rem"]} svgHeight="2.8rem" iconName="TendPlus" fontWeight={1} />
            </div>

            <div>
              <H4 color="offWhite">TEND</H4>
            </div>

            <FlexBreak />

            <div style={{display: "flex", alignItems: "center"}}>
              <Icon svgWidth={["1.5rem", "1.5rem", "2.5rem", "2.5rem"]} iconName="TendEquals" fontWeight={1} />
            </div>

            <div>
              <NoWrapH4 color="offWhite">{t('equation.everyone-wins')}</NoWrapH4>
            </div>

        </GridLayout>
      </Container>
    </>
  );
}

export default Equation;
