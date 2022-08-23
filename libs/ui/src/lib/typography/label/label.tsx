import React, { Ref } from 'react';
import { typography, variant, color } from 'styled-system'
import styled from 'styled-components';

export interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
  variant?: string;
  bold? : boolean;
  color?: string;
  ref?: Ref<HTMLLabelElement>;
  as?: never;
  for?: string;
  marginTop?: string | Array<string>;
  marginBottom?: string | Array<string>;
}

const StyledLabel = styled.label`
  ${typography};
  ${color};
  font-weight: ${(props: LabelProps) => props.bold ? `bold` : `normal`};
  text-transform: uppercase;
  font-family: 'Pilat';
  display: flex;
  margin-block-start: ${(props: LabelProps) => props.marginTop || '0rem'};
  margin-block-end: ${(props: LabelProps) => props.marginBottom || '0rem'};
  -webkit-font-feature-settings: "case" 1;
  -moz-font-feature-settings:    "case" 1;
  -ms-font-feature-settings:     "case" 1;
  font-feature-settings:         "case" 1;
  ${variant({
    variants: {
      l3: {
        fontSize: ['l3Small', 'l3Medium', 'l3Large'],
        lineHeight: '120%',
        letterSpacing: '0.02rem',
      },
      l4: {
        fontSize: ['l4Small', 'l4Large'],
        lineHeight: '120%',
        letterSpacing: '0.04rem',
      },
      l5: {
        fontSize: ['l4Small'],
        lineHeight: '110%',
        letterSpacing: '0.02rem',
      },
      b3: {
        fontSize:  ['b3Small', 'b3Medium', 'b3Large'],
        lineHeight: '120%',
        textTransform: 'none',
      },
      formLabel: {
        fontFamily: 'Pilat Condensed',
        fontWeight: 'bold',
        fontSize:  ['b3Small', 'b3Medium', 'b3Large'],
        lineHeight: '120%',
        textTransform: 'uppercase',
      },
      b3U: {
        fontSize:  '1rem',
        lineHeight: '120%',
      }
    }
  })};
`;

export const Label = (props: LabelProps) => {
  return (
    <StyledLabel
      {...props}
    >
      {props.children}
    </StyledLabel>
  );
};

Label.defaultProps = {
  variant: 'l3',
  color: 'neutral.4',
  fontFamily: 'Pilat'
};

export default Label;
