/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographyProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledH3 = styled.h3<TypographyProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'list-item-headline')};
`;

const H3 = (props: TypographyProps) => (
  <StyledH3 color={props.color}>{props.children}</StyledH3>
);

H3.defaultProps = {
  color: 'neutral-off-white',
};

export default H3;
