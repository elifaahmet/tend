/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographicTextProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledH3 = styled.h3<TypographicTextProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'headline-3')};
`;

const H3 = (props: TypographicTextProps) => (
  <StyledH3 color={props.color}>{props.children}</StyledH3>
);

H3.defaultProps = {
  color: 'neutral-black',
};

export default H3;
