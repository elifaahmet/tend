/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographicTextProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledH6 = styled.h6<TypographicTextProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'headline-6')};
`;

const H6 = (props: TypographicTextProps) => (
  <StyledH6 color={props.color}>{props.children}</StyledH6>
);

H6.defaultProps = {
  color: 'neutral-black',
};

export default H6;
