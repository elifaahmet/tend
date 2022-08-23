/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographyProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledB2 = styled.p<TypographyProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'placeholder')};
`;

const B2 = (props: TypographyProps) => (
  <StyledB2 color={props.color}>{props.children}</StyledB2>
);

B2.defaultProps = {
  color: 'neutral-off-white',
};

export default B2;
