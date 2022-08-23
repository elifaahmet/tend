/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographyProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledL1 = styled.label<TypographyProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'entry-header')};
`;

const L1 = (props: TypographyProps) => (
  <StyledL1 color={props.color}>{props.children}</StyledL1>
);

L1.defaultProps = {
  color: 'neutral-off-white',
};

export default L1;
