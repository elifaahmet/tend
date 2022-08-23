import styled from 'styled-components';

import { color } from 'styled-system';

interface FullBleedLayoutProps {
  bg: string;
}

export const FullBleedLayout = styled.div<FullBleedLayoutProps>`
  ${color};
`

export default FullBleedLayout;
