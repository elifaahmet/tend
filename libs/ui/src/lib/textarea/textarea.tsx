import React, { TextareaHTMLAttributes } from 'react';

import styled from 'styled-components';
import { border, typography, color } from 'styled-system';
import { get } from '@styled-system/core';
import theme from '../theme';

/* eslint-disable-next-line */
export interface TextareaProps extends TextareaHTMLAttributes<HTMLElement> {
  placeholder?: string;
  color?: string;
  fontSize?: string | number;
  borderBottomColor?: string;
  bg?: string | Array<string>;
  fontFamily?: string;
  textTransform?: 'uppercase' | 'none';
  lineCount?: number;
}

const StyledTextarea = styled.textarea<TextareaProps>`
${border};
${typography};
${color};
width: 100%;
outline: 0;
text-transform: ${(props: TextareaProps) => props.textTransform};
border-width: 0 0 0.125rem;
line-height: 120%;
letter-spacing: 0.04rem;
padding: 0.5rem 0.2rem;
border-bottom-color: ${(props) => get(theme, `colors.${props.color}`)}
font-size: ${(props: TextareaProps) => props.fontSize};
&::placeholder {
  color: ${(props) => get(theme, `colors.${props.color}`)}
  opacity: 0.3;
};
`;

export function Textarea(props: TextareaProps) {
  return <StyledTextarea {...props} name={props.name} />;
}

Textarea.defaultProps = {
  type: 'text',
  placeholder: 'Entry',
  fontSize: '0.75rem',
  color: 'neutral.4',
  fontFamily: 'Pilat',
  borderBottomColor: 'neutral.4',
  bg: 'transparent.0',
  textTransform: 'uppercase',
};

export default Textarea;
