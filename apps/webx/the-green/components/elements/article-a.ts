import styled from 'styled-components';
import { Anchor } from '@tend/ui';

export const A = styled(Anchor) `
  font-size: 1.3125rem;
  color: #717171;
  font-weight: bold;

  &:hover {
    color: black;
  }
  &:visited {
    color: #717171;
  }
`
export default A;
