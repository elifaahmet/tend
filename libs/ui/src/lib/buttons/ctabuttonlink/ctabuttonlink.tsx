import React, { Ref } from 'react';

import { color, variant, typography, space, layout, border } from 'styled-system';
import css from '@styled-system/css';

import styled from 'styled-components';


export interface CTAButtonLinkProps {
  children?: React.ReactNode;
  bg?: string;
  color?: string;
  size?: string;
  href?: string;
  id?: string;
  hoverColor?: string;
  hoverBg?: string;
  hoverBorder?: boolean;
  borderColor?: string;
  fontWeight?: string;
  overColor?: string;
  showHoverBorder?: string;
  textTransform?: 'none' | 'capitalize' | 'lowercase' | 'uppercase';
}

const StyledCTAButtonLink = styled.a<CTAButtonLinkProps>`
  ${color};
  ${typography};
  ${space};
  ${layout};
  ${border};
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0;
  outline: none;
  &:focus {
    outline: 1px auto -webkit-focus-ring-color;
  }
  ${(props: CTAButtonLinkProps) => css({
  fontWeight: 'bold',
  textTransform: props.textTransform,
  '&:hover': {
    color: props.overColor === "true" ? 'black' : 'white',
    bg: props.overColor === "true" ? 'white' : 'black',
    borderColor: props.showHoverBorder === "true" || props.overColor === "true" ? 'black' : 'white',
    borderWidth: props.showHoverBorder === "true" ? '0.125rem' : 0,
  },
  })};

  ${variant({
    prop: 'size',
    variants: {
      large: {
        fontSize: '1.5rem',
        lineHeight: '120%',
        width: 'largeButtonWidth',
        height: 'largeButtonHeight',
      },
      medium: {
        fontSize: ['0.875rem', '0.875rem','1rem', '1rem'],
        lineHeight: '120%',
        width: ['smallButtonWidth', 'mediumButtonWidth', 'mediumButtonWidth'],
        height: ['smallButtonHeight', 'mediumButtonHeight', 'mediumButtonHeight'],
      },
      small: {
        fontSize: '0.875rem',
        lineHeight: '90%',
        paddingInline: '0.8rem',
        height: 'smallButtonHeight',
      },
    },
  })};
`;

export const CTAButtonLink = React.forwardRef((props: CTAButtonLinkProps, ref: Ref<HTMLAnchorElement>) => {
  return (
    <StyledCTAButtonLink {...props}>
      { props.children }
    </StyledCTAButtonLink>
  );
});

CTAButtonLink.defaultProps = {
  size: 'medium',
  textTransform: 'uppercase',
  bg: 'defaultMagenta',
  borderColor: 'defaultMagenta',
  color: 'black',
  hoverColor: 'offWhite',
  hoverBg: 'black',
  fontWeight: 'bold',
};

export default CTAButtonLink;
