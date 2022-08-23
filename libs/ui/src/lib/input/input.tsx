import React, { InputHTMLAttributes } from 'react';

import styled from 'styled-components';
import { border, typography, color } from 'styled-system'
import { get } from '@styled-system/core';

import Rule from '../rule/rule';
import theme from '../theme';

export interface InputProps extends InputHTMLAttributes<HTMLElement> {
  placeholder?: string;
  color?: string;
  fontSize?: string | number;
  borderBottomColor?: string;
  bg?: string | Array<string>;
  fontFamily?: string;
  rule?: boolean;
  textTransform?: 'uppercase' | 'none';
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input<InputProps>`
  ${border};
  ${typography};
  ${color};
  width: 100%;
  outline: 0;
  border: none;
  text-transform: ${(props: InputProps) => props.textTransform};
  line-height: 120%;
  letter-spacing: 0.04rem;
  padding: 0.5rem 0.25rem;
  font-size: ${(props: InputProps) => props.fontSize};
  &::placeholder {
    color: ${props => get(theme, `colors.${props.color}`)}
    opacity: 0.3;
  };
`;

export const Input = (props: InputProps) => {
  return (
    <Div>
      <StyledInput
        {...props}
        name={props.name}
      />
      {props.rule && (<Rule ruleColor={props.color} size={2}></Rule>)}
    </Div>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: 'Entry',
  fontSize: '0.75rem',
  color: 'neutral.4',
  fontFamily: 'Pilat',
  borderBottomColor: 'neutral.4',
  bg: 'transparent.0',
  rule: true,
  textTransform: 'uppercase',
};

export default Input;
