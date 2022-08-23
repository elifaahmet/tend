/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographyProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledH2 = styled.h2<TypographyProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'placeholder-large')};
`;

const H2 = (props: TypographyProps) => (
  <StyledH2 color={props.color}>{props.children}</StyledH2>
);

H2.defaultProps = {
  color: 'neutral-off-white',
};

export default H2;
