import React, { Ref } from 'react';
import styled from 'styled-components';

import { color, variant, typography, layout } from 'styled-system';
import css from '@styled-system/css';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  bg?: string;
  variant?: string;
  type?: 'button' | 'submit' | 'reset';
  hoverColor?: string;
  hoverBg?: string;
  hoverBorder?: boolean;
  textTransform?: 'none' | 'capitalize' | 'lowercase' | 'uppercase';
  ref?: Ref<HTMLButtonElement>;
  as?: never;
}

const StyledButton = styled.button<ButtonProps>`
  ${color};
  ${typography};
  ${layout};
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0;
  outline: none;
  &:focus {
    outline: 1px auto -webkit-focus-ring-color;
  }
  ${(props: ButtonProps) => css({
    fontWeight: 'bold',
    textTransform: props.textTransform,
    '&:hover': {
      color: props.hoverColor,
      bg: props.hoverBg,
      borderWidth: props.hoverBorder ? '0.125rem' : 0,
    },
  })};

  ${variant({
    variants: {
      'x-large': {
        fontSize: '1.2rem',
        lineHeight: '120%',
        width: 'x-largeButtonWidth',
        height: 'x-largeButtonHeight',
      },
      large: {
        fontSize: '1.5rem',
        lineHeight: '120%',
        width: 'largeButtonWidth',
        height: 'largeButtonHeight',
      },
      medium: {
        fontSize: ['0.875rem', '0.875rem', '1rem', '1rem'],
        lineHeight: '120%',
        width: ['smallButtonWidth', 'mediumButtonWidth', 'mediumButtonWidth'],
        height: ['smallButtonHeight', 'mediumButtonHeight', 'mediumButtonHeight'],
      },
      small: {
        fontSize: '0.875rem',
        lineHeight: '90%',
        width: 'smallButtonWidth',
        height: 'smallButtonHeight',
      },
      tiny: {
        fontSize: '0.875rem',
        lineHeight: '90%',
        width: 'tinyButtonWidth',
        height: 'tinyButtonHeight',
      },
    },
  })};
`;

export const Button = React.forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  return (
    <StyledButton {...props} ref={ref}>
      {props.children}
    </StyledButton>
  );
});

Button.defaultProps = {
  variant: 'medium',
  bg: 'magenta.0',
  color: 'neutral.4',
  hoverBg: 'neutral.4',
  hoverColor: 'neutral.0',
  hoverBorder: false,
  type: 'button',
  textTransform: 'uppercase',
};

export default Button;
