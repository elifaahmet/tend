import React from 'react';
import { typography, color, variant } from 'styled-system'
import styled from 'styled-components';

export interface H6Props {
  children?: React.ReactNode,
  color?: string,
  variant?: 'normal',
}

const StyledH6 = styled.h6`
  ${typography};
  ${color};
  text-transform: uppercase;
  font-family: 'Pilat Condensed';
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  line-height: 87%;
  -webkit-font-feature-settings: "case" 1;
  -moz-font-feature-settings:    "case" 1;
  -ms-font-feature-settings:     "case" 1;
  font-feature-settings:         "case" 1;
  ${variant({
    variants: {
      normal: {
        fontSize: ['h6Small', 'h6Medium', 'h6Large'],
        fontWeight: 'bold',
      }
    }
  })};
`;

export const H6 = (props: H6Props) => {
  return (
    <StyledH6
      {...props}
    >
      {props.children}
    </StyledH6>
  );
};

H6.defaultProps = {
  color: 'neutral.4',
  variant: 'normal',
};

export default H6;
