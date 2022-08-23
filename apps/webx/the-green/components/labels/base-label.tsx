import styled from 'styled-components';
import { color } from 'styled-system';

export const BaseLabel = styled.p`
  ${color};
  margin-inline-start: 0;
  margin-inline-end: 0.65rem;
  margin-block-start: 0.3125rem;
  margin-block-end: 0.3125rem;
  padding: 0.5rem 0.95rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 4%;
`;

export default BaseLabel;
