/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographicTextProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledH4 = styled.h4<TypographicTextProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'headline-4')};
`;

const H4 = (props: TypographicTextProps) => (
  <StyledH4 color={props.color}>{props.children}</StyledH4>
);

H4.defaultProps = {
  color: 'neutral-black',
};

export default H4;
