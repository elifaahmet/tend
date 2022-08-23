import styled from 'styled-components';
import { color } from 'styled-system';

interface LineProps {
  backgroundColor: string;
}

const VerticalLine = styled.div<LineProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (min-width: 836px) {
    &:after {
      ${color}
      content: '';
      position: absolute;
      display: block;
      left: -2.25rem;
      top: 0;
      width: .75rem;
      height: 100%;
    }
  }
`;

export default VerticalLine;
