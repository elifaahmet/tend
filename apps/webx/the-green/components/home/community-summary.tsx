import React from 'react';
import { Rule } from '@tend/ui';
import styled from 'styled-components';

import Statics from '../modules/statics';
import Categories from '../modules/categories';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6. [col-start] 1fr);
  grid-column-gap: 2.8125rem;
  grid-row-gap: 3rem;
  grid-template-areas:
    "LNK LNK LNK LNK LNK LNK"
    "CD  CD  CD  CD  CD  CD";

  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas:
    "LNK LNK LNK LNK LNK LNK LNK LNK LNK CS  CS  CS"
    "CD  CD  CD  CD  CD  CD  CD  CD  CD  CD  CD  CD";
  }
`;

const Links = styled.div`
  grid-area: LNK;
`;

/* display: none is just temporarily to remove the rule in statistics on mobile */
const ComunityStats = styled.div`
  display: none;
  @media (min-width: 1440px) {
    grid-area: CS;
    display: block;
  }
`;

const ColDivider = styled.div`
  grid-area: CD;
  margin-bottom: 2.1875rem;
`;

const CommunitySummary = ({ categories }) => {
  return (
    <GridLayout>
      <Links>
        <Categories data={categories} />
      </Links>
      <ComunityStats>
        <Statics />
      </ComunityStats>
      <ColDivider>
        <Rule size={12} ruleColor="magenta.0" />
      </ColDivider>
    </GridLayout>
  );
};

export default CommunitySummary;

