import React from 'react';
import { typography, color, variant } from 'styled-system'
import styled from 'styled-components';

export interface H3Props {
  children?: React.ReactNode,
  color?: string,
  variant?: 'normal',
  textTransform?: 'uppercase' | 'none',
  fontWeight: 'normal' | 'bold',
}

const StyledH3 = styled.h3`
  letter-spacing: -0.01em;
  line-height: 85%;
  font-family: 'Pilat Condensed';
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  -webkit-font-feature-settings: "case" 1;
  -moz-font-feature-settings:    "case" 1;
  -ms-font-feature-settings:     "case" 1;
  font-feature-settings:         "case" 1;
  ${(props: H3Props) => variant({
    variants: {
      normal: {
        fontSize: ['h3Small', 'h3Medium', 'h3Large'],
        fontWeight: props.fontWeight,
        textTransform: props.textTransform,
      }
    }
  })};
  ${typography};
  ${color};
`;

export const H3 = (props: H3Props) => {
  return (
    <StyledH3
      {...props}
    >
      {props.children}
    </StyledH3>
  );
};

H3.defaultProps = {
  color: 'neutral.4',
  variant: 'normal',
  textTransform: 'uppercase',
  fontWeight: 'bold',
};

export default H3;
