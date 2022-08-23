import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Rule, Paragraph } from '@tend/ui';
import { Category } from '../../services/discourse';

export interface TopicsProps {
  data?: Category[];
}

interface VerticalLineProps {
  backgroundColor: string;
}

const GridLayout = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(6, [col-start] 1fr);
  margin-bottom: 2.25rem;
  grid-template-areas:
    "OL OL OL TTL TTL TTL";

  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-column-gap: 3.75rem;
    margin-bottom: 0;
    grid-template-columns: repeat(3, [col-start] 1fr);
    grid-template-areas:
    "OL OL OL"
    "TTL TTL TTL";
  }
`;

const VerticalLine = styled.div<VerticalLineProps>`
  position: relative;
  height: 100%;
  @media (min-width: 1440px) {
    &:after {
      ${color}
      content: '';
      position: absolute;
      display: block;
      width: .75rem;
      height: 100px;
      left: -2.25rem;
      height: calc(100% - 1.125rem);
      top: 1.125rem;
    }
  }
`
const Statics = (props: TopicsProps) => {
  return (
    <>
      <Rule size={12} ruleColor="neonGreen" />
      <VerticalLine backgroundColor="red.0">
        <GridLayout>
        </GridLayout>
      </VerticalLine>
    </>
  );
};

export default Statics;
