import styled from 'styled-components';
import { Image } from '@tend/ui';

interface StyleProps {
  float?: string;
}

export const Img = styled(Image)<StyleProps>`
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;

  @media (min-width: 1440px) {
    margin-inline-start: 0.5rem;
    margin-inline-end: 0.5rem;
    float: ${props => props ? props.float : 'auto'};
  }
`

export default Img;
