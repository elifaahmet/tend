import React from 'react';
import styled from 'styled-components';

import Grid from '../layout/grid';
import { H2, Rule } from '@tend/ui';

interface ITitleBoard {
  title: string;
}

const Layout = styled(Grid)`
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-row-gap: 3rem;
  margin-block-start: 2.8125rem;
  margin-block-end: 1.5rem;
  grid-template-areas:
    "HL HL HL HL HL HL"
    "HR HR HR HR HR HR";

    @media (min-width: 1440px) {
      grid-template-columns: repeat(12, [col-start] 1fr);
      grid-template-areas:
        "HL HL HL HL HL HL HL HL HL HL . ."
        "HR HR HR HR HR HR HR HR HR HR HR HR";
    }
`;

const Headline = styled(H2)`
  display: inline-block;
word-break: break-word;
`;

const Block = styled.div`
  &[data-area|="headline"] {grid-area: HL; word-wrap: break-word; };
  &[data-area|="hr"]       { grid-area: HR; };
`;

const TitleBoard = ({title}: ITitleBoard) => {
  return (
    <Layout>
      <Block data-area="headline">
        <Headline color="white">{title}</Headline>
      </Block>

      <Block data-area="hr">
        <Rule size={12} ruleColor="red.0" />
      </Block>
    </Layout>
  );
};

export default TitleBoard;
