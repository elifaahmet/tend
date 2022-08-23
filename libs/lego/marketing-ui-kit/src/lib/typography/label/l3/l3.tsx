/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { LabelProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledL3 = styled.label<LabelProps>`
  color: ${(props) => props.theme.color[props.color]};
  font-weight: ${(props) =>
    props.bold
      ? props.theme.fontWeight['bold']
      : props.theme.fontWeight['regular']};
  ${(props) => themeStylesToCssString(props.theme, 'label-5')};

  @media (min-width: ${(props) => props.theme.breakpoint.medium}px) {
    ${(props) => themeStylesToCssString(props.theme, 'label-4')};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.large}px) {
    ${(props) => themeStylesToCssString(props.theme, 'label-3')};
  }
`;

const L3 = (props: LabelProps) => (
  <StyledL3 color={props.color} bold={props.bold}>
    {props.children}
  </StyledL3>
);

L3.defaultProps = {
  color: 'neutral-black',
  bold: false,
};

export default L3;
