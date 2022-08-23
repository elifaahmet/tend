/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { LabelProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledL5 = styled.label<LabelProps>`
  color: ${(props) => props.theme.color[props.color]};
  font-weight: ${(props) =>
    props.bold
      ? props.theme.fontWeight['bold']
      : props.theme.fontWeight['regular']};
  ${(props) => themeStylesToCssString(props.theme, 'label-5')};
`;

const L5 = (props: LabelProps) => (
  <StyledL5 color={props.color} bold={props.bold}>
    {props.children}
  </StyledL5>
);

L5.defaultProps = {
  color: 'neutral-black',
  bold: false,
};

export default L5;
