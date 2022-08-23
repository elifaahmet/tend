import React from 'react';
import { typography, color } from 'styled-system'
import styled from 'styled-components';

export interface H1Props {
  variant?: 'hero' | 'h1' | 'small';
  fontSize?: string | string[];
  children?: React.ReactNode;
  color?: string;
}
const fontSizeMap = {
  hero: ['h1Small','h1Small', 'heroMedium', 'heroLarge'],
  h1: ['h1Small', 'h1Small', 'h1Medium', 'h1Large'],
  small: ['h2Small', 'h2Small', 'h2Medium', 'h2Large']
}

const StyledH1 = styled.h1`
  ${typography};
  ${color};
  font-family: Pilat Condensed;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: -0.02rem;
  line-height: 87%;
  margin-block-start: 0;
  margin-block-end: 0;
  -webkit-font-feature-settings: "case" 1;
  -moz-font-feature-settings:    "case" 1;
  -ms-font-feature-settings:     "case" 1;
  font-feature-settings:         "case" 1;
`;

export const H1 = (props: H1Props) => {
  return (
    <StyledH1
      fontSize={props.fontSize || fontSizeMap[props.variant]}
      {...props}
    >
      {props.children}
    </StyledH1>
  );
};

H1.defaultProps = {
  variant: 'h1',
  color: 'neutral.4',
};

export default H1;
