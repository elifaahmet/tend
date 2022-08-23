import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  margin-block-end: 1rem;
  grid-column-gap: 2.8125rem;
  grid-row-gap: 1rem;
  place-items: start;

  > * {
    width: 100%;
  }

  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }
`;

export default Grid;
