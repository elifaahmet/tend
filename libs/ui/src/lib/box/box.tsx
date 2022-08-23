import React from 'react';

import styled from 'styled-components';
import { color, flexbox } from 'styled-system';

export interface BoxProps {
  color?: string;
  bg?: Array<string>;
  children: React.ReactChild;
  flexGrow?: string;
}

const StyledBox = styled.div`
  ${color}
  ${flexbox}
`;

export const Box = (props: BoxProps) => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};

Box.defaultProps = {
  color: 'neutral.4',
  flexGrow: '1',
};

export default Box;
