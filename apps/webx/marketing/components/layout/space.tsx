/** @format */

import styled from 'styled-components';
import { space } from 'styled-system';

interface SpaceProps {
  marginTop?: string | Array<string>;
  marginBottom?: string | Array<string>;
}

export const Space = styled.div<SpaceProps>`
  ${space}
`;

export default Space;
