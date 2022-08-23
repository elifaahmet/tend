import React, { Ref } from 'react';

import { color, typography } from 'styled-system';
import theme from '../theme';
import { get } from '@styled-system/core';
import styled from 'styled-components';

export interface AnchorProps extends React.HTMLProps<HTMLAnchorElement> {
  color?: string;
  fontFamily?: string;
  fontSize?: Array<string> | string;
  lineHeight?: '140%' | '120%';
  hoverColor?: Array<string> | string;
  ref?: Ref<HTMLAnchorElement>;
  as?: never;
  underline?: boolean;
  bold?: boolean;
  textTransform?: 'none' | 'uppercase';
}

const StyledAnchor = styled.a<AnchorProps>`
  ${color};
  ${typography};
  font-weight: ${(props) => props.bold && 'bold'};
  text-decoration: ${(props) => !props.underline && 'none'};
  text-transform: ${(props) => props.textTransform};
  outline: none;
  cursor: pointer;
  &:visited {
    color: ${() => get(theme, `colors.neutral.3`)};
    text-transform: ${(props) => props.textTransform};
  }
  &:hover {
    color: ${(props: AnchorProps) => get(theme, `colors.${props.hoverColor}`)};
    text-transform: ${(props) => props.textTransform};
    text-decoration: underline;
  }
  &:active {
    color: ${(props: AnchorProps) => get(theme, `colors.${props.hoverColor}`)};
    text-transform: ${(props) => props.textTransform};
  }
  &:focus {
    color: ${(props: AnchorProps) => get(theme, `colors.${props.hoverColor}`)};
    text-transform: ${(props) => props.textTransform};
  }
`;

export const Anchor = React.forwardRef((props: AnchorProps, ref: Ref<HTMLAnchorElement>) => {
  return (
    <StyledAnchor {...props} ref={ref}>
      {props.children}
    </StyledAnchor>
  );
});

Anchor.defaultProps = {
  color: 'neutral.0',
  fontFamily: 'Pilat',
  hoverColor: 'neutral.2',
  fontSize: ['1rem', '1rem', '1.5rem', '1.5rem'],
  textTransform: 'none',
};

export default Anchor;
