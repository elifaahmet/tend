import React from 'react';
import { typography, color, variant } from 'styled-system';
import styled from 'styled-components';

export interface H5Props {
  children?: React.ReactNode;
  color?: string;
  textTransform?: 'none' | 'capitalize' | 'lowercase' | 'uppercase';
  variant?: 'normal' | 'h5Small';
  fontWeight?: string;
}

const StyledH5 = styled.h5`
  line-height: 110%;
  text-transform: ${(props: H5Props) => props.textTransform};
  font-family: 'Pilat Condensed';
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  -webkit-font-feature-settings: "case" 1;
  -moz-font-feature-settings:    "case" 1;
  -ms-font-feature-settings:     "case" 1;
  font-feature-settings:         "case" 1;
  ${(props: H5Props) => variant({
    variants: {
      normal: {
        fontSize: ['h5Small', 'h5Medium', 'h5Large'],
        fontWeight: props.fontWeight,
      },
      h5Small: {
        fontSize: ['h5Small', 'h5Medium', 'h5Medium'],
        fontWeight: props.fontWeight,
      },
    }
  })};
  ${typography};
  ${color};
`;

export const H5 = (props: H5Props) => {
  return (
    <StyledH5
      {...props}
    >
      {props.children}
    </StyledH5>
  );
};

H5.defaultProps = {
  color: 'neutral.4',
  textTransform: 'uppercase',
  variant: 'normal',
  fontWeight: 'bold',
};

export default H5;
