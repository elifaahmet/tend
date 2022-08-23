import React from 'react';
import styled from 'styled-components'
import Body from './body';

interface IProps {
  children: React.ReactNode
}

const Main = styled.div`
  grid-column: 1 / span 6;

  @media (min-width: 1440px) {
    grid-column: 1 / span 12;
  }
`;

const FullWidth = ({children}: IProps) => {
  return (
    <Body>
      <Main>
        {children}
      </Main>
    </Body>
  );
};

export default FullWidth;
