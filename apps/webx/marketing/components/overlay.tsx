/** @format */

import styled from 'styled-components';
import { layout } from 'styled-system';

export interface OverlayProps {
  width: Array<string>;
  height?: Array<string> | string;
}

export const Overlay = styled.div<OverlayProps>`
  ${layout}
  position: relative;
  display: inline-block;
  &:after {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
  }
`;

export default Overlay;
