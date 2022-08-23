import React from 'react';
import styled from 'styled-components'
import { color } from 'styled-system';
import Body from './body';
import TLDR from './tldr';

interface IProps {
  children: React.ReactNode;
  tldr: string;
  tldrColor?: string[];
  dividerColor?: string[];
}

const Main = styled.div`
  grid-column: 1 / span 6;
  grid-row: 2;

  @media (min-width: 1440px) {
    grid-column: 1 / span 6;
    grid-row: 1;
  }
`;

interface LineProps {
  backgroundColor: string[];
}

const VerticalLine = styled.div<LineProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;

  &[data-area="top"] {
    min-height: 3.125rem;
    display: block;
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;
  }

  &:after {
    ${color}
    content: '';
    position: absolute;
    display: block;
    right: -1.88rem;
    top: 0;
    width: .75rem;
    height: 100%;
  }

  @media (min-width: 836px) {
    &:after {
      right: -2.25rem;
    }
  }

  @media (min-width: 1440px) {
    &[data-area="top"] {
      min-height: 3.125rem;
      display: block;
      grid-column: 6 / span 1;
      grid-row: 1 / span 4 ;
    }
  }
`;

const TooLong = styled.div`
  grid-column: 1 / span 6;
  grid-row: 1;
  z-index:99;

  @media (min-width: 1440px) {
    grid-column: 9 / span 4;
    z-index: auto;
  }
`;

const TwoColDivided = ({children, tldr, tldrColor, dividerColor }: IProps) => {
  return (
    <Body>
      <Main>

        {children}

      </Main>

      <VerticalLine backgroundColor={dividerColor} data-area="top" />

      <TooLong>
        <TLDR color={tldrColor}>
          {tldr}
        </TLDR>
      </TooLong>
    </Body>
  );
};

TwoColDivided.defaultProps = {
  tldrColor: ['defaultMagenta'],
  dividerColor: ['defaultRed']
}

export default TwoColDivided;
