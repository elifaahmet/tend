import React from 'react';
import { typography, color, variant } from 'styled-system'
import styled from 'styled-components';

export interface H4Props {
    children?: React.ReactNode;
    color?: string;
    variant?: 'normal' | 'lower',
}

const StyledH4 = styled.h4`
  ${typography};
  ${color};
  line-height: 87%;
  letter-spacing: -0.005em;
  text-transform: uppercase;
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
            fontSize: ['h4Small', 'h4Medium', 'h4Large'],
            fontWeight: 'bold',
            fontFamily: 'Pilat Condensed',
        },
        lower: {
            fontSize: ['h4Small', 'h4Medium', 'h4Large'],
            fontWeight: 'bold',
            textTransform: 'none',
            fontFamily: 'Pilat Condensed',
        }
    }
})};
`;

export const H4 = (props: H4Props) => {
    return (
        <StyledH4
            {...props}
        >
            {props.children}
        </StyledH4>
    );
};

H4.defaultProps = {
    color: 'neutral.4',
    variant: 'normal',
};

export default H4;
