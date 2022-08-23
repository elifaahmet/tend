import styled from 'styled-components';
import {Theme} from "@tend/ui";

export const Grid = styled.div`
  display: grid;
  grid-column-gap: 2.8125rem;
  grid-template-columns: repeat(6, [col-start] 1fr);
  > * {
    width: 100%;
  }

  @media (min-width: ${Theme.breakpoints[2]}) {
    grid-column-gap: 3.75rem;
    grid-template-columns: repeat(12, [col-start] 1fr);
  }
`;

export default Grid;
