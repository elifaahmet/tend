import React from 'react';
import { typography, variant, color } from 'styled-system'
import styled from 'styled-components';

export interface ParagraphProps {
  variant?: string;
  bold? : boolean;
  children? : React.ReactNode;
  color?: string;
  textTransform?: 'none' | 'uppercase';
  fontSize?: string | string[];
  fontWeight?: string;
  marginTop?: string | Array<string>;
  lineHeight?: string[];
  marginBottom?: string | Array<string>;
}

const StyledParagraph = styled.p`
  ${typography};
  ${color};
  font-weight: ${(props: ParagraphProps) => props.bold ? `bold` : `normal`};
  font-family: 'Pilat';
  /* display: flex; */
  margin-block-start: ${(props: ParagraphProps) => props.marginTop || '0rem'};
  margin-block-end: ${(props: ParagraphProps) => props.marginBottom || '0rem'};
  text-transform: ${(props: ParagraphProps) => props.textTransform || 'none'};
  -webkit-font-feature-settings: "case" 1;
  -moz-font-feature-settings:    "case" 1;
  -ms-font-feature-settings:     "case" 1;
  font-feature-settings:         "case" 1;

  ${(props: ParagraphProps) => variant({
    variants: {
      b0: {
        fontSize: ['b0Small', 'b0Medium', 'b0Large'],
        lineHeight: '105%'

      },
      b1: {
        fontSize: ['b1Small', 'b1Medium', 'b1Large'],
        lineHeight: '110%'
      },
      b2: {
        fontSize: ['b2Small', 'b2Medium', 'b2Large'],
        lineHeight: '120%'
      },
      b2l: {
        fontSize: ['b2Medium', 'b2Large'],
        lineHeight: '120%'
      },
      b3: {
        fontSize: ['b3Small', 'b3Medium', 'b3Large'],
        lineHeight: '120%'
      },
      b4: {
        fontSize: ['b4Small', 'b4Medium', 'b4Large'],
        lineHeight: '105%',
      b5: {
        fontSize: ['b5Small', 'b5Large'],
        lineHeight: '120%',
        letterSpacing: '0.01rem',
      },
      b6: {
        fontSize: ['b6Small'],
        lineHeight: '120%',
        letterSpacing: '0.02rem',
      },
    },
  }})};
`;

export const Paragraph = (props: ParagraphProps) => {
  return <StyledParagraph {...props}>{props.children}</StyledParagraph>;
};

Paragraph.defaultProps = {
  color: 'neutral.4',
};

export default Paragraph;
