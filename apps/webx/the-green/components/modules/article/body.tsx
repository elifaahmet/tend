import React from 'react';
import styled from 'styled-components'

interface IProps {
  children: React.ReactNode
}

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(5, [row-start] auto);
  grid-column-gap: 2.8125rem;

  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
  }
`;

const Body = ({children}: IProps) => {
  return (
    <GridLayout>
      {children}
    </GridLayout>
  );
};

export default Body;
