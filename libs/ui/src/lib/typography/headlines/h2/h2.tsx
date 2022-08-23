import React from 'react';
import { typography, color, variant } from 'styled-system'
import styled from 'styled-components';

export interface H2Props {
  variant?: 'normal';
  children?: React.ReactNode;
  color?: any;
  fontSize?: string[];
}

const StyledH2 = styled.h2`
  ${typography};
  ${color};
  letter-spacing: -0.02em;
  line-height: 90%;
  text-transform: uppercase;
  font-family: 'Pilat Condensed';
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  -webkit-font-feature-settings: "case" 1;
  -moz-font-feature-settings:    "case" 1;
  -ms-font-feature-settings:     "case" 1;
  font-feature-settings:         "case" 1;
  ${variant({
    variants: {
      normal: {
        fontSize: ['h2Small', 'h2Medium', 'h2Large'],
        fontWeight: 'bold',
      }
    }
  })};
`;

export const H2 = (props: H2Props) => {
  return (
    <StyledH2
      {...props}
    >
      {props.children}
    </StyledH2>
  );
};

H2.defaultProps = {
  color: 'neutral.4',
  variant: 'normal',
};

export default H2;
