/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographyProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledH1 = styled.h1<TypographyProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'mobile-headline')};
`;

const H1 = (props: TypographyProps) => (
  <StyledH1 color={props.color}>{props.children}</StyledH1>
);

H1.defaultProps = {
  color: 'neutral-off-white',
};

export default H1;
